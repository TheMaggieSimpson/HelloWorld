const express = require('express')
const { Pool, Client } = require('pg')

const app = express()
const port = 3000

const dbConn = {
    host: "localhost",
    port: "5432",
    user: "myUsername",
    pass: "myPassword",
    name: "myDBName"
}
var connectionString = "postgres://" + dbConn.user + ":" + dbConn.pass + "@" + dbConn.host + ":" + dbConn.port + "/" + dbConn.name

const client = new Client({
    connectionString: connectionString
})
client.connect(function(err){
    if (err) throw err
})
client.query('SELECT 1 + 1 AS result', (err, res) => {
    if (err) throw err
    console.log('Result = ', res.rows)
    client.end()
})

app.get('/', (req, res) => res.send('Hello World!'))

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))