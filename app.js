//Greg Morgan
//Sample Site Node and Express
//3-26-18

//module requirement for express, uses name of module as the string
//using 'require' imports the package
var express = require('express');
var http = require('http');
var path = require('path');
var handlebars = require('express-handlebars');
var router = express.Router();

//variable to get route for each page
var index = require('./routes/index');
var officers = require('./routes/officers');
var hackathon = require('./routes/hackathon');
var projects = require('./routes/projects');
var about = require('./routes/about');
var news = require('./routes/news');

//initialize the app
var app = express();

// add all environments for the app to use
// any commented out ones are currently unsupported
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.engine('handlebars', handlebars());
app.set('view engine', 'handlebars');
//app.use(express.favicon());
//app.use(express.logger('dev'));
app.use(express.json());
//app.use(express.urlencoded());
//app.use(express.methodOverride());
//app.use(express.cookieParser('Intro HCI secret key'));
//app.use(express.session());
//app.use(app.router);
app.use(express.static(path.join(__dirname, '/public')));

//route definition when using 'get'
//reffered to as a 'route handler (callback)'
//when the url is accessed, controller passes the view name for rendering
app.get('/', index.view);
app.get('/officers', officers.view);
app.get('/hackathon', hackathon.view);
app.get('/projects', projects.view);
app.get('/about', about.view);
app.get('/news', news.view);

//starts the server on port 3000
http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});