const fs = require('fs');
const path = require('path');
const https = require('https');
const { execSync } = require('child_process');

// Create directories if they don't exist
const ensureDirectoryExists = (dir) => {
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
    console.log(`Created directory: ${dir}`);
  }
};

// Download image function
const downloadImage = (url, destination) => {
  return new Promise((resolve, reject) => {
    const file = fs.createWriteStream(destination);
    https.get(url, (response) => {
      response.pipe(file);
      file.on('finish', () => {
        file.close();
        console.log(`Downloaded: ${destination}`);
        resolve();
      });
    }).on('error', (err) => {
      fs.unlink(destination, () => {}); // Delete the file if error occurs
      console.error(`Error downloading ${url}:`, err.message);
      reject(err);
    });
  });
};

// Main function
async function downloadAdditionalImages() {
  try {
    // Ensure directories exist
    const directories = [
      'public/images',
      'public/images/testimonials',
      'public/testimonials',
      'public/images/certificates',
      'public/images/videos'
    ];
    
    for (const dir of directories) {
      ensureDirectoryExists(dir);
    }

    // Testimonial video images
    const videoThumbnails = [
      {
        url: 'https://images.unsplash.com/photo-1633613286848-e6f43bbafb8d?q=80&w=800&auto=format&fit=crop',
        path: 'public/images/testimonials/video-1.jpg'
      },
      {
        url: 'https://images.unsplash.com/photo-1576267423445-b2e0074d68a4?q=80&w=800&auto=format&fit=crop',
        path: 'public/images/testimonials/video-2.jpg'
      },
      {
        url: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?q=80&w=800&auto=format&fit=crop',
        path: 'public/images/testimonials/video-3.jpg'
      }
    ];

    // Certificate sample image
    const certificateImages = [
      {
        url: 'https://images.unsplash.com/photo-1589330694653-ded6df03f754?q=80&w=800&auto=format&fit=crop',
        path: 'public/images/certificates/sample-certificate.jpg'
      },
      {
        url: 'https://images.unsplash.com/photo-1471970394675-613138e45da3?q=80&w=800&auto=format&fit=crop',
        path: 'public/images/certificates/certificate-bg.jpg'
      }
    ];
    
    // Download all images
    const allImages = [...videoThumbnails, ...certificateImages];
    
    for (const img of allImages) {
      if (!fs.existsSync(img.path)) {
        await downloadImage(img.url, img.path);
      } else {
        console.log(`File already exists: ${img.path}`);
      }
    }

    console.log('All additional images downloaded successfully!');
  } catch (error) {
    console.error('Error downloading images:', error);
  }
}

// Run the main function
downloadAdditionalImages(); 