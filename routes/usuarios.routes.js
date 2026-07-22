const express = require('express');
const router = express.Router();
const usuariosController = require('../controllers/usuarios.controller');

router.get('/usuarios', usuariosController.listar);
router.get('/usuarios/:id', usuariosController.buscarPorId);

module.exports = router;