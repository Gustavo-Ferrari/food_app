const restaurantsModel = require('../models/restaurantsModel');

exports.getAllRestaurants = async (req, res) => {
    try {
        const restaurants = await restaurantsModel.getAllRestaurants();
        res.status(200).json(restaurants);
    } catch (error) {
        res.status(500).json(error.stack);
    }
};

exports.getRestaurantById = async (req, res) => {
    try {
        const restaurant = await restaurantsModel.getRestaurantById(req.params.id);
        res.status(200).json(restaurant);
    } catch (error) {
        res.status(500).json(error);
    }
};

exports.getProductsByRestaurantId = async (req, res) => {
    try {
        const restaurantProducts = await restaurantsModel.getProductsByRestaurantId(req.params.id);
        res.status(200).json(restaurantProducts);
    } catch (error) {
        res.status(500).json(error);
    }
};