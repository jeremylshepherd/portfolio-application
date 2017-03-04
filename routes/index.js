'use strict';
require('babel-register')({
    presets: ['react']
});

var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var User = require('../models/Users');
var Project = require('../models/Projects');
var React = require("react");
var ReactDOMServer = require("react-dom/server");
var PortfolioApp = require("../views/Components/PortfolioApp");
var passport = require("passport");
var cors = require('cors');

require("../config/passport");

/******************************************************************************
******************________AUTHENTICATION ROUTES_________***********************
******************************************************************************/

//Authentication middleware
function isLoggedIn(req, res, next) {
    if (req.isAuthenticated()) {
        console.log("You are logged in!");
        return next(); 
    }
    console.error("You must first log in or register first!");
}

/******************
*GITHUB************
******************/

router.get('/auth/github', passport.authenticate('github'));

router.get('/auth/github/callback', passport.authenticate('github', { failureRedirect: '/' }),
    (req, res) => {
      req.flash('loggedin', "Who's awesome? You're awesome! Thanks for logging in.");
      res.redirect('/');
  }
);


/******************************************************************************
*****************____________Page Routing____________**************************
******************************************************************************/

router.get('/logout', (req, res) => {
    req.logout();
    req.flash('logout', 'You have successfully logged out!');
    res.redirect('/');
});

/******************************************************************************
****************______________API Routing______________************************
******************************************************************************/

router.get('/api/me', isLoggedIn, (req, res) => {
    if(req.user === undefined) {
        res.json({});
    }else{
        res.json(req.user);
    }
});

router.get('/api/:username/data', (req, res) => {
    User.findOne({'github.username' : req.params.username}, (err, user) => {
       if(err)  {res.json(err);}
       var data = {};
       data.bio = user.bio;
       data.img = user.img;
       data.email = user.email;
       data.compentencies = user.compentencies;
       res.json(data);
    });
});

router.post('/api/newproject', isLoggedIn, (req, res) => {
  User.findOne({'github.username' : req.user.github.username}, (err, user) => {
      if(err){res.json(err);}
      var project = new Project({
          title: req.body.title,
          creator: user._id,
          user: req.user.github.username,
          description: req.body.description,
          url: req.body.url,
          repo: req.body.repo,
          img: req.body.img,
          type: req.body.type,
          technologies: req.body.technologies
      });
      project.save((err) => {
          if(err) {console.log(err);}
          console.log('Project saved!');
          res.json({message: 'Project saved!'});
      });
  });
});

router.get('/api/:username/projects', cors(), (req, res) => {
    Project.find({'user': req.params.username}, (err, projects) => {
        if(err) {console.log(err);}
        res.json(projects);
    });
});

router.get('/api/:userID/projects', (req, res) => {
    var query = {'creator' : req.params.userID};
    Project.find(query, (err, projects) => {
        if(err) {console.log(err);}
        res.json(projects);
    });
});

router.get('/api/user/myprojects', isLoggedIn, (req, res) => {
    var query = {'creator' : req.user._id};
    Project.find(query, (err, projects) => {
        if(err) {console.log(err);}
        res.json(projects);
    });
});

router.get('/api/projects', cors(), (req, res) => {
    Project.find((err,projects) => {
        if(err) {console.log(err);}
        res.json(projects);
    });
});

router.get('/api/project/:project', cors(), isLoggedIn, (req, res) => {
    Project.findOne({'_id' : req.params.project},(err,project) => {
        if(err) {console.log(err);}
        res.json(project);
    });
});


router.post('/api/update/:project', cors(), isLoggedIn, (req, res) => {
    Project.findOne({'_id' : req.params.project},(err,project) => {
        if(err) {console.log(err);}
        if(project.creator.toString() === req.user._id.toString()){
            project.title = req.body.title;
            project.user = req.user.github.username;
            project.description = req.body.description;
            project.url = req.body.url;
            project.repo = req.body.repo;
            project.img = req.body.img;
            project.type = req.body.type;
            project.technologies = req.body.technologies;
            project.save();
            console.log("Project updated!");
            res.json({message: "Project updated!"});
        }else{
            console.log("You may only your own projects!");
            res.json({message: "You may only your own projects!"});
        }
        
    });
});

router.delete('/api/delete/:project', isLoggedIn, (req, res) => {
    Project.findOne({'_id' : req.params.project},(err,project) => {
        console.log(project.creator);
        if(err) {console.log(err);}
        if(project.creator.toString() === req.user._id.toString()){
            project.remove();
            console.log('record removed.');
            res.json({message: "Farewell, old friend."});
        }else{
            res.json({taunt: "Ah! You all went behind 'uh ear, Daniel-son!", message: "You may only delete your own projects"});
        }
    });
});

router.post('/api/:user/update', cors(), isLoggedIn, (req, res) => {
    if(req.user._id.toString() == req.params.user){
        User.findOne({'_id' : req.params.user},(err,user) => {
            if(err) {console.log(err);}
            user.bio = req.body.bio;
            user.email = req.body.email;
            user.compentencies = req.body.compentencies;
            user.img = req.body.img;
            user.save();
            console.log("User updated!");
            res.json({message: "User updated!"});
        });
    }else{
        console.log("You may only update yourself!");
        res.json({message: "You may only update yourself!"});
    }
});

router.get('*', (req, res) => {
    var reactString = ReactDOMServer.renderToString(
        React.createElement(PortfolioApp)
    );
    res.render('index.ejs');
});

module.exports = router;