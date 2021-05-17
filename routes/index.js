const express = require('express');
const router = express.Router();


const home_controller = require('../controllers/home_controller');

router.use('/community',require('./community'));
router.get('/',home_controller.home);
router.use('/notes',require('./notes'));

router.use('/papers',require('./papers'));

router.use('/courses',require('./courses'));

router.use('/projects',require('./projects'));


// exporting the router
module.exports = router;


