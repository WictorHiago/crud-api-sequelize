const express = require('express');
const router = express.Router();
const MainController = require('../controllers/MainController');

router.get('/', MainController.index);
router.post('/api/user', MainController.userSave);
router.get('/api/users', MainController.users);
router.get('/api/user/:id', MainController.user)
router.delete('/api/user/:id', MainController.removeUser);

module.exports = router;
