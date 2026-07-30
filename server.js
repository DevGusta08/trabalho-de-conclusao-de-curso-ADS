// Cria o servidor node
const express = require('express');
const pool = require('./config/db')
const app = express();
const port = process.env.PORT || 3000;
const usuariosRoutes = require('./routes/usuarios.routes');

// Método básico de Rota com GET
app.get('/', (req, res) => {
    res.send('Servidor ligado!');
});
app.use(express.json())

app.use(usuariosRoutes);
app.listen(port, () => { console.log(`Servidor rodando na porta ${port}`) });