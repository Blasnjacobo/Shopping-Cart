module.exports.increaseQuantity = async (req, res) => {
    // cart.js

const express = require('express');
const Cart = require('../models/Cart');

const router = express.Router();

module.exports.increaseQuantity = async (req, res) => {
    try {
        const { username, _id } = req.params;
        const cart = await Cart.findOne({ username: username });
        if (!cart) {
            return res.status(404).json({ message: 'Cart not found for user' });
        }

        if (cart.items.length === 0) {
            let item = { perfume: _id, quantity: 0 };
            cart.items.push(item);
        } else {
            let item = cart.items.find(item => item.perfume.toString() === _id);
            item.quantity += 1;
        }
        await cart.save();
        res.status(200).json({ perfume: _id, quantity: item.quantity });
    } catch(error) {
        console.log('Error incrementing quantity', error);
        res.status(500).json({ message: 'Internal server error' });
    }
};

module.exports = router;

}