const mongoose = require('mongoose'),
	config = require('config'),
	db = config.get('mongoURI');

const connectDB = async () => {
	try {
		await mongoose.connect(db, {
			useNewUrlParser: true,
			useUnifiedTopology: true,
			useCreateIndex: true,
			useFindAndModify: false
		});
		console.log('MongoDB Connected...');
	} catch (err) {
		console.error(err.message);
		// Exit Process with failure
		process.exit(1);
	}
};

module.exports = connectDB;