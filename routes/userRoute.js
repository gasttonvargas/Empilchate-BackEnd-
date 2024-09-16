const express = require('express');
const router = express.Router();
const User = require('../models/User'); // Asegúrate de tener el modelo de usuario

// Endpoint para obtener todos los usuarios
router.get('/', async (req, res) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (error) {
    res.status(500).json({ message: 'Error al obtener usuarios' });
  }
});

module.exports = router;
