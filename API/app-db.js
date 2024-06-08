const express = require("express");
const clienteRoute = require('./src/routes/clienteRoute');
const telefoneRoute = require('./src/routes/telefoneRoute');

const app = express();
const port = 5526;
app.use(express.json());

app.use('/', clienteRoute);
app.use('/', telefoneRoute);

app.listen(port, () => {
    console.log("Servidor respondendo na porta 5526");
});