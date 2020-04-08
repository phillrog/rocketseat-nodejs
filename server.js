const express = require('express');
const mongoose = require('mongoose');
const reuireDir = require('require-dir');

// iniciando o app
const app = express();

// iniciando o DB
mongoose.connect('mongodb://localhost:27017/nodeapi', {useNewUrlParser: true, useUnifiedTopology: true});

reuireDir('./src/models');

const Product = mongoose.model('Product');

// rotas
app.get('/', (req, res) => {
    Product.create({
        title: 'React Native',
        description: 'Build native apps with react',
        url: 'http://github.com/facebook/react'
    });


    res.send('Olá mundo')
});

app.listen(3001);