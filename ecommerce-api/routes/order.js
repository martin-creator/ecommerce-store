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

// // Get Order
// // eslint-disable-next-line consistent-return
// router.get('/find/:id', async (req, res) => {
//   try {
//     const Order = await Order.findById(req.params.id);
//     return res.status(200).json(Order);
//   } catch (err) {
//     res.status(500).json(err);
//   }
// });

// // Get All Orders
// // eslint-disable-next-line consistent-return
// router.get('/', async (req, res) => {
//   const qNew = req.query.new;
//   const qCategory = req.query.category;
//   try {
//     let Orders;

//     if (qNew) {
//       Orders = await Order.find().sort({ createdAt: -1 }).limit(5);
//     } else if (qCategory) {
//       Orders = await Order.find({
//         categories: {
//           $in: [qCategory],
//         },
//       });
//     } else {
//       Orders = await Order.find();
//     }
//     return res.status(200).json({ Orders });
//   } catch (err) {
//     res.status(500).json(err);
//   }
// });

module.exports = router;
