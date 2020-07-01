var express = require("express");
var Message = require("./api/models/msgModel");

var app = express();
var port = process.env.PORT || 3000;

var mongoose = require("mongoose");
mongoose.Promise = global.Promise;
mongoose.connect("mongodb://localhost/msgdb");

var bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var routes = require("./api/routes/msgRoutes");
routes(app);

app.listen(port);

console.log("Message RESTful API server started on: " + port);
