const express = require('express');
const { connectToDb, getDb } = require('./connect');

//init app
const app = express()

//connect to db
connectToDb((err) => {
    let db
    if(!err) {
        app.listen(3000, () => {
            console.log('listening on port 3000');
        })
       db = getDb();
    }
})

app.listen(3000, () => {
    console.log('listening on port 3000');
});

//get
app.get('/books', (req, res) => {
    res.send([{
        title: 'The Hobbit',
}, {
        title: 'The Lord of the Rings',
    }]);
});