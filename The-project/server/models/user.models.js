const mongoose = require("mongoose");


const UserSchema = new mongoose.Schema({
    name: {
        type: String, 
        required:[true, "Name must be Required"], 
        minlength: [3, " Name must be at least 3 charachters"]
    },
    email: {
        type:String, 
        required:[true, "Email must be Required"],
        unique: [true,  "Email must be VALID"],
    },
    phone: {
        type:Number, 
        required:[true, "Phone must be Required"],
        minlength: [10, "Phone Number must be at least 10 numbers"]},

    location: {
        type: String, 
        required:[true, "Location must be Required"], },

    password: {
        type: String, 
        required:[true, "Password must be Required"],
        minlengrh: [5, "Password must be at least 5 charachters"] },

        
        role: {
            type:Number,
            default:0
        },

});


module.exports.User = mongoose.model("users", UserSchema);

const RoleSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: [true, "Name is required"],
            minlength: [3, 'First name should be at least 3 characters'],
        },
        users: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }],
    }, { timestamps: true }
)
module.exports.Role = mongoose.model('Role', RoleSchema);
