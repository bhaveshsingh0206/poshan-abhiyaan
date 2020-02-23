const express = require('express'),
	router = express.Router(),
	passport = require('passport'),
	localStrategy = require('passport-local'),
	passportLocalMongoose = require('passport-local-mongoose'),
	Worker = require('../models/Worker'),
	Camp = require('../models/Camp'),
	Patient = require('../models/Patient'),
	Dose = require('../models/Dose'),
	mongoose = require('mongoose');

router.get('/all', async (req, res) => {
	try {
		const users = await Patient.find();
		res.status(200).json(users);
	} catch (err) {
		console.log(err.message);
		res.status(500).send('Server error');
	}
});

router.get('/today', async (req, res) => {
	try {
		const date = Date.now();
		const users = await Patient.find({ dateEnd: date });
		res.status(200).json(users);
	} catch (err) {
		console.log(err.message);
		res.status(500).send('Server error');
	}
});

router.post('/dose', async (req, res) => {
	try {
		const { doseId, userId, dateStart, dateEnd } = req.body;
		console.log(doseId, userId, dateStart, dateEnd)
		console.log(req.body)
		if (doseId && userId) {
			const dose = await Dose.findById(doseId);
			const user = await Patient.findById(userId);

			const doses = user.doses;

			const doseObj = {
				dose: dose._id,
				dateStart,
				dateEnd
			};
			
			doses.unshift(doseObj);
			
			await user.save();
			
			res.status(200).json(user);
		} else {
			res.status(400).send('Insufficient Data');
		}
	} catch (err) {
		console.log(err.message);
		res.status(500).send('Server error');
	}
});

module.exports = router;