const pool = require('../config/db')
const bcrypt = require('bcryptjs');

// lógica de autenticação de login
async function login(req, res) {
    try {
        const { senha } = req.body;
        const email = (req.body.email || '').trim().toLowerCase();

        if (!email || !senha) {
            return res.status(400).json({error: 'Preencha email e senha.'});
        }

        const [usuarios] = await pool.query('SELECT * FROM usuarios WHERE email = ?', [email]);

        if (usuarios.length === 0) {
            return res.status(401).json({error: 'Email ou senha inválidos'});
        }

        const usuario = usuarios[0];
        const senhaCorreta = await bcrypt.compare(senha, usuario.senha);

        if (!senhaCorreta) {
            return res.status(401).json({error: 'Email ou senha inválidos'})
        }

        res.status(200).json({
            mensagem: 'Login realizado com sucesso!',
            usuario: {
            id: usuario.id,
            nome: usuario.nome,
            email: usuario.email
            }
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Deu erro' });
    }
}

module.exports = {login}