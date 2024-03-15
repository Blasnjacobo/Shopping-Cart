const express = require('express')
const totalQuantity = require('../controllers/cart/totalQuantity')
const itemQuantity = require('../controllers/cart/itemQuantity')
const increaseQuantity = require('../controllers/cart/increaseQuantity')
 
const router = express.Router()

router.get('/:user', totalQuantity)
router.get('/:username/:_id', itemQuantity)
router.post('/:username/:_id', increaseQuantity)

module.exports = router