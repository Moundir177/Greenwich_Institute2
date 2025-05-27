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
async function downloadMissingImages() {
  try {
    // Ensure directories exist
    const directories = [
      'public/images',
      'public/images/testimonials',
      'public/testimonials',
      'public/images/avatars',
      'public/images/courses',
      'public/images/partners',
      'public/images/certificates',
      'public/images/accreditations'
    ];
    
    for (const dir of directories) {
      ensureDirectoryExists(dir);
    }

    // Testimonials images
    const testimonialImages = [
      {
        url: 'https://randomuser.me/api/portraits/men/32.jpg',
        path: 'public/testimonials/student1.jpg'
      },
      {
        url: 'https://randomuser.me/api/portraits/women/44.jpg',
        path: 'public/testimonials/student2.jpg'
      },
      {
        url: 'https://randomuser.me/api/portraits/men/22.jpg',
        path: 'public/testimonials/student3.jpg'
      },
      {
        url: 'https://randomuser.me/api/portraits/women/68.jpg',
        path: 'public/testimonials/student4.jpg'
      }
    ];
    
    // Course images
    const courseImages = [
      {
        url: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=800&auto=format&fit=crop',
        path: 'public/images/courses/business-management.jpg'
      },
      {
        url: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800&auto=format&fit=crop',
        path: 'public/images/courses/data-science.jpg'
      },
      {
        url: 'https://images.unsplash.com/photo-1563986768494-4dee2763ff3f?q=80&w=800&auto=format&fit=crop',
        path: 'public/images/courses/digital-marketing.jpg'
      },
      {
        url: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=800&auto=format&fit=crop',
        path: 'public/images/courses/web-development.jpg'
      }
    ];
    
    // Accreditation logos
    const accreditationImages = [
      {
        url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/76/Asqa-logo.svg/200px-Asqa-logo.svg.png',
        path: 'public/images/accreditations/logo1.png'
      },
      {
        url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4e/QAA-logo-mono.svg/200px-QAA-logo-mono.svg.png',
        path: 'public/images/accreditations/logo2.png'
      },
      {
        url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/University_of_Cambridge_logo.svg/200px-University_of_Cambridge_logo.svg.png',
        path: 'public/images/accreditations/logo3.png'
      },
      {
        url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/58/Unesco_logo.svg/200px-Unesco_logo.svg.png',
        path: 'public/images/accreditations/logo4.png'
      }
    ];
    
    // Download all images
    const allImages = [...testimonialImages, ...courseImages, ...accreditationImages];
    
    for (const img of allImages) {
      if (!fs.existsSync(img.path)) {
        await downloadImage(img.url, img.path);
      } else {
        console.log(`File already exists: ${img.path}`);
      }
    }

    console.log('All missing images downloaded successfully!');
  } catch (error) {
    console.error('Error downloading images:', error);
  }
}

// Run the main function
downloadMissingImages(); 