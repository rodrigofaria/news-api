module.exports = {
  username: process.env.DATABASE_USER | 'postgres',
  password: process.env.DATABASE_PASSWORD | 'abc123',
  database: process.env.DATABASE_NAME | 'message_api',
  host: process.env.DATABASE_HOST | 'postgres',
  dialect: 'postgres'
}