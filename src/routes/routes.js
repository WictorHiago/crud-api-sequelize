const express = require('express');
const router = express.Router();
const MainController = require('../controllers/MainController');

/* User */
router.get('/', MainController.index);
router.post('/api/user', MainController.userSave);
router.get('/api/users', MainController.users);
router.get('/api/user/:id', MainController.user);
router.put('/api/user/:id', MainController.updateUser);
router.delete('/api/user/:id', MainController.removeUser);
/* Products - Categories */
router.get('/api/products-details', MainController.getProductsDetails);
router.post('/api/category', MainController.createCategory);
router.post('/api/product', MainController.createProduct);

module.exports = router;
