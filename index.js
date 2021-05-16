// requiring all the dependencies
const express = require('express');
const db = require('./config/mongoose');
// to make the layout.ejs to import the external stylesheets
const expressLayout = require('express-ejs-layouts');

const app = express();

const PORT = 3000;
app.use(express.urlencoded({extended:false}));
// setting up the static files
app.use(express.static('./assets'));
app.use(expressLayout);
app.set('layout extractStyles',true);


// setting up the ejs template engine
app.set('view engine','ejs');
app.set('views','./views')


app.use('/',require('./routes'));


// setting up the port









// listening to the port
app.listen(PORT,(err)=>{
    if(err)
        console.log('Error firing up the server...!!!')
    else
        console.log('the server is up and running ..!!!')
})










