let mongo = require('../config/dbConfig');

module.exports = {

    insert(collection, data) {

        return new Promise((resolve, reject) => {

            mongo.then((connection) => {
                connection.collection(collection).insert(data).then((sucess) => {
                    resolve(sucess);
                }).catch((err) => {
                    reject(err);
                });
            }).catch((error) => {
                reject(error);
            });



        });

    },

    updateOne(collection, filter, data){

        return new Promise((resolve, reject) => {

            let update = {
                $set: data
            }

            let options = {
                upsert: true
            }

            mongo.then((connection) => {
                connection.collection(collection).updateOne(filter, update).then((sucess) => {
                    console.log(sucess);
                    resolve(sucess);
                }).catch((err) => {
                    console.log(err);
                    reject(err);
                });
            }).catch((error) => {
                reject(error);
            });

        });

    },

    delete(collection, filter){
        return new Promise((resolve, reject) => {

            mongo.then((connection) => {
                connection.collection(collection).deleteOne(filter).then((sucess) => {
                    resolve(sucess);
                }).catch((err) => {
                    reject(err);
                });
            }).catch((error) => {
                reject(error);
            });

        });
    },

    find(collection, filter) {

        return new Promise((resolve, reject) => {

            mongo.then((connection) => {

                console.log(filter);

                connection.collection(collection).find(filter).toArray().then((sucess) => {                
                    resolve(sucess);
                }).catch((err) => {
                    reject(err);
                });

            }).catch((error) => {
                reject(error);
            });

        });

    }

}