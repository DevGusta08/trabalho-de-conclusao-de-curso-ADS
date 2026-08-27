const pool = require('../config/db')
const bcrypt = require('bcryptjs');

// lógica de autenticação de login
async function login(req, res) {
    try {
        const {email, senha} = req.body;
        const [usuarios] = await pool.query('SELECT * FROM usuarios WHERE email = ?', [email]);

        if (usuarios.length === 0) {
            return res.status(401).json({error: 'Email ou senha inválidos'});
        }

        const usuario = usuarios[0];
        const senhaCorreta = await bcrypt.compare(senha, usuario.senha);

        if (!senhaCorreta) {
            return res.status(401).json({error: 'Email ou senha inválidos'})
        }

        res.status(200).json({mensagem: 'Login realizado com sucesso!'});
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Deu erro' });
    }
}

module.exports = {login}