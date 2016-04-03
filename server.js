
//standard boilerplate node server




var express = require('express');
var bodyParser = require('body-parser');
var logger = require('morgan');
var mongoose = require('mongoose');

// var routes = require('./controllers/routes.js')


var app = express();



app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(__dirname + '/public'));  


//--------------- Routes ---------------  
//initial setup route

//we need at least one initial backend route for starting out
//all the other routes are done on the front end
app.get('/', function(req, res) {
    res.sendFile('html/shell.html', {root : './public'});
});

app.get('/api/load', routes.load)

app.post('/api/sendEmail', routes.sendEmail)

// Creating Server and Listening for Connections 
var port = 3000
app.listen(port, function(){
  console.log('Server running on port ' + port);

})