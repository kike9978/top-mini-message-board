import { getMessageById } from "../app"

function getMessage(req, res) {
    res.render("message", { message: getMessageById(req.params.messageId) })
}

const messagesController = {
    getMessage
}

export default messagesController