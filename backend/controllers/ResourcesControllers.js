const Chapter = require('../models/ChapterModel');

// Get chapters for a subject
exports.getChaptersBySubject = async (req, res) => {
    try {
        const { subject } = req.params;
        const chapters = await Chapter.find({ subject });
        res.json(chapters);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

// Add a new resource
exports.addResource = async (req, res) => {
    try {
        const { subject, chapterName, resourceType } = req.body;

        if (!req.file) {
            return res.status(400).json({ message: 'File is required' });
        }
        
        const fileUrl = req.file.path;  // Using multer for file handling
        const newResource = new Chapter({
            subject,
            chapterName,
            resourceType,
            fileUrl
        });
        await newResource.save();
        res.status(201).json(newResource);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};
