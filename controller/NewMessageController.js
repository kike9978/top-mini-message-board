import { addToMessages } from "../app"
import generateRandomId from "../utils/generateRandomId"

function getNewMessageForm(req, res) {
    res.render("new")
}

function postNewMessage(req, res) {

    addToMessages({ user: req.body.username, body: req.body.messageText, added: new Date(), id: generateRandomId() })
    res.redirect("/")
}

const newMessageController = {
    getNewMessageForm, postNewMessage
}

export default newMessageController