const mongoose = require('mongoose');
const autoIncrement = require('mongoose-auto-increment');
autoIncrement.initialize(mongoose.connection);

 const userSchema = new mongoose.Schema({
    id: { type: Number, unique: true, required: true },
    name: String,
    phoneNumber: Number,
    email: String,
    hobbies: String
});
 userSchema.pre('save', function(next) {
    var user = this;
    if (user.isNew) {
        getNextSequenceValue('userid', function(err, result) {
            if (err) return next(err);
            user.id = result;
            next();
        });
    } else {
        next();
    }
});
 const AddUserDetails = mongoose.model('AddUserDetails', userSchema);
module.exports = AddUserDetails;
 function getNextSequenceValue(sequenceName, callback) {
    var counter = mongoose.connection.db.collection('crud_app');
    counter.findAndModify(
        { _id: sequenceName },
        [],
        { $inc: { seq: 1 } },
        { new: true, upsert: true },
        function(err, result) {
            if (err) callback(err, result);
            else callback(null, result.value.seq);
        }
    );
}








// const mongoose = require('mongoose');
// const autoIncrement = require('mongoose-auto-increment');
// autoIncrement.initialize(mongoose.connection);
//  const userSchema = new mongoose.Schema({
//     name:String,
//     phoneNumber: Number,
//     email : String,
//     hobbies : String
// })
//  userSchema.plugin(autoIncrement.plugin, {
//     model: 'AddUserDetails',
//     startAt: 1,
//     incrementBy: 1
// });
//  const AddUserDetails = mongoose.model('AddUserDetails',userSchema);
//  module.exports = AddUserDetails;