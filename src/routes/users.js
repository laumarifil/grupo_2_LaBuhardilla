var express = require('express');
var router = express.Router();

const usersController = require('../controllers/usersController');
const registerValidation = require('../validations/registerValidation');
const authMiddleware = require('../middlewares/authMiddleware');
const verifyLoginMiddleware = require('../middlewares/verifyLogin');



/* Listado de usuarios */
router.get('/', authMiddleware , usersController.listar);

/* Carrito de compras */
router.get('/carrito', authMiddleware , usersController.carrito);

/* Alta de usuarios */
router.get('/registration', usersController.registration);
router.post('/registration', registerValidation , usersController.newUser);
router.get('/userOK',  usersController.userOK);

/* Login de usuarios */
router.get('/login', verifyLoginMiddleware , usersController.login);
router.post('/login', usersController.processLogin);
router.get('/logout', usersController.logOut);

/* Perfil de usuarios */
router.get('/profile', authMiddleware , usersController.profile);


module.exports = router;
