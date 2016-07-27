'use strict';

var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var User = require('../models/Users');


router.get('/', function(req, res) {
    res.render('index.ejs');
});




module.exports = router;