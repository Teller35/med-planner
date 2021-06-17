// require dependencies
const router = require('express').Router();

// require routes
const apiRoutes = require('./api');
const homeRoutes = require('./home-routes');
const dashboardPatRoutes = require('./dashboardPat-routes');


// assign routes
router.use('/api', apiRoutes);
router.use('/', homeRoutes);
router.use('/signup', homeRoutes);
router.use('/dashboardPat', dashboardPatRoutes);

// export all router routes
module.exports = router;