const express = require('express')
const helmet = require('helmet')

const app = express()
const port = 3000

app.use(helmet())

app.set('views', __dirname + '/views')
app.set('view engine', 'pug')

app.get('/', (req, res) => res.render('index')) // html
app.get('/pug', (req, res) => res.render('index-pug')) // pug

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))