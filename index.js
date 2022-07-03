//import router from './router'
const route = require('./route/route');

//import config
const conf = require('./config');

//express framework
const express = require('express');
const app = express();
const url = '/api';

//multer
const multer = require('multer');
var upload = multer();

//mongodb
const mongoose = require('mongoose');

mongoose.connect(`${conf.url}${conf.db}`, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(
    () => {
        console.log('Connected to MongoDB');
    }
).catch(
    (err) => {
        console.log(err);
    }
);


//to handle parsing data from form-data
app.use(upload.array());

//route
app.use(url, route);

//middleware if route not found
app.use((req, res) => {
    const url = req.url;
    res.status(404).send({
        status: 404,
        message: `Route ${url} not found`
    })
});
    
app.listen(conf.port, () => {
    console.log(`Node API listening on port ${conf.port}!`)
});