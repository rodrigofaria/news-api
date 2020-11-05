console.log('start print variables')
const user = process.env.DATABASE_USER | 'postgres'
console.log('user: ' + user)

const password = process.env.DATABASE_PASSWORD | 'abc123'
console.log('password: ', password)

console.log('env:::%j', process.env)
console.log('env.DATABASE_PORT::: ' + process.env.DATABASE_PORT)
console.log('env.DATABASE_USER::: ' + process.env.DATABASE_USER)

console.log('end print variables')

module.exports = {
  username: process.env.DATABASE_USER,
  password: process.env.DATABASE_PASSWORD,
  database: process.env.DATABASE_NAME,
  host: process.env.DATABASE_HOST,
  dialect: 'postgres'
}