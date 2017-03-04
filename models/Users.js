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
	},
	projects: [{ type: Schema.Types.ObjectId, ref: 'Project' }],
	bio: String,
	compentencies: [String],
	img: String,
	email:String
});

module.exports = mongoose.model('User', User);