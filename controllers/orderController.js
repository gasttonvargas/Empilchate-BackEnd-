const Order = require('../models/Order');

// Crear una nueva orden
const createOrder = async (req, res) => {
  const { orderItems, totalPrice, shippingAddress } = req.body;
  try {
    const order = new Order({
      user: req.user.id,
      orderItems,
      totalPrice,
      shippingAddress
    });

    await order.save();
    res.status(201).json({ message: 'Orden creada exitosamente' });
  } catch (error) {
    res.status(500).json({ message: 'Error al crear la orden' });
  }
};

// Obtener órdenes del usuario autenticado
const getUserOrders = async (req, res) => {
  try {
    const orders = await Order.find({ user: req.user.id });
    res.json(orders);
  } catch (error) {
    res.status(500).json({ message: 'Error al obtener las órdenes' });
  }
};

module.exports = { createOrder, getUserOrders };
