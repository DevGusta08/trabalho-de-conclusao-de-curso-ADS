const express = require('express');
const rateLimit = require('express-rate-limit');
const router = express.Router();
const loginController = require('../controllers/login.controller');

const limitador = rateLimit({
    windowMs: 15 * 60 * 1000,
    max: 10,
    message: { error: 'Muitas tentativas. Tente novamente em 15 minutos.' }
});

router.post('/login', limitador, loginController.login);

module.exports = router;