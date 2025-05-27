const fs = require('fs');
const path = require('path');

// List of directories to update
const pageDirs = [
  'services',
  'testimonials',
  'news-events',
  'partnerships',
  'faq',
  'contact'
];

// Function to update a page file
function updatePageFile(filePath) {
  if (!fs.existsSync(filePath)) {
    console.log(`File not found: ${filePath}`);
    return;
  }

  let content = fs.readFileSync(filePath, 'utf8');
  
  // Check if PageLayout is already imported
  if (!content.includes("import PageLayout from '../components/PageLayout'")) {
    // Add PageLayout import
    content = content.replace(
      /import.*from.*/,
      match => `${match}\nimport PageLayout from '../components/PageLayout';`
    );
  }
  
  // Replace the outer div with PageLayout
  content = content.replace(
    /<div className={\`min-h-screen.*\`}>/,
    '<PageLayout>'
  );
  
  // Replace the closing div with PageLayout closing
  content = content.replace(
    /<\/div>(\s*)(export default|})/, 
    '</PageLayout>$1$2'
  );
  
  // Remove any existing CallToAction component if it exists
  content = content.replace(
    /<section className="py-12 md:py-16 bg-gradient-to-br from-dark-blue to-blue-900 text-white.*<\/section>/s,
    ''
  );
  
  // Write the updated content back to the file
  fs.writeFileSync(filePath, content);
  console.log(`Updated: ${filePath}`);
}

// Process each directory
pageDirs.forEach(dir => {
  const pageFilePath = path.join(__dirname, '..', 'src', 'app', dir, 'page.tsx');
  updatePageFile(pageFilePath);
});

console.log('Page updates completed!'); 