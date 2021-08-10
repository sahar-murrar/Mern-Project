const { Supermarket } = require('../models/superMarket.models');
const { Product} = require('../models/product.models');
const { User } = require('../models/user.models');

module.exports.index = (request, response) => {
    response.json({
        message: "Hello World"
    });
}
    // The method below is new
module.exports.addProduct = (request, response) => {
    const { productName, price, supermarketName, img } = request.body;
    Product.create({
        productName,
        price,
        supermarketName,
        img
    })
    .then(product =>{
        Supermarket.findOneAndUpdate({supermarketName: request.body.supermarketName},{$addToSet:{products:product._id}}, {new:true}).populate('products')
        .then(created => response.json(created))
        response.json(product)
    })
        .catch(err => response.json(err));
}
module.exports.addSuperMarket = (request, response) => {
    const { supermarketName, email, phone, location, password} = request.body;
    Supermarket.create({
        supermarketName,
        email,
        phone,
        location,
        password
    })
        .then(Supermarket => response.json(Supermarket))
        .catch(err => response.json(err));
}
module.exports.addUser = (request, response) => {
    const { name, email, phone, location, password} = request.body;
    User.create({
        name,
        email,
        phone,
        location,
        password
    })
        .then(User => response.json(User))
        .catch(err => response.json(err));
}

module.exports.getAllProducts = (request, response) => {
    Product.find({})
        .then(authors => response.json(authors))
        .catch(err => response.json(err))
}

module.exports.getSuperMarket = (request, response) => {
    Supermarket.findOne({supermarketName:request.params.supermarketName})
        .then(Supermarket => response.json(Supermarket))
        .catch(err => response.json(err))
}

