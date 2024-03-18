const Cart = require('../../models/cartSchema');

const cartItems = async (req, res) => {
    try {
        const { username } = req.params;
        const cart = await Cart.findOne({ username: username });
        
        if (!cart) {
            return res.status(404).json({ message: 'Cart not found for user' });
        }

        let cartItemsArray = [];
        cart.items.forEach((item) => {
            cartItemsArray.push({ id: item._id, quantity: item.quantity });
        });

        res.status(200).json(cartItemsArray);
    } catch(error) {
        console.log('Error getting cart items', error);
        res.status(500).json({ message: 'Internal server error' });
    }
};

module.exports = cartItems;
