const fs = require('fs');
const path = require('path');

const folderPath = 'M:/thaovy/web/tramthaovy/public/anh_ngok';
const outputFile = 'base64-images.json';

const imageFiles = fs.readdirSync(folderPath).filter(file => {
  return /\.(jpg|jpeg|png|gif)$/i.test(file);
});

const base64Data = {};

imageFiles.forEach(file => {
  const filePath = path.join(folderPath, file);
  const ext = path.extname(file).slice(1);
  const base64 = fs.readFileSync(filePath, { encoding: 'base64' });
  base64Data[file] = `data:image/${ext};base64,${base64}`;
});

fs.writeFileSync(outputFile, JSON.stringify(base64Data, null, 2));
console.log(`✅ Done! Exported ${imageFiles.length} images to ${outputFile}`);
