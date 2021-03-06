const mongoose = require('mongoose');

const { restrictions } = require('../../mongoParts');

module.exports = new mongoose.Schema({
	name: {
		type: String,
		required: true,
	},
	cooldown: {
		type: Number,
		min: 2000,
		max: 300000,
		default: 2000,
	},
	delete: {
		type: Boolean,
		default: false,
	},
	dm: {
		type: Boolean,
		default: false,
	},
	disabled: {
		type: Boolean,
		default: false,
	},
	restrictions,
});
