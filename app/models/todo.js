var mongoose = require('mongoose');

module.exports = mongoose.model('Todo', {
	text : String,
	votes : String,
	done : Boolean,
	time : {type: Date, default: Date.now }
});