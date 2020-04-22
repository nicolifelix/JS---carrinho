const { products } = require('../src/data/products');
const {
	getCategoryQuantity,
	getProductsByIds,
	getProductsCategories,
	getPromotionPrices,
	getRegularPrices,
	getShoppingCart,
} = require('./index');

const mockResult1 = [
	{
		"id": 110,
		"name": "PINK PANTHER™ T-SHIRT",
		"category": "T-SHIRTS",
		"regularPrice": 124.99,
		"promotions": [
			{
				"looks": ["SINGLE LOOK", "DOUBLE LOOK"],
				"price": 124.99
			},
			{
				"looks": ["TRIPLE LOOK", "FULL LOOK"],
				"price": 109.99
			}
		]
	},
];
const mockCategories = ["T-SHIRTS", "PANTS", "SHOES"];

describe('getProductsByIds', () => {
	it('Deve trazer uma lista de objetos de produtos a partir de um array de IDs de produtos', () => {
		const resultado = getProductsByIds([110], products);

		expect(resultado).toEqual(mockResult1)
	});
});

describe('getProductsCategories', () => {
	it('Deve trazer uma lista de categorias dos produtos fornecidos', () => {
		const produtosFiltrados = getProductsByIds([110, 210, 310], products);
		const categorias = getProductsCategories(produtosFiltrados);

		expect(categorias).toEqual(mockCategories);
	});
});

