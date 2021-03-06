const express = require('express')
const bodyParser = require('body-parser')
const mysql = require('mysql2')

const api = require('./router/api')

const app = express()

// set port number
port = process.env.PORT || 5000;

// parse requests of content-type: application/json
app.use(bodyParser.json());

// parse requests of content-type: application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/api', api);

// set port, listen for requests
app.listen(port, () => {
    console.log(`Server running on port: ${port}`);
});