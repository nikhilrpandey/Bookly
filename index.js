// requiring all the dependencies
const express = require('express');
const db = require('./config/mongoose');
// to make the layout.ejs to import the external stylesheets
const expressLayout = require('express-ejs-layouts');

const app = express();

// setting up the port. TODO: change it at the time of deploying
const PORT = 3000;

// setting up the body and url parsing middleware
app.use(express.urlencoded({extended:false}));
app.use(express.json());


// setting up the static files
app.set('layout extractStyles',true);
app.set('layout extractScripts',true);
app.use(express.static('./assets'));


// setting up the ejs template engine
app.set('view engine','ejs');
app.set('views','./views');

// this should be included at the very end after setting up the views to render styles..
app.use(expressLayout);

// this will require any incoming request to require the routes index .
app.use('/',require('./routes'));




// listening to the port
app.listen(PORT,(err)=>{
    if(err)
        console.log('Error firing up the server...!!!')
    else
        console.log('the server is up and running ..!!!')
})










