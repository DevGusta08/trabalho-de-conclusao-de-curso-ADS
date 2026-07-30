const pool = require('../config/db');
const bcrypt = require('bcryptjs');

// cria a lógica de listagem de usuário.
async function listar(req, res) {
    try {
        const [usuarios] = await pool.query('SELECT * FROM usuarios');
        res.json(usuarios);
    } catch (error) {
        console.error(error);
        res.status(500).json({error: 'Deu erro'});     
    }
};

// cria a lógica de busca por ID de usuário.
async function buscarPorId(req, res) {
    try {
        const {id} = req.params;
        const [usuarios] = await pool.query('SELECT * FROM usuarios WHERE id = ?', [id]);

        if (usuarios.length === 0) {
            return res.status(404).json({error: 'Usuário não encontrado'});
        };
        res.json(usuarios);
    } catch (error) {
        console.error(error);
        res.status(500).json({error:'Deu erro'});
    }
};

// cria a lógica de registro de usuário com hash de senha criptografada.
async function criar(req, res) {
    try {
        const {nome, email, senha} = req.body;
        const senhaHash = await bcrypt.hash(senha, 10);
        await pool.query('INSERT INTO usuarios (nome, email, senha) VALUES (?, ?, ?)', [nome, email, senhaHash]);

        res.status(201).json({mensagem: 'Usuário criado com sucesso!'});
    } catch (error) {
        console.error(error);
        res.status(500).json({error:'Deu erro'});
    }    
};

// exporta as funções
module.exports = {listar, buscarPorId, criar};