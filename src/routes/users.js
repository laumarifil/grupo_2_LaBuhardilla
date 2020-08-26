var express = require('express');
var router = express.Router();

const usersController = require('../controllers/usersController');
const registerValidation = require('../validations/registerValidation');
const authMiddleware = require('../middlewares/authMiddleware');
const verifyLoginMiddleware = require('../middlewares/verifyLogin');

const multer = require('multer');
const path = require('path');

const db = require('../database/models');
const operator = db.Sequelize.Op;
const bcrypt = require('bcrypt');

/* User Photo Upload */
var storage = multer.diskStorage({
    destination: function(req, file, cb){
        cb(null, 'public/images/users')
    },
    filename: function(req, file, cb){
        cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname))
    }
});
var upload = multer({ storage: storage });

/* Listado de usuarios */
router.get('/', authMiddleware , usersController.listar);

/* Carrito de compras */
router.get('/carrito', authMiddleware , usersController.carrito);

/* Alta de usuarios */
router.get('/registration', verifyLoginMiddleware, usersController.registration);
router.post('/registration', upload.any(), registerValidation, usersController.newUser);
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
router.put('/editUser/:idUsuario', upload.any(), usersController.modifyUser);
router.get('/userEditOK', usersController.editUserOK);


module.exports = router;
