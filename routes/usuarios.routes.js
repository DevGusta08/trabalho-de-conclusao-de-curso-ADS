const express = require('express');
const router = express.Router();
const usuariosController = require('../controllers/usuarios.controller');

router.get('/usuarios', usuariosController.listar);

module.exports = router;