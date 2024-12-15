import fs from 'fs';
import path from 'path';

const listFiles = (dir) => {
  if (!fs.existsSync(dir)) {
    console.error(`Directory does not exist: ${dir}`);
    return;
  }
  const files = fs.readdirSync(dir);
  files.forEach((file) => {
    const filePath = path.join(dir, file);
    const stats = fs.statSync(filePath);
    if (stats.isDirectory()) {
      console.log(`Directory: ${filePath}`);
      listFiles(filePath);
    } else {
      console.log(`File: ${filePath}`);
    }
  });
};

listFiles('src/components/ui');
