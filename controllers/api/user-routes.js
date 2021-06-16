// require dependencies
const router = require('express').Router();

// require models
// const { User, Caregiver } = require('../../models');

// route to get all users
router.get('/', (req, res) => {
    res.json({ message: 'This is working.' })
});

// route to get a single user
router.get('/:id', (req, res) => {

});

// route to create a new user
router.post('/', (req, res) => {

});

// POST for user login
router.post('/login', (req, res) => {

});

// POST for user logout
router.post('/logout', (req, res) => {

});

// route to update a user
router.put('/:id', (req, res) => {

});

// route to delete a user
router.delete('/:id', (req, res) => {

});

// export all router routes
module.exports = router;