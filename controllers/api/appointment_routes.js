// require dependencies
const router = require('express').Router();
const { Appointments, Caregiver, CaregiverSchedule, Patient, PatientSchedule } = require('../../models');

// route to create a new appointment
router.post('/', (req, res) => {
    Appointments.create({
        caregiver_id: req.body.caregiver_id,
        patient_id: 3,
        // patient_id: req.session.patient_id,
        appointment_time: req.body.appointment_time,
        date: req.body.date
    }).then(dbAppointmentData => res.status(201).json({ appointment: dbAppointmentData.id, message: 'Appointment created successfully.' })
    ).catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

// route to update an existing appointment
router.put('/:id', (req, res) => {
    Appointments.update(req.body, {
        where: {
            id: req.params.id
        }
    }).then(dbAppointmentData => {
        if (!dbAppointmentData) {
            res.status(404).json({ message: `No appointment found with id ${req.params.id}.` });
            return;
        }
        res.status(200).json({ id: dbAppointmentData.id, message: 'Appointment updated successfully.' });
    }).catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});


// route to delete an existing appointment
router.delete('/:id', (req, res) => {
    Appointments.destroy({
        where: {
            id: req.params.id
        }
    }).then(dbAppointmentData => {
        if (!dbAppointmentData) {
            res.status(404).json({ message: `No appointment found with id ${req.params.id}.` });
            return;
        }
        res.status(200).json({ id: dbAppointmentData.id, message: 'Appointment deleted successfully.' });
    }).catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

module.exports = router;