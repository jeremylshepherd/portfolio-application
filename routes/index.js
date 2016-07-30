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
var passport = require("passport");

require("../config/passport");


router.get('/', isLoggedIn, (req, res) => {
    var reactString = ReactDOMServer.renderToString(
        React.createElement(ReactApp)
    );
    res.render('index.ejs', {reactHTML : reactString, user: req.user});
});

router.get('/auth/github', passport.authenticate('github'));

router.get('/auth/github/callback', passport.authenticate('github', { failureRedirect: '/' }),
    function(req, res) {
      req.flash('loggedin', "Who's awesome? You're awesome! Thanks for logging in.");
      res.redirect('/');
  }
);

router.get('/auth/google', passport.authenticate('google', { scope: ['profile', 'email'] }));

router.get('/auth/google/callback', passport.authenticate('google', { failureRedirect: '/' }),
    function(req, res) {
      req.flash('loggedin', "Who's awesome? You're awesome! Thanks for logging in.");
      res.redirect('/');
  }
);

router.get('/auth/twitter', passport.authenticate('twitter'));

router.get('/auth/twitter/callback', passport.authenticate('twitter', { failureRedirect: '/' }),
    function(req, res) {
      req.flash('loggedin', "Who's awesome? You're awesome! Thanks for logging in.");
      res.redirect('/');
  }
);

router.get('/login', (req, res) => {
    res.render('login.ejs');
});

router.get('/users/:username', isLoggedIn, (req, res) => {
   User.findOne({'github.username' : req.params.username}, (err, user) => {
       if(err) {res.json(err);}
       let obj = {};
       obj.username = user.github.username;
       obj.name = user.github.displayName;
       obj.repos = user.github.publicRepos;
       res.json(obj);
   });
});

router.get('/logout', (req, res) => {
    req.logout();
    req.flash('logout', 'You have successfully logged out!');
    res.redirect('/');
})

router.get('/test', function(req, res) {
   res.json(req.user); 
});


function isLoggedIn(req, res, next) {
    if (req.isAuthenticated()) {
        console.log("You are logged in!");
        return next(); 
    }
    req.flash("login", "You must first log in or register first!");
    res.redirect('/login');
}

module.exports = router;