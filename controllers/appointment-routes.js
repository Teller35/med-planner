const router = require("express").Router();
const { Caregiver, Patient, CaregiverSchedule, Appointments } = require("../models");

router.get('/:id', (req, res) => {
    Caregiver.findAll({
      where: {
        id: req.params.id
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
        res.render('appointment', {
              caregivers,
          })
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
