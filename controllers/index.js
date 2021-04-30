const router = require('express').Router();
const homeRoute = require('./home-route.js');


router.use('/', homeRoute);