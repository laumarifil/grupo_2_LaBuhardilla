var express = require('express');
var router = express.Router();

const usersController = require('../controllers/usersController');
const registerValidation = require('../validations/registerValidation');
const authMiddleware = require('../middlewares/authMiddleware');
const verifyLoginMiddleware = require('../middlewares/verifyLogin');
const roleMiddleware = require('../middlewares/roleMiddleware');
const usersMulterMiddleware = require('../middlewares/usersMulterMiddleware');


/* Listado de usuarios */
router.get('/', roleMiddleware, usersController.listar);

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
router.get('/editUser/:idUsuario', roleMiddleware ,usersController.editUser);
router.put('/editUser/:idUsuario', roleMiddleware, usersMulterMiddleware.any(), usersController.modifyUser);

/* Renderiza vista de compra realizada*/
router.get('/compra', authMiddleware, usersController.buy);



module.exports = router;
