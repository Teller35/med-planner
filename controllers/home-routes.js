const withAuth = require('../utils/auth');

const router = require('express').Router();

router.get('/', withAuth, (req, res) => {
    res.render('homepage')
});

router.get('/signup', (req, res) => {
    res.render('signup')
})

router.get('/signin', (req, res) => {
    res.render('signin')
})

module.exports = router;