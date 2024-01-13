const express = require('express');
const usersController = require('./controllers/usersController');

const router = express.Router();

router.get('/', (req, res) => {
    res.send('Hello World!');
});

router.get('/users', usersController.getAllUsers);
router.get('/users/:id', usersController.getUserById);

module.exports = router;