const express = require('express')
const totalQuantity = require('../controllers/cart/totalQuantity')
const itemQuantity = require('../controllers/cart/itemQuantity')
const increaseQuantity = require('../controllers/cart/increaseQuantity')
const decreaseQuantity = require('../controllers/cart/decreaseQuantity')
const removeFromCart = require('../controllers/cart/removeFromCart')
const cartItems = require('../controllers/cart/cartItems')
 
const router = express.Router()
router.get('/:user', totalQuantity)
router.get('/:username/:_id', itemQuantity)
router.post('/increase/:_id/:username', increaseQuantity)
router.post('/decrease/:_id/:username', decreaseQuantity)
router.delete('/delete/:_id/:username', removeFromCart)
router.get('/:username', cartItems)

module.exports = router