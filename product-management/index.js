const express = require('express')
const database = require("./config/database")
const route = require('./routes/client/index.route')

require('dotenv').config()

database.connect() 

const app = express()
const port = process.env.PORT

app.use(express.static("public"))

app.set('views', './views');
app.set('view engine', 'pug');

route(app)

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})