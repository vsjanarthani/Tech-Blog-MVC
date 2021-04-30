const router = require('express').Router();
// const htmlRoutes = require('./Html');

const apiRoutes = require('./api');

router.use('/api', apiRoutes);
// router.use('/', htmlRoutes);

router.use((req, res) => {
  res.status(404).end();
});

module.exports = router;