// arquivo temporario para teste do arquivo db.js

// importa o pool do arq db.js
const pool = require('./db')

pool.query('SELECT 1', (err, results) => {
    if (err) {
        console.error(err)
    } else if (
        console.log(results)
    );
});
