import { Client } from "pg"
const client = new Client({ connectionString: process.env.EXTERNAL_DB_URL })

async function populateUsers() {

    console.log("Loading...")
    await client.connect()
    await client.query("INSERT INTO users (username) VALUES ('Pamfis'), ('Pasteko'), ('Chikidrac'); ")
    await client.end()
    console.log("Done")
}
async function populateMessages() {

    const date = new Date()

    console.log("Loading...")
    await client.connect()
    await client.query("INSERT INTO messages (message, userId, created_at) VALUES ('Buenos días', 2, $1), ('Buenas noches', 2, $1), ('Buenas tardes', 1, $1); ", [date])
    await client.end()
    console.log("Done")
}

async function joinTest() {

    console.log("Loading...")
    await client.connect()
    const { rows } = await client.query("SELECT * FROM messages JOIN users ON userId = users.id;")
    console.log(rows)
    await client.end()
    console.log("Done")
}

async function alterTable() {
    console.log("Loading...")
    await client.connect()
    await client.query("ALTER TABLE messages ALTER COLUMN created_at TYPE TIMESTAMP;")
    await client.end()
    console.log("Done")
}

populateMessages()