const express = require('express')
const app = express()
var session = require('express-session')
const bodyParser= require('body-parser')
var MongoStore = require('connect-mongo')(session);
var mongoose = require('mongoose');
var http = require('http');
var routes = require('./routes');
var server = http.createServer(app);

app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(session({
  secret: process.env.SECRET,
  name: 'Catscoookie',
  store: new MongoStore({ mongooseConnection: require('mongoose').connection }),
  proxy: true,
  resave: true,
  saveUninitialized: true
}));

app.use('/', routes);

server.listen(process.env.PORT || 3001, () => console.log('Example app listening on port 3001!'))
