const express = require('express');
const app = express();

app.use(express.json());

// Define tus rutas aquí
app.get('/api/products', (req, res) => {
  // Lógica para manejar la solicitud
  res.json({ products: [] });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
