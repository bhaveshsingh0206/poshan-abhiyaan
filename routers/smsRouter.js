const Nexmo = require('nexmo');
const express = require('express'),
	router = express.Router();

const nexmo = new Nexmo({
	apiKey: '63e792d8',
	apiSecret: 'MDFgYqtnaj69gBH5'
},{debug: true});

const num_array = ['+919619045206','+91 70210 81470']

router.get('/sendmsg',(req,res)=>{
	const number = '+917021081470';
	const text = 'Hello';
	
	
	
	nexmo.message.sendSms(
	'+919819972574', '+917021600329', text, {type: 'unicode'},
	(err, responseData)=>{
		if(err){
			console.log(err);
		}else{
			console.log(responseData);
		}
	});
});

module.exports = router;