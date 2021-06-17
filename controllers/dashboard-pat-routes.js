const router = require("express").Router();
const { Caregiver, Patient } = require("../models");

router.get("/", (req, res) => {
  Patient.findAll({
    where: {
        id: 2
    //   patient_id: req.session.patient_id
    },
    attributes: { exclude: ['password']}
    
  })
  .then(dbPatientData => {
      if (dbPatientData) {
          const patients = dbPatientData.map(patient => patient.get({ plain: true }));
          res.render('dashboard-pat', {
              patients,
            //   loggedIn: true
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