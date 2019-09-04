const Account = require('../../models/account/Account');

function validateEmail(email){

	return Account.findOne({email: email}).then(function(result){
		 return result !== null;
	});
 }

module.exports = async function(req, res, next) {
	var isValid;
	const {email, name, age} = req.body;
	const account = new Account({email, name, age});
	validateEmail(email).then(function(valid) {
		this.isValid = valid;
	  });

	if (isValid) {
		await account.save();
		return res.send({message: 'success'});
	} else {
		return res.send({error: "email already exists"})
	}

	
	
};

