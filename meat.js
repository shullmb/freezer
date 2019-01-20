const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const meatSchema = new Schema({
	animal: {
		type: String
	},
	cut: {
		type: String
	},
	quantity: {
		type: Number
	},
	inventory: {
		type: Number
	}
})

module.exports = mongoose.model('Meat', meatSchema);
