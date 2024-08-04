import express from "express"
import path from "path"
import { fileURLToPath } from 'url';
import newMessageRouter from "./routes/new.js"
import messagesRouter from "./routes/messages.js"

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const PORT = 8000
const messages = [
    {
        user: "Usuario",
        body: "Me gusta este mensaje gigantísimo",
        added: new Date(),
        id: "0",
    },
    {
        user: "Usuario",
        body: "Me gusta este mensaje gigantísimo",
        added: new Date(),
        id: "1",
    },
    {
        user: "Usuario",
        body: "Me gusta este mensaje gigantísimo",
        added: new Date(),
        id: "2",
    },
    {
        user: "Usuario",
        body: "Me gusta este mensaje gigantísimo",
        added: new Date(),
        id: "3",
    },
    {
        user: "Usuario",
        body: "Me gusta este mensaje gigantísimo",
        added: new Date(),
        id: "4",
    },
    {
        user: "Loco Chaves",
        body: "Solamente 2 pesos mexicano",
        added: new Date(),
        id: "5",
    },
]

export function addToMessages(newMessage) {
    messages.unshift(newMessage)
}

export function getMessageById(messageId) {
    return messages.find(message => message.id === messageId)
}
const app = express()

app.set("views", "views")
app.set("view engine", "ejs")

app.use(express.static(path.join(__dirname, "public")))
app.use(express.urlencoded({ extended: true }))
app.use("/new", newMessageRouter)
app.use("/messages", messagesRouter)

app.get("/", (req, res) => {
    res.render("index", { messages })
})

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`)
})