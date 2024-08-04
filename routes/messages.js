import { Router } from "express";
import messagesController from "../controller/MessagesController.js";

const messagesRouter = Router()

messagesRouter.get("/:messageId", messagesController.getMessage)

export default messagesRouter