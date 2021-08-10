const cheaperController = require('../controllers/chaper.controller');
module.exports = function(app){
    app.get('/api/products', cheaperController.getAllProducts);
    app.post('/api/product/new', cheaperController.addProduct);
    app.post('/api/user/new', cheaperController.addUser);
    app.post('/api/supermarket/new', cheaperController.addSuperMarket);
    app.get('/api/supermarket/:supermarketName', cheaperController.getSuperMarket);

}