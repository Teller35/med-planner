const router = require("express").Router();
const { Caregiver, Patient } = require("../models");

router.get('/', (req, res) => {
  Patient.findAll({
      attributes: { exclude: ['password']}
  })
  .then(dbPatientData => {
    if (dbPatientData) {
      const patients = dbPatientData.map(patient => patient.get({ plain: true }));
      res.render('dashcare', {
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


module.exports = router;
