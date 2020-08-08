const path = require('path');
const express = require('express');

const errorController = require('../controllers/error');

const productController = require('../controllers/product');

const router = express.Router();

router.get('/', errorController.getError);

router.get('/add-product', productController.getProduct);

router.post('/product', productController.postProduct);

module.exports = router;