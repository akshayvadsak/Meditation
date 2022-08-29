const Sequelize = require('sequelize')

const db = new Sequelize(process.env.AWS_DB_NAME, process.env.AWS_DB_USER, process.env.AWS_DB_PASS, {
  host: process.env.AWS_DB_HOST,
  dialect: process.env.AWS_DB_TYPE,
  pool: {
    max: 10,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
})

db.sync({ force: false })
  .then(() => {
    console.log(`Database & tables created!`)
  })

module.exports = {
  db
}