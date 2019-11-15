const express = require('express')
const app = express();

app.use(require('./cliente.routes'));
// app.use(require('./mozo.route'));
// app.use(require('./cocina.route'));
// app.use(require('./administracion.route'));

module.exports = app;