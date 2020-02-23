const mongoose = require('mongoose');

const CampSchema = new mongoose.Schema({
	name: {
		type: String,
		required: true
	},
	dateStart: {
		type: Date,
		required: true
	},
	dateEnd: {
		type: Date,
		required: true
	},
	location: {
		name: {
			type: String
		},
		lat: {
			type: Number
		},
		lng: {
			type: Number
		}
	},
	description: {
		type: String,
		required: true
	}
});

module.exports = Camp = mongoose.model('camp', CampSchema);