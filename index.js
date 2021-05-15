// requiring all the dependencies
const express = require('express');
const db = require('./config/mongoose');
// to make the layout.ejs to import the external stylesheets
const expressLayout = require('express-ejs-layouts');

const app = express();

// setting up the static files
app.use(express.static('./assets'));
app.use(expressLayout);

// setting up the ejs template engine
app.set('view engine','ejs');
app.set('views','./views')
app.set('layout extractStyles',true);

app.use('/',require('./routes'));


// setting up the port
const PORT = 3000;








// listening to the port
app.listen(PORT,(err)=>{
    if(err)
        console.log('Error firing up the server...!!!')
    else
        console.log('the server is up and running ..!!!')
})










