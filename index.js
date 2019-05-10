const express = require('express');
const config = require('./config');
const endpoints = require('./endpoints')
const app = express();
const port = 3000;


//app.use(express.json())//con esto indicamos que puede recibir json
//app.use(express.urlencoded())

config.setup(app);
endpoints.routes(app);

app.listen(port,() =>console.log('el servidor esta corriendo'))
