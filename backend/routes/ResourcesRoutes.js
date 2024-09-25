const express = require('express');
const router = express.Router();
const multer = require('multer');
const { getChaptersBySubject, addResource } = require('../controllers/ResourcesControllers');

// Multer configuration for file uploads
const storage = multer.diskStorage({
    destination: function(req, file, cb) {
        cb(null, 'uploads/');
    },
    filename: function(req, file, cb) {
        cb(null, Date.now() + '-' + file.originalname);
    }
});
const upload = multer({ storage });

router.get('/:subject', getChaptersBySubject);
router.post('/', upload.single('file'), addResource);

module.exports = router;
