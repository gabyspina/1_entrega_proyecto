const fs = require('fs');

const pathToFile = './src/data/poducts.json';

class Manager {
	getAll = async () => {
		try {
			const productosP = await fs.promises.readFile(pathToFile, 'utf-8');
			const allProducts = JSON.parse(productosP);
			return { code: 200, resultado: allProducts };
		} catch {
			await fs.promises.writeFile(pathToFile, '[]');
			return this.getAll();
		}
	};

	createProd = async (newProduct) => {
		const resultado = await this.getAll();
		console.log(resultado);
		const listaDeProductos = resultado;
		newProduct.id = listaDeProductos.length + 1;
		listaDeProductos.push(newProduct);
		const listaDeProdString = JSON.stringify(listaDeProductos);
		await fs.promises.writeFile(pathToFile, listaDeProdString);
		return { code: 200, resultado: listaDeProductos };
	};
}
module.exports = Manager;
