const express = require('express');
const router = express.Router();


const home_controller = require('../controllers/home_controller');

router.get('/',home_controller.home);
router.get('/home',home_controller.osNotes);
router.get('/notes',require('./notes'));


// exporting the router
module.exports = router;


