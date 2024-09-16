const express = require('express');
const connectDB = require('./dbconfig');
require('dotenv').config(); // Asegúrate de que esta línea esté aquí también

const app = express();

// Conectar a MongoDB
connectDB();

// Middleware
app.use(express.json());

// Configurar rutas aquí
// app.use('/api/users', require('./routes/userRoutes'));
// app.use('/api/products', require('./routes/productRoutes'));

// Iniciar el servidor
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
