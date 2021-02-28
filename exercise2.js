// Criar uma lista vazia  de "categoria de produtos" (com id, nome, sattus (se é ativo ou inativo)) e adicionar 5 categorias.
const categories = [];

categories.push({ id: 1, name: "Brinquedos", status: "ativo" });
categories.push({ id: 2, name: "Vestuário", status: "ativo" });
categories.push({ id: 3, name: "Escritório", status: "inativo" });
categories.push({ id: 4, name: "Eletrônicos", status: "inativo" });
categories.push({ id: 5, name: "Higiene", status: "inativo" });

// Criar uma lista vazia de "produtos" (com id, nome e preço) e adicionar 3 produtos
const products = [];
products.push({ id: 1, name: "Bola", price: 20, idCat: 1 });
products.push({ id: 2, name: "Desktop", price: 100, idCat: 4 });
products.push({ id: 3, name: "USB", price: 8, idCat: 4 });

// Percorrer a lista e mostrar no console só o "nome dos produtos" da categoria "Eletrônicos".
products.filter(product => {
    return product.idCat == 4;
}).forEach(product => console.log(product.name));

// Percorrer a lista e mostrar no console só o "nome das categorias" com produtos com preço menor que 10.
const lowerThen10 = categories.map((product) => {
    const filterProduct = products.filter((filter) => {
        return filter.idCat === product.id;
    });
    const filterCategory = filterProduct.some((filterProducts) => {
        return filterProducts.price < 10;
    });
    filterCategory ? console.log(product.name) : null;
});

// Percorrer a lista e mostrar no console só os produtos das categorias desativadas.
const disabledCategory = categories.map((category) => {
    if (category.status === "inativo") {
        products.map((categoryName) => {
            if (categoryName.idCat == category.id) {
                console.log(categoryName.name);
            }
        });
    }
});

// Percorrer a lista e adicionar na categoria a quantidade de produtos de cada categoria.
const numbersOfProducts = categories.map((category) => {
    let nProducts = 0
    products.filter(product => {
        nProducts += product.idCat === category.id ? 1 : 0;
    });
    return { category, nProducts };
});
console.log(numbersOfProducts);