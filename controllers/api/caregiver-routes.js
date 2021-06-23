// require dependencies
const router = require('express').Router();

// require models
const { Appointments, Patient, Caregiver, CaregiverSchedule } = require('../../models');

// route to get all caregivers
router.get('/', (req, res) => {
    Caregiver.findAll({
        attributes: { exclude: ['password']}
    }).then(dbCaregiverData => res.json(dbCaregiverData)
    ).catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

// route to get a single caregiver
router.get('/:id', (req, res) => {
    Caregiver.findOne({
        attributes: { exclude: ['password'] },
        where: {
            id: req.params.id
        },        
        include: [
            {
                model: CaregiverSchedule,
                attributes: [
                    'id',
                    'caregiver_id',
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
                    'caregiver_sched_id', 
                    'patient_sched_id'
                ],
                include: [
                    {
                        model: Patient,
                        attributes: [
                            'id',
                            'first_name',
                            'last_name',
                            'birthdate',
                            'address',
                            'phone',
                            'email',
                            'contact_preference'
                        ]
                    }   
                ]
            }
        ]
    }).then(dbCaregiverData => {
        if (!dbCaregiverData) {
            res.status(404).json({ message: 'No caregiver data found with that id.' });
            return;
        }
        res.json(dbCaregiverData);
    }).catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

// route to create a new caregiver
router.post('/', (req, res) => {
    Caregiver.create({
        practice_name: req.body.practice_name,
        first_name: req.body.first_name,
        last_name: req.body.last_name,
        specialty: req.body.specialty,
        phone: req.body.phone,
        address: req.body.address,
        fax: req.body.fax,
        email: req.body.email,
        password: req.body.password
    }).then(dbCaregiverData => {
        req.session.save(() => {
            req.session.caregiver_id = dbCaregiverData.id;
            req.session.email = dbCaregiverData.email;
            req.session.loggedIn = true;

            res.json({ message: 'Caregiver created successfully.'});
        });
    }).catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

// POST for caregiver login
router.post('/login', (req, res) => {
    Caregiver.findOne({
        where: {
            email: req.body.email
        }
    }).then(dbCaregiverData => {
        if (!dbCaregiverData) {
            res.status(400).json({ message: 'Invalid login email.' })
            return;
        }
        const validPassword = dbCaregiverData.checkPassword(req.body.password);
        if (!validPassword) {
            res.status(400).json({ message: 'Incorrect password.' });
            return;
        }

        req.session.save(() => {
            req.session.caregiver_id = dbCaregiverData.id;
            req.session.email = dbCaregiverData.email;
            req.session.loggedIn = true;

            res.json({ patient: dbCaregiverData, message: 'You are now logged in!' });
        });
    });
});

// POST for caregiver logout
router.post('/logout', (req, res) => {
    if (req.session.loggedIn) {
        req.session.destroy(() => {
            res.status(204).end();
        });
    } else {
        res.status(404).end();
    }
});

// route to update a caregiver
router.put('/:id', (req, res) => {
    Caregiver.update(req.body, {
        where: {
            id: req.params.id
        }
    }).then(dbCaregiverData => {
        if (!dbCaregiverData) {
            res.status(404).json({ message: 'Caregiver not found. Update unsuccessful.' });
            return;
        }
        res.json({ message: 'Caregiver information updated.' });
    }).catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

// route to delete a caregiver
router.delete('/:id', (req, res) => {
    Caregiver.destroy({
        where: {
            id: req.params.id
        }
    }).then(dbCaregiverData => {
        if (!dbCaregiverData) {
            res.status(404).json({ message: 'Caregiver not found. Delete unsuccessful.' });
            return;
        }
        res.json({ message: 'Caregiver deleted.' })
    }).catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

// export all router routes
module.exports = router;