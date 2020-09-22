const express = require('express');
const router = express.Router();
const productsController = require('../controllers/productsController');
const authMiddleware = require('../middlewares/authMiddleware');
const roleMiddleware = require('../middlewares/roleMiddleware');

const db = require('../database/models');
const operator = db.Sequelize.Op; 

const productsMulterMiddleware = require('../middlewares/productsMulterMiddleware');


/* Listado de productos */
router.get('/', productsController.products);
router.get('/detailProduct/:idProducto', productsController.detailProduct);


/* Busqueda de productos */
router.post('/searchProduct/', productsController.searchProduct);

/* Alta de productos */
router.get('/newProduct',roleMiddleware , productsController.newProduct);
router.post('/newProduct',roleMiddleware , productsMulterMiddleware.any(), productsController.createProduct);


/* Modificacion de productos */
router.get('/editProduct/:idProducto', roleMiddleware , productsController.editProduct);
router.put('/editProduct/:idProducto', roleMiddleware , productsMulterMiddleware.any(), productsController.modifyProduct);


/* Baja de productos */
router.get('/deleteProduct/:idProducto', roleMiddleware, productsController.confirmDeleteProduct);
router.delete('/deleteProduct/:idProducto', roleMiddleware, productsController.deleteProduct);


/* Listado de Categorias de productos */
router.get('/categories', productsController.categories);

/* Alta de Categorias de productos */
router.get('/categories/newCategory', roleMiddleware, productsController.newCategory);
router.post('/categories/newCategory', roleMiddleware, productsController.createCategory);

/* Modificacion de Categorias de productos */
router.get('/categories/editCategory/:idCategoria', roleMiddleware, productsController.editCategory);
router.put('/categories/editCategory/:idCategoria', roleMiddleware, productsController.modifyCategory);


/* Baja de categoriass */
router.get('/categories/deleteCategory/:idCategoria', roleMiddleware, productsController.confirmDeleteCategory);
router.delete('/categories/deleteCategory/:idCategoria', roleMiddleware, productsController.deleteCategory);


/* Listado de Colores de productos */
router.get('/colors', productsController.colors);

/* Alta de Colores de productos */
router.get('/colors/newColor', roleMiddleware, productsController.newColor);
router.post('/colors/newColor', roleMiddleware, productsController.createColor);


/* Modificacion de colores de productos */
router.get('/colors/editColor/:idColor', roleMiddleware, productsController.editColor);
router.put('/colors/editColor/:idColor', roleMiddleware, productsController.modifyColor);


/* Baja de colores */
router.get('/colors/deleteColor/:idColor', roleMiddleware, productsController.confirmDeleteColor);
router.delete('/colors/deleteColor/:idColor', roleMiddleware, productsController.deleteColor);


/* Productos de Categoría Deco */
router.get('/:idCategoria', productsController.productsByCategory);


module.exports = router;