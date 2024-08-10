import pool from "./dbPool.js";

async function getMessages() {
    const { rows } = await pool.query("SELECT message, username, created_at, messages.id FROM messages JOIN users ON users.id = userId;")
    return rows
}

async function getMessageById(messageId) {
    const { rows } = await pool.query("SELECT message, username, created_at, messages.id FROM messages JOIN users ON users.id = userId WHERE messages.id = $1;", [messageId])
    return rows[0]
}

async function insertMessage(message, userId) {
    await pool.query("INSERT INTO messages (message, created_at, userId ) values ($1, $2, $3)", [message.message, message.created_at, userId])
}


async function getFullUserLIst() {
    const { rows } = await pool.query("SELECT * FROM users")
    return rows
}
const db = {
    getMessages,
    getMessageById,
    insertMessage,
    getFullUserLIst
}

export default db