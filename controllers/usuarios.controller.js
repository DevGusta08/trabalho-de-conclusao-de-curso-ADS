const pool = require('../config/db');
const bcrypt = require('bcryptjs');

// cria a lógica de busca por ID de usuário.
async function buscarPorId(req, res) {
    try {
        const id = Number(req.params.id);
        if (id !== req.usuarioId) {
            return res.status(403).json({ error: 'Sem permissão.' });
        }
        const [usuarios] = await pool.query('SELECT id, nome, email FROM usuarios WHERE id = ?', [id]);
        if (usuarios.length === 0) {
            return res.status(404).json({ error: 'Usuário não encontrado.' });
        }
        res.json(usuarios[0]);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Erro interno do servidor.' });
    }
};

// cria a lógica de registro de usuário com hash de senha criptografada.
async function criar(req, res) {
    try {
        const { senha } = req.body;
        const nome = (req.body.nome || '').trim().replace(/\s+/g, ' ');
        const email = (req.body.email || '').trim().toLowerCase();

        if (!nome || !email || !senha) {
            return res.status(400).json({ error: 'Preencha nome, email e senha.' });
        }

        if (senha.length < 8) {
            return res.status(400).json({ error: 'A senha deve ter pelo menos 8 caracteres.' });
        }
        const senhaHash = await bcrypt.hash(senha, 10);
        await pool.query('INSERT INTO usuarios (nome, email, senha) VALUES (?, ?, ?)', [nome, email, senhaHash]);

        res.status(201).json({mensagem: 'Usuário criado com sucesso!'});
    } catch (error) {
        if (error.code === 'ER_DUP_ENTRY') {
            return res.status(409).json({ error: 'Este e-mail já está cadastrado.' });
        }
        console.error(error);
        res.status(500).json({error:'Deu erro'});
    }    
};

// cria lógica de atualização de usuário
async function atualizar(req, res ){
    try {
        const id = Number(req.params.id);
        if (id !== req.usuarioId) {
            return res.status(403).json({ error: 'Sem permissão.' });
        }
        const nome = (req.body.nome || '').trim().replace(/\s+/g, ' ');
        const email = (req.body.email || '').trim().toLowerCase();
        if (!nome || !email) {
            return res.status(400).json({ error: 'Preencha nome e email.' });
        }
        await pool.query('UPDATE usuarios SET nome = ?, email = ? WHERE id = ?', [nome, email, id]);
        res.status(200).json({ mensagem: 'Usuário atualizado com sucesso!' });
    } catch (error) {
        if (error.code === 'ER_DUP_ENTRY') {
            return res.status(409).json({ error: 'Este e-mail já está cadastrado.' });
        }
        console.error(error);
        res.status(500).json({ error: 'Erro interno do servidor.' });
    }
}

// função Delete do CRUD
async function deletar(req, res) {
    try {
        const id = Number(req.params.id);
        if (id !== req.usuarioId) {
            return res.status(403).json({ error: 'Sem permissão.' });
        }
        await pool.query('DELETE FROM usuarios WHERE id = ?', [id]);
        res.status(200).json({ mensagem: 'Usuário deletado com sucesso!' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Erro interno do servidor.' });
    }
}

// exporta as funções
module.exports = {buscarPorId, criar, atualizar, deletar};