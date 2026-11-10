const express = require('express');
const rateLimit = require('express-rate-limit');
const router = express.Router();
const usuariosController = require('../controllers/usuarios.controller');
const autenticar = require('../middlewares/auth.middleware');

// limita a criação de contas: no máximo 20 cadastros por hora, por IP.
const limitadorCadastro = rateLimit({
    windowMs: 60 * 60 * 1000,
    max: 20,
    message: { error: 'Muitos cadastros em pouco tempo. Tente novamente mais tarde.' }
});

// direciona as chamadas para a função desejada.
router.get('/usuarios/:id', autenticar, usuariosController.buscarPorId);
router.post('/usuarios', limitadorCadastro, usuariosController.criar);
router.put('/usuarios/:id', autenticar, usuariosController.atualizar);
router.delete('/usuarios/:id', autenticar, usuariosController.deletar);

module.exports = router;