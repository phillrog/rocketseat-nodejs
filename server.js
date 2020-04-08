const express = require('express');
const db = require('./db');
const requireDir = require('require-dir');
const cors = require('cors');


// iniciando o app
const app = express();
app.use(express.json());
app.use(cors());

requireDir('./src/models');

// rotas

app.use('/api', require('./src/routes'));

app.listen(3001, () => console.log('Executando a aplicação na porta 3001'));