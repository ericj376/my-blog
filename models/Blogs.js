var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var BlogSchema = new Schema({
	author: String,
	image: String,
	date: String,
	content: String
});

module.exports = mongoose.model('Blog', BlogSchema);
