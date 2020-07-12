var express = require('express');
var router = express.Router();
const usersController = require('../controllers/usersController');

/* GET users listing. */
router.get('/', usersController.listar);
router.get('/carrito', usersController.carrito);
router.get('/registration', usersController.registration);

module.exports = router;
