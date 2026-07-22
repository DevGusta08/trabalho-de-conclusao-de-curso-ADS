const pool = require('../config/db');

async function listar(req, res) {
    try {
        const [usuarios] = await pool.query('SELECT * FROM usuarios');
        res.json(usuarios);
    } catch (error) {
        console.error(error);
        res.status(500).json({error: 'Deu erro'});     
    }
};

async function buscarPorId(req, res) {
    try {
        const {id} = req.params;
        const [usuarios] = await pool.query('SELECT * FROM usuarios WHERE id = ?', [id]);

        if (usuarios.length === 0) {
            return res.status(404).json({ error: 'Usuário não encontrado' });
        }
        res.json(usuarios);
    } catch (error) {
        console.error(error)
        res.status(500).json({error:'Deu erro'});
    }
};

module.exports = {listar, buscarPorId};