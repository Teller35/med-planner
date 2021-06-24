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
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    })
  });

  

module.exports = router;
