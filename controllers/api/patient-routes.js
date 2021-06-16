// require dependencies
const router = require('express').Router();

// require models
const { Patient, Caregiver } = require('../../models');

// route to get all patient
router.get('/', (req, res) => {
    res.json({ message: 'This is working.' })
});

// route to get a single patient
router.get('/:id', (req, res) => {

});

// route to create a new patient
router.post('/', (req, res) => {

});

// POST for patient login
router.post('/login', (req, res) => {

});

// POST for patient logout
router.post('/logout', (req, res) => {

});

// route to update a patient
router.put('/:id', (req, res) => {

});

// route to delete a patient
router.delete('/:id', (req, res) => {

});

// export all router routes
module.exports = router;