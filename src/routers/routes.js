const express = require('express')
const router = express.Router()

const adminController = require('../controllers/adminController')
const categoryController = require('../controllers/categoryController')
const clientController = require('../controllers/clientController')
const mainController = require('../controllers/mainController')
const resController = require('../controllers/resController')



// const orderController = require('../controllers/orderController')



router
.get('/', mainController.GET)
.get('/admin', adminController.ADMIN_GET)
.get('/restaurant',clientController.CLIENT_GET)
.get('/kafelar', resController.CAFFEE_GET)
.post('/kafeyaratish', resController.CAFFEE_POST)
.get('/milliy', categoryController.NATIONAL_GET)
.get('/fast', categoryController.FASTFOOD_GET)


module.exports = router






// .get('./order',orderController.ORDERS_GET)