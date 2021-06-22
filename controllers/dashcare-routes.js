const router = require("express").Router();
const { Caregiver, Patient } = require("../models");

// router.get('/', (req, res) => {
//   Patient.findAll({
//       attributes: { exclude: ['password']}
//   })
//   .then(dbPatientData => {
//     if (dbPatientData) {
//       const patients = dbPatientData.map(patient => patient.get({ plain: true }));
//       res.render('dashcare', {
//             patients,
//           // loggedIn: true
//         })
//         // res.json(patients)
//       }
//       else {
//         res.status(404).end();
//       }
//     })
//     .catch(err => {
//       console.log(err);
//       res.status(500).json(err);
//     })
//   });

  router.get("/", (req, res) => {
    Caregiver.findAll({
      where: {
          id: 3
      //   patient_id: req.session.patient_id
      },
      attributes: { exclude: ['password']},
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


module.exports = router;
