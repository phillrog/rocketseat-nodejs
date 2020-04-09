const express = require('express');
const db = require('./db');
const requireDir = require('require-dir');
const cors = require('cors');

const port = process.env.PORT || 3001;

// iniciando o app
const app = express();
app.use(express.json());
app.use(cors());

requireDir('./src/models');

// rotas

app.use('/api', require('./src/routes'));

app.listen(port, () => console.log(`Executando a aplicação na porta ${port}`));