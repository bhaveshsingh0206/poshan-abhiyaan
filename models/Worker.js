const mongoose = require('mongoose'),
	  passportLocalMongoose   = require('passport-local-mongoose');

const WorkerSchema = new mongoose.Schema({
   name: {
      type: String,
      required: true
   },
   username: {
      type: String,
	  unique: true
   },
   password: {
      type: String
   },
   date: {
      type: Date,
      default: Date.now
   }
});

WorkerSchema.plugin(passportLocalMongoose);
module.exports = Worker = mongoose.model('worker', WorkerSchema);
