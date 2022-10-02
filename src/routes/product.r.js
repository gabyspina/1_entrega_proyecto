const express = require('express');
const router = express.Router();

const Manager = require('../controllers/product.m.js');
const manager = new Manager();

router.get('/', (req, res) => {
	let result = manager.getAll();
	res.send(result);
});

router.post('/', async (req, res) => {
	const { nombre, precio, descripcion } = req.body;
	const nuevoProducto = { nombre, precio, descripcion };
	const { code, resultado } = await manager.createProd(nuevoProducto);
	res.status(code).json(resultado);
});

module.exports = router;
