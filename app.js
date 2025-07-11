const express = require('express');
const app = express();
const port = 80;

app.get('/', (_, res) => res.send('Aplicación funcionando desde una VPC'));

app.listen(port, () => {
    console.log(`Servidor escuchando en http://localhost:${port}`);
});
