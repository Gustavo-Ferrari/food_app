const express = require('express');
const productsController = require('../controllers/productsController');

const router = express.Router();

router.get('/products', productsController.getAllProducts);
router.get('/products/:id', productsController.getProductById);
router.get('/products/:id/restaurants', productsController.getRestaurantsByProductId);


module.exports = router;