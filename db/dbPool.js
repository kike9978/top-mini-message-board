import { Pool } from "pg"
const pool = new Pool({ connectionString: process.env.EXTERNAL_DB_URL })

export default pool