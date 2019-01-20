const mongoose = require('mongoose');
console.log('here')
mongoose.connect(process.env.MONGODB_URI, {useNewUrlParser: true})

const db = mongoose.connection;

db.once('open', () => { console.log(`Connected to ${db.name} at ${db.host}:${db.port}`)})