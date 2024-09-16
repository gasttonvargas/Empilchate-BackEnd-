const Category = require('../models/Category');

// Obtener todas las categorías
const getCategories = async (req, res) => {
  try {
    const categories = await Category.find();
    res.json(categories);
  } catch (error) {
    res.status(500).json({ message: 'Error al obtener las categorías' });
  }
};

// Crear una nueva categoría (solo admin)
const createCategory = async (req, res) => {
  const { name, description } = req.body;
  try {
    const category = new Category({ name, description });
    await category.save();
    res.status(201).json({ message: 'Categoría creada correctamente' });
  } catch (error) {
    res.status(500).json({ message: 'Error al crear la categoría' });
  }
};

module.exports = { getCategories, createCategory };
