const express = require('express');
const productsController = require('../controllers/productsController');

const router = express.Router();

router.get('/', productsController.getAllProducts);
router.get('/:id', productsController.getProductById);
router.get('/:id/restaurants', productsController.getRestaurantsByProductId);


module.exports = router;