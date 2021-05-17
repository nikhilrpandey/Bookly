const express = require('express');
const router = express.Router();


const projects_controller = require('../controllers/projects_controller');

router.get('/jell',projects_controller.broo);

module.exports = router;