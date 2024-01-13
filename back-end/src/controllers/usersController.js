const usersModel = require('../models/usersModel');

exports.getAllUsers = async (req, res) => {
    try {
        const users = await usersModel.getAllUsers();
        res.status(200).json(users.rows);
    } catch (error) {
        res.status(500).json(error.stack);
    }
};

exports.getUserById = async (req, res) => {
    try {
        const user = await usersModel.getUserById(req.params.id);
        res.status(200).json(user);
    } catch (error) {
        res.status(500).json(error);
    }
};
