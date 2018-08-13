const express = require('express');
let parser = require('body-parser');
let http = require('http');
let app = express();

let sysConfig = require('./sysConfig');

let server = http.createServer(app).listen(process.env.PORT || sysConfig.app.portListener);

server.on('listening', function(){
    console.log('Running on port '+sysConfig.app.portListener);
})

server.on('error', function(error){
    console.log(error);
})

app.use(parser.urlencoded({extended: true}));
app.use(parser.json());

app.use(function(req, res, next) { //allow cross origin requests
    res.setHeader("Access-Control-Allow-Methods", "POST, PUT, OPTIONS, DELETE, GET");
    res.header("Access-Control-Allow-Origin", req.headers.origin ? req.headers.origin : '*');
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Id, filetype, Authorization");
    res.header("Access-Control-Allow-Credentials", true);
    next();
  });
  
module.exports = app;