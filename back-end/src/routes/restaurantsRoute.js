const express = require('express');

const restaurantsController = require('../controllers/restaurantsController');

const router = express.Router();

router.get('/', restaurantsController.getAllRestaurants);
router.get('/:id', restaurantsController.getRestaurantById);
router.get('/:id/products', restaurantsController.getRestaurantProductsById);

module.exports = router;