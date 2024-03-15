const Cart = require("../../models/cartSchema")

module.exports.totalQuantity = async (request, response) => {
    try {
        const { user } = request.params
        const cartID = await Cart.findOne(user.username)
        return response.status(200).json(cartID)
    } catch (error) {
        console.log('Error for totalQuantity', error)
        response.status(500).send({ message: error.message })
    }
}