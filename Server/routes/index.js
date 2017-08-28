const express = require('express');
const router = express.Router();
const eventController = require('../controller/eventController');
//get home page 

router.get('/',eventController.homePage);
router.post('/add',eventController.addEvent);
// serve angular app files from the '/app' route
//router.use('/', express.static('app'));
module.exports =router;