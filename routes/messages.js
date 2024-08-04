import { Router } from "express";
import messagesController from "../controller/MessagesController";

const messagesRouter = Router()

messagesRouter.get("/:messageId", messagesController.getMessage)

export default messagesRouter