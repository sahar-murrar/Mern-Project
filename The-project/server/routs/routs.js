const cheaperController = require('../controllers/chaper.controller');
module.exports = function(app){
    app.get('/api/products', cheaperController.getAllProducts);
    app.get('/api/supermarkets', cheaperController.getAllProducts);
    app.get('/api/users', cheaperController.getAllProducts);

    

    app.post('/api/product/new', cheaperController.addProduct);
    app.post('/api/user/new', cheaperController.addUser);
    app.post('/api/supermarket/new', cheaperController.addSuperMarket);
    app.get('/api/supermarket/:supermarketName', cheaperController.getSuperMarket);

    app.put('/api/supermarket/:id', cheaperController.updateSupermarket);
    app.put('/api/product/:id', cheaperController.updateProduct);
    app.put('/api/user/:id', cheaperController.updateUser);

    app.get('/api/supermarket/:id', cheaperController.getSupermarket);
    app.get('/api/product/:id', cheaperController.getProduct);
    app.get('/api/user/:id', cheaperController.getUser);



    app.delete('/api/supermarket/:id', cheaperController.deleteSupermarket);
    app.delete('/api/product/:id', cheaperController.deleteProduct);
    app.delete('/api/user/:id', cheaperController.deleteUser);


}