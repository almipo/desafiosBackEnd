class ProductManager{
    constructor() {
        this.products=[];
    }; 
    addProducts(title, description, price, thumbnail, code, stock){
    const product={
        title,
        description,
        price, 
        thumbnail, 
        code, 
        stock,
       
    }


//validaciones de codigo

    const validateCode = this.products.find(produc=> produc.code === product.code)
    if (validateCode){
            return console.log("producto con codigo repetido")
        }

    if(!Object.values(product).every(prod=>prod)){
            return console,log("producto incompleto")
        }


    if(this.products.length === 0){
        product.id = 1
        } else{
        product.id = this.products.length + 1
    }


    this.products.push(product)
}




//obteniendo todos los productos y por id    
getproduct(){
    console.log(this.products)
};

getproductsById (id){
    const validateid = this.products.findIndex((produc) => produc.id === id)
    if(validateid){
        return console.log(this.products[id-1])
    } else{
        return console.log("not found")
    }
}

};


const produc = new ProductManager()

produc.addProducts("mesa", "mesa rectangular", 100, "sin imagen", 1, 50 )
produc.addProducts("silla", "con almohadon", 70, "sin imagen", 1, 20)
produc.addProducts("mesa", "mesa ratona", 80, "sin imagen", 13, 15 )
produc.addProducts("lampara", "de pie", 50, "sin imagen", 60, 50)

produc.getproduct()


