var express = require('express');
var app = express();

// set port
var port = process.env.PORT 

app.use(express.static(_dirname + "/public"));

//routes
