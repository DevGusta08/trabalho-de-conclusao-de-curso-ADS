// Cria o servidor node

//  Importa a biblioteca express
const express = require('express');

// Importa o pool de conexões DB
const pool = require('./config/db')

// Cria a aplicação express
const app = express();
const port = 3000;

// Método básico de Rota com GET
app.get('/', (req, res) => {
    res.send('Servidor ligado!')
});

app.get('/usuarios', async (req, res) => { const [usuarios] = await pool.query('SELECT * FROM usuarios'); res.json(usuarios) });

app.listen(port, () => { console.log(`Servidor rodando na porta ${port}`) });