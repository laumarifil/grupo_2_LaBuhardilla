const express = require('express');
const router = express.Router();
const productsController = require('../controllers/productsController');

/* Listado de productos */
router.get('/', productsController.products);
router.get('/detailProduct/:idProducto', productsController.detailProduct);

/* Alta de productos */
router.get('/newProduct', productsController.newProduct);
router.post('/newProduct', productsController.createProduct);
router.get('/productOK', productsController.newProductOK);

/* Modificacion de productos */
router.get('/editProduct/:idProducto', productsController.editProduct);
router.put('/editProduct/:idProducto', productsController.modifyProduct);
router.get('/productEditOK', productsController.editProductOK);

/* Baja de productos */
router.get('/deleteProduct/:idProducto', productsController.confirmDeleteProduct);
router.delete('/deleteProduct/:idProducto', productsController.deleteProduct);
router.get('/productDeleteOK', productsController.deleteProductOK);

module.exports = router;