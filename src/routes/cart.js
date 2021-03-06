const express = require('express');
const router = express.Router();
const cartController = require('../controllers/cartController');

// router.get('/', indexController.index);

router.get('/', cartController.get);
router.post('/add', cartController.add);
router.post('/', cartController.delete);

module.exports = router;