const express = require('express');
const usersRoute = require('./routes/usersRoute');
const restaurantsRoute = require('./routes/restaurantsRoute');

const router = express.Router();

router.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', 'http://localhost:4200');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    next();
});

router.get('/', (_req, res) => {
    res.send('Hello World!');
});

router.use('/users', usersRoute);
router.use('/restaurants', restaurantsRoute);

module.exports = router;