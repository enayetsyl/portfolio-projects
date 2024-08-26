const mongoose = require('mongoose');

const imageSchema = new mongoose.Schema({
    data: Buffer,
});

const pdfSchema = new mongoose.Schema({
    data: Buffer,
});

const Image = mongoose.model('Image', imageSchema);
const PDF = mongoose.model('PDF', pdfSchema);

module.exports = { Image, PDF };
