 var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var BlogSchema = new Schema({
	author: String,
	creator: {type: mongoose.Schema.Types.ObjectId, ref: 'User'},
	image: String,
	date: String,
	content: String,
  comments: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Comment' }]
});

module.exports = mongoose.model('Blog', BlogSchema);
