const express = require('express')
const connectToMongo = require('./db');
var cors = require('cors');

connectToMongo()
const app = express()
const port = 5000

app.use(cors())
app.use(express.json())
app.use('/api',require('./routes/auth'))

app.listen(port, () => {
  console.log(`aggregate_agro backend listening on port ${port}`)
})
