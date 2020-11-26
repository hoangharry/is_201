function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
export const movies = [724989,
    400160,
    531219,
    524047,
    671039,
    682377,
    337401,
    741074,
    741067,
    613504,
    622855,
    497582,
    694919,
    340102,
    618353,
    624779,
    575088,
    539885,
    571384,
    560050,
    581392,
    732670,
    635302,
    681429,
    718444,
    660982,
    740985,
    734309,
    643882,
    475430,
    606234,
    697064,
    605116,
    677638,
    634244,
    601844,
    635237,
    722603,
    531499,
    514207 ];
export const genres = [28, 12, 16, 35, 80, 99, 18, 10751,14,36,27,10402,9648,10749,878,10770,53,10752,37];
export const languages = ['en', 'es', 'ko', 'ja', 'vi', 'zh'];
import NaiveBayes from './bayes'
export var classifier = new NaiveBayes();
var obj = {
    table : []
}
for (let i = 0; i < 300; i++) {
    const newObj = {age: getRandomInt(0,6), gender: getRandomInt(0,2), movie: movies[getRandomInt(0, 39)]}
    obj.table.push(newObj);
    classifier.train(newObj);
}
const dbjson = JSON.stringify(obj);
const fs = require('fs');
fs.writeFile('./models/db.json', dbjson, 'utf8', function(err) {
    if (err) {
        console.log(err);
    } else {
        console.log('success create DB');
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