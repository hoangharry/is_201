const fs = require('fs');

export default function add(obj: Object) {
    fs.readFile('./models/db.json', 'utf8', function(err, data) {
        if (err) {
            console.log(err);
        } else {
            let table: Array<Object>;
            table = JSON.parse(data).table;

            // table = data.table;
            table.push({age: +obj['age'], gender: +obj['gender'], movie: +obj['movie']});

            let db = {
                table: table
            };
            // table.forEach(ele => {
            //     dbjson.table.push({age: ele['age'], gender: ele['gender'], movie: ele['movie']});
            // });
            const dbjson = JSON.stringify(db);

            fs.writeFile('./models/db.json', dbjson, 'utf8', function(err) {
                if (err) {
                    console.log(err);
                } else {
                    console.log('update successfully');
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