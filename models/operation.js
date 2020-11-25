"use strict";
exports.__esModule = true;
exports.classifier = void 0;
var fs = require('fs');
function add(obj) {
    fs.readFile('db.json', 'utf8', function (err, data) {
        if (err) {
            console.log(err);
        }
        else {
            var table = void 0;
            table = JSON.parse(data).table;
            // console.log(JSON.parse(data).table);
            table.push(obj);
            var dbjson = {
                table: table
            };
            var fileName = 'db.json';
            fs.writeFile(fileName, dbjson, 'utf8', function (err) {
                if (err) {
                    console.log(err);
                }
                else {
                    console.log('success');
                }
            });
        }
    });
}
exports["default"] = add;
var bayes_1 = require("./bayes");
exports.classifier = new bayes_1["default"]();
var db = [];
fs.readFile('db.json', 'utf8', function (err, data) {
    if (err) {
        console.log(err);
    }
    else {
        db = JSON.parse(data).table;
        // console.log(JSON.parse(data).table);
        db.forEach(function (element) {
            exports.classifier.train(element);
        });
    }
});
