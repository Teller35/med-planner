// require dependencies
const router = require('express').Router();

// require models
const { Appointments, Caregiver, Days, Hours, Patient } = require('../../models');

// get all appointments assigned to caregiver
router.get('/appointments/:id', (req, res) => {
    Appointments.findAll({
        where: {
            caregiver: req.params.id,
        }
    }).then(dbAppointmentsData => {
        if(!dbAppointmentsData) {
            res.status(404).json({ message: 'No appointments were found with that caregiver id.'})
            return;
        }
        res.json(dbAppointmentsData);
    }).catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

// get all appointments assigned to patient
router.get('/appointments/:id', (req, res) => {
    Appointments.findAll({
        where: {
            patient: req.params.id,
            is_available: false
        }
    }).then(dbAppointmentsData => {
        if(!dbAppointmentsData) {
            res.status(404).json({ message: 'No appointments were found with that patient id.'})
            return;
        }
        res.json(dbAppointmentsData);
    }).catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

// get all appointments assigned to caregiver
router.get('/appointments/:id', (req, res) => {
    Appointments.findAll({
        where: {
            caregiver: req.params.id,
            is_available: false
        }
    }).then(dbAppointmentsData => {
        if(!dbAppointmentsData) {
            res.status(404).json({ message: 'No appointments were found with that caregiver id.'})
            return;
        }
        res.json(dbAppointmentsData);
    }).catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

// get a single appointment
router.post('/appointments/:id', (req, res) => {
    Appointments.findOne({
        where: {
            id: req.params.id
        }
    }).then(dbAppointmentsData => {
        if(!dbAppointmentsData) {
            res.status(404).json({ message: 'No appointment was found with that id.'});
            return;
        }
        res.json(dbAppointmentsData);
    }).catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

// create a new appointment
router.post('/appointments/', (req, res) => {
    Appointment.create({
        hour: req.body.hour,
        is_available: false,
        patient: req.body.patient,
        caregiver: req.body.caregiver,
    }).then(dbAppointmentsData => {
        if (!dbAppointmentsData) {
            return;
        }
        res.json({ message: 'Appointment created successfully.'});
    }).catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

// update an appointment
router.put('/appointments/:id', (req, res) => {
    Appointments.update(req.body, {
        where: {
            id: req.params.id
        }
    }).then(dbAppointmentsData => {
        if (!dbAppointmentsData) {
            res.status(404).json({ message: 'Appointment not found. Update unsuccessful.' });
            return;
        }
        res.json({ message: 'Appointment information updated.' });
    }).catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

// delete an appointment
router.delete('/appointments/:id', (req, res) => {
    Appointments.destroy({
        where: {
            id: req.params.id
        }
    }).then(dbAppointmentsData => {
        if (!dbAppointmentsData) {
            res.status(404).json({ message: 'Appointment not found. Delete unsuccessful.' });
            return;
        }
        res.json({ message: 'Appointment deleted.' })
    }).catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

// export all router routes
module.exports = router;