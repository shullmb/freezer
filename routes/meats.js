const express = require('express');
const router = express.Router();
const Meat = require('../models/meat')

router.get('/', (req,res) => {
	Meat.find({}, (err, meats) => err ? res.send(err) : res.json(meats))
})

router.post('/', (req,res) => {
	console.log(req.body)
	Meat.insertMany(req.body, (err, meats) => {
		err ? res.send(err) : res.sendStatus(200)
	})
	// Meat.create({
	// 	animal: req.body.animal,
	// 	cut: req.body.cut,
	// 	quantity: req.body.quantity,
	// 	servings: req.body.servings
	// }, (err, meat) => {
	// 	err ? res.send(err) : res.sendStatus(200)
	// })
})

module.exports = router;