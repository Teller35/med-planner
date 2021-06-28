// require dependencies
const router = require('express').Router();

// require models
const { Appointments, Caregiver, CaregiverSchedule, Patient, PatientSchedule } = require('../../models');

// route to get all patient
router.get('/', (req, res) => {
    Patient.findAll({
        attributes: { exclude: ['password']}
    }).then(dbPatientData => res.json(dbPatientData)
    ).catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

// route to get a single patient
router.get('/:id', (req, res) => {
    Patient.findOne({
        attributes: { exclude: ['password'] },
        where: {
            id: req.params.id
        },
        include: [
            {
                model: PatientSchedule,
                attributes: [
                    'id',
                    'patient_id',
                    'date',
                    'start',
                    'end'
                ]
            },
            {
                model: Appointments,
                attributes: [
                    'id', 
                    'caregiver_id', 
                    'patient_id', 
                    'appointment_time', 
                    'appointment_time', 
                    'date'
                ],
                include: [
                    {
                        model: Caregiver,
                        attributes: [
                            'id', 
                            'practice_name', 
                            'first_name', 
                            'last_name', 
                            'specialty',
                            'phone',
                            'address',
                        ]
                    }
                    
                ]
            }
        ]
    }).then(dbPatientData => {
        if (!dbPatientData) {
            res.status(404).json({ message: 'No patient data found with that id.' });
            return;
        }
        res.json(dbPatientData);
    }).catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

// route to create a new patient
router.post('/', (req, res) => {
    Patient.create({
        first_name: req.body.first_name,
        last_name: req.body.last_name,
        birthdate: req.body.birthdate,
        address: req.body.address,
        phone: req.body.phone,
        email: req.body.email,
        contact_preference: req.body.contact_preference,
        password: req.body.password
    },
    {
        individualHooks: true
    }).then(dbPatientData => {
        req.session.save(() => {
            req.session.patient_id = dbPatientData.id;
            req.session.email = dbPatientData.email;
            req.session.loggedIn = true;
    
            res.json({ message: 'Patient created successfully.'});
        });
    }).catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

// POST for patient login
router.post('/login', (req, res) => {
    Patient.findOne({
        where: {
            email: req.body.email
        }
    }).then(dbPatientData => {
        if (!dbPatientData) {
            res.status(400).json({ message: 'Invalid login email.' })
            return;
        }
        const validPassword = dbPatientData.checkPassword(req.body.password);
        if (!validPassword) {
            res.status(400).json({ message: 'Incorrect password.' });
            return;
        }

        req.session.save(() => {
            req.session.patient_id = dbPatientData.id;
            req.session.email = dbPatientData.email;
            req.session.loggedIn = true;

            res.json({ patient: dbPatientData, message: 'You are now logged in!' });
        });

    });
});

// POST for patient logout
router.post('/logout', (req, res) => {
    if (req.session.loggedIn) {
        req.session.destroy(() => {
            res.status(204).end();
        });
    } else {
        res.status(404).end();
    }
});

// route to update a patient
router.put('/edit/:id', (req, res) => {
    Patient.update(
        {
            first_name: req.body.first_name,
            last_name: req.body.last_name,
            birthdate: req.body.birthdate,
            address: req.body.address,
            phone: req.body.phone,
            email: req.body.email,
            contact_preference: req.body.contact_preference
    },
    {
        individualHooks: true,
        where: {
            id: req.params.id
        }
    })
    .then(dbPatientData => {
        if (!dbPatientData) {
            res.status(404).json({ message: 'Patient not found.' });
            return;
        }
        res.json(dbPatientData);
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

// route to delete a patient
router.delete('/:id', (req, res) => {
    Patient.destroy({
        where: {
            id: req.params.id
        }
    }).then(dbPatientData => {
        if (!dbPatientData) {
            res.status(404).json({ message: 'Patient not found. Delete unsuccessful.' });
            return;
        }
        res.json({ message: 'Patient deleted.' })
    }).catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

// export all router routes
module.exports = router;