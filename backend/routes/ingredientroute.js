const express = require('express');
const isAuth = require('../middleware/auth');
const Ingredient = require('../controller/ingredientcontroller');
let ingredient = new Ingredient();

const router = express.Router();

router.get('/ingredient', ingredient.getIngredient.bind(ingredient));

module.exports = router;