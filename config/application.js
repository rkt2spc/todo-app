//------------------------------------------------------------------------
// Node Dependencies
var path = require('path');
var http = require('http');

//------------------------------------------------------------------------
// External Dependencies
var express = require('express');
var bodyParser = require('body-parser');
var morgan = require('morgan');

//------------------------------------------------------------------------
// Configurations
global.Utils = require('./utilities');
global.Configs = {
    PORT: 8080,
    DATABASE_URL: 'mongodb://localhost/todo-app'
};
global.App = {
    expressApp: express(),
    database: Utils.getConfig('database'),
    errorHandling: Utils.getConfig('errorHandling'),
    routing: Utils.getConfig('routing')
};

//------------------------------------------------------------------------
//Express Middlewares Stack
var app = App.expressApp;
app.use(morgan('dev'));
app.use(express.static(path.join(Utils.root_path, 'public', 'build')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(App.routing.appRouter);
app.use(App.errorHandling.handler);

//------------------------------------------------------------------------
// Config Object
var configObject = {
    // server
    httpServer: http.createServer(App.expressApp),
    // server.start
    start: function () {
        App.database.connect((err) => {
            if (err) return;
            this.httpServer
                .listen(Configs.PORT)
                .on('error', (e) => console.log('Error starting server:', e))
                .on('listening', () => {
                    console.log('Server is listening on', Configs.PORT);
                });
        });
    }
};

//------------------------------------------------------------------------
// Exports
module.exports = configObject;