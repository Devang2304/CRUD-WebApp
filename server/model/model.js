import mongoose from 'mongoose';
// const {autoIncrement}  from 'mongoose-auto-increment';
// autoIncrement.initialize(mongoose.connection);

const userSchema = new mongoose.Schema({
    name:{type:String ,required:true},
    phoneNumber: {type:Number ,required:true},
    email : {type:String ,required:true},
    hobbies : {type:String ,required:true}
})


const AddUserDetails = mongoose.model('AddUserDetails',userSchema);
// userSchema.plugin(autoIncrement.plugin,'AddUserDetails');

// module.exports = AddUserDetails;
export default AddUserDetails;