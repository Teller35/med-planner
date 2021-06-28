// require dependencies
const router = require('express').Router();

// require models
const { CaregiverSchedule, Patient, Appointments, PatientSchedule, Caregiver } = require('../../models');

// get patient schedule
router.get('/:id', (req, res) => {
    Patient.findAll({
        where: {
            id: req.params.id
        },
        include: [
            {
                model: Appointments,
                attributes: [
                    'id',
                    'caregiver_id',
                    'patient_id',
                    'appointment_time',
                    'date'
                ],
                include: [
                    {
                        model: PatientSchedule,
                        attributes: [
                            'id',
                            'patient_id',
                            'date',
                            'start',
                            'end'
                        ],
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
router.post('/', (req, res) => {
    PatientSchedule.create({
        patient_id: req.body.patient_id,
        date: req.body.date,
        start: req.body.start,
        end: req.body.end
    }).then(dbPatientScheduleData => res.status(201).json({ schedule: dbPatientScheduleData, message: 'Patient schedule created successfully.'})
    ).catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

// update patient schedule
router.put('/:id', (req, res) => {
    PatientSchedule.update(req.body, {
        where: {
            id: req.params.id
        }
    }).then(dbPatientScheduleData => {
        if (!dbPatientScheduleData) {
            res.status(404).json({ message: `No patient schedule found with id ${req.params.id}.` });
            return;
        }
        res.status(200).json({ id: dbPatientScheduleData.id, message: 'Patient schedule updated successfully.' });
    }).catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

// delete patient schedule
router.delete('/:id', (req, res) => {
    PatientSchedule.destroy({
        where: {
            id: req.params.id
        }
    }).then(dbPatientScheduleData => {
        if (!dbPatientScheduleData) {
            res.status(404).json({ message: `No patient schedule found with id ${req.params.id}.` });
            return;
        }
        res.status(200).json({ id: dbPatientScheduleData.id, message: 'Patient schedule deleted successfully.' });
    }).catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

// export all router routes
module.exports = router;