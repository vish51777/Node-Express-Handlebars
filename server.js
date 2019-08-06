// ==============================================================================
// DEPENDENCIES
// ==============================================================================
var express = require("express");
var bodyParser = require("body-parser");
var methodOverride = require("method-override");
var exphbs = require('express-handlebars');

// ==============================================================================
// EXPRESS CONFIGURATION
// ==============================================================================
var app = express(); // call express
var PORT = process.env.PORT || 8081;
app.use(express.static(__dirname + "/public"));

app.use(bodyParser.urlencoded({ extended: false }));

app.use(methodOverride('_method'));
app.engine('handlebars', exphbs({
    defaultLayout: 'main'
}));
app.set("view engine", "handlebars");

// ================================================================================
// ROUTER
// ================================================================================
var routes = require('./controllers/routes.js'); // this is importing routes
app.use('/', routes);

// =============================================================================
// LISTENER
// =============================================================================

app.listen(PORT, function() {
    console.log("App listening on PORT: " + PORT);
  });