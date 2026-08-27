const express = require('express');
const router = express.Router();
const usuariosController = require('../controllers/usuarios.controller');

// direciona as chamadas para a função desejada.
router.get('/usuarios', usuariosController.listar);
router.get('/usuarios/:id', usuariosController.buscarPorId);
router.post('/usuarios', usuariosController.criar);
router.put('/usuarios/:id', usuariosController.atualizar);
router.delete('/usuarios/:id', usuariosController.deletar);

module.exports = router;