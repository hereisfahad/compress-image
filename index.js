const sharp = require('sharp');

// Set the input and output paths
const inputPath = 'input-image.jpg';
const outputPath = 'output-image.webp';

// Set the maximum file size (in bytes) that you want to achieve
const MAX_SIZE = 100 * 1024; // 100 KB

// Resize and compress the image
sharp(inputPath)
    .resize({ width: 800 }) // Set the desired width (in pixels)
    .jpeg({ quality: 80, force: false }) // Set the desired JPEG quality (between 0-100)
    .toBuffer((err, buffer) => {
        if (err) {
            console.error(err);
            return;
        }

        // Check if the size of the compressed image is below the maximum file size
        if (buffer.length < MAX_SIZE) {
            // If the compressed image size is already below the maximum file size, save it to the output path
            sharp(buffer).toFile(outputPath, (err) => {
                if (err) {
                    console.error(err);
                    return;
                }
                console.log('Image compressed successfully!');
            });
        } else {
            // If the compressed image size is still above the maximum file size, reduce the JPEG quality and try again
            const quality = Math.floor((MAX_SIZE * 100) / buffer.length);
            sharp(inputPath)
                .resize({ width: 800 })
                .jpeg({ quality, force: false })
                .toFile(outputPath, (err) => {
                    if (err) {
                        console.error(err);
                        return;
                    }
                    console.log('Image compressed successfully!');
                });
        }
    });
