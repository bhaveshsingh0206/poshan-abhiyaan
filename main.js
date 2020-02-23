const express = require('express'),
	mongoose = require('mongoose'),
	flash = require('connect-flash'),
	passport = require('passport'),
	localStrategy = require('passport-local'),
		// exp = require('express-session'),
	passportLocalMongoose = require('passport-local-mongoose'),
	Worker = require('./models/Worker'),
	Patient = require('./models/Patient'),
	  bodyParser              = require('body-parser'),
	connectDB = require('./config/db');

const app = express();

const PORT = 4004;


// Middlewares
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());



app.use(
	require('express-session')({
		secret: 'poshan',
		resave: false,
		saveUninitialized: false
	})
);
app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/public'));
app.use(passport.initialize());
app.use(passport.session());
passport.use('worker', new localStrategy(Worker.authenticate()));
passport.use('patient', new localStrategy(Patient.authenticate()));
passport.serializeUser((user, done) => {
	done(null, user);
});

passport.deserializeUser((user, done) => {
	if (user != null) {
		done(null, user);
	}
});

// Define routes
app.use('/', require('./routers/indexRouter'));
app.use('/sms', require('./routers/smsRouter'));
app.use('/patient', require('./routers/patientRouter'));

// mongoose.connect('mongodb://localhost/sih', {useNewUrlParser: true,useUnifiedTopology: true })
//     .then(()=>console.log("DB server connect"))
//     .catch(e => console.log("DB error", e));
// Conntect to db
connectDB();

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));