const express = require('express');
const parser = require('body-parser');
const http = require('http');
const sysConfig = require('./sysConfig');

const app = express();

const server = http.createServer(app).listen(process.env.PORT || sysConfig.app.portListener);

server.on('listening', () => {
    console.log(`Running on port ${sysConfig.app.portListener}`);
});

server.on('error', (error) => {
    console.log(error);
});

app.use(parser.urlencoded({ extended: true }));
app.use(parser.json());

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Methods', 'POST, PUT, OPTIONS, DELETE, GET');
    res.header('Access-Control-Allow-Origin', req.headers.origin ? req.headers.origin : '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');
    res.header('Access-Control-Allow-Credentials', true);
    next();
});

module.exports = app;
