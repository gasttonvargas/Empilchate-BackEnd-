const express = require('express');
const { getCategories, createCategory } = require('../controllers/categoryController');
const { protect, admin } = require('../middleware/authMiddleware');
const router = express.Router();

router.get('/', getCategories); // Obtener todas las categorías
router.post('/', protect, admin, createCategory); // Crear una nueva categoría (solo admin)

module.exports = router;
