// require dependencies
const router = require('express').Router();

// require routes
const apiRoutes = require('./api');
const homeRoutes = require('./home-routes');

// assign routes
router.use('/api', apiRoutes);
router.use('/', homeRoutes);

// export all router routes
module.exports = router;