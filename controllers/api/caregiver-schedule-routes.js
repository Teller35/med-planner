// require dependencies
const router = require('express').Router();

// require models
const { CaregiverSchedule, Patient } = require('../../models');

// get caregiver schedule 
router.get('/:id', (req, res) => {
    CaregiverSchedule.findAll({
        where: {
            caregiver_id: req.params.id
        }
    }).then(dbCaregiverScheduleData => {
        if (!dbCaregiverScheduleData) {
            res.status(404).json({ message: 'No caregiver schedule data found with that id.' });
            return;
        }
        res.json(dbCaregiverScheduleData);
    }).catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

// export all router routes
module.exports = router;