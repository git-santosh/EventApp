const express = require('express');
const path = require('path');
const ejsLayouts = require("express-ejs-layouts");
const favicon = require('serve-favicon');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const mongoose =require('mongoose');
const app = express();
require('dotenv').config({path:'.env'});
mongoose.connect(process.env.dbURL);
mongoose.Promise = global.Promise;
mongoose.connection.on('error',(err) =>{
   console.log(`mongoDB Error :  ${err.message} \n Please start mongoDB server `);
});
require('./models/event');
var rootPath = path.normalize(__dirname+'/../');

//View engine set up
app.set('view engine','ejs');
//app.set('views',path.join(__dirname,'views'));

app.set('port',process.env.PORT || 3000);

app.use(express.static(path.join(__dirname,'public')));
app.use(favicon(path.join(rootPath,'client','favicon.ico')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended :false}));
app.use(cookieParser());
app.use(express.static(rootPath + '/client'));

console.log(__dirname)
//routes define 
const index = require('./routes/index');
app.use('/',index);

// catch 404 and forward to error handle
// app.use((req,res,next)=>{
//     const error = new Error('Not Found');
//     error.status = 404;
//     next(error);
// });

//Error Handler
// app.use((error,req,res,next) =>{
//     console.log(error);
//     res.locals.message = error.message;
//     res.locals.status = error.status;
//     res.locals.error = app.get('env') === 'development' ? error : {};
//     // render the error page
//     res.status(error.status || 500);
//     res.render('error');
// });


app.listen(app.get('port'),function(){
    console.log('Listening on port :'+app.get('port'));
})
