const express = require('express');
const app = express();
const Db = require('./db/Database');
require('dotenv').config();
const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.listen(3000, () => {
    console.log('welcome...', PORT);
    Db();
});