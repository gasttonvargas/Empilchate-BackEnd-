const express = require('express');
const { createOrder, getUserOrders } = require('../controllers/orderController');
const { protect } = require('../middleware/authMiddleware');
const router = express.Router();

router.post('/', protect, createOrder); // Crear una nueva orden
router.get('/', protect, getUserOrders); // Obtener órdenes del usuario autenticado

module.exports = router;
