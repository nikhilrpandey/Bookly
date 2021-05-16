const express = require('express');
const router = express.Router();


const home_controller = require('../controllers/home_controller');

router.get('/',home_controller.home);
router.use('/notes',require('./notes'));


// exporting the router
module.exports = router;


