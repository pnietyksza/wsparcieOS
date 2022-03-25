var express = require('express');
var router = express.Router();
var loginController = require('../controllers/loginController');
var registerController = require('../controllers/registerController');
var homeController = require('../controllers/homeController')
var ticketController = require('../controllers/ticketController');



router.get('/', loginController.logincontroller);
router.get('/home', homeController.homecontroller);
router.post('/auth', loginController.logincontrollerPost);
router.get('/register', registerController.registercontroller);
router.post('/register', registerController.registercontrollerPost);
router.get('/test', homeController.testcontroller);
router.get('/logout', loginController.logoutcontroller);
router.get('/addticket', ticketController.ticketcontroller);
router.post('/addticket', ticketController.ticketcontrollerPost);



module.exports = router;