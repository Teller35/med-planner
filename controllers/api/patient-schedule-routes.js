// require dependencies
const router = require('express').Router();

// require models
const { CaregiverSchedule, Patient, Appointments, PatientSchedule, Caregiver } = require('../../models');


// get patient schedule (all)
router.get('/:id', (req, res) => {    
    PatientSchedule.findAll({
        where: {
            patient_id: req.params.id
        },
        include: [
            {
                model: Appointments,
                attributes: [
                    'id', 
                    'caregiver_id', 
                    'patient_id', 
                    'appointment_time', 
                    'caregiver_sched_id', 
                    'patient_sched_id'
                ],
                include: [
                    {
                        model: CaregiverSchedule,
                        attributes: [
                            'id',
                            'caregiver_id',
                            'date',
                            'start',
                            'end'
                        ],
                        include: [
                            {
                                model: Appointments,
                                attributes: [
                                    'id', 
                                    'caregiver_id', 
                                    'patient_id', 
                                    'appointment_time', 
                                    'caregiver_sched_id', 
                                    'patient_sched_id'
                                ]
                            }
                        ]
                    }
                ]
            }
            
        ]
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

// create patient schedule

// update patient schedule

// delete patient schedule

// export all router routes
module.exports = router;