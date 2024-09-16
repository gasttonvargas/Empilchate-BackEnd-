const express = require('express');
const router = express.Router();
const Product = require('../models/Product');

// Obtener todos los productos
router.get('/', async (req, res) => {
  try {
    const products = await Product.find();
    res.json(products);
  } catch (error) {
    res.status(500).json({ message: 'Error al obtener los productos' });
  }
});

// Agregar un nuevo producto
router.post('/', async (req, res) => {
  const { name, price, image, category } = req.body;
  try {
    const newProduct = new Product({ name, price, image, category });
    await newProduct.save();
    res.status(201).json(newProduct);
  } catch (error) {
    res.status(400).json({ message: 'Error al agregar el producto' });
  }
});

// Actualizar un producto existente
router.put('/:id', async (req, res) => {
  const { id } = req.params;
  const { name, price, image, category } = req.body;
  try {
    const updatedProduct = await Product.findByIdAndUpdate(id, { name, price, image, category }, { new: true });
    if (!updatedProduct) {
      return res.status(404).json({ message: 'Producto no encontrado' });
    }
    res.json(updatedProduct);
  } catch (error) {
    res.status(400).json({ message: 'Error al actualizar el producto' });
  }
});

// Eliminar un producto
router.delete('/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const deletedProduct = await Product.findByIdAndDelete(id);
    if (!deletedProduct) {
      return res.status(404).json({ message: 'Producto no encontrado' });
    }
    res.json({ message: 'Producto eliminado con éxito' });
  } catch (error) {
    res.status(500).json({ message: 'Error al eliminar el producto' });
  }
});

module.exports = router;
