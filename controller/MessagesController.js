import { getMessageById } from "../app.js"
import formatDate from "../utils/dateFormatter.js"

function getMessage(req, res) {
    const message = getMessageById(req.params.messageId)
    res.render("messageDetail", { message: { ...message, added: formatDate(message.added) } })
}

const messagesController = {
    getMessage
}

export default messagesController