// require dependencies
const router = require('express').Router();

// require routes
const caregiverRoutes = require('./caregiver-routes');
const patientRoutes = require('./patient-routes');
const caregiverScheduleRoutes = require('./caregiver-schedule-routes');
const patientScheduleRoutes = require('./patient-schedule-routes');

// assign routes
router.use('/patients', patientRoutes);
router.use('/caregivers', caregiverRoutes);
router.use('/patientschedule', patientScheduleRoutes);
router.use('/caregiverschedule', caregiverScheduleRoutes);

// export all router routes
module.exports = router;