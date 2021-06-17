// require dependencies
const router = require('express').Router();

// require routes
const apiRoutes = require('./api');
const homeRoutes = require('./home-routes');
const dashboardPatRoutes = require('./dashboard-pat-routes');


// assign routes
router.use('/api', apiRoutes);
router.use('/', homeRoutes);
router.use('/signup', homeRoutes);
router.use('/dashboard-pat', dashboardPatRoutes);

// export all router routes
module.exports = router;