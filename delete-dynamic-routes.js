// delete-dynamic-routes.js
const fs = require('fs');
const path = require('path');
const os = require('os');

console.log('Starting dynamic routes cleanup...');

// Problematic directory paths (relative to project root)
const problematicPaths = [
  'src/app/dashboard/community/groups/[id]',
  'src/app/dashboard/courses/[slug]',
  // Find and add all other dynamic route directories recursively
];

// Function to find dynamic route directories recursively
function findDynamicRoutes(dir = 'src/app', dynamicDirs = []) {
  if (!fs.existsSync(dir)) return dynamicDirs;
  
  const files = fs.readdirSync(dir);
  
  for (const file of files) {
    const filePath = path.join(dir, file);
    const stats = fs.statSync(filePath);
    
    if (stats.isDirectory()) {
      // If directory name contains [ and ], it's a dynamic route
      if (file.includes('[') && file.includes(']')) {
        dynamicDirs.push(filePath);
      } else {
        // Otherwise, recursively search inside
        findDynamicRoutes(filePath, dynamicDirs);
      }
    }
  }
  
  return dynamicDirs;
}

// Find all dynamic routes
const allDynamicRoutes = findDynamicRoutes();
console.log('Found dynamic routes:', allDynamicRoutes);

// Add the found dynamic routes to our list
problematicPaths.push(...allDynamicRoutes.filter(dir => !problematicPaths.includes(dir)));

// Delete directories
for (const dirPath of problematicPaths) {
  try {
    if (fs.existsSync(dirPath)) {
      console.log(`Removing problematic dynamic route: ${dirPath}`);
      
      if (os.platform() === 'win32') {
        // Windows
        require('child_process').execSync(`rmdir /s /q "${dirPath}"`, { stdio: 'inherit' });
      } else {
        // Unix-like
        require('child_process').execSync(`rm -rf "${dirPath}"`, { stdio: 'inherit' });
      }
      
      console.log(`Successfully removed: ${dirPath}`);
    } else {
      console.log(`Directory not found: ${dirPath}`);
    }
  } catch (error) {
    console.error(`Error removing ${dirPath}:`, error.message);
  }
}

console.log('Dynamic routes cleanup completed.'); 