// backend.js
const express = require('express');
const app = express();
const PORT = 3000;

app.use(express.json());

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/frontend/index.html');
});

app.post('/hello', (req, res) => {
    const nome = req.body.nome || 'World';
    res.send(`Hello ${nome}!`);
});

app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});
