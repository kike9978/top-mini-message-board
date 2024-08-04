function getMessage(req, res) {
    res.render("message", { messageId: req.params.messageId })
}

const messagesController = {
    getMessage
}

export default messagesController