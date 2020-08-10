var express = require('express');
var router = express.Router();
const usersController = require('../controllers/usersController');

/* Listado de usuarios */
router.get('/', usersController.listar);

/* Carrito de compras */
router.get('/carrito', usersController.carrito);

/* Alta de usuarios */
router.get('/registration', usersController.registration);
router.post('/registration', usersController.newUser);
router.get('/userOK', usersController.userOK);

module.exports = router;
