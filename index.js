const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors'); // Importar el paquete cors
const connectDB = require('./dbconfig');
const productRoutes = require('./routes/productRoute');
const userRoutes = require('./routes/userRoute');
const categoryRoutes = require('./routes/categoryRoute');
const orderRoutes = require('./routes/orderRoute');

// Configurar dotenv para usar variables de entorno
dotenv.config();

// Crear la aplicación Express
const app = express();

// Configuración de CORS
app.use(cors({
  origin: 'http://localhost:5173', 
}));

// Middleware para parsear JSON
app.use(express.json());

// Conectar a la base de datos
connectDB();

// Definir las rutas
app.use('/api/products', productRoutes);
app.use('/api/users', userRoutes);
app.use('/api/categories', categoryRoutes);
app.use('/api/orders', orderRoutes);

// Configurar el puerto y escuchar
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
