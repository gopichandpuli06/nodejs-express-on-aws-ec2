const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
    const html = `
        <h1>A Demo Application to test in EC2 instance</h1>
        <h4>Message: Success Again</h4>
        <p>Version 1.0</p>
        <button onclick="redirectToProducts()">View Product detials</button>
        <script>
            function redirectToProducts() {
                window.location.href = '/products';
            }
        </script>
    `;
    
    //res.send('<h1>A Demo Application to test in EC2 instance</h1> <h4>Message: Success Again</h4> <p>Version 1.0</p>');
    res.send(html);
})

app.get('/products', (req, res) => {
    res.send([
        {
            productId: "101",
            price: 100
        },
        {
            productId: "102",
            price: 200
        }
    ])
})

app.listen(port, ()=>{
    console.log(`Demo app is up and listening to port: ${port}`);
}) 