const express = require('express');
const usersRoute = require('./routes/usersRoute');

const router = express.Router();

router.get('/', (_req, res) => {
    res.send('Hello World!');
});

router.use('/users', usersRoute);

module.exports = router;