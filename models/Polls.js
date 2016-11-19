'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var Poll = new Schema({
	author: { type: Schema.Types.ObjectId, ref: 'User' },
	title: String,
	options: [{ 
		text: String, 
		votes: {
			type: Number, 
			default: 0
		} 
	}]
});


module.exports = mongoose.model('Poll', Poll);