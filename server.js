var express = require("express");
Message = require("./api/models/msgModel");

app = express();
port = process.env.PORT || 3000;

mongoose = require("mongoose");
mongoose.Promise = global.Promise;
mongoose.connect("mongodb://localhost/msgdb");

bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var routes = require("./api/routes/msgRoutes");
routes(app);

app.listen(port);

console.log("Message RESTful API server started on: " + port);
