'use strict';

var express = require('express');
var controller = require('./thing.controller');

var router = express.Router();

router.get('/', controller.index);
router.get('/activities', controller.getActivities);
router.get('/heartbits', controller.getHeartbits);
router.post('/sendemail', controller.sendEmail);

module.exports = router;