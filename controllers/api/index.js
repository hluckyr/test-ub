
const router = require('express').Router();

const userRoutes = require('./user-logs-routes');

const findbyRoutes = require('./findby-routes');

router.use('/users', userRoutes);
router.use('/search', findbyRoutes);

module.exports = router;

