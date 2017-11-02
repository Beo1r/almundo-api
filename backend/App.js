var express = require('express');
var app = express();
var db = require('./Db');

var HotelController = require('./hotel/HotelController');
app.use('/', HotelController);

module.exports = app;