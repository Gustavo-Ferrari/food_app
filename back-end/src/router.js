const express = require('express');
const bodyParser = require('body-parser');
const usersRoute = require('./routes/usersRoute');
const restaurantsRoute = require('./routes/restaurantsRoute');
const productsRoute = require('./routes/productsRoute');

const router = express.Router();

router.use(bodyParser.json());

router.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', 'http://localhost:4200');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    next();
});

router.use('/users', usersRoute);
router.use('/restaurants', restaurantsRoute);
router.use('/products', productsRoute);

module.exports = router;