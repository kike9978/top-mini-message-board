const messageStore = require('../models/messageStore');  // Adjust path if needed

function getMessage(req, res) {
    const message = messageStore.getMessageById(req.params.messageId);
    res.render("messageDetail", { message: message });
}

const messagesController = {
    getMessage
};

module.exports = messagesController;