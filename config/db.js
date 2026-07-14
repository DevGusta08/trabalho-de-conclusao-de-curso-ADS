// Arquivo de criação e exportação da conexão (pool) com o banco de dados.

// importa o pacote, le o arquivo .env e injeta no process.env (usado para que valores não fique exposto ao usuário).
require('dotenv').config()

const mysql = require('mysql2')

// permite múltiplas conexões simultâneas, necessário porque a API pode receber várias requisições ao mesmo tempo.
const pool = mysql.createPool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    port: process.env.DB_PORT,
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
});

// exporta o pool para ser reutilizado nos outros arquivos.
module.exports = pool