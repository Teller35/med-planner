// require dependencies
const router = require('express').Router();

// require models
const { CaregiverSchedule, Patient, Appointments, PatientSchedule, Caregiver } = require('../../models');

// get caregiver schedule
router.get('/:id', (req, res) => {
    Caregiver.findAll({
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
                        model: CaregiverSchedule,
                        attributes: [
                            'id',
                            'caregiver_id',
                            'date',
                            'start',
                            'end'
                        ],
                    }
                ]
            }

        ]
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

// create caregiver schedule
router.post('/', (req, res) => {
    CaregiverSchedule.create({
        caregiver_id: req.body.caregiver_id,
        date: req.body.date,
        start: req.body.start,
        end: req.body.end
    }).then(dbCaregiverScheduleData => res.status(201).json({ schedule: dbCaregiverScheduleData, message: 'Caregiver schedule created successfully.'})
    ).catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

// update caregiver schedule
router.put('/:id', (req, res) => {
    CaregiverSchedule.update(req.body, {
        where: {
            id: req.params.id
        }
    }).then(dbCaregiverScheduleData => {
        if (!dbCaregiverScheduleData) {
            res.status(404).json({ message: `No caregiver schedule found with id ${req.params.id}.` });
            return;
        }
        res.status(200).json({ id: dbCaregiverScheduleData.id, message: 'Caregiver schedule updated successfully.' });
    }).catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

// delete caregiver schedule
router.delete('/:id', (req, res) => {
    CaregiverSchedule.destroy({
        where: {
            id: req.params.id
        }
    }).then(dbCaregiverScheduleData => {
        if (!dbCaregiverScheduleData) {
            res.status(404).json({ message: `No caregiver schedule found with id ${req.params.id}.` });
            return;
        }
        res.status(200).json({ id: dbAppointmentData.id, message: 'Caregiver schedule deleted successfully.' });
    }).catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

// export all router routes
module.exports = router;