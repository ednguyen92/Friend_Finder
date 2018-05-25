// Modules 
var express = require('express'),
	bodyParser = require('body-parser'),
	app = express();

// var mysql = require("mysql");

// if(process.env.JAWSDB_URL) {
// 	connection = mysql.createConnection(process.env.JAWSDB_URL);
// } else {
// 	connection = mysql.createConnection({
// 		host: "localhost",
// 		user: "root",
// 		password: "edwardhn",
// 		database: ""
// 	  });
// }


// Sets an initial port. We"ll use this later in our listener
const PORT = process.env.PORT || 8080;
// middleware parses data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));
app.use(express.static(__dirname + '/public'));

// Require Routes
//App is passed in because it lets use us express in other files
require('./app/routing/htmlRoutes.js')(app);
require('./app/routing/apiRoutes.js')(app);

// Listens for when page is loaded and starts server
app.listen(PORT,function() {
	console.log('Listening for App' , PORT);
});