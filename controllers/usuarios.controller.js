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

module.exports = {listar};