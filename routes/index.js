const express = require('express');
const router = express.Router();


const home_controller = require('../controllers/home_controller');

router.get('/',home_controller.home);
router.use('/notes',require('./notes'));
router.use('/community',require('./community'));
router.use('/papers',require('./papers'));
router.use('/projects',require('./projects'));
router.use('/courses',require('./courses'));


// exporting the router
module.exports = router;


