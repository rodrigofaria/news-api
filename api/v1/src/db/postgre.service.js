const { Pool } = require('pg')

const pool = new Pool({
  user: process.env.DATABASE_USER,
  host: process.env.DATABASE_HOST,
  database: process.env.DATABASE_NAME,
  password: process.env.DATABASE_PASSWORD,
  port: process.env.DATABASE_PORT,
})

pool.on('error', (err) => console.log(err.message, err.stack))

pool.on('connect', () => console.log('Database connected!'))

pool.connect()

module.exports = pool