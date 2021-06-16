// require dependencies
const router = require('express').Router();

// require routes
const caregiverRoutes = require('./caregiver-routes');
const userRoutes = require('./user-routes');

// assign routes
router.use('/users', userRoutes);
router.use('/caregivers', caregiverRoutes);

// export all router routes
module.exports = router;