const fs = require('fs');

const pathToFile = './src/data/poducts.json';

class Manager {
	getAll = async () => {
		if (!fs.existsSync(pathToFile))
			return { error: 0, description: 'No existe archivo' };
		let data = await fs.promises.readFile(pathToFile, 'utf-8');
		return JSON.parse(data);
	};

	createProd = async (product) => {
		try {
			let id = 1;
			if (fs.existsSync(pathToFile)) {
				let data = await fs.promises.readFile(pathToFile, 'utf-8');
				let products = JSON.parse(data);
				if (products.length > 0) id = products[products.length - 1].id + 1;
				product = {
					id,
					timestamp: new Date().toLocaleString(),
					...product,
				};
				products.push(product);
				await fs.promises.writeFile(
					pathToFile,
					JSON.stringify([product], null, 2)
				);
			}
			return product;
		} catch (err) {
			return { error: 0, message: 'Error en la base de datos' };
		}
	};
}
module.exports = Manager;
