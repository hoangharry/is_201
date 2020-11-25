const fs = require('fs');

export default function add(obj: Object) {
    console.log(obj);
    console.log(obj['age']);
    fs.readFile('db.json', 'utf8', function(err, data) {
        if (err) {
            console.log(err);
        } else {
            let table: Array<Object>;
            table = JSON.parse(data).table;
            console.log(table.length);
            // console.log(JSON.parse(data).table);
            table.push({age: +obj['age'], gender: +obj['gender'], movie: +obj['movie']});
            console.log(table.length);
            let dbjson = {
                table: []
            };
            dbjson.table = table;
            const fileName = 'db.json';
            fs.writeFile(fileName, dbjson, 'utf8', function(err) {
                if (err) {
                    console.log(err);
                } else {
                    console.log('success');
                }
            });
        }
    });
}

import NaiveBayes from './bayes'
export var classifier = new NaiveBayes();
var db: Array<any> = [];
fs.readFile('db.json', 'utf8', function(err, data) {
    if (err) {
        console.log(err);
    } else {
        db = JSON.parse(data).table;
        // console.log(JSON.parse(data).table);
        db.forEach(element => {
            classifier.train(element);
        });
    }
});