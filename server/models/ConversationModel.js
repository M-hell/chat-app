const mongoose = require('mongoose')
const UserModel = require('./UserModel');

const messageSchema = new mongoose.Schema({
    text: {
        type: String,
        default: ""
    },
    imageUrl: {
        type: String,
        default: ""
    },
    videoUrl: {
        type: String,
        default: ""
    },
    seen: {
        type: Boolean,
        default: false
    },
    msgByUserId: {
        type: mongoose.Schema.ObjectId,
        required: true,
        ref: 'User'
    },
    name: {
        type: String,
        required: true
    },
    isgroupmsg: {
        type: Boolean,
        default: false
    }
}, {
    timestamps: true
});

const conversationSchema = new mongoose.Schema({
    sender : {
        type : mongoose.Schema.ObjectId,
        ref : 'User'
    },
    receiver : {
        type : mongoose.Schema.ObjectId,
        ref : 'User'
    },
    messages : [
        {
            type : mongoose.Schema.ObjectId,
            ref : 'Message'
        }
    ],
    isgroupconv : {
        type : Boolean ,
        default : false
    }
},{
    timestamps : true
})

const MessageModel = mongoose.model('Message',messageSchema)
const ConversationModel = mongoose.model('Conversation',conversationSchema)

// Pre-save hook to automatically set the name based on msgByUserId
messageSchema.pre('save', async function(next) {
    if (this.isModified('msgByUserId')) {
        const user = await UserModel.findById(this.msgByUserId);
        if (user) {
            this.name = user.name;
        }
    }
    next();
});

module.exports = {
    MessageModel,
    ConversationModel
}