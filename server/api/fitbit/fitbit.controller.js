'use strict';

var _ = require('lodash');

var FitbitApiClient = require("fitbit-node"),
	client = new FitbitApiClient("81924ba107984c9b5ded55821bada8a7", "2057498cbe883c01a7afdf4b9a51bfe1");

var requestTokenSecrets = {};


// Get list of fitbits
exports.index = function(req, res) {
  res.json([]);
};

exports.authorize = function(req, res) {
	client.getRequestToken().then(function (results) {
		var token = results[0],
			secret = results[1];
		requestTokenSecrets[token] = secret;
		res.redirect("http://www.fitbit.com/oauth/authorize?oauth_token=" + token);
	}, function (error) {
		res.send(error);
	});
};

exports.authcallback = function() {
	
	app.get("/authcallback", function (req, res) {
		var token = req.query.oauth_token,
			secret = requestTokenSecrets[token],
			verifier = req.query.oauth_verifier;
		client.getAccessToken(token, secret, verifier).then(function (results) {
			var accessToken = results[0],
				accessTokenSecret = results[1],
				userId = results[2].encoded_user_id;
			return client.get("/profile.json", accessToken, accessTokenSecret).then(function (results) {
				var response = results[0];
				res.send(response);
			});
		}, function (error) {
			res.send(error);
		});
	});	
};