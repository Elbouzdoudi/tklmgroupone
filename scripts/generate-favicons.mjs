import sharp from 'sharp';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const publicDir = join(__dirname, '..', 'public');

const sizes = [16, 32, 48, 96, 144, 180, 192, 512];

async function generateFavicons() {
  const source = join(publicDir, 'favicon.png');
  
  for (const size of sizes) {
    const output = join(publicDir, `favicon-${size}x${size}.png`);
    await sharp(source)
      .resize(size, size)
      .png()
      .toFile(output);
    console.log(`Generated: favicon-${size}x${size}.png`);
  }
  
  // Generate apple-touch-icon
  await sharp(source)
    .resize(180, 180)
    .png()
    .toFile(join(publicDir, 'apple-touch-icon.png'));
  console.log('Generated: apple-touch-icon.png');
  
  // Generate proper ICO file (with multiple sizes embedded)
  // For simplicity, we'll use the 48x48 as the main favicon
  await sharp(source)
    .resize(48, 48)
    .png()
    .toFile(join(publicDir, 'favicon-48.png'));
  
  console.log('Done! Update your layout.tsx to use the new favicon files.');
}

generateFavicons().catch(console.error);
