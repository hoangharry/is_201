import { movies } from "./../constants";
import { getRandomInt } from "../utils";
import NaiveBayes from "./bayes";
export var classifier = new NaiveBayes();
var obj = {
  table: [],
};
for (let i = 0; i < 300; i++) {
  const newObj = {
    age: getRandomInt(0, 6),
    gender: getRandomInt(0, 2),
    movie: movies[getRandomInt(0, movies.length-1)],
  };
  obj.table.push(newObj);
  classifier.train(newObj);
}
const dbjson = JSON.stringify(obj);
const fs = require("fs");
fs.writeFile("./models/db.json", dbjson, "utf8", function (err) {
  if (err) {
    console.log(err);
  } else {
    console.log("success create DB");
  }
});
// import NaiveBayes from './bayes'
// export var classifier = new NaiveBayes();
// var db: Array<any> = [];
// fs.readFile('db.json', 'utf8', function(err, data) {
//     if (err) {
//         console.log(err);
//     } else {
//         console.log('im here');
//         db = JSON.parse(data).table;
//         // console.log(JSON.parse(data).table);
//         db.forEach(element => {
//             classifier.train(element);
//         });
//     }
// });
