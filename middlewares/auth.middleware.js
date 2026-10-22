const jwt = require('jsonwebtoken');

function autenticar(req, res, next) {
    const cabecalho = req.headers.authorization || '';
    const token = cabecalho.split(' ')[1];

    if (!token) {
        return res.status(401).json({ error: 'Token não informado.' });
    }

    try {
        const dados = jwt.verify(token, process.env.JWT_SECRET);
        req.usuarioId = dados.id;
        next();
    } catch (error) {
        return res.status(401).json({ error: 'Token inválido ou expirado.' });
    }
}

module.exports = autenticar;