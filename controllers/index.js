const router = require('express').Router();
const htmlRoutes = require('./Html');

const apiRoutes = require('./api');

router.use('/api', apiRoutes);
router.use('/', htmlRoutes);

module.exports = router;