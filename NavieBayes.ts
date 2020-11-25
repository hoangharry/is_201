const mongodb = require('mongodb');
const mongoClient = mongodb.MongoClient;

const url = '';

function Query()



mongoClient.connect(url, function(err, db) {
    if (err) {
        console.log('Unable to connect', err);
    } else {
        console.log('Success');
        const AnswerCollection = db.collection('Answers');
        AnswerCollection.
    }
})