var express = require('express');
var router = express.Router();

const usersController = require('../controllers/usersController');
const registerValidation = require('../validations/registerValidation');
const authMiddleware = require('../middlewares/authMiddleware');
const verifyLoginMiddleware = require('../middlewares/verifyLogin');
const usersMulterMiddleware = require('../middlewares/usersMulterMiddleware');


/* Listado de usuarios */
router.get('/', authMiddleware , usersController.listar);

/* Carrito de compras */
router.get('/carrito', authMiddleware , usersController.carrito);

/* Alta de usuarios */
router.get('/registration', verifyLoginMiddleware, usersController.registration);
router.post('/registration',usersMulterMiddleware.any(), registerValidation, usersController.newUser);
router.get('/userOK', usersController.userOK);

/* Login de usuarios */
router.get('/login', verifyLoginMiddleware, usersController.login);
router.post('/login', usersController.processLogin);
router.get('/logout', usersController.logOut);

/* Perfil de usuarios */
router.get('/profile', authMiddleware , usersController.profile);
router.get('/profile/:idUsuario', usersController.detailUser)

/* Edicion de usuarios */
router.get('/editUser/:idUsuario', usersController.editUser);
router.put('/editUser/:idUsuario',usersMulterMiddleware.any(), usersController.modifyUser);



module.exports = router;
