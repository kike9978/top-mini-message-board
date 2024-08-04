const { Router } = require("express");
const newMessageController = require("../controller/NewMessageController");

const newMessageRouter = Router()

newMessageRouter.get("/", newMessageController.getNewMessageForm)
newMessageRouter.post("/", newMessageController.postNewMessage)

module.exports = newMessageRouter