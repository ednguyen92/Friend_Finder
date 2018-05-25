// Modules
const friendData = require('../data/friend');

module.exports = function(app) {

	// Display friend JSON
	app.get('/api/friend',function(req, res) {
		res.json(friendData);
	});

	app.post('/api/friend', function(req, res) {
		// Pushes new data to friend JSON in JSON format
		friendData.push(req.body);
		console.log(friendData);
		// Displays it for the user when posted
		res.json(friendData);
	});
}