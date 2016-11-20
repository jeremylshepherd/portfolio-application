'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var User = new Schema({
	github: {
		id: String,
		token: String,
		displayName: String,
		username: String,
        publicRepos: Number,
        created: Date,
        avatar: String
	}
});

module.exports = mongoose.model('User', User);