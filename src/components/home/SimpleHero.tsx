import Link from 'next/link';

export default function SimpleHero() {
  return (
    <div style={{ backgroundColor: '#012169', padding: '4rem 0' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 1rem' }}>
        <div style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto' }}>
          <h1 style={{ 
            fontSize: '3rem', 
            fontWeight: 'bold', 
            color: '#FFFFFF', 
            lineHeight: '1.2',
            fontFamily: 'Playfair Display, serif' 
          }}>
            <span style={{ display: 'block' }}>Excellence in</span>
            <span style={{ color: '#FFD700' }}>Education</span>
          </h1>
          <p style={{ 
            marginTop: '1.5rem', 
            fontSize: '1.25rem', 
            color: 'rgba(255, 255, 255, 0.9)' 
          }}>
            Join one of the UK's premier institutes offering world-class courses, certifications, and professional development opportunities.
          </p>
          <div style={{ 
            marginTop: '2.5rem', 
            display: 'flex', 
            flexDirection: 'row', 
            gap: '1rem',
            justifyContent: 'center' 
          }}>
            <Link 
              href="/courses" 
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                padding: '0.75rem 1.5rem',
                border: 'none',
                borderRadius: '0.375rem',
                fontSize: '1.125rem',
                fontWeight: '500',
                color: 'white',
                backgroundColor: '#C8102E',
                textDecoration: 'none'
              }}
            >
              Browse Courses
            </Link>
            <Link 
              href="/contact" 
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                padding: '0.75rem 1.5rem',
                border: 'none',
                borderRadius: '0.375rem',
                fontSize: '1.125rem',
                fontWeight: '500',
                color: '#012169',
                backgroundColor: '#FFFFFF',
                textDecoration: 'none'
              }}
            >
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
} 