const { Cheaper } = require('../models/cheaper.model');
module.exports.index = (request, response) => {
    response.json({
        message: "Hello World"
    });
}
    // The method below is new
module.exports.addProduct = (request, response) => {
    const { firstName, lastName } = request.body;
    Cheaper.create({
        firstName,
        lastName
    })
        .then(Cheaper => response.json(Cheaper))
        .catch(err => response.json(err));
}