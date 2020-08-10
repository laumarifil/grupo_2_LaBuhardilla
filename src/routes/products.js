const express = require('express');
const router = express.Router();
const productsController = require('../controllers/productsController');
const authMiddleware = require('../middlewares/authMiddleware');
const multer = require('multer');
const path = require('path');

/* Subida de foto de producto */
var storage = multer.diskStorage({
    destination: function(req, file, cb){
        cb(null, 'public/images/products')
    },
    filename: function(req, file, cb){
        cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname))
    }
});
var upload = multer({ storage: storage });


/* Listado de productos */
router.get('/', productsController.products);
router.get('/detailProduct/:idProducto', productsController.detailProduct);

/* Alta de productos */
router.get('/newProduct', authMiddleware , productsController.newProduct);
router.post('/newProduct', authMiddleware , upload.any(), productsController.createProduct);
router.get('/productOK', productsController.newProductOK); 

/* Modificacion de productos */
router.get('/editProduct/:idProducto', authMiddleware , productsController.editProduct);
router.put('/editProduct/:idProducto', authMiddleware , productsController.modifyProduct);
router.get('/productEditOK', productsController.editProductOK);

/* Baja de productos */
router.get('/deleteProduct/:idProducto',authMiddleware, productsController.confirmDeleteProduct);
router.delete('/deleteProduct/:idProducto', authMiddleware ,productsController.deleteProduct);
router.get('/productDeleteOK', productsController.deleteProductOK);

module.exports = router;