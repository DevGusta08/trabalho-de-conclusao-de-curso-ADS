// Cria o servidor node
const express = require('express');
const pool = require('./config/db')
const cors = require('cors');
const app = express();
const port = process.env.PORT || 3000;
const usuariosRoutes = require('./routes/usuarios.routes');
const loginRoutes = require('./routes/login.routes');
const path = require('path');

// Raiz do site entrega a home
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'home.html'));
});
app.use('/public', express.static(path.join(__dirname, 'public')));
app.use('/views', express.static(path.join(__dirname, 'views')));
app.use(cors());
app.use(express.json());
app.use(loginRoutes);
app.use(usuariosRoutes);
app.listen(port, () => { console.log(`Servidor rodando na porta ${port}`) });