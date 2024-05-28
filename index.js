require('dotenv').config()

const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes/routes')
const database_url = process.env.DATABASE_URL
const PORT = process.env.PORT || 4242

// DATABASE CONNECTION
mongoose.connect(database_url)
const db = mongoose.connection

db.on('error', (err) => {
  console.log(err)
})

db.on('connected', (err) => {
  console.log('Database Connected!')
})

// EXPRESS API
const app = express()

app.use(express.json());

app.listen(PORT, () => {
  console.log(`Server Started at ${PORT}`)
})

app.use('/api', routes)