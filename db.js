const Pool = require('pg').Pool

const pool = new Pool({
    user: "postgres",
    host: "localhost",
    database: "incidents",
    password: "@forum500A",
    port: "5432",

})

module.exports = pool