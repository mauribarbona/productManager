//Definir clase de productmanager

class ProductManager{
    constructor() {
        this.products = [];
        //Defino el constructor
        //Va tener un arreglo vacio => para que el listado de productos aparezca vacio 
        }


//Debe contar con un metodo que retorne nuestro arreglo de productos.
getProducts = () => {
    return this.products;
}

//Pra poder almacenar los productos de nuestro arreglo, debemos pasarle un cierto parametro

addProduct = (title,description,price,thumbnail,code,stock) => {
    const product = {
        title,
        description,
        price,
        thumbnail,
        code,
        stock,
        products: [] //Nos pedia el elemento "Product" con array vacio
    }

    if (this.products.length === 0) {
        product.id = 1
    } else {
        product.id = this.products [this.products.length -1 ].id+1
    }

    // pusheamos el producto
    this.products.push(product)
}

//Debe contar con el metodo getProductById, el cual recibe como parametro el id del producto

getProductById = (idProduct) => {
    const productIndex = this.products.findIndex(product => product.id === idProduct);

    if(productIndex === -1){
        console.log("Not found");
        return;
    }

    const productAdd = this.products [productIndex].products.includes(idProduct);

    if (productAdd){
        console.log ("El producto se agrego correctamente");
        return;
    }
    this.products[productIndex].products.push(idProduct)
}
};

const manejadorProductos = new ProductManager ();
    manejadorProductos.addProduct ('Regla', 'transparente', 80, 'sin imagen',
    'adl54', 36);
    manejadorProductos.addProduct ('Lapiz', 'transparente', 100, 'sin imagen',
    'adl53', 26);
    manejadorProductos.addProduct ('Birome', 'transparente', 180, 'sin imagen',
    'adl52', 16);

    manejadorProductos.getProductById(1);
    manejadorProductos.getProductById(2);
    manejadorProductos.getProductById(3);

console.log(manejadorProductos.getProducts());
