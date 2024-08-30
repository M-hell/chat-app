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
        origin: ["https://chat-app-83p9.onrender.com", process.env.FRONTEND_URL],
        methods: ["GET", "POST"],
        credentials: true
    }
});

// Online users
const onlineUser = new Set();

io.on('connection', async (socket) => {
    console.log("User connected: ", socket.id);

    const token = socket.handshake.auth.token;

    let user;
    try {
        user = await getUserDetailsFromToken(token);
    } catch (error) {
        console.error("Error fetching user details:", error);
        socket.disconnect();
        return;
    }

    if (!user || !user._id) {
        console.error("User not found or invalid user data");
        socket.disconnect();
        return;
    }

    const userIdString = user._id.toString();
    
    // Join the user's own room
    socket.join(userIdString);
    onlineUser.add(userIdString);

    io.emit('onlineUser', Array.from(onlineUser));

    socket.on('message-page', async (userId) => {
        console.log('User ID for message page:', userId);
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

    socket.on('new message', async (data) => {
        if (!data?.sender || !data?.receiver || !data?.msgByUserId) {
            console.error("Invalid message data:", data);
            return;
        }

        try {
            let conversation = await ConversationModel.findOne({
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

    socket.on('sidebar', async (currentUserId) => {
        console.log("Current user ID for sidebar:", currentUserId);

        let conversation;
        try {
            conversation = await getConversation(currentUserId);
        } catch (error) {
            console.error("Error fetching sidebar conversation:", error);
            return;
        }

        socket.emit('conversation', conversation);
    });

    socket.on('seen', async (msgByUserId) => {
        try {
            const conversation = await ConversationModel.findOne({
                "$or": [
                    { sender: user._id, receiver: msgByUserId },
                    { sender: msgByUserId, receiver: user._id }
                ]
            });

            if (!conversation) {
                console.error("Conversation not found");
                return;
            }

            const conversationMessageIds = conversation.messages || [];

            await MessageModel.updateMany(
                { _id: { "$in": conversationMessageIds }, msgByUserId: msgByUserId },
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

    socket.on('disconnect', () => {
        if (user?._id) {
            onlineUser.delete(user._id.toString());
        }
        console.log('User disconnected: ', socket.id);
    });
});

module.exports = {
    app,
    server
};
