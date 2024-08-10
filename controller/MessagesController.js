import { getMessageById } from "../app.js"
import formatDate from "../utils/dateFormatter.js"
import db from "../db/queries.js"

async function getMessage(req, res) {
    const message = await db.getMessageById(req.params.messageId)
    console.log(message)
    res.render("messageDetail", { message: { ...message, created_at: formatDate(message.created_at) } })
}

const messagesController = {
    getMessage
}

export default messagesController