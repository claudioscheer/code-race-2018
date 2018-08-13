var MongoClient = require('mongodb').MongoClient
let config = require('./sysConfig');

var connection = null;

let urlString = "";

//Online db test
// if (config.dbOnline.user){
//     urlString = 'mongodb://'+config.dbOnline.user+':'+config.dbOnline.password+'@'+config.dbOnline.host+':'+config.dbOnline.port+'/' + config.dbOnline.database
// }else{
//     urlString = 'mongodb://' + config.dbOnline.host + ':' + config.dbOnline.port + '/' + config.dbOnline.database;
// }


if (config.db.user){
    urlString = 'mongodb://'+config.db.user+':'+config.db.password+'@'+config.db.host+':'+config.db.port+'/' + config.db.database
}else{
    urlString = 'mongodb://' + config.db.host + ':' + config.db.port + '/' + config.db.database;
}
  
module.exports = new Promise((resolve, reject) => {

    if (connection != null) {
        resolve(connection);
        return;
    }

    MongoClient.connect(urlString, {}, function (err, db) {

        if (err){
            console.log(err);
            reject(err);

        }

       
        console.log('Conexão com o banco de dados realizado com sucesso.', urlString);
    
        // connection = db.db(config.dbOnline.database);
        connection = db.db(config.db.database);

        resolve(connection);


    })


})



