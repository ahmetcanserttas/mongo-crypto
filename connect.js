const MongoClient = require('mongodb').MongoClient;

let dbConnection;
//module export mongo connection
module.exports = {
    connectToDb: (cb) => {
        MongoClient.connect('mongodb://localhost:27017/bookstore')
        .then((client) => {
            dbConnection = client.db()
            return cb();

    })
    .catch((err) => {
        console.log(err);
        return cb(err);
    })
},
        getDb: () => dbConnection

}

