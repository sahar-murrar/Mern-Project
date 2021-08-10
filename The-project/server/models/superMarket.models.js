const mongoose = require("mongoose");
require('./product.models')
const SuperMarketSchema = new mongoose.Schema({
supermarketName: {
        type: String,
        required:[true, "SuperMarket Name must be Required"],
        minlength: [3, " SuperMarket Name must be at least 3 charachters"]
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
        minlengrh: [5, "Password must be at least 5 charachters"] 
},
        products:[{type:mongoose.Schema.Types.ObjectId, ref: 'Product' }],

});

module.exports.Supermarket = mongoose.model("supermarket", SuperMarketSchema);


