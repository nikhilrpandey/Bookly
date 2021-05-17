const express = require('express');
const router = express.Router();


const community_controller = require('../controllers/community_controller');

router.post('/contribute',community_controller.contribute);
router.get('/blogs',community_controller.blogs);

module.exports = router;