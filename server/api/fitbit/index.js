'use strict';

var express = require('express');
var controller = require('./fitbit.controller');

var router = express.Router();

router.get('/', controller.index);
router.get('/authorize', controller.authorize);
router.get('/authcallback', controller.authcallback);

module.exports = router;