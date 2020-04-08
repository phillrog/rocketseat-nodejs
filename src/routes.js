const express = require('express');
const routes = express.Router();

const ProductController = require('./controller/ProductController');

routes.get('/products', (req, res) => ProductController.index(req, res));
routes.get('/products/:id', (req, res) => ProductController.show(req, res));
routes.post('/products', (req, res) => ProductController.store(req, res));
routes.put('/products/:id', (req, res) => ProductController.update(req, res));
routes.delete('/products/:id', (req, res) => ProductController.destroy(req, res));

module.exports = routes;