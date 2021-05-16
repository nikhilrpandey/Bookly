const express = require('express');

const router = express.Router();

const notes_controller = require('../controllers/notes_controller');


router.get('/os',notes_controller.osNotes);
router.get('/db',notes_controller.dbNotes);
router.get('/cg',notes_controller.cgNotes);
router.get('/ds',notes_controller.dsNotes);
router.get('/al',notes_controller.alNotes);


module.exports = router;