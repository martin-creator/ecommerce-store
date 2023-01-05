const router = require('express').Router();
const Order = require('../models/Order');

const { verifyTokenAndAdmin, verifyToken } = require('./verifyToken');

// Create Order
router.post('/', verifyToken, async (req, res) => {
  const newOrder = new Order(req.body);

  try {
    const savedOrder = await newOrder.save();
    res.status(200).json(savedOrder);
  } catch (err) {
    res.status(500).json(err);
  }
});

// Update Order
router.put('/:id', verifyTokenAndAdmin, async (req, res) => {
  try {
    const updatedOrder = await Order.findByIdAndUpdate(req.params.id, {
      $set: req.body,
    }, { new: true });
    res.status(200).json(updatedOrder);
  } catch (err) {
    res.status(500).json(err);
  }
});

// Delete Order
router.delete('/:id', verifyTokenAndAdmin, async (req, res) => {
  try {
    await Order.findByIdAndDelete(req.params.id);
    res.status(200).json('Order has been successfully deleted !');
  } catch (err) {
    res.status(500).json(err);
  }
});

// Get User Order
// eslint-disable-next-line consistent-return
router.get('/find/:id', async (req, res) => {
  try {
    const orders = await Order.find(req.params.userId);
    return res.status(200).json(orders);
  } catch (err) {
    res.status(500).json(err);
  }
});

// Get All Orders
router.get('/', verifyTokenAndAdmin, async (req, res) => {
  try {
    const orders = await Order.find();
    res.status(200).json(orders);
  } catch (err) {
    res.status(500).json(err);
  }
});

// GET MONTHLY INCOME

module.exports = router;
