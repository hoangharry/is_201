function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
var movies = [724989,
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
    514207];
// const ages = [0,1,2,3,4,5,6];
// const genders = [0,1];
var fileName = 'db.json';
var obj = {
    table: []
};
for (var i = 0; i < 300; i++) {
    obj.table.push({ age: getRandomInt(0, 6), gender: getRandomInt(0, 2), movie: movies[getRandomInt(0, 39)] });
}
var dbjson = JSON.stringify(obj);
var fs = require('fs');
fs.writeFile(fileName, dbjson, 'utf8', function (err) {
    if (err) {
        console.log(err);
    }
    else {
        console.log('success');
    }
});
