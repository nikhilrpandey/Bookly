// requiring the mongoose odm
const mongoose = require('mongoose');

// Opening a connection to the bookly database 
mongoose.connect('mongodb://localhost/booklyDB', {useNewUrlParser: true, useUnifiedTopology: true});


const db = mongoose.connection;

db.on('error',console.error.bind(console,'error connecting to db'));
db.once('open',()=>{
    console.log('Successfuly connected to the database !!!')
});

module.exports = db;