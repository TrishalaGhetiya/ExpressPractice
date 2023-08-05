const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.urlencoded({extended: false}));

app.use('/', (req, res, next) => {
    next();
})

app.use('/add-product', (req, res, next) => {
    res.send('<form action="/product" method="POST"><input type="text" name="title"><br><input type="number" name"quantity"><br><button type="submit">Add Product</button></form>')
})

app.post('/product', (req, res, next) => {
    console.log(req.body);
    res.redirect('/')
})

app.use('/', (req, res, next) => {
    res.send('Hello');
})
app.listen(4000);

