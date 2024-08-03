import { addToMessages } from "../app"

function getNewMessageForm(req, res) {
    res.render("new")
}

function postNewMessage(req, res) {

    addToMessages({ user: req.body.username, body: req.body.messageText, added: new Date() })
    res.redirect("/")
}

const newMessageController = {
    getNewMessageForm, postNewMessage
}

export default newMessageController