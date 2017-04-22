var express = require('express');
var config = require('./config/config');
var glob = require('glob');
var Promise = require("bluebird");

// Recupera os Models
var models = glob.sync(config.root + '/app/models/*.js');
models.forEach(function (model) {
    require(model);
});

// Inicia a App
var app = express();

// Habilita o CORS
app.use(function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, x-access-token');
    res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
    next();
});

// Configura o Express
module.exports = require('./config/express')(app, config);

// Inicia o servidor
app.listen(config.port, function () {
    console.log('Servidor rodando na porta ' + config.port);
});