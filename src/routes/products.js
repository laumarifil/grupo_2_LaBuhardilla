const express = require('express');
const router = express.Router();
const productsController = require('../controllers/productsController');
const authMiddleware = require('../middlewares/authMiddleware');

const db = require('../database/models');
const operator = db.Sequelize.Op; 

const productsMulterMiddleware = require('../middlewares/productsMulterMiddleware');


/* Listado de productos */
router.get('/', productsController.products);
router.get('/detailProduct/:idProducto', productsController.detailProduct);

/* Busqueda de productos */
router.post('/searchProduct/', productsController.searchProduct);

/* Alta de productos */
router.get('/newProduct', authMiddleware , productsController.newProduct);
router.post('/newProduct', authMiddleware , productsMulterMiddleware.any(), productsController.createProduct);


/* Modificacion de productos */
router.get('/editProduct/:idProducto', authMiddleware , productsController.editProduct);
router.put('/editProduct/:idProducto', authMiddleware , productsMulterMiddleware.any(), productsController.modifyProduct);


/* Baja de productos */
router.get('/deleteProduct/:idProducto',authMiddleware, productsController.confirmDeleteProduct);
router.delete('/deleteProduct/:idProducto', authMiddleware ,productsController.deleteProduct);


/* Listado de Categorias de productos */
router.get('/categories', productsController.categories);

/* Alta de Categorias de productos */
router.get('/categories/newCategory', productsController.newCategory);
router.post('/categories/newCategory', productsController.createCategory);


/* Modificacion de Categorias de productos */
router.get('/categories/editCategory/:idCategoria', productsController.editCategory);
router.put('/categories/editCategory/:idCategoria', productsController.modifyCategory);


/* Baja de categoriass */
router.get('/categories/deleteCategory/:idCategoria', productsController.confirmDeleteCategory);
router.delete('/categories/deleteCategory/:idCategoria', productsController.deleteCategory);


/* Listado de Colores de productos */
router.get('/colors', productsController.colors);

/* Alta de Colores de productos */
router.get('/colors/newColor', productsController.newColor);
router.post('/colors/newColor', productsController.createColor);


/* Modificacion de colores de productos */
router.get('/colors/editColor/:idColor', productsController.editColor);
router.put('/colors/editColor/:idColor', productsController.modifyColor);


/* Baja de colores */
router.get('/colors/deleteColor/:idColor', productsController.confirmDeleteColor);
router.delete('/colors/deleteColor/:idColor', productsController.deleteColor);


module.exports = router;