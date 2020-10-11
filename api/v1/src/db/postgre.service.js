const { Pool } = require('pg')

const pool = new Pool({
  user: 'postgres',
  host: 'postgres',
  database: 'message_api',
  password: 'abc123',
  port: 5432,
})

pool.on('error', (err) => console.log(err.message, err.stack))

pool.on('connect', () => console.log('Database connected!'))

pool.connect()

module.exports = pool