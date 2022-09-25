const express = require('express');
const isAuth = require('../middleware/auth');
const Order = require('../controller/ordercontroller');
let order = new Order();
const validation = require('../middleware/validation.js');

const router = express.Router();

router.post('/order', isAuth, order.placeOrder.bind(order));

module.exports = router;