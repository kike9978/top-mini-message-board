import { addToMessages } from "../app.js"
import generateRandomId from "../utils/generateRandomId.js"
import db from "../db/queries.js"

async function getNewMessageForm(req, res) {
    const userList = await db.getFullUserLIst()
    console.log(userList)
    res.render("new", { userList })
}

async function postNewMessage(req, res) {
    const date = new Date()
    await db.insertMessage({ message: req.body.message, created_at: date }, req.body.username)
    res.redirect("/")
}

const newMessageController = {
    getNewMessageForm, postNewMessage
}

export default newMessageController