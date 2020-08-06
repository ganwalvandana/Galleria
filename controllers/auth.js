exports.getLogin =  (req, res, next) => {
    res.render('auth/login', {
        path: '/login',
        pageTitle: 'Login',
    });
};


exports.getSignup =  (req, res, next) => {
    res.render('auth/signup', {
        path: '/signup',
        pageTitle: 'Signup',
    });
};

exports.postLogout = (req, res, next) => {
    req.session.destroy (err => {
        console.log(err);
        res.redirect('/');
    });
};