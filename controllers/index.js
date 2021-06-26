// require dependencies
const router = require('express').Router();

// require routes
const apiRoutes = require('./api');
const homeRoutes = require('./home-routes');
const dashboardPatRoutes = require('./dashpatient-routes');
const dashboardCareRoutes = require('./dashcare-routes');
const caregiversRoutes = require('./caregivers-routes');
const appointRoutes = require('./appointment-routes');
const withAuth = require("../utils/auth");


// assign routes
router.use('/api', apiRoutes);
router.use('/', homeRoutes);
router.use('/signup', homeRoutes);
router.use('/dashpatient', dashboardPatRoutes);
router.use('/dashcare', dashboardCareRoutes);
router.use('/caregivers', caregiversRoutes);

// export all router routes
module.exports = router;