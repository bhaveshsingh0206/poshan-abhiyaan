const mongoose = require('mongoose'),
	passportLocalMongoose = require('passport-local-mongoose');

const PatientSchema = new mongoose.Schema({
	name: {
		type: String,
		required: true
	},
	age: {
		type: Number,
		required: true
	},
	gender: {
		type: String,
		required: true
	},
	email: {
		type: String
	},
	username: {
		type: String
	},
	password: {
		type: String
	},
	status: {
		type: String,
		required: true
	},
	date: {
		type: Date,
		default: Date.now
	},
	phone: {
		type: Number,
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
	doses: [
		{
			dose: {
				type: String,
				required: true
			},
			dateStart: {
				type: Date,
				default: Date.now
			},
			dateEnd: {
				type: Date
			}
		}
	]
});

PatientSchema.plugin(passportLocalMongoose);
module.exports = Patient = mongoose.model('patient', PatientSchema);