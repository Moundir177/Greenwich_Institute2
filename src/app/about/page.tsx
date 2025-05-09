import Image from 'next/image';
import Link from 'next/link';
import { FaGraduationCap, FaUsers, FaGlobe, FaChalkboardTeacher, FaBullseye, FaLightbulb, FaHandshake, FaShieldAlt, FaChevronDown } from 'react-icons/fa';
import Button from '@/components/ui/Button';
import Breadcrumbs from '@/components/ui/Breadcrumbs';
import ImageCarousel from '@/components/ui/ImageCarousel';
import TestimonialCard from '@/components/ui/TestimonialCard';
import Card from '@/components/ui/Card';

export const metadata = {
  title: 'About Us | UK Institute',
  description: 'Learn about UK Institute\'s history, mission, values, and the team of educators shaping the future of education.',
};

const values = [
  {
    title: 'Excellence',
    description: 'We strive for excellence in all aspects of education, from teaching methods to learning resources.',
    icon: <FaGraduationCap className="text-gold text-3xl" />,
  },
  {
    title: 'Innovation',
    description: 'We embrace new technologies and teaching approaches to provide cutting-edge educational experiences.',
    icon: <FaLightbulb className="text-gold text-3xl" />,
  },
  {
    title: 'Inclusivity',
    description: 'We believe education should be accessible to all, regardless of background or circumstances.',
    icon: <FaUsers className="text-gold text-3xl" />,
  },
  {
    title: 'Integrity',
    description: 'We uphold the highest ethical standards in all our educational and business practices.',
    icon: <FaShieldAlt className="text-gold text-3xl" />,
  },
];

const leadershipTeam = [
  {
    name: 'Dr. Elizabeth Wright',
    role: 'President',
    bio: 'Former Dean of Education at Oxford University with over 25 years of experience in higher education leadership.',
    imageSrc: '/images/team/elizabeth-wright.jpg',
  },
  {
    name: 'Professor James Harrison',
    role: 'Academic Director',
    bio: 'PhD in Educational Psychology with expertise in curriculum development and educational technology integration.',
    imageSrc: '/images/team/james-harrison.jpg',
  },
  {
    name: 'Victoria Chen',
    role: 'Chief Operating Officer',
    bio: 'MBA from London Business School with 15+ years of experience in educational institution management.',
    imageSrc: '/images/team/victoria-chen.jpg',
  },
  {
    name: 'Dr. Michael Reynolds',
    role: 'Director of Research',
    bio: 'Renowned researcher in business innovation with numerous published papers in leading academic journals.',
    imageSrc: '/images/team/michael-reynolds.jpg',
  },
];

const stats = [
  { label: 'Founded', value: '1998' },
  { label: 'Students Enrolled', value: '15,000+' },
  { label: 'Courses Offered', value: '200+' },
  { label: 'Expert Instructors', value: '120+' },
  { label: 'Countries Represented', value: '65+' },
  { label: 'Completion Rate', value: '94%' },
];

const campusImages = [
  {
    src: '/images/campus/campus-1.jpg',
    alt: 'UK Institute main building',
    caption: 'Our modern London campus in the heart of the city'
  },
  {
    src: '/images/campus/campus-2.jpg',
    alt: 'UK Institute library',
    caption: 'Our comprehensive library with digital and physical resources'
  },
  {
    src: '/images/campus/campus-3.jpg',
    alt: 'UK Institute classroom',
    caption: 'State-of-the-art classrooms with advanced technology'
  },
  {
    src: '/images/campus/campus-4.jpg',
    alt: 'UK Institute student lounge',
    caption: 'Comfortable student spaces designed for collaboration'
  },
];

const testimonials = [
  {
    quote: "UK Institute transformed my understanding of educational leadership. The faculty are truly world-class, and the networking opportunities were invaluable for my career progression.",
    name: "Dr. Sarah Johnson",
    title: "School Principal, Graduated 2018",
    imageSrc: "/images/testimonials/sarah.jpg",
    rating: 5
  },
  {
    quote: "As an international student, I found UK Institute to be incredibly welcoming. The inclusive environment and comprehensive support services helped me thrive far from home.",
    name: "Ahmed Hassan",
    title: "Digital Marketing Specialist, Graduated 2020",
    imageSrc: "/images/testimonials/ahmed.jpg",
    rating: 5
  },
  {
    quote: "The industry connections at UK Institute are unparalleled. Before graduation, I already had three job offers thanks to the career development program and industry partnerships.",
    name: "Emma Thompson",
    title: "Business Analyst, Graduated 2021",
    imageSrc: "/images/testimonials/emma.jpg",
    rating: 5
  }
];

export default function AboutPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="hero-enhanced">
        <div className="pattern-overlay"></div>
        <div className="hero-particles">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="hero-particle"
              style={{
                width: `${Math.random() * 20 + 5}px`,
                height: `${Math.random() * 20 + 5}px`,
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDuration: `${Math.random() * 20 + 10}s`,
                animationDelay: `${Math.random() * 5}s`,
              }}
            />
          ))}
        </div>
        <div className="highlight-circle"></div>
        <div className="highlight-circle"></div>
        <div className="highlight-circle"></div>
        <div className="container hero-content">
          <div className="text-center">
            <h1 className="text-uk-white animate-bounceIn">
              About <span className="text-gold text-shadow-gold shimmer">UK Institute</span>
            </h1>
            <p className="text-xl text-uk-white/90 max-w-3xl mx-auto animate-slideUpFade" style={{ animationDelay: '0.3s' }}>
              Transforming lives through quality education and innovative learning experiences since 1998.
            </p>
            <div className="mt-8 animate-scaleIn" style={{ animationDelay: '0.6s' }}>
              <Button 
                href="#our-story" 
                variant="gold"
                className="btn-hoverglow"
                icon={<FaGraduationCap />}
              >
                Discover Our Story
              </Button>
            </div>
          </div>
        </div>
        <div className="scroll-indicator animate-fadeIn" style={{ animationDelay: '1.2s' }}>
          <div className="mouse"></div>
          <p>Scroll Down</p>
        </div>
      </section>

      {/* Breadcrumbs */}
      <div className="bg-gray-50 border-b border-gray-100">
        <div className="container py-2">
          <Breadcrumbs
            items={[{ label: 'About Us' }]}
          />
        </div>
      </div>
      
      {/* Our Story Section */}
      <section id="our-story" className="section bg-uk-white">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-slideRight">
              <span className="badge badge-primary animate-scaleIn">Our Journey</span>
              <h2 className="text-3xl font-serif font-bold text-uk-blue mb-6 gradient-text">Our Story</h2>
              <p className="mb-6 leading-relaxed">
                UK Institute was founded in 1998 with a vision to provide accessible, high-quality education that adapts to the changing needs of students and industry. What began as a small training center in London has grown into a leading educational institution with global reach.
              </p>
              <p className="mb-6 leading-relaxed">
                Our journey has been marked by continuous innovation and an unwavering commitment to educational excellence. We pioneered blended learning approaches in the early 2000s and were among the first institutions to offer fully accredited online courses in business and technology.
              </p>
              <p className="leading-relaxed">
                Today, UK Institute stands as a beacon of educational innovation, offering diverse learning pathways that combine academic rigor with practical skills development. Our graduates are sought after by employers worldwide for their comprehensive knowledge and adaptable skills.
              </p>
            </div>
            <div className="rounded-lg overflow-hidden shadow-xl transform hover:rotate-1 transition-all duration-500 animate-slideLeft uk-border-gradient p-2">
              <Image 
                src="/images/about/institute-history.jpg" 
                alt="UK Institute campus over the years"
                width={600}
                height={400}
                className="w-full h-auto rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>
      
      {/* Mission & Vision Section */}
      <section className="section bg-gray-50">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="section-title text-uk-blue">Our <span className="text-shadow-gold">Mission & Vision</span></h2>
            <p className="text-lg max-w-3xl mx-auto">
              Guided by clear purpose and forward-thinking aspirations
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="card-conic-gradient animate-fadeIn">
              <div className="card-inner">
                <div className="flex items-center mb-4">
                  <div className="mr-4 bg-uk-blue rounded-full p-3 text-gold">
                    <FaGraduationCap size={30} />
                  </div>
                  <h3 className="text-2xl font-serif font-bold text-uk-blue">Our Mission</h3>
                </div>
                <p className="leading-relaxed">
                  To empower individuals through exceptional education that combines theoretical knowledge with practical skills, fostering personal growth and professional success in a rapidly evolving global landscape.
                </p>
                <ul className="mt-6 space-y-3">
                  <li className="flex items-start">
                    <span className="text-uk-blue mr-2">•</span>
                    <span>Deliver innovative, industry-relevant education</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-uk-blue mr-2">•</span>
                    <span>Nurture critical thinking and problem-solving skills</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-uk-blue mr-2">•</span>
                    <span>Foster a diverse and inclusive learning community</span>
                  </li>
                </ul>
              </div>
            </div>
            
            <div className="card-conic-gradient animate-fadeIn" style={{ animationDelay: '0.2s' }}>
              <div className="card-inner">
                <div className="flex items-center mb-4">
                  <div className="mr-4 bg-uk-red rounded-full p-3 text-uk-white">
                    <FaBullseye size={30} />
                  </div>
                  <h3 className="text-2xl font-serif font-bold text-uk-blue">Our Vision</h3>
                </div>
                <p className="leading-relaxed">
                  To be recognized globally as a leader in innovative education that bridges academic excellence with real-world application, creating transformative learning experiences that prepare students to thrive in an ever-changing world.
                </p>
                <ul className="mt-6 space-y-3">
                  <li className="flex items-start">
                    <span className="text-uk-red mr-2">•</span>
                    <span>Lead in educational innovation and technology integration</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-uk-red mr-2">•</span>
                    <span>Create a global network of successful alumni and partners</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-uk-red mr-2">•</span>
                    <span>Set new standards for accessible, high-quality education</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Values Section */}
      <section className="section bg-uk-white">
        <div className="container">
          <div className="text-center mb-12">
            <span className="badge badge-gold animate-flipIn">Our Guiding Principles</span>
            <h2 className="section-title text-uk-blue mt-4">Our Core <span className="text-gold">Values</span></h2>
            <p className="text-lg max-w-3xl mx-auto">
              The principles that guide everything we do
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="card-3d animate-fadeIn" style={{ animationDelay: `${index * 0.1}s` }}>
                <Card 
                  variant="default" 
                  hoverEffect={true}
                  className="text-center h-full"
                >
                  <div className="flex justify-center mb-4">
                    {value.icon}
                  </div>
                  <h3 className="text-uk-blue text-xl font-bold mb-3">{value.title}</h3>
                  <p>{value.description}</p>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Stats Section */}
      <section className="py-16 bg-uk-blue text-uk-white pattern-grid">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-serif font-bold text-gold text-shadow-gold mb-4">UK Institute at a Glance</h2>
            <p className="text-lg text-uk-white/90 max-w-3xl mx-auto">
              Our impact in numbers
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {stats.map((stat, index) => (
              <div 
                key={index} 
                className="glass text-center p-6 rounded-lg animate-flipIn"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="text-gold text-3xl font-bold mb-2 animate-pulse shimmer">{stat.value}</div>
                <div className="text-uk-white/80 text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Wave Separator */}
      <div className="wave-separator white">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 100" preserveAspectRatio="none">
          <path d="M0,50 C150,100 350,0 500,50 C650,100 800,0 1000,50 C1200,100 1350,0 1440,50 L1440,100 L0,100 Z"></path>
        </svg>
      </div>
      
      {/* Leadership Team Section */}
      <section className="section bg-uk-white">
        <div className="container">
          <div className="text-center mb-12">
            <span className="badge badge-primary animate-dropIn">Meet Our Team</span>
            <h2 className="section-title text-uk-blue mt-4">Our <span className="text-gold">Leadership Team</span></h2>
            <p className="text-lg max-w-3xl mx-auto">
              Meet the experienced professionals guiding our institution
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {leadershipTeam.map((member, index) => (
              <div key={index} className="animate-scaleIn" style={{ animationDelay: `${index * 0.15}s` }}>
                <Card 
                  variant="bordered"
                  withImage={true}
                  imageSrc={member.imageSrc || "/images/team/placeholder.jpg"}
                  imageAlt={member.name}
                  className="uk-border-gradient"
                >
                  <h3 className="text-uk-blue font-bold text-xl mb-1">{member.name}</h3>
                  <p className="text-uk-red font-medium mb-3">{member.role}</p>
                  <p className="text-gray-600">{member.bio}</p>
                </Card>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-12 animate-fadeIn" style={{ animationDelay: '0.8s' }}>
            <Button href="/team" variant="outline" className="btn-3d">
              View Full Team
            </Button>
          </div>
        </div>
      </section>
      
      {/* Campus Section */}
      <section className="section bg-gray-50 pattern-dots">
        <div className="container">
          <div className="text-center mb-12">
            <span className="badge badge-secondary animate-flipIn">Our Facilities</span>
            <h2 className="section-title text-uk-blue mt-4">Our <span className="text-gold text-shadow-gold">Campus</span></h2>
            <p className="text-lg max-w-3xl mx-auto">
              State-of-the-art facilities designed for optimal learning
            </p>
          </div>
          
          <div className="bg-white rounded-lg shadow-lg overflow-hidden animate-fadeIn uk-border-gradient p-2">
            <ImageCarousel images={campusImages} />
          </div>
          
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="animate-slideUp" style={{ animationDelay: '0.1s' }}>
              <Card 
                variant="gradient" 
                color="blue" 
              >
                <div className="corner-dots top-right"></div>
                <h3 className="text-xl font-bold mb-3">Central Location</h3>
                <p>Our campus is located in the heart of London, easily accessible by public transportation and close to major cultural attractions.</p>
              </Card>
            </div>
            <div className="animate-slideUp" style={{ animationDelay: '0.3s' }}>
              <Card 
                variant="gradient" 
                color="gold" 
              >
                <div className="corner-dots top-right"></div>
                <h3 className="text-xl font-bold mb-3">Modern Facilities</h3>
                <p>Every classroom is equipped with the latest technology, and our learning spaces are designed to foster collaboration and innovation.</p>
              </Card>
            </div>
            <div className="animate-slideUp" style={{ animationDelay: '0.5s' }}>
              <Card 
                variant="gradient" 
                color="red" 
              >
                <div className="corner-dots top-right"></div>
                <h3 className="text-xl font-bold mb-3">Student Resources</h3>
                <p>From our extensive library to dedicated study spaces and career centers, we provide everything students need to succeed.</p>
              </Card>
            </div>
          </div>
        </div>
      </section>
      
      {/* Testimonials Section */}
      <section className="section bg-uk-white">
        <div className="container">
          <div className="text-center mb-12">
            <span className="badge badge-gold animate-flipIn">Success Stories</span>
            <h2 className="section-title text-uk-blue mt-4">Student <span className="text-gold">Testimonials</span></h2>
            <p className="text-lg max-w-3xl mx-auto">
              Hear from our alumni about their experiences
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="animate-fadeIn" style={{ animationDelay: `${index * 0.2}s` }}>
                <div className="testimonial shimmer">
                  <div className="testimonial-content">
                    {testimonial.quote}
                  </div>
                  <div className="testimonial-author">
                    <div className="testimonial-avatar">
                      <Image 
                        src={testimonial.imageSrc || "/images/testimonials/placeholder.jpg"} 
                        alt={testimonial.name}
                        width={64}
                        height={64}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="testimonial-info">
                      <h4>{testimonial.name}</h4>
                      <p>{testimonial.title}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-12 animate-fadeIn" style={{ animationDelay: '0.8s' }}>
            <Button 
              href="/testimonials" 
              variant="primary"
              className="btn-hoverglow"
              icon={<FaUsers />}
            >
              Read More Stories
            </Button>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-16 bg-uk-blue">
        <div className="container">
          <div className="callout-ribbon rounded-xl p-12 text-center">
            <div className="content">
              <h2 className="text-3xl font-serif font-bold text-gold text-shadow-gold mb-6">Join Our Educational Community</h2>
              <p className="text-xl text-uk-white mb-8 max-w-3xl mx-auto">
                Discover how UK Institute can help you achieve your educational and career goals through our diverse range of programs and supportive learning environment.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center animate-scaleIn">
                <Button href="/courses" variant="gold" className="btn-3d">
                  Explore Our Courses
                </Button>
                <Button href="/contact" variant="white" className="btn-3d">
                  Contact Us
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
} 