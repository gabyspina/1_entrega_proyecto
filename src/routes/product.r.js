const express = require('express');
const router = express.Router();

const Manager = require('../controllers/product.m.js');
const manager = new Manager();

router.get('/', (req, res) => {
	let result = manager.getAll();
	res.send(result);
});

router.post('/', (req, res) => {
	let result = manager.createProd(req.body);
	res.send(result);
});
module.exports = router;
