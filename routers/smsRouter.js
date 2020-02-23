const Nexmo = require('nexmo');
const express = require('express'),
      router = express.Router(),
      config = require('config'),
      nexmoApiKey = config.get('nexmoApiKey'),
      nexmoApiSecret = config.get('nexmoApiSecret');

const nexmo = new Nexmo({
	apiKey: nexmoApiKey,
	apiSecret: nexmoApiSecret
},{debug: true});

// Add numbers to send messages
const num_array = []

router.get('/sendmsg',(req,res)=>{
	//const number = '';
	const text = 'Hello';

	nexmo.message.sendSms(num_array, text, {type: 'unicode'},
	(err, responseData)=>{
		if(err){
			console.log(err);
		}else{
			console.log(responseData);
		}
	});
});

module.exports = router;
