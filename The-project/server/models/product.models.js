const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema({


    productName: {
        type: String, 
        required:[true, "Product Name must be Required"], 
        minlength: [3, " Product Name must be at least 3 charachters"], 
        // unique: [true, "product name is already exist!!"]
    },

    price: {
        type:Number, 
        required:[true, "price must be Required"]
    
    },

    supermarketName: {
            type: String,
            // required:[true, "SuperMarket Name must be Required"],
            // minlength: [3, " SuperMarket Name must be at least 3 charachters"]
        },

    img:{
        type: String, 
    }
    

});
module.exports.Product = mongoose.model("Product", ProductSchema);
