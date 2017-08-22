const express = require('express');
const router = express.Router();
const storeController = require('../controller/storeController');
//get home page 

router.get('/',storeController.homePage);
// serve angular app files from the '/app' route
//router.use('/', express.static('app'));
module.exports =router;