const express = require('express');
const app = express();                           	// create our app w/ express
const mongoose = require('mongoose');               // mongoose for mongodb
const morgan = require('morgan');             		// log requests to the console (express4)
const bodyParser = require('body-parser');    		// pull information from HTML POST (express4)
const methodOverride = require('method-override'); 	// simulate DELETE and PUT (express4)
const database = require('./config/database');
const port = process.env.PORT || 8080;              // set the port

// Configuration
mongoose.connect(database.url);                                 // connect to mongoDB database
app.use(express.static(__dirname + '/public'));                 // set the static files location /public/img will be /img for users
app.use(morgan('dev'));                                         // log every request to the console
app.use(bodyParser.urlencoded({'extended': 'true'}));           // parse application/x-www-form-urlencoded
app.use(bodyParser.json());                                     // parse application/json
app.use(bodyParser.json({type: 'application/vnd.api+json'}));   // parse application/vnd.api+json as json
app.use(methodOverride());

// routes
require('./app/routes.js')(app);

// listen (start app with node server.js)
app.listen(port);
console.log("App listening on port " + port);