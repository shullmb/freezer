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
	servings: {
		type: Number
	},
	reserved: {
		type: Boolean,
		default: false
	}
},{
	timestamps: {
		createdAt: "stockDate"
	},
	versionKey: false
})

module.exports = mongoose.model('Meat', meatSchema);
