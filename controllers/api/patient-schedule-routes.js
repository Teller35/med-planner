// require dependencies
const router = require('express').Router();

// require models
const { PatientSchedule } = require('../../models');


// route to get available appointments 
router.get('/:id', (req, res) => {
    PatientSchedule.findAll({
        where: {
            patient_id: req.params.id
        }
    }).then(dbPatientScheduleData => {
        if (!dbPatientScheduleData) {
            res.status(404).json({ message: 'No patient schedule data found with that id.' });
            return;
        }
        res.json(dbPatientScheduleData);
    }).catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

// export all router routes
module.exports = router;