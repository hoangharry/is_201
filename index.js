"use strict";
exports.__esModule = true;
var express = require("express");
var route_1 = require("./routes/route");
var bodyParser = require('body-parser');
var cors = require('cors');
// Create a new express app instance
var app = express();
// var jsonParser = bodyParser.json();
// var urlencodedParser = bodyParser.urlencoded({ extended: false });
app.get('/', function (req, res) {
    res.send('Hello World!');
});
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());
// parse application/json
app.use(bodyParser.json());
app.use(route_1.router);
app.listen(3000, function () {
    console.log('App is listening on port 3000!');
});
