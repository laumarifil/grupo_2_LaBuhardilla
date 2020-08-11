var express = require('express');
var router = express.Router();

const usersController = require('../controllers/usersController');
const registerValidation = require('../validations/registerValidation');
const authMiddleware = require('../middlewares/authMiddleware');
const verifyLoginMiddleware = require('../middlewares/verifyLogin');

const multer = require('multer');
const path = require('path');

/* Subida de foto de usuario */
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


module.exports = router;
