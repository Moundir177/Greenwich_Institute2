// copy-routes.js - Cross-platform file copy
const fs = require('fs');
const path = require('path');

console.log('Copying _routes.json to out directory...');

try {
  const sourcePath = path.join(__dirname, 'public', '_routes.json');
  const destPath = path.join(__dirname, 'out', '_routes.json');
  
  if (fs.existsSync(sourcePath)) {
    // Read source file
    const data = fs.readFileSync(sourcePath);
    
    // Create directory if it doesn't exist
    if (!fs.existsSync(path.dirname(destPath))) {
      fs.mkdirSync(path.dirname(destPath), { recursive: true });
    }
    
    // Write to destination
    fs.writeFileSync(destPath, data);
    console.log('Successfully copied _routes.json to out directory');
  } else {
    console.error('Source file not found:', sourcePath);
    
    // Create default _routes.json if source doesn't exist
    const defaultRoutes = {
      "version": 1,
      "include": ["/*"],
      "exclude": ["/build/*", "/images/*", "/fonts/*", "/_next/*", "/favicon.ico", "/robots.txt"]
    };
    
    if (!fs.existsSync(path.dirname(destPath))) {
      fs.mkdirSync(path.dirname(destPath), { recursive: true });
    }
    
    fs.writeFileSync(destPath, JSON.stringify(defaultRoutes, null, 2));
    console.log('Created default _routes.json in out directory');
  }
} catch (error) {
  console.error('Error copying _routes.json:', error.message);
  process.exit(1);
} 