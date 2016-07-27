'use strict';
require('babel-register')({
    presets: ['react']
});

var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var User = require('../models/Users');
var React = require("react");
var ReactDOMServer = require("react-dom/server");
var ReactApp = require("../views/Components/ReactApp");


router.get('/', function(req, res) {
    var reactString = ReactDOMServer.renderToString(
        React.createElement(ReactApp)
    );
    res.render('index.ejs', {reactHTML : reactString});
});




module.exports = router;