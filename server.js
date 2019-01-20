require('dotenv').config()
const express = require('express')
const path = require('path')
const cors = require('cors')
const port = process.env.PORT || 3001;

const app = express();

require('./config/database')

app.use(cors())
app.use(express.static(path.join(__dirname, 'client', 'build')))
app.use(express.json())

app.get('*', (req,res) => {
	res.send('up and running')
})

app.listen(port, () => console.log( `serving 🥩 🥩 🥩  on ${port}`))