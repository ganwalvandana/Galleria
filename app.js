const express = require('express');
const mongoose = require('mongoose');
const bodyparser = require('body-parser');
const path = require('path');


const app = express();

app.set('view engine', 'ejs');
app.set('views', 'views');

const authRoutes = require('./routes/auth');
const mainRoutes = require('./routes/main');

app.use(bodyparser.urlencoded({extended:false}));
app.use(express.static(path.join(__dirname, 'public')));

app.use(authRoutes);
app.use(mainRoutes);

const port = 3000;
app.listen(port, () => console.log('server listening @' + port)); 
