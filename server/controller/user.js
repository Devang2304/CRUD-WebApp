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

export const getUser = async(req, res) => {
    try {
        const user = await AddUserDetails.findById(req.params.id);
        res.status(200).json(user);
    } catch (error) {
        res.status(404).json({message: error.message});
    }
}

export const editUser = async (req, res) => {
    let user= req.body;
    const editUser = new AddUserDetails(user);
    try {
        const user= await AddUserDetails.updateOne({_id : req.params.id},editUser);
        res.status(201).json(editUser);
    } catch (error) {
        res.status(404).json({message:error.message});
    }
}

export const deleteUser = async (req, res) => {
    try {
        const user= await AddUserDetails.deleteOne({_id : req.params.id});
    } catch (error) {
        res.status(404).json({message:error.message});
    }
}