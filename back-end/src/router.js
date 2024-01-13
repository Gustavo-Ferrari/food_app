const express = require('express');
const usersRoute = require('./routes/usersRoute');
const restaurantsRoute = require('./routes/restaurantsRoute');

const router = express.Router();

router.get('/', (_req, res) => {
    res.send('Hello World!');
});

router.use('/users', usersRoute);
router.use('/restaurants', restaurantsRoute);

module.exports = router;