const courseData = {
  'business-management': {},
  'digital-marketing': {},
  'project-management': {}
};

export function generateStaticParams() {
  return Object.keys(courseData).map((slug) => ({
    slug: slug,
  }));
} 