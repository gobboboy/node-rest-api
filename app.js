const express = require('express');
const productsRoutes = require('./routes/products');
const ordersRoutes = require('./routes/orders')

class App {
    constructor() {
        this.app = express();
        this.routes();
        this.middlewares();
    }
    middlewares() {
        
    }
    routes() {
        this.app.use('/products', productsRoutes);
        this.app.use('/orders', ordersRoutes);
    }
}

module.exports = new App();