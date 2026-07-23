const express = require('express');
const router = express.Router();
const usuariosController = require('../controllers/usuarios.controller');

// direciona as chamadas para a função desejada.
router.get('/usuarios', usuariosController.listar);
router.get('/usuarios/:id', usuariosController.buscarPorId);
router.post('/usuarios', usuariosController.criar);

module.exports = router;