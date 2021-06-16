// require dependencies
const router = require('express').Router();

// require models
const { Patient, Caregiver } = require('../../models');

// route to get all caregivers
router.get('/', (req, res) => {
    res.json({ message: 'This is working.' })
});

// route to get a single caregiver
router.get('/:id', (req, res) => {

});

// route to create a new caregiver
router.post('/', (req, res) => {

});

// POST for caregiver login
router.post('/login', (req, res) => {

});

// POST for caregiver logout
router.post('/logout', (req, res) => {

});

// route to update a caregiver
router.put('/:id', (req, res) => {

});

// route to delete a caregiver
router.delete('/:id', (req, res) => {

});

// export all router routes
module.exports = router;