const router = require("express").Router();
const { Caregiver, Patient, CaregiverSchedule, Appointments } = require("../models");

router.get('/', (req, res) => {
  Caregiver.findAll({
    where: {
      id: 3
  //   patient_id: req.session.patient_id
  },
      attributes: { exclude: ['password']},
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
                'date'
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
  })
  .then(dbCaregiverData => {
    if (dbCaregiverData) {
      const caregivers = dbCaregiverData.map(caregiver => caregiver.get({ plain: true }));
      res.render('dashcare', {
            caregivers,
          // loggedIn: true
        })
        // res.json(caregivers)
      }
      else {
        res.status(404).end();
      }
    })
    .then(dbCaregiverData => {
      if (dbCaregiverData) {
        const caregivers = dbCaregiverData.map(caregiver => caregiver.get({ plain: true }));
        res.render('dashcare', {
              caregivers,
            // loggedIn: true
          })
          // res.json(patients)
        }
        else {
          res.status(404).end();
        }
      })
      .catch(err => {
        console.log(err);
        res.status(500).json(err);
      })
    });

    router.get('/edit/:id', (req, res) => {
      Caregiver.findOne({
        where: {
          id: req.params.id
      //   patient_id: req.session.patient_id
      },
      attributes: { exclude: ['password']},
      })
      .then(dbCaregiverData => {
        if (dbCaregiverData) {
          const caregiver = dbCaregiverData.get({ plain: true });
          res.render('edit-care', {
            caregiver,
            // loggedIn: true
          })
          // res.json(patient)
        }
        else {
          res.status(404).end();
        }
      })
      .catch(err => {
        res.status(500).json(err);
      })
    })

  

module.exports = router;
