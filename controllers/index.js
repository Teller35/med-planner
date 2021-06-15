// require dependencies
const router = require('express').Router();

// require routes
const apiRoutes = require('./api');

// assign routes
router.use('/api', apiRoutes);

// export all router routes
module.exports = router;