console.log('start print variables')
const user = process.env.DATABASE_USER | 'postgres'
console.log('user: ', user)

const password = process.env.DATABASE_PASSWORD | 'abc123'
console.log('password: ', password)

console.log('end print variables')

module.exports = {
  username: process.env.DATABASE_USER | 'postgres',
  password: process.env.DATABASE_PASSWORD | 'abc123',
  database: process.env.DATABASE_NAME | 'message_api',
  host: process.env.DATABASE_HOST | 'postgres',
  dialect: 'postgres'
}