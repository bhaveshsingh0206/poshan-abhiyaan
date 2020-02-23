const express = require('express'),
	router = express.Router(),
	passport = require('passport'),
	localStrategy = require('passport-local'),
	passportLocalMongoose = require('passport-local-mongoose'),
	Worker = require('../models/Worker'),
	Camp = require('../models/Camp'),
	Patient = require('../models/Patient'),
	Dose = require('../models/Dose'),
	// Nexmo = require('nexmo'),
	mongoose = require('mongoose');

// const nexmo = new Nexmo({
// 	apiKey: '63e792d8',
// 	apiSecret: 'MDFgYqtnaj69gBH5'
// },{debug: true});

isLoggedIn = (req, res, next) => {
	if (req.isAuthenticated()) {
		return next();
	} else {
		return res.redirect('/login');
	}
};

// Main Page
router.get('/', isLoggedIn, (req, res) => {
	res.render('index');
});
router.get('/logout', (req, res) => {
	req.logout();
	res.redirect('/login');
});
// Login Page
router.get('/login', (req, res) => {
	res.render('login');
});

router.get('/details', (req, res) => {
	res.render('details');
});

router.post(
	'/login-worker',
	passport.authenticate('worker', {
		successRedirect: '/',
		failureRedirect: '/login'
	}),
	(req, res) => {}
);
router.post('/login-patient', passport.authenticate('patient', {
		
	}),(req, res) => {
	if (req.user) {
		res.status(200).json(req.user );
	} else {
		res.status(403);
	}
});

router.get('/register/patient', (req, res) => {
	res.render('use_details');
});

router.post('/register/patient', (req, res) => {
	// console.log('patient')
	// console.log(req.body)
	const location = {
		name: req.body.location.name,
		lat: req.body.location.lat,
		lng: req.body.location.lng
	};
	// console.log(location)
	const patient = new Patient({
		name: req.body.name,
		username: req.body.username,
		email: req.body.email,
		doses: [],
		phone: req.body.phone,
		location: location,
		status: req.body.status,
		age: req.body.age,
		gender: req.body.gender
	});
	// console.log(patient)
	Patient.register(patient, req.body.password, async (err, patient) => {
		if (err) {
			console.log(err);
			res.send(err);
			// req.flash('error1', 'Username already exists');
			// res.redirect('/patient_register');
		} else {
			console.log('patient');
			await Patient.authenticate('patient')(req, res, function() {
				res.send('patient created');
				// res.redirect('/');
			});
		}
	});
});

router.post('/create/dose', (req, res) => {
	const dose = new Dose({
		name: req.body.name,
		duration: req.body.duration,
		status: req.body.status,
		description: req.body.description
	});
	dose.save((err, dose) => {
		if (!err) {
			console.log('Dose is created');
			res.send('Created');
		} else {
			console.log(err);
		}
	});
});

router.post('/worker/register', (req, res) => {
	const worker = new Worker({
		name: req.body.name,
		username: req.body.email
	});
	Worker.register(worker, req.body.password, async (err, worker) => {
		if (err) {
			console.log(err);
			res.send(err);
			// req.flash('error1', 'Username already exists');
			// res.redirect('/worker_register');
		} else {
			console.log('worker');
			await Worker.authenticate('worker')(req, res, function() {
				res.send('Worker Registered');
				// res.redirect('/');
			});
		}
	});
});

router.post('/camp/register', async (req, res) => {
	try {
		const camp = new Camp({
			name: req.body.name,
			dateStart: req.body.date_start,
			dateEnd: req.body.date_end,
			location: req.body.location,
			description: req.body.description
		});

		await camp.save();

		res.status(200).json({ camp });
	} catch (err) {
		console.log(err.message);
		res.status(500).json({ msg: 'Server Error' });
	}
});

router.get('/doses', async (req, res) => {
	try {
		const doses = await Dose.find();
		res.status(200).json({ doses });
	} catch (err) {
		console.log(err.message);
		res.status(500).json({ msg: 'Server Error' });
	}
});
router.get('/details', async (req, res) => {
	// console.log(req.header('userid'))
	try {
		if (req.header('userid')) {
			id = req.header('userid');
			Patient.findOne({ _id: id }, (err, user) => {
				console.log(user);
				if (user) {
					res.render('details', { patient: user });
				} else {
					res.send('Page Not found');
				}
			});
		} else {
			res.send('Page Not found');
		}
	} catch (err) {
		res.send('Page Not found');
	}
});

module.exports = router;