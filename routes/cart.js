const express = require('express');
const router = express.Router();
const Listing = require('../models/listing'); // Assuming listings are stored in a Listing model
const User = require('../models/user'); // Assuming user model
const cartController = require("../controllers/cart");

// GET /cart - show items in cart
router.get('/', cartController.showCart);

router.post('/add', cartController.addToCart);

router.post('/remove/:id', cartController.removeFromCart);

// POST /checkout - proceed to checkout (dummy route for now)
router.post('/checkout', (req, res) => {
    // Add your checkout logic here
    res.send('Proceeding to checkout...');
});

module.exports = router;
