const express = require('express');
const app = express();
const home = require('./routers/main.js');
const about = require('./routers/main.js');

const PORT = 3000;

app.use(express.static('public'));
app.use('/', home);
app.use('/about', about);

app.listen(PORT, () => {
    console.log('Servidor funcionando en el puerto ' + PORT);
    });