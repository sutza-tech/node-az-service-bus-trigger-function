
const dbConfig = {
  username: 'root',
  password: 'password',
  database: 'metrics',
  host: process.env.DB_HOST,
  dialect: "mysql"
}
  
export { dbConfig }