const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const sizes = [16, 24, 32, 64, 72, 96, 128, 144, 152, 192, 384, 512];
const inputFile = path.join(__dirname, '../public/logo.svg');
const outputDir = path.join(__dirname, '../public/icons');

// Ensure the output directory exists
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

// Generate favicon.ico (multiple sizes in one file)
const faviconSizes = [16, 24, 32, 64];
Promise.all(
  faviconSizes.map(size =>
    sharp(inputFile)
      .resize(size, size)
      .toBuffer()
  )
).then(buffers => {
  const ico = require('to-ico');
  ico(buffers).then(buf => {
    fs.writeFileSync(path.join(__dirname, '../public/favicon.ico'), buf);
  });
});

// Generate PNG icons
sizes.forEach(size => {
  sharp(inputFile)
    .resize(size, size)
    .png()
    .toFile(path.join(outputDir, `icon-${size}x${size}.png`))
    .then(() => {
      console.log(`Generated ${size}x${size} icon`);
    })
    .catch(err => {
      console.error(`Error generating ${size}x${size} icon:`, err);
    });
}); 