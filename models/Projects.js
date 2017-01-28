'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var Project = new Schema({
	creator: { type: Schema.Types.ObjectId, ref: 'User' },
	user: String,
	title: String,
	description: String,
	url: String,
	technologies: [String],
	img: String,
	type: String,
	repo: String
});


module.exports = mongoose.model('Project', Project);