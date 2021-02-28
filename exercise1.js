//Criar uma lista vazia de "categoria de produtos" (com id, nome) e adicionar 5 categorias.
const products = [];

products.push({ id: 1, name: "Brinquedos" });
products.push({ id: 2, name: "Vestuário" });
products.push({ id: 3, name: "Escritório" });
products.push({ id: 4, name: "Eletrônicos" });
products.push({ id: 5, name: "Higiene" });

// Percorrer a lista e mostrar no console só o nome da categoria.
const categories = products.forEach((product) => console.log(product.name));

// Percorrer a lista e mostrar no console só a categoria  "Eletrônicos"
const filterCategory = products.filter((product) => {
    if (product.name === "Eletrônicos") {
        console.log(filterCategory);
    }
});