const Notification = require('../../models/notification/Notification');


module.exports = async function(req, res, next) {
	const {accountId, name, color} = req.body;
	const notification = new Notification({accountId, name, color});
	
    await notification.save();
    return res.send({message: 'success'});
	
};

