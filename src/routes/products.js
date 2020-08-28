const express = require('express');
const router = express.Router();
const productsController = require('../controllers/productsController');
const authMiddleware = require('../middlewares/authMiddleware');
const multer = require('multer');
const path = require('path');
const db = require('../database/models');
const operator = db.Sequelize.Op;




/* Product Image Upload */
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

/* Busqueda de productos */
router.get('/searchProduct/:key', productsController.searchProduct);

/* Alta de productos */
router.get('/newProduct', authMiddleware , productsController.newProduct);
router.post('/newProduct', authMiddleware , upload.any(), productsController.createProduct);
router.get('/productOK', productsController.newProductOK); 

/* Modificacion de productos */
router.get('/editProduct/:idProducto', authMiddleware , productsController.editProduct);
router.put('/editProduct/:idProducto', authMiddleware , upload.any(), productsController.modifyProduct);
router.get('/productEditOK', productsController.editProductOK);

/* Baja de productos */
router.get('/deleteProduct/:idProducto',authMiddleware, productsController.confirmDeleteProduct);
router.delete('/deleteProduct/:idProducto', authMiddleware ,productsController.deleteProduct);
router.get('/productDeleteOK', productsController.deleteProductOK);

/* Listado de Categorias de productos */
router.get('/categories', productsController.categories);

/* Alta de Categorias de productos */
router.get('/categories/newCategory', productsController.newCategory);
router.post('/categories/newCategory', productsController.createCategory);
router.get('/categories/categoryOK', productsController.categoryOK);

/* Modificacion de Categorias de productos */
router.get('/categories/editCategory/:idCategoria', productsController.editCategory);
router.put('/categories/editCategory/:idCategoria', productsController.modifyCategory);
router.get('/categories/categoryEditOK', productsController.editCategoryOK);

/* Baja de categoriass */
router.get('/categories/deleteCategory/:idCategoria', productsController.confirmDeleteCategory);
router.delete('/categories/deleteCategory/:idCategoria', productsController.deleteCategory);
router.get('/categories/categoryDeleteOK', productsController.deleteCategoryOK);

/* Listado de Colores de productos */
router.get('/colors', productsController.colors);

/* Alta de Colores de productos */
router.get('/colors/newColor', productsController.newColor);
router.post('/colors/newColor', productsController.createColor);
router.get('/colors/colorOK', productsController.colorOK);

/* Modificacion de colores de productos */
router.get('/colors/editColor/:idColor', productsController.editColor);
router.put('/colors/editColor/:idColor', productsController.modifyColor);
router.get('/colors/colorEditOK', productsController.editColorOK);

/* Baja de colores */
router.get('/colors/deleteColor/:idColor', productsController.confirmDeleteColor);
router.delete('/colors/deleteColor/:idColor', productsController.deleteColor);
router.get('/colors/colorDeleteOK', productsController.deleteColorOK);

module.exports = router;