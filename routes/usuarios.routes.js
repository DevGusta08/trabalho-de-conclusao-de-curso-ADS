const express = require('express');
const router = express.Router();
const usuariosController = require('../controllers/usuarios.controller');
const autenticar = require('../middlewares/auth.middleware');

// direciona as chamadas para a função desejada.
router.get('/usuarios/:id', autenticar, usuariosController.buscarPorId);
router.post('/usuarios', usuariosController.criar);
router.put('/usuarios/:id', autenticar, usuariosController.atualizar);
router.delete('/usuarios/:id', autenticar, usuariosController.deletar);

module.exports = router;