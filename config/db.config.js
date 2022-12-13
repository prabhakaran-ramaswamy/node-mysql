module.exports = {
  HOST: "localhost",
  username: "root",
  password: "Rampoo@1981",
  database: "testdb",
  dialect: "mysql",
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
};