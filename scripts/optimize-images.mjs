import sharp from 'sharp';
import fs from 'fs';
import path from 'path';

const publicDir = './public';
const optimizedDir = './public/optimized';

// Create optimized directory if it doesn't exist
if (!fs.existsSync(optimizedDir)) {
  fs.mkdirSync(optimizedDir, { recursive: true });
}

// Image optimization settings
const settings = {
  // Hero images - high quality but compressed
  hero: {
    width: 1200,
    quality: 80,
  },
  // Thumbnails/avatars - smaller
  thumbnail: {
    width: 400,
    quality: 75,
  },
  // General images
  general: {
    width: 800,
    quality: 75,
  }
};

async function optimizeImage(inputPath, outputPath, maxWidth, quality) {
  try {
    const image = sharp(inputPath);
    const metadata = await image.metadata();
    
    // Only resize if larger than maxWidth
    const resizeWidth = metadata.width > maxWidth ? maxWidth : metadata.width;
    
    await image
      .resize(resizeWidth, null, { withoutEnlargement: true })
      .webp({ quality })
      .toFile(outputPath.replace(/\.(jpg|jpeg|png)$/i, '.webp'));
    
    // Also create optimized jpg/png for fallback
    const ext = path.extname(inputPath).toLowerCase();
    if (ext === '.jpg' || ext === '.jpeg') {
      await sharp(inputPath)
        .resize(resizeWidth, null, { withoutEnlargement: true })
        .jpeg({ quality, progressive: true })
        .toFile(outputPath);
    } else if (ext === '.png') {
      await sharp(inputPath)
        .resize(resizeWidth, null, { withoutEnlargement: true })
        .png({ quality: Math.round(quality / 10), compressionLevel: 9 })
        .toFile(outputPath);
    }
    
    const originalSize = fs.statSync(inputPath).size;
    const newSize = fs.statSync(outputPath).size;
    const savings = ((originalSize - newSize) / originalSize * 100).toFixed(1);
    
    console.log(`✅ ${path.basename(inputPath)}: ${(originalSize/1024).toFixed(0)}KB → ${(newSize/1024).toFixed(0)}KB (${savings}% smaller)`);
    
  } catch (error) {
    console.error(`❌ Error optimizing ${inputPath}:`, error.message);
  }
}

async function main() {
  console.log('🖼️  Starting image optimization...\n');
  
  const files = fs.readdirSync(publicDir);
  
  for (const file of files) {
    const inputPath = path.join(publicDir, file);
    const stat = fs.statSync(inputPath);
    
    // Skip directories and non-image files
    if (stat.isDirectory()) continue;
    if (!/\.(jpg|jpeg|png)$/i.test(file)) continue;
    
    // Determine optimization settings based on filename
    let width, quality;
    
    if (file.includes('hero') || file.includes('herosection')) {
      width = settings.hero.width;
      quality = settings.hero.quality;
    } else if (file.includes('learner') || file.includes('avatar') || file.includes('student')) {
      width = settings.thumbnail.width;
      quality = settings.thumbnail.quality;
    } else {
      width = settings.general.width;
      quality = settings.general.quality;
    }
    
    const outputPath = path.join(optimizedDir, file);
    await optimizeImage(inputPath, outputPath, width, quality);
  }
  
  console.log('\n✨ Image optimization complete!');
  console.log('📁 Optimized images saved to: public/optimized/');
  console.log('\nNext step: Replace image paths in your components to use optimized versions.');
}

main();
