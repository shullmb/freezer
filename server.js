require('dotenv').config()
const express = require('express')
const path = require('path')
const cors = require('cors')
const colors = require('colors')
const port = process.env.PORT || 3001;

const app = express();

require('./config/database')

app.use(cors())
app.use(express.static(path.join(__dirname, 'client', 'build')))
app.use(express.json())

app.use('/api/v1/meats', require('./routes/meats'))

app.get('*', (req,res) => {
	res.sendFile(path.join(__dirname,'client','build','index.html'))
})

app.listen(port, () => console.log( `💻 => serving 🥩  on ${port.bold.red}`))