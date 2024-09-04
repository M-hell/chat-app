const { ConversationModel } = require('../models/ConversationModel.js');

async function getGroupConv(request, response) {
    try {
        let getGroupConversationMsg = await ConversationModel.find({ isgroupconv: true })
            .populate({
                path: 'messages',
                match: { isgroupmsg: true },  // Filter for group messages only
            })
            .sort({ updatedAt: -1 });

        // Extract messages from each conversation
        const messages = getGroupConversationMsg.flatMap(convo => convo.messages);

        return response.status(200).json({
            message : "messages received",
            success : true,
            data : messages
        });

    } catch (error) {
        console.error("Error fetching group conversation messages:", error);
        return response.status(500).json({ error: "Internal Server Error" });
    }
}

module.exports = getGroupConv;
