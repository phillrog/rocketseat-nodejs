const express = require('express');
const mongooe = require('mongoose');

// iniciando o app
const app = express();

// iniciando o DB
mongooe.connect('mongodb://localhost:27017/nodeapi', {useNewUrlParser: true, useUnifiedTopology: true});

// rotas
app.get('/', (req, res) => {
    res.send('Olá mundo')
});

app.listen(3001);