const mongoose = require('mongoose');

const chapterSchema = new mongoose.Schema({
    subject: { type: String, required: true },
    chapterName: { type: String, required: true },
    resourceType: { type: String, required: true },
    fileUrl: { type: String, required: true }
});

module.exports = mongoose.model('Chapter', chapterSchema);
