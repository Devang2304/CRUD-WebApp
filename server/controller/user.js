const AddUserDetails = require('../model/model.js');

const addUser = async (req, res) => {
    const user =req.body;

    const newUser = new AddUserDetails(user);

    try {
        await newUser.save();
        res.status(201).send(newUser);
    } catch (error) {
        res.status(409).json({message: error.message});
    }
}

module.exports = addUser;