const express = require('express');
const app = express();
const port = 3000;

app.get('/', (_, res) => res.send('Aplicación funcionando desde una VPC'));

app.listen(port, '0.0.0.0', () => {
    console.log(`Servidor escuchando en http://localhost:${port}`);
});
