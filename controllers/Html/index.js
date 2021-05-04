const router = require('express').Router();
const homeRoute = require('./home-route.js');
const loginRoute = require('./login-route.js');


router.use('/', homeRoute);
router.use('/login', loginRoute);

module.exports = router;