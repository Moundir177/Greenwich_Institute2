// debug-build.js
const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');
const os = require('os');

console.log('Starting debug build process...');

// Check if we're on Windows
const isWindows = os.platform() === 'win32';
const deleteCmd = isWindows ? 'rmdir /s /q' : 'rm -rf';

try {
  // Clean previous build artifacts
  console.log('Cleaning previous build artifacts...');
  if (fs.existsSync('.next')) {
    try {
      if (isWindows) {
        execSync('rmdir /s /q .next', { stdio: 'inherit' });
      } else {
        execSync('rm -rf .next', { stdio: 'inherit' });
      }
    } catch (e) {
      console.log('Failed to delete .next directory, continuing anyway:', e.message);
    }
  }
  
  if (fs.existsSync('out')) {
    try {
      if (isWindows) {
        execSync('rmdir /s /q out', { stdio: 'inherit' });
      } else {
        execSync('rm -rf out', { stdio: 'inherit' });
      }
    } catch (e) {
      console.log('Failed to delete out directory, continuing anyway:', e.message);
    }
  }

  // Install dependencies
  console.log('Installing dependencies...');
  execSync('npm ci', { stdio: 'inherit' });

  // Run build
  console.log('Building Next.js app...');
  execSync('npm run build', { stdio: 'inherit' });

  // Check build output
  console.log('Checking build output structure...');
  if (fs.existsSync('out')) {
    console.log('Static export (out directory) exists.');
    const outFiles = fs.readdirSync('out');
    console.log(`Files in out directory: ${outFiles.join(', ')}`);
  } else {
    console.log('Static export (out directory) does not exist.');
  }

  if (fs.existsSync('.next')) {
    console.log('.next directory exists.');
    const nextFiles = fs.readdirSync('.next');
    console.log(`Files in .next directory: ${nextFiles.join(', ')}`);
  } else {
    console.log('.next directory does not exist.');
  }

  // Create _routes.json for Cloudflare Pages if it doesn't exist
  if (fs.existsSync('out') && !fs.existsSync(path.join('out', '_routes.json'))) {
    console.log('Creating _routes.json for Cloudflare Pages...');
    const routesJson = {
      version: 1,
      include: ["/*"],
      exclude: ["/build/*", "/images/*", "/fonts/*", "/_next/*", "/favicon.ico", "/robots.txt"]
    };
    fs.writeFileSync(path.join('out', '_routes.json'), JSON.stringify(routesJson, null, 2));
  }

  console.log('Debug build process completed successfully!');
} catch (error) {
  console.error('Error during build process:', error.message);
  process.exit(1);
} 