const express = require('express');
const router = express.Router();

const homecontroller = require('../controller/home_controller');

console.log('router loaded');

router.get('/',homecontroller.home);
router.use('/users',require('./users'));


//for any further routes, access from here
// routes.use('/routerName',require('./routerfile));

 module.exports = router;