import express, { request, response } from "express"

import ProductManager from "../../segundoDesafio/ProductManager.js"


const app = express();


const pm = new ProductManager();

const products =pm.getProducts();


app.get("/products", async(req, res)=>{

    const allProducts = await products;
    const Productos = req.query.limit;
    let limitedProducts;
    if (Productos) {
       limitedProducts = allProducts.slice(0, Productos);
        res.send(limitedProducts);
    } else {
        res.send(allProducts);
    }
})

app.get(`/products/:pid`, async (req, res) => {
    try{
    const pid = req.params.pid;
    const allProducts = await products;
    const selected = allProducts.find((p) => p.id == pid);
    res.send(selected);
    if(!products){res.send("producto no encontrado")}
    }catch{res.send("error")}
  });




/*
app.get("/papa",(request, response)=>{
    response.send ("hola exprss")
} )



app.get('/bienvenida', (request, response)=> {

    response.send(`<h1 style="color:blue">BINVENIDA</h1>`)
})



app.get('/user', (request, response)=>{

const user = {
    firstName:'mau',
    lastName: "espinosa"
}
response.send(user)
})

app.get('/users/:name',(req, res)=>{

    console.log(req.params)
    const users = [
        {
            name: "papa",
            pet: 'dog' 
        },
        {
            name: "papo",
            pet: "cat"
        }
    ]
    const user = users.find (u=>u.name===req.params.name)
    res.send (user)
})

*/
app.listen(8080, ()=>console.log("listenin on port 8080"))

