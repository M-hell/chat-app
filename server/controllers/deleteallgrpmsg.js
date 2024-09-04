// Import necessary modules
const { MessageModel } = require('../models/ConversationModel.js');// Ensure 'Message' is the name of your model

// Controller function to delete all group messages
const deleteAllGroupMessages = async (req, res) => {
  try {
    // Delete all messages where isgroupmsg is true
    const result = await MessageModel.deleteMany({ isgroupmsg: true });

    // Send response with the result of the deletion
    res.status(200).json({
      message: 'All group messages deleted successfully.',
      deletedCount: result.deletedCount,
    });
  } catch (error) {
    // Handle errors and send response
    console.error('Error deleting group messages:', error);
    res.status(500).json({
      message: 'Failed to delete group messages.',
      error: error.message,
    });
  }
};

module.exports =  deleteAllGroupMessages ;
