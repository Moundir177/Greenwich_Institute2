// Mock course data for static generation
const COURSES = [
  { id: 'find-business-idea' },
  { id: 'data-science' },
  { id: 'business-management' }
];

export function generateStaticParams() {
  return COURSES.map((course) => ({
    id: course.id,
  }));
} 