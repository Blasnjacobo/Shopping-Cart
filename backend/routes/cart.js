const express = require('express')
const totalQuantity = require('../controllers/cart/totalQuantity')
const itemQuantity = require('../controllers/cart/itemQuantity')
const increaseQuantity = require('../controllers/cart/increaseQuantity')
const decreaseQuantity = require('../controllers/cart/decreaseQuantity')
 
const router = express.Router()
router.get('/:user', totalQuantity)
router.get('/:username/:_id', itemQuantity)
router.post('/increase/:_id/:username', increaseQuantity)
router.post('/decrease/:_id/:username', decreaseQuantity)

module.exports = router