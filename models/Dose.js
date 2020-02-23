const mongoose = require('mongoose');

const DoseSchema = new mongoose.Schema({
	name: {
		type: String,
		required: true,
		unique: true
	},
	duration: {
		type: Number,
		required: true
	},
	status: {
		type: String,
		required: true
	},
	description: {
		type: String,
		required: true
	}
});

module.exports = Dose = mongoose.model('dose', DoseSchema);