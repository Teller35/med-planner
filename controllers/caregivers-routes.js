const router = require("express").Router();
const { Caregiver, Patient, CaregiverSchedule, Appointments } = require("../models");
const withAuth = require("../utils/auth");

router.get('/', withAuth, (req, res) => {
    Caregiver.findAll({
      order: [["last_name", "ASC" ]],
        attributes: { exclude: ['password']},
    })
    .then(dbCaregiverData => {
      if (dbCaregiverData) {
        const caregivers = dbCaregiverData.map(caregiver => caregiver.get({ plain: true }));
        res.render('caregivers', {
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