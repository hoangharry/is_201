"use strict";
exports.__esModule = true;
exports.classifier = void 0;
var fs = require('fs');
function add(obj) {
    fs.readFile('./models/db.json', 'utf8', function (err, data) {
        if (err) {
            console.log(err);
        }
        else {
            var table = void 0;
            table = JSON.parse(data).table;
            // table = data.table;
            table.push({ age: +obj['age'], gender: +obj['gender'], movie: +obj['movie'] });
            var db_1 = {
                table: table
            };
            // table.forEach(ele => {
            //     dbjson.table.push({age: ele['age'], gender: ele['gender'], movie: ele['movie']});
            // });
            var dbjson = JSON.stringify(db_1);
            fs.writeFile('./models/db.json', dbjson, 'utf8', function (err) {
                if (err) {
                    console.log(err);
                }
                else {
                    console.log('update successfully');
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
