const productsModel = require('../models/productsModel');

exports.getAllProducts = async (req, res) => {
    try {
        const products = await productsModel.getAllProducts();
        res.status(200).json(products.rows);
    } catch (error) {
        res.status(500).json(error.stack);
    }
};

exports.getProductById = async (req, res) => {
    try {
        const product = await productsModel.getProductById(req.params.id);
        res.status(200).json(product);
    } catch (error) {
        res.status(500).json(error);
    }
};

exports.getRestaurantsByProductId = async (req, res) => {
    try {
        const restaurants = await productsModel.getRestaurantsByProductId(req.params.id);
        res.status(200).json(restaurants);
    } catch (error) {
        res.status(500).json(error);
    }
};