const jwt = require('jsonwebtoken');
const User = require('../models/User');

// Autenticación del usuario
const protect = async (req, res, next) => {
  let token;
  if (req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
    try {
      token = req.headers.authorization.split(' ')[1];
      const decoded = jwt.verify(token, process.env.JWT_SECRET);
      req.user = await User.findById(decoded.id).select('-password');
      next();
    } catch (error) {
      res.status(401).json({ message: 'No autorizado, token inválido' });
    }
  } else {
    res.status(401).json({ message: 'No autorizado, token no encontrado' });
  }
};

// Autorización para admin
const admin = (req, res, next) => {
  if (req.user && req.user.role === 'admin') {
    next();
  } else {
    res.status(403).json({ message: 'No autorizado, requiere permisos de administrador' });
  }
};

module.exports = { protect, admin };
