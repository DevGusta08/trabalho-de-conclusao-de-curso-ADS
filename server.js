require('dotenv').config();
const express = require('express');
const path = require('path');
const usuariosRoutes = require('./routes/usuarios.routes');
const loginRoutes = require('./routes/login.routes');

if (!process.env.JWT_SECRET) {
    console.error('JWT_SECRET não definido no .env');
    process.exit(1);
}

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use('/public', express.static(path.join(__dirname, 'public')));
app.use('/views', express.static(path.join(__dirname, 'views')));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'home.html'));
});

app.use(loginRoutes);
app.use(usuariosRoutes);

app.listen(port, () => console.log(`Servidor rodando na porta ${port}`));