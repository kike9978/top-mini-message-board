import { Router } from "express";
import newMessageController from "../controller/NewMessageController.js";

const newMessageRouter = Router()

newMessageRouter.get("/", newMessageController.getNewMessageForm)
newMessageRouter.post("/", newMessageController.postNewMessage)

export default newMessageRouter