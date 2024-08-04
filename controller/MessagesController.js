import { getMessageById } from "../app.js"

function getMessage(req, res) {
    res.render("messageDetail", { message: getMessageById(req.params.messageId) })
}

const messagesController = {
    getMessage
}

export default messagesController