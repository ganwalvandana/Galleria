exports.getProduct = (req, res, next) => {
    res.render('add-product', {
        path: '/add-product',
        pageTitle: 'Add Product',
    });
};