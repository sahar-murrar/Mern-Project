const cheaperController = require('../controllers/chaper.controller');
module.exports = function(app){
    app.get('/api', cheaperController.index);
    app.post('/api/product', cheaperController.addProduct);
}