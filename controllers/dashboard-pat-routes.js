const router = require("express").Router();
const { Caregiver, Patient } = require("../models");

router.get("/", (req, res) => {
  Patient.findOne({
    where: {
        id: 1
    //   patient_id: req.session.patient_id
    },
    attributes: [
        'id',
      'first_name',
      'last_name',
      'birthdate',
      'address',
      'phone',
      'email',
      // 'allergies',
      'contact_preference'
    ],
  })
  .then(dbPatientData => {
      if (dbPatientData) {
          const patient = dbPatientData.get({ plain: true });
          res.render('dashboard-pat', {
              patient,
            //   loggedIn: true
          })
      }
      else {
          res.status(404).end();
      }
  })
    
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

module.exports = router;