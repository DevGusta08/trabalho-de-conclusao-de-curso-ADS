// Regras de validação compartilhadas entre as rotas de usuários.
// Cada função devolve a mensagem de erro, ou null quando está tudo certo.

function validarNome(nome) {
    if (!nome) return 'Preencha o nome.';
    if (nome.length > 100) return 'O nome deve ter no máximo 100 caracteres.';
    return null;
}

function validarEmail(email) {
    if (!email) return 'Preencha o e-mail.';
    if (email.length > 150) return 'O e-mail deve ter no máximo 150 caracteres.';
    const formato = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formato.test(email)) return 'Informe um e-mail válido.';
    return null;
}

function validarSenha(senha) {
    if (!senha || typeof senha !== 'string') return 'Preencha a senha.';
    if (senha.length < 8) return 'A senha deve ter pelo menos 8 caracteres.';
    // o bcrypt só usa os 72 primeiros bytes da senha; o resto seria ignorado
    if (Buffer.byteLength(senha, 'utf8') > 72) return 'A senha é muito longa (máximo de 72 bytes).';
    return null;
}

module.exports = { validarNome, validarEmail, validarSenha };