import { getMessageById } from "../app"

function getMessage(req, res) {
    res.render("messageDetail", { message: getMessageById(req.params.messageId) })
}

const messagesController = {
    getMessage
}

export default messagesController