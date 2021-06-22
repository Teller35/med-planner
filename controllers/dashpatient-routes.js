const router = require("express").Router();
const { Caregiver, Patient } = require("../models");

router.get("/", (req, res) => {
  Patient.findAll({
    where: {
        id: 3
    //   patient_id: req.session.patient_id
    },
    attributes: { exclude: ['password']},
  })
  .then(dbPatientData => {
    if (dbPatientData) {
      const patients = dbPatientData.map(patient => patient.get({ plain: true }));
      res.render('dashpatient', {
            patients,
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
      Patient.findOne({
        where: {
          id: 3
      //   patient_id: req.session.patient_id
      },
      attributes: { exclude: ['password']},
      })
      .then(dbPatientData => {
        if (dbPatientData) {
          const patient = dbPatientData.get({ plain: true });
          res.render('edit-patient', {
            patient,
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