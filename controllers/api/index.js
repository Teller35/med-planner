// require dependencies
const router = require('express').Router();

// require routes
const caregiverRoutes = require('./caregiver-routes');
const patientRouts = require('./patient-routes');

// assign routes
router.use('/patients', patientRouts);
router.use('/caregivers', caregiverRoutes);

// export all router routes
module.exports = router;