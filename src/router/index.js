const express = require("express")
const menuController = require("../controllers/menuController")
const customerController = require("../controllers/customerController")
const categoryController = require("../controllers/categoryController")
const orderController = require("../controllers/orderController")

const router = express.Router()

// Routes untuk manajemen Menu
router.get('/menus', menuController.getAllMenus);
router.get('/menu/:id', menuController.getMenusById);
router.post('/menu/create', menuController.createMenu);
router.put('/menu/update/:id', menuController.updateMenu);
router.delete('/menu/delete/:id', menuController.deleteMenu);

// Routes untuk manajemen Pelanggan
router.get('/customers', customerController.getAllCustomers);
router.get('/customers/:id', customerController.getCustomersById);
router.post('/customers/create', customerController.createCustomer);
router.put('/customers/update/:id', customerController.updateCustomer);
router.delete('/customers/delete/:id', customerController.deleteCustomer);

// Routes untuk manajemen Kategori
router.get('/categories', categoryController.getAllCategories);
router.get('/categories/:id', categoryController.getCategoryById);
router.post('/categories/create', categoryController.createCategory);
router.put('/categories/update/:id', categoryController.updateCategory);
router.delete('/categories/delete/:id', categoryController.deleteCategory);

// Routes untuk membuat pemesanan
router.post('/order/create', orderController.createOrder);
router.get('/order/history', orderController.getCustomerHistory);

module.exports = router
