const router = require('express').Router();
const Cart = require('../models/Cart');

const { verifyTokenAndAdmin, verifyToken, verifyTokenAndAuthorization } = require('./verifyToken');

// Create Cart
router.post('/', verifyToken, async (req, res) => {
  const newCart = new Cart(req.body);

  try {
    const savedCart = await newCart.save();
    res.status(200).json(savedCart);
  } catch (err) {
    res.status(500).json(err);
  }
});

// Update Cart
router.put('/:id', verifyTokenAndAuthorization, async (req, res) => {
  try {
    const updatedCart = await Cart.findByIdAndUpdate(req.params.id, {
      $set: req.body,
    }, { new: true });
    res.status(200).json(updatedCart);
  } catch (err) {
    res.status(500).json(err);
  }
});

// Delete Cart
router.delete('/:id', verifyTokenAndAuthorization, async (req, res) => {
  try {
    await Cart.findByIdAndDelete(req.params.id);
    res.status(200).json('Cart has been successfully deleted !');
  } catch (err) {
    res.status(500).json(err);
  }
});

// // Get Product
// // eslint-disable-next-line consistent-return
// router.get('/find/:id', async (req, res) => {
//   try {
//     const product = await Product.findById(req.params.id);
//     return res.status(200).json(product);
//   } catch (err) {
//     res.status(500).json(err);
//   }
// });

// // Get All Products
// // eslint-disable-next-line consistent-return
// router.get('/', async (req, res) => {
//   const qNew = req.query.new;
//   const qCategory = req.query.category;
//   try {
//     let products;

//     if (qNew) {
//       products = await Product.find().sort({ createdAt: -1 }).limit(5);
//     } else if (qCategory) {
//       products = await Product.find({
//         categories: {
//           $in: [qCategory],
//         },
//       });
//     } else {
//       products = await Product.find();
//     }
//     return res.status(200).json({ products });
//   } catch (err) {
//     res.status(500).json(err);
//   }
// });

module.exports = router;
