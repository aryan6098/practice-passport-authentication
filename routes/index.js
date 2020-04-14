const express = require('express');
const router = express.Router();

const homecontroller = require('../controller/home_controller');

console.log('router loaded');

router.get('/',homecontroller.home);

 module.exports = router;