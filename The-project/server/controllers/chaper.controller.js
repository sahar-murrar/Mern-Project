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
        .catch(err => response.status(400).json(err));
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
        .catch(err => response.status(400).json(err));
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
        .catch(err => response.status(400).json(err));
}

module.exports.getAllProducts = (request, response) => {
    Product.find({})
        .then(products => response.json(products))
        .catch(err => response.json(err))
}
module.exports.getAllSuperMarkets = (request, response) => {
    Supermarket.find({})
        .then(supermarkets => response.json(supermarkets))
        .catch(err => response.json(err))
}
module.exports.getAllUsers = (request, response) => {
    User.find({})
        .then(users => response.json(users))
        .catch(err => response.json(err))
}

module.exports.getSuperMarket = (request, response) => {
    Supermarket.findOne({supermarketName:request.params.supermarketName})
        .then(Supermarket => response.json(Supermarket))
        .catch(err => response.json(err))
}
module.exports.getProduct = (request, response) => {
    Product.findOne({_id:request.params.id})
        .then(Product => response.json(Product))
        .catch(err => response.json(err))
}
module.exports.getUser = (request, response) => {
    User.findOne({_id:request.params.id})
        .then(User => response.json(User))
        .catch(err => response.json(err))
}

module.exports.deleteProduct = (request, response) => {
    Product.deleteOne({ _id: request.params.id })
        .then(deleteConfirmation => response.json(deleteConfirmation))
        .catch(err => response.json(err))
}

module.exports.deleteUser = (request, response) => {
    User.deleteOne({ _id: request.params.id })
        .then(deleteConfirmation => response.json(deleteConfirmation))
        .catch(err => response.json(err))
}

module.exports.deleteSupermarket = (request, response) => {
    Supermarket.deleteOne({ _id: request.params.id })
        .then(deleteConfirmation => response.json(deleteConfirmation))
        .catch(err => response.json(err))

}
module.exports.updateSupermarket = (request, response) => {
    Supermarket.findOneAndUpdate({_id: request.params.id}, request.body, {new:true, runValidators:true})
        .then(updatedSupermarket => response.json(updatedSupermarket))
        .catch(err => response.status(400).json(err));
}
module.exports.updateUser = (request, response) => {
    User.findOneAndUpdate({_id: request.params.id}, request.body, {new:true, runValidators:true})
        .then(updatedUser => response.json(updatedUser))
        .catch(err => response.status(400).json(err));
}
module.exports.updateProduct = (request, response) => {
    Product.findOneAndUpdate({_id: request.params.id}, request.body, {new:true, runValidators:true})
        .then(updatedProduct => response.json(updatedProduct))
        .catch(err => response.status(400).json(err));
}

module.exports.getSupermarket = (request, response) => {
    Supermarket.findOne({_id:request.params.id})
        .then(supermarket => response.json(supermarket))
        .catch(err => response.json(err))
}
module.exports.getProduct = (request, response) => {
    Product.findOne({_id:request.params.id})
        .then(product => response.json(product))
        .catch(err => response.json(err))
}

module.exports.getUser = (request, response) => {
    User.findOne({_id:request.params.id})
        .then(user => response.json(user))
        .catch(err => response.json(err))
}

