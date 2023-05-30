Image Compression Script
========================

This script allows you to resize and compress an image while ensuring that the resulting file size is below a specified maximum limit.

Prerequisites
-------------

Before running this script, make sure you have the following installed:

*   Node.js
*   The `sharp` package (can be installed via `npm install sharp`)

Usage
-----

1.  Install the required dependencies:
    
    ```bash
    npm install sharp
    ```
    
2.  Set the input and output paths by modifying the following variables in the script:
    
    ```js
    const inputPath = 'input-image.jpg';
    const outputPath = 'output-image.webp';
    ```
    
    Replace 'input-image.jpg' with the path to your input image file, and 'output-image.webp' with the desired path for the compressed image file.
    
3.  Set the maximum file size (in bytes) that you want to achieve by modifying the MAX\_SIZE variable:
    
    ```js
    const MAX_SIZE = 100 * 1024; // 100 KB
    ```
    
    Replace 100 \* 1024 with your desired maximum file size in bytes.
    
4.  Run the script:
    
    ```bash    
    node script.js
    ```
    
    The script will resize and compress the image using the specified settings. If the resulting file size is below the maximum limit, it will be saved to the output path. Otherwise, it will reduce the JPEG quality and try again until the file size is within the limit.
    

Configuration
-------------

You can customize the resizing and compression settings by modifying the following lines in the script:

```js
.resize({ width: 800 }) // Set the desired width (in pixels)
.jpeg({ quality: 80, force: false }) // Set the desired JPEG quality (between 0-100)
```

*   To change the width of the image, modify the value of `width` in the `resize` function.
*   To adjust the JPEG quality, change the value of `quality` in the `jpeg` function. The value should be between 0 and 100, where 0 represents the lowest quality and 100 represents the highest quality.

License
-------

This script is provided under the MIT License. Feel free to modify and use it according to your needs.