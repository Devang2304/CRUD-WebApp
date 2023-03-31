import AddUserDetails from '../model/model.js';

export const addUser = async (req, res) => {
    const user =req.body;

    const newUser = new AddUserDetails(user);

    try {
        await newUser.save();
        res.status(201).send(newUser);
    } catch (error) {
        res.status(409).json({message: error.message});
    }
}

export const getUsers =async(req,res)=>{
    try {
        const users= await AddUserDetails.find({});
        res.status(200).json(users);
    } catch (error) {
        res.status(404).json({message: error.message});
    }
}

