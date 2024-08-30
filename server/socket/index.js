const express = require('express');
const { Server } = require('socket.io');
const http = require('http');
const getUserDetailsFromToken = require('../helpers/getUserDetailsFromToken.js');
const UserModel = require('../models/UserModel.js');
const { ConversationModel, MessageModel } = require('../models/ConversationModel.js');
const getConversation = require('../helpers/getConversation.js');

const app = express();

/*** socket connection */
const server = http.createServer(app);
const io = new Server(server, {
    cors: {
        origin: process.env.FRONTEND_URL,
        credentials: true
    }
});

/***
 * socket running at http://localhost:8080/
 */

// Online user
const onlineUser = new Set();

io.on('connection', async (socket) => {
    console.log("connect User ", socket.id);

    const token = socket.handshake.auth.token;

    // Current user details
    let user;
    try {
        user = await getUserDetailsFromToken(token);
    } catch (error) {
        console.error("Error fetching user details:", error);
        socket.disconnect();
        return;
    }

    if (!user) {
        console.error("User not found");
        socket.disconnect();
        return;
    }

    // Create a room
    socket.join(user._id.toString());
    onlineUser.add(user._id.toString());

    io.emit('onlineUser', Array.from(onlineUser));

    socket.on('message-page', async (userId) => {
        console.log('userId', userId);
        let userDetails;
        try {
            userDetails = await UserModel.findById(userId).select("-password");
        } catch (error) {
            console.error("Error fetching user details:", error);
            return;
        }

        if (!userDetails) {
            console.error("User not found");
            return;
        }

        const payload = {
            _id: userDetails._id,
            name: userDetails.name,
            email: userDetails.email,
            profile_pic: userDetails.profile_pic,
            online: onlineUser.has(userId)
        };
        socket.emit('message-user', payload);

        let getConversationMessage;
        try {
            getConversationMessage = await ConversationModel.findOne({
                "$or": [
                    { sender: user._id, receiver: userId },
                    { sender: userId, receiver: user._id }
                ]
            }).populate('messages').sort({ updatedAt: -1 });
        } catch (error) {
            console.error("Error fetching conversation messages:", error);
            return;
        }

        socket.emit('message', getConversationMessage?.messages || []);
    });

    // New message
    socket.on('new message', async (data) => {
        if (!data?.sender || !data?.receiver || !data?.msgByUserId) {
            console.error("Invalid message data:", data);
            return;
        }

        let conversation;
        try {
            conversation = await ConversationModel.findOne({
                "$or": [
                    { sender: data.sender, receiver: data.receiver },
                    { sender: data.receiver, receiver: data.sender }
                ]
            });

            if (!conversation) {
                conversation = await ConversationModel.create({
                    sender: data.sender,
                    receiver: data.receiver
                });
            }

            const message = await MessageModel.create({
                text: data.text,
                imageUrl: data.imageUrl,
                videoUrl: data.videoUrl,
                msgByUserId: data.msgByUserId,
            });

            conversation.messages.push(message._id);
            await conversation.save();

            const updatedConversation = await ConversationModel.findById(conversation._id)
                .populate('messages')
                .sort({ updatedAt: -1 });

            io.to(data.sender).emit('message', updatedConversation?.messages || []);
            io.to(data.receiver).emit('message', updatedConversation?.messages || []);

            const conversationSender = await getConversation(data.sender);
            const conversationReceiver = await getConversation(data.receiver);

            io.to(data.sender).emit('conversation', conversationSender);
            io.to(data.receiver).emit('conversation', conversationReceiver);
        } catch (error) {
            console.error('Error handling new message:', error);
        }
    });

    // Sidebar
    socket.on('sidebar', async (currentUserId) => {
        console.log("current user", currentUserId);

        let conversation;
        try {
            conversation = await getConversation(currentUserId);
        } catch (error) {
            console.error("Error fetching sidebar conversation:", error);
            return;
        }

        socket.emit('conversation', conversation);
    });

    // Seen
    socket.on('seen', async (msgByUserId) => {
        let conversation;
        try {
            conversation = await ConversationModel.findOne({
                "$or": [
                    { sender: user._id, receiver: msgByUserId },
                    { sender: msgByUserId, receiver: user._id }
                ]
            });

            const conversationMessageId = conversation?.messages || [];

            await MessageModel.updateMany(
                { _id: { "$in": conversationMessageId }, msgByUserId: msgByUserId },
                { "$set": { seen: true } }
            );

            const conversationSender = await getConversation(user._id.toString());
            const conversationReceiver = await getConversation(msgByUserId);

            io.to(user._id.toString()).emit('conversation', conversationSender);
            io.to(msgByUserId).emit('conversation', conversationReceiver);
        } catch (error) {
            console.error('Error marking messages as seen:', error);
        }
    });

    // Disconnect
    socket.on('disconnect', () => {
        onlineUser.delete(user._id.toString());
        console.log('disconnect user ', socket.id);
    });
});

module.exports = {
    app,
    server
};
