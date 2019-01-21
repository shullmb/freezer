const mongoose = require('mongoose');
const colors = require('colors');

mongoose.connect(process.env.MONGODB_URI, {useNewUrlParser: true})

const db = mongoose.connection;

db.once('open', () => { 
	console.log(`🛢  => connected to ${db.name.bold.underline.cyan} at ${db.host.underline.green}:${db.port.toString().underline.green}`)
})