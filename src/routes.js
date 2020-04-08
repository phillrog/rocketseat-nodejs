const express = require('express');
const routes = express.Router();

const ProductController = require('./controller/ProductController');

routes.get('/products', (req, res) => ProductController.index(req, res));
routes.post('/products', (req, res) => ProductController.store(req, res));

module.exports = routes;