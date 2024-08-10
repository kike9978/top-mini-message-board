import pkg from 'pg';
import dotenv from "dotenv"

dotenv.config()
const { Pool } = pkg;


const pool = new Pool({ connectionString: process.env.EXTERNAL_DB_URL })

export default pool