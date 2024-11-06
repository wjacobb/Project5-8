const express = require('express');
const router = express.Router();

router.use('/', require('./swagger'));
router.use('/user', require('./user'));
router.use('/user_cars', require('./user_cars'));

module.exports = router;
