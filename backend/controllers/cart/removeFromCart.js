const Cart = require('../../models/cartSchema')

const removeFromCart = async (req, res) => {
    try {
        const { _id, username } = req.params;
        console.log(_id, username)
        const cart = await Cart.findOne({ username: username });
        if (!cart) {
            return res.status(404).json({ message: 'Cart not found for user' });
        }
        let item = cart.items.find(item => item.perfume === _id);
        if (!item) {
            console.log('No item found')
        } else {
            cart.items = cart.items.filter(item => item.perfume !== _id)
        }
        await cart.save();
        res.status(200);
    } catch(error) {
        console.log('Error removing item', error);
        res.status(500).json({ message: 'Internal server error' });
    }
};

module.exports = removeFromCart;