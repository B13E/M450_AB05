let productStorage = [
    { productId: 1, name: 'Laptop', cost: 999 },
    { productId: 2, name: 'Smartphone', cost: 599 },
    { productId: 3, name: 'Headphones', cost: 199 }
];

function getProduct(id) {
    for (let product of productStorage) {
        if (product.productId === id) 
        return (product.name + "cost" + product.cost + "€");
    }
    return "Produkt nicht gefunden"
}

function addProduct(name, cost) {
    let maxId = 0;
    for (let product of productStorage) {
        if (product.productId > maxId) {
            maxId = product.productId;
    }
}
    productStorage.push({ productid: maxId + 1, name: name, cost: cost });
}

function logProduct() {
    for (let product of productStorage) {
        console.log(product.name + " costs " + product.cost + "€")
    };
}

// Use functions
let product1 = getProduct(2);
console.log(product1);
addProduct("Tablet", 399);
logProduct();