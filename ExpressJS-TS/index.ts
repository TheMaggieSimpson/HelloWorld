import express from 'express'
import bodyParser from 'body-parser'

const app = express()
const port = 3000
const router = require('./router/common')

app.use(bodyParser.json())
app.use('/', router)

app.set('views', __dirname + '/views')
app.set('view engine', 'pug')

app.get('/', (req, res) => {
  res.send('Hello World! ExpressJS + TypeScript = Awesome')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})