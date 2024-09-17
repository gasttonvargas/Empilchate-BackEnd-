const Product = require('../models/Product'); // Asegúrate de que la ruta sea correcta

// Crear un nuevo producto
exports.createProduct = async (req, res) => {
  try {
    const newProduct = new Product(req.body);
    const savedProduct = await newProduct.save();
    res.status(201).json(savedProduct);
  } catch (error) {
    console.error('Error al crear el producto:', error); // Agrega un mensaje de error detallado
    res.status(400).json({ message: error.message });
  }
};

// Obtener todos los productos
exports.getAllProducts = async (req, res) => {
  try {
    const products = await Product.find();
    res.status(200).json(products);
  } catch (error) {
    console.error('Error al obtener los productos:', error); // Agrega un mensaje de error detallado
    res.status(500).json({ message: error.message });
  }
};

// Obtener un producto por ID
exports.getProductById = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    if (!product) {
      return res.status(404).json({ message: 'Producto no encontrado' });
    }
    res.status(200).json(product);
  } catch (error) {
    console.error('Error al obtener el producto:', error); // Agrega un mensaje de error detallado
    res.status(500).json({ message: error.message });
  }
};

// Controlador para actualizar el estado de publicación de un producto
exports.updateProductPublication = async (req, res) => {
    try {
      const product = await Product.findByIdAndUpdate(req.params.id, { isPublished: req.body.isPublished }, { new: true });
      if (!product) return res.status(404).json({ message: 'Producto no encontrado' });
      res.json(product);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  };
  

// Eliminar un producto
exports.deleteProduct = async (req, res) => {
  try {
    const deletedProduct = await Product.findByIdAndDelete(req.params.id);
    if (!deletedProduct) {
      return res.status(404).json({ message: 'Producto no encontrado' });
    }
    res.status(200).json({ message: 'Producto eliminado exitosamente' });
  } catch (error) {
    console.error('Error al eliminar el producto:', error); // Agrega un mensaje de error detallado
    res.status(500).json({ message: error.message });
  }
};
