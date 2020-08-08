const Product = require('../models/product');

exports.getProduct = (req, res, next) => {
    res.render('add-product', {
        path: '/add-product',
        pageTitle: 'Add Product',
    });
};


exports.postProduct = (req, res, next) => {
    const title = req.body.title;
    const price = req.body.price;
    const description = req.body.description;
    const product = new product({
        title: title,
        price: price,
        description: description,
    });
    product.save().then(result => {
        console.log('Product Added');
        res.redirect('/products');
    });
};