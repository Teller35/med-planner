// require dependencies
const router = require('express').Router();

// require routes
const caregiverRoutes = require('./caregiver-routes');
const patientRouts = require('./patient-routes');
const appointmentRoutes = require('./appointment_routes');

// assign routes
router.use('/patients', patientRouts);
router.use('/caregivers', caregiverRoutes);
router.use('/appointments', appointmentRoutes);

// export all router routes
module.exports = router;