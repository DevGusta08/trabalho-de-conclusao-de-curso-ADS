// Cria o servidor node

//  Importa a biblioteca express
const express = require('express');

// Importa o pool de conexões DB
const pool = require('./config/db')

// Cria a aplicação express
const app = express();
const port = process.env.PORT || 3000;

// Método básico de Rota com GET
app.get('/', (req, res) => {
    res.send('Servidor ligado!');
});

app.get('/usuarios', async (req, res) => {
    try {
    const [usuarios] = await pool.query('SELECT * FROM usuarios'); 
    res.json(usuarios);
    } catch (error) {
        console.error(error);
        res.status(500).json({erro: 'Deu erro jovem senhor.'});
    }
});

app.listen(port, () => { console.log(`Servidor rodando na porta ${port}`) });