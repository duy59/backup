const express = require('express')
const router = express.Router()

const controllerProduct = require("../../controllers/client/products.controller")

router.get('/', controllerProduct.products)

module.exports = router