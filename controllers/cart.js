const express = require('express');
const router = express.Router();
const Listing = require('../models/listing'); // Assuming listings are stored in a Listing model
const User = require('../models/user'); // Assuming user model

// GET /cart - show items in cart
router.get('/cart', async (req, res) => {
    if (!req.user) {
        return res.redirect('/login');
    }
    const user = await User.findById(req.user._id).populate('cart');
    res.render('cart', { cartItems: user.cart });
});

// POST /cart/add - add item to cart
router.post('/cart/add', async (req, res) => {
    const listingId = req.body.listingId;
    const listing = await Listing.findById(listingId);
    const user = await User.findById(req.user._id);
    
    user.cart.push(listing);
    await user.save();

    res.redirect('/cart');
});

// POST /cart/remove/:id - remove item from cart
router.post('/cart/remove/:id', async (req, res) => {
    const listingId = req.params.id;
    const user = await User.findById(req.user._id);
    
    user.cart = user.cart.filter(item => item._id.toString() !== listingId);
    await user.save();

    res.redirect('/cart');
});

// POST /checkout - proceed to checkout (dummy route for now)
router.post('/checkout', (req, res) => {
    // Add your checkout logic here
    res.send('Proceeding to checkout...');
});

module.exports = router;
