/**
 * Using Rails-like standard naming convention for endpoints.
 * GET     /things              ->  index
 * POST    /things              ->  create
 * GET     /things/:id          ->  show
 * PUT     /things/:id          ->  update
 * DELETE  /things/:id          ->  destroy
 */

'use strict';

var _ = require('lodash');

var Fitbit = require('fitbit');
var https = require('https');

var requestTokenSecrets = {};
var config = {
  CONSUMER_KEY: process.env.FITBIT_CLIENT_KEY,
  CONSUMER_SECRET: process.env.FITBIT_CLIENT_SECRET,
  ACCESS_TOKEN: process.env.FITBIT_ACCESS_TOKEN,
  TOKEN_SECRET: process.env.FITBIT_TOKEN_SECRET
};
console.log(config);
var client = new Fitbit(config.CONSUMER_KEY, config.CONSUMER_SECRET, { 
  // Now set with access tokens
  accessToken: process.env.FITBIT_ACCESS_TOKEN,
  accessTokenSecret: process.env.FITBIT_TOKEN_SECRET,
  unitMeasure: 'en_GB'
});

exports.getActivities = function(req, res) {
  // Fetch todays activities
  client.getActivities(function (err, activities) {
    if (err) {
      return res.status(500).json('error occured, ' + err);
    }
    // `activities` is a Resource model
    res.send({ 
      steps: activities.steps(),
      _activities: activities
    });
  });
};

exports.getHeartbits = function(req, res) {
  // https://api.fitbit.com/1/user/-/activities/heart/date/today/1d.json
  console.log('timestamp: ', Math.floor(Date.now()/1000));
  var options = {
    host: 'api.fitbit.com',
    port: 443,
    path: '/1/user/-/activities/heart/date/today/1d.json',
    headers: {
      'Authorization'           : 'OAuth oauth_consumer_key="81924ba107984c9b5ded55821bada8a7", oauth_nonce="nonnn", oauth_signature="ddHMFY9oBSSCIDhjVAd17m3Rv+A=", oauth_signature_method="HMAC-SHA1", oauth_timestamp="'+ Math.floor(Date.now()/1000) +'", oauth_token="e2c73d0bfbc1610ef6286ff3e4be79db", oauth_version="1.0"',
      // 'oauth_consumer_key'      : '81924ba107984c9b5ded55821bada8a7',
      // 'oauth_nonce'             : 'nonnn',
      // 'oauth_signature'         : 'ddHMFY9oBSSCIDhjVAd17m3Rv%2BA%3D',
      // 'oauth_signature_method'  : 'HMAC-SHA1',
      // 'oauth_timestamp'         : Date.now(),
      // 'oauth_token'             : 'e2c73d0bfbc1610ef6286ff3e4be79db',
      // 'oauth_version'           : '1.0'
    }
  };

  var request = https.get(options, function(response) {
    console.log("statusCode: ", response.statusCode);
    console.log("headers: ", response.headers);

    // console.log('response: ', response);
    response.setEncoding('utf8');

    response.on('data', function (data) {
      console.log('res data', data);
    });
  })
  .on('error', function(e) {
    console.log('problem with request: ' + e.message);
  });
};

exports.sendEmail = function(req, res) {
  var nodemailer = require('nodemailer');

  var subject = req.body.subject;
  var textBody = req.body.message;

  // create reusable transporter object using SMTP transport
  var transporter = nodemailer.createTransport({
      service: 'Gmail',
      auth: {
          user: 'fitbitpersonal@gmail.com',
          pass: 'fitbitpersonal123'
      }
  });

  // NB! No need to recreate the transporter object. You can use
  // the same transporter object for all e-mails

  // setup e-mail data with unicode symbols
  var mailOptions = {
      from: 'Fitbit Personal App ✔ <fitbitpersonal@gmail.com>', // sender address
      to: 'bradleyhb@gmail.com', // list of receivers
      subject: subject, // Subject line
      text: textBody, // plaintext body
      // html: '<b>Hello world ✔</b>' // html body
  };

  // send mail with defined transport object
  transporter.sendMail(mailOptions, function(error, info){
      if(error){
          console.log(error);
          res.status(500).send(error);
          return;
      }
      console.log('Message sent: ' + info.response);
      res.send({ message: 'message sent.'});
  });

};

// Get list of things
exports.index = function(req, res) {
  res.json([
  {
  name : 'Development Tools',
  info : 'Integration with popular tools such as Bower, Grunt, Karma, Mocha, JSHint, Node Inspector, Livereload, Protractor, Jade, Stylus, Sass, CoffeeScript, and Less.'
  }, {
  name : 'Server and Client integration',
  info : 'Built with a powerful and fun stack: MongoDB, Express, AngularJS, and Node.'
  }, {
  name : 'Smart Build System',
  info : 'Build system ignores `spec` files, allowing you to keep tests alongside code. Automatic injection of scripts and styles into your index.html'
  },  {
  name : 'Modular Structure',
  info : 'Best practice client and server structures allow for more code reusability and maximum scalability'
  },  {
  name : 'Optimized Build',
  info : 'Build process packs up your templates as a single JavaScript payload, minifies your scripts/css/images, and rewrites asset names for caching.'
  },{
  name : 'Deployment Ready',
  info : 'Easily deploy your app to Heroku or Openshift with the heroku and openshift subgenerators'
  }
  ]);
};