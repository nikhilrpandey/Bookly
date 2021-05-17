const express = require('express');
const router = express.Router();


const courses_controller = require('../controllers/courses_controller');

router.get('/blog2',courses_controller.fun1);

module.exports = router;