const express = require('express');
const path = require('path');
const newMessageRouter = require('./routes/new');
const messagesRouter = require('./routes/messages');
const messageStore = require('./models/messageStore');  // or './models/messageStore' if you put it in a models directory

const PORT = 8000;

const app = express();

app.set("views", "views");
app.set("view engine", "ejs");

app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded({ extended: true }));
app.use("/new", newMessageRouter);
app.use("/messages", messagesRouter);

app.get("/", (req, res) => {
    res.render("index", { messages: messageStore.messages });
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});

module.exports = app;