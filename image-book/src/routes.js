const express = require('express');
const axios = require('axios');
const sharp = require('sharp');
const PDFDocument = require('pdfkit');
const fs = require('fs');
const path = require('path');
const { Image, PDF } = require('./models');
const router = express.Router();

// Helper function to download an image with retries
const downloadImage = async (url, retries = 3) => {
    for (let attempt = 1; attempt <= retries; attempt++) {
        try {
            const response = await axios({
                url,
                responseType: 'arraybuffer',
            });
            return Buffer.from(response.data, 'binary');
        } catch (error) {
            if (attempt === retries) throw error;
            console.error(`Attempt ${attempt} failed. Retrying...`);
        }
    }
};

router.post('/create-book', async (req, res) => {
    const { imageLinks, size, texts } = req.body;
    const processedImages = [];

    try {
        // Download and process images
        for (let i = 0; i < imageLinks.length; i++) {
            const imageLink = imageLinks[i];
            const text = texts[i];

            try {
                const imageBuffer = await downloadImage(imageLink);
                console.log(`Downloaded image ${imageLink}`);

                const processedImageBuffer = await sharp(imageBuffer)
                    .resize(size.width, size.height)
                    .composite([{
                        input: Buffer.from(
                            `<svg width="${size.width}" height="${size.height}">
                                <rect x="0" y="${size.height - 50}" width="${size.width}" height="50" fill="black" />
                                <text x="50%" y="${size.height - 25}" alignment-baseline="middle" text-anchor="middle" font-size="24" fill="white">${text}</text>
                            </svg>`
                        ),
                        gravity: 'south',
                    }])
                    .toBuffer();

                processedImages.push(processedImageBuffer);
                console.log(`Processed image ${imageLink}`);
            } catch (error) {
                console.error(`Failed to process image ${imageLink}:`, error.message);
                return res.status(500).json({ message: `Failed to process image: ${imageLink}` });
            }
        }

        // Create PDF
        const pdfPath = path.join(__dirname, 'output.pdf');
        const doc = new PDFDocument();
        doc.pipe(fs.createWriteStream(pdfPath));

        for (const image of processedImages) {
            doc.image(image, 0, 0, { width: size.width, height: size.height });
            doc.addPage();
        }

        doc.end();

        // Save PDF to DB
        const pdf = new PDF({ data: fs.readFileSync(pdfPath) });
        await pdf.save();

        res.status(200).json({ message: 'Book created successfully' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal server error' });
    }
});

module.exports = router;
