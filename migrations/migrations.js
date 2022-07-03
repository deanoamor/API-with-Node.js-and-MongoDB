const conf = require('../config');

//require migrations
const dosen = require('./dosenMigrations');

const mongoose = require('mongoose');


mongoose.connect(`mongodb://127.0.0.1:27017/${conf.db}`).then(
    () => {
        console.log('loading...');
    }
).catch(
    (err) => {
        console.log(err);
    }
);

//migration up
function UP() {
    dosen.up(mongoose);
}

module.exports = {
    UP,
}

//close connection
setTimeout(() => {
    mongoose.disconnect();
}, 5000);




