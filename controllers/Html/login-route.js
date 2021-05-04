const router = require('express').Router();
const sequelize = require('../../config/connection');
const { User } = require('../../models');

router.get('/', (req, res) => {
    res.render('login');
});

router.get('/signup', (req, res) => {
    res.render('signup');
});

module.exports = router;