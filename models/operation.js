"use strict";
exports.__esModule = true;
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
            var db = {
                table: table
            };
            // table.forEach(ele => {
            //     dbjson.table.push({age: ele['age'], gender: ele['gender'], movie: ele['movie']});
            // });
            var dbjson = JSON.stringify(db);
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
// import NaiveBayes from './bayes'
// export var classifier = new NaiveBayes();
// var db: Array<any> = [];
// fs.readFile('db.json', 'utf8', function(err, data) {
//     if (err) {
//         console.log(err);
//     } else {
//         db = JSON.parse(data).table;
//         // console.log(JSON.parse(data).table);
//         db.forEach(element => {
//             classifier.train(element);
//         });
//     }
// });
