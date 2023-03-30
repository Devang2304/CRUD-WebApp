const AddUserDetails = require('../model/model.js');

const addUser = (req, res) => {
    const user =req.body;

    const newUser = new AddUserDetails(user);

    try {
        newUser.save();
    } catch (error) {
        
    }
}

module.exports = addUser;