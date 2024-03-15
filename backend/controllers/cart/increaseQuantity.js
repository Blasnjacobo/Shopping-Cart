const Cart = require('../../models/cartSchema')

const increaseQuantity = async (req, res) => {
    try {
        const { username, _id } = req.params;
        console.log(req.params)
        const cart = await Cart.findOne({ username: username });
        if (!cart) {
            return res.status(404).json({ message: 'Cart not found for user' });
        }
        const item = cart.items.find(item => item.perfume === _id);
        if (!item) {
            cart.items.push({ perfume: _id, quantity: 1 });
        } else {
            item.quantity += 1;
        }
        console.log(cart)
        await cart.save();
        res.status(200);
    } catch(error) {
        console.log('Error incrementing quantity', error);
        res.status(500).json({ message: 'Internal server error' });
    }
};

module.exports = increaseQuantity;