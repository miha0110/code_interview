const express = require('express');
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/codeTest', {
	autoReconnect: true,
	reconnectTries: 60,
	reconnectInterval: 10000
});

const app = express();
app.listen(3000);

app.use(require('body-parser').json());

app.post('/account/create', require('./api/account/create'));

app.post('/notification/create', require('./api/notification/create'));

console.log('app running on port 3000...');

module.exports = app;
