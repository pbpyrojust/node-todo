var mongoose = require('mongoose');

module.exports = mongoose.model('Todo', {
	text : String,
	votes: {type: Number, default: 0},
	done : Boolean,
	time : {type: Date, default: Date.now }
});