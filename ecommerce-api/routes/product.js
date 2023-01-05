const router = require('express').Router();
const CryptoJS = require('crypto-js');
const Product = require('../models/Product');

const { verifyTokenAndAuthorization, verifyTokenAndAdmin } = require('./verifyToken');

// Create Product
router.post('/', verifyTokenAndAdmin, async (req, res) => {
  const newProduct = new Product(req.body);

  try {
    const savedProduct = await newProduct.save();
    res.status(200).json(savedProduct);
  } catch (err) {
    res.status(500).json(err);
  }
});

// Update Product
router.put('/:id', verifyTokenAndAdmin, async (req, res) => {
  try {
    const updatedProduct = await Product.findByIdAndUpdate(req.params.id, {
      $set: req.body,
    }, { new: true });
    res.status(200).json(updatedProduct);
  } catch (err) {
    res.status(500).json(err);
  }
});

// Delete Product
router.delete('/:id', verifyTokenAndAdmin, async (req, res) => {
  try {
    await Product.findByIdAndDelete(req.params.id);
    res.status(200).json('Product has been successfully deleted !');
  } catch (err) {
    res.status(500).json(err);
  }
});

// Get Product
// eslint-disable-next-line consistent-return
router.get('/find/:id', async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    return res.status(200).json(product);
  } catch (err) {
    res.status(500).json(err);
  }
});

// // Get All Users
// // eslint-disable-next-line consistent-return
// router.get('/', verifyTokenAndAdmin, async (req, res) => {
//   const query = req.query.new;
//   try {
//     const users = query ? await User.find().sort({ _id: -1 }).limit(5) : await User.find();

//     return res.status(200).json({ users });
//   } catch (err) {
//     res.status(500).json(err);
//   }
// });

// // Get User Stats
// router.get('/stats', verifyTokenAndAdmin, async (req, res) => {
//   const date = new Date();
//   const lastYear = new Date(date.setFullYear(date.getFullYear() - 1));

//   try {
//     const data = await User.aggregate([
//       { $match: { createdAt: { $gte: lastYear } } },
//       {
//         $project: {
//           month: { $month: '$createdAt' },
//         },
//       },
//       {
//         $group: {
//           _id: '$month',
//           total: { $sum: 1 },
//         },
//       },
//     ]);
//     res.status(200).json(data);
//   } catch (err) {
//     res.status(500).json(err);
//   }
// });
module.exports = router;
