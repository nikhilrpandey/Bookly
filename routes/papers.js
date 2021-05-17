const express = require('express');
const router = express.Router();


const papers_controller = require('../controllers/papers_controller');

router.get('/blog4',papers_controller.fun3);

module.exports = router;