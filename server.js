// =============================================================
// DEPENDENCIES
// =============================================================
var express = require("express");
var path = require("path");
var bodyParser = require("body-parser");
var exphbs = require("express-handlebars");

// =============================================================
// GLOBAL VARIABLES
// =============================================================
var PORT = process.env.PORT || 4000;
var app = express();

// =============================================================
// USE MIDDLEWARE
// =============================================================
app.set("views", __dirname + "/views");
app.engine("handlebars", exphbs({defaultLayout: "main"}));
app.set("view engine", "handlebars");
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.text());
app.use(bodyParser.json({type:"application/vnd.api+json"}));
app.use(express.static(process.cwd() + "/public"));

// =============================================================
// ROUTES
// =============================================================

app.get("/", function(req, res){

  res.redirect("/home");

})

app.get("/home", function(req, res){

  res.render("home");

})

// =============================================================
// LISTENING
// =============================================================
app.listen(PORT, function() {
  console.log("App listening on PORT: " + PORT);
});