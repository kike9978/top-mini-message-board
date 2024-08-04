const { Router } = require("express")
const messagesController = require("../controller/MessagesController")

const messagesRouter = Router()

messagesRouter.get("/:messageId", messagesController.getMessage)

module.exports = messagesRouter