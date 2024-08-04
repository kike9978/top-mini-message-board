const messageStore = require('../models/messageStore');
const generateRandomId = require("../utils/generateRandomId")

function getNewMessageForm(req, res) {
    res.render("new")
}

function postNewMessage(req, res) {

    messageStore.addToMessages({ user: req.body.username, body: req.body.messageText, added: new Date(), id: generateRandomId() })
    res.redirect("/")
}

const newMessageController = {
    getNewMessageForm, postNewMessage
}

module.exports = newMessageController