const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

// Use body-parser middleware to parse JSON request bodies
app.use(bodyParser.urlencoded({ extended: true }));



// In-memory list of products
let products = [
    {
        productId: "101",
        price: 100
    },
    {
        productId: "102",
        price: 200
    }
];


//hello
//test hello
// test hello2

//test hello3
// test hello4
//test hello5
//test hello6

// Serve the HTML form for adding new products
app.get('/add-product', (req, res) => {
    const html = `
        <h1>Add a new product</h1>
        <form method="POST" action="/add-product" enctype="application/x-www-form-urlencoded">
            <label for="productId">Product ID:</label>
            <input type="text" id="productId" name="productId"><br>

            <label for="price">Price:</label>
            <input type="number" id="price" name="price"><br>

            <input type="submit" value="Add Product">
        </form>
    `;
    res.send(html);
});

// Handle POST request to add a new product
app.post('/add-product', (req, res) => {
    const newProduct = {
        productId: req.body.productId,
        price: req.body.price
    };
    console.log(newProduct); //printing undefined in json response how to solve it
    products.push(newProduct);
    res.redirect('/products');
});

// Serve the list of products
app.get('/products', (req, res) => {
    const productList = products.map(product => {
        return `<li>${product.productId}: $${product.price}</li>`;
    }).join('');
    const html = `
        <h1>Products</h1>
        <ul>
            ${productList}
        </ul>
        <a href="/add-product">Add Product</a>
    `;
    res.send(html);
});

app.listen(port, ()=>{
    console.log(`Demo app is up and listening to port: ${port}`);
});
