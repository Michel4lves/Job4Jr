const express = require('express');
const app     = express();
const db      = require('./db/connection');

const PORT    = 3000;

app.listen(PORT, function() {
    console.log(`listening on port ${PORT}`);
});

// db connection
db
    .authenticate()
    .then(() => {
        console.log('Data bank connection success')
    })
    .catch(err => {
        console.log('Data bank connection error: ', err)
    });

// routes
app.get('/', function(req, res) {
    res.send('Its works!');
});
