// Criar uma lista vazia  de "categoria de produtos" (com id, nome, status( se é ativo ou inativo)) e adicionar 5 categorias.
const categories = [];

categories.push({ id: 1, name: "Brinquedos", status: "ativo" });
categories.push({ id: 2, name: "Vestuário", status: "ativo" });
categories.push({ id: 3, name: "Escritório", status: "inativo" });
categories.push({ id: 4, name: "Eletrônicos", status: "inativo" });
categories.push({ id: 5, name: "Higiene", status: "inativo" });

// Na lista "categoria de produtos" adicionar para cada uma 3 produtos( com id, nome e preço)
categories[0].products = [
    { id: 1, name: "Boneca", price: 50 },
    { id: 2, name: "Bola", price: 50 },
    { id: 3, name: "Urso de Pelúcia", price: 100 }
];
categories[1].products = [
    { id: 1, name: "Blusa", price: 50 },
    { id: 2, name: "Calça", price: 80 },
    { id: 3, name: "Vestido", price: 100 }
];
categories[2].products = [
    { id: 1, name: "Papel", price: 20 },
    { id: 2, name: "Borracha", price: 5 },
    { id: 3, name: "Bloco", price: 2 }
];
categories[3].products = [
    { id: 1, name: "USB", price: 10 },
    { id: 2, name: "Telefone", price: 50 },
    { id: 3, name: "Impressora", price: 100 }
];
categories[4].products = [
    { id: 1, name: "Detergente", price: 5 },
    { id: 2, name: "Sabão", price: 5 },
    { id: 3, name: "Esponja", price: 5 }
];

// Percorrer a lista e mostrar no console só o "nome dos produtos" da categoria "Eletrônicos".
const eletronics = categories.map((category) => {
    if (category.id === 4) {
        category.products.map((eletronic) => {
            console.log(eletronic.name);
        });
    }
});

// Percorrer a lista e mostrar no console só o "nome das categorias" com produtos com preço menor que 10.
const lowerThen10 = categories.map((product) => {
    const filterProduct = product.products;
    const filterCategory = filterProduct.some(filter => filter.price < 10)
        ? console.log(product.name) : null;
});

// Percorrer a lista e mostrar no console só os produtos das categorias desativadas.
const disabledCategory = categories.map((category) => {
    if (category.status === "inativo") {
        category.products.map((categoryName) => {
            console.log(categoryName.name);
        }
        );
    }
});

// Percorrer a lista e adicionar na categoria a quantidade de produtos de cada categoria.
const numbersOfProducts = categories.map((category) => {
    let nProducts = 0;
    category.products.forEach(() => {
        nProducts += 1;
    });
    category.numberOfProduct = nProducts;
    return { category, nProducts };
});
console.log(numbersOfProducts);
