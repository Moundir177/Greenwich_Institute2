import { FaUserGraduate, FaBriefcase, FaLaptop, FaGlobe, FaChalkboardTeacher, FaUsers, FaBook, FaHandshake, FaArrowRight, FaBuilding, FaChevronDown } from 'react-icons/fa';
import Button from '@/components/ui/Button';
import Card from '@/components/ui/Card';
import Image from 'next/image';

export const metadata = {
  title: 'Our Services | UK Institute',
  description: 'Explore the comprehensive range of educational services offered by UK Institute.',
};

const academicServices = [
  {
    icon: <FaUserGraduate className="text-2xl" />,
    title: 'Degree Programs',
    description: 'Accredited undergraduate and postgraduate degree programs across various disciplines designed to provide comprehensive theoretical knowledge and practical skills.',
  },
  {
    icon: <FaBriefcase className="text-2xl" />,
    title: 'Professional Certifications',
    description: 'Industry-recognized certification programs that enhance your professional credentials and expand your career opportunities.',
  },
  {
    icon: <FaLaptop className="text-2xl" />,
    title: 'Online Learning',
    description: 'Flexible online courses and programs that allow you to learn at your own pace from anywhere in the world.',
  },
  {
    icon: <FaGlobe className="text-2xl" />,
    title: 'International Programs',
    description: 'Global exchange opportunities and international certifications that provide a broader perspective and global recognition.',
  },
];

const supportServices = [
  {
    icon: <FaChalkboardTeacher className="text-2xl" />,
    title: 'Career Counseling',
    description: 'Personalized guidance to help you make informed decisions about your educational and career path.',
  },
  {
    icon: <FaUsers className="text-2xl" />,
    title: 'Alumni Network',
    description: 'Access to our extensive alumni network for mentorship, networking, and professional development opportunities.',
  },
  {
    icon: <FaBook className="text-2xl" />,
    title: 'Library Resources',
    description: 'Comprehensive digital and physical library with extensive academic resources, journals, and research materials.',
  },
  {
    icon: <FaHandshake className="text-2xl" />,
    title: 'Industry Partnerships',
    description: 'Connections with leading companies for internships, job placements, and collaborative projects.',
  },
];

const serviceProcess = [
  {
    number: '01',
    title: 'Assessment',
    description: 'We begin by understanding your educational needs, goals, and preferences through a comprehensive assessment.'
  },
  {
    number: '02',
    title: 'Customization',
    description: 'Based on your assessment, we develop a personalized learning plan tailored to your specific requirements.'
  },
  {
    number: '03',
    title: 'Implementation',
    description: 'Our expert educators and support staff implement your learning plan with the highest standards of quality.'
  },
  {
    number: '04',
    title: 'Monitoring',
    description: 'We continuously monitor your progress and provide feedback to ensure you\'re on track to achieve your goals.'
  },
  {
    number: '05',
    title: 'Evaluation',
    description: 'Regular evaluations help us identify areas for improvement and make necessary adjustments to your learning plan.'
  },
  {
    number: '06',
    title: 'Success',
    description: 'We celebrate your achievements and provide ongoing support to help you succeed in your future endeavors.'
  }
];

export default function ServicesPage() {
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
              Our <span className="text-gold text-shadow-gold shimmer">Services</span>
            </h1>
            <p className="text-xl text-uk-white/90 max-w-3xl mx-auto animate-slideUpFade" style={{ animationDelay: '0.3s' }}>
              Comprehensive educational services designed to support your learning journey from enrollment to graduation and beyond.
            </p>
            <div className="mt-8 animate-scaleIn" style={{ animationDelay: '0.6s' }}>
              <Button 
                href="#academic-services" 
                variant="gold"
                effect="hoverglow"
                icon={<FaArrowRight />}
              >
                Explore Our Services
              </Button>
            </div>
          </div>
        </div>
        <div className="scroll-indicator animate-fadeIn" style={{ animationDelay: '1.2s' }}>
          <div className="mouse"></div>
          <p>Scroll Down</p>
        </div>
      </section>
      
      {/* Introduction */}
      <section className="section bg-uk-white">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="section-title text-uk-blue">
              <span className="gradient-text">Comprehensive Educational Solutions</span>
            </h2>
            <p className="text-lg max-w-3xl mx-auto animate-slideUpFade">
              At UK Institute, we offer a wide range of services designed to enhance your educational experience and help you achieve your career goals. From academic programs to student support services, we're committed to supporting your success at every step.
            </p>
          </div>
        </div>
      </section>
      
      {/* Academic Services */}
      <section id="academic-services" className="section bg-gray-50 pattern-dots">
        <div className="container">
          <div className="mb-12">
            <span className="badge badge-primary animate-flipIn">What We Offer</span>
            <h2 className="mt-4 section-title text-uk-blue">
              Academic <span className="text-gold text-shadow-gold">Services</span>
            </h2>
            <p className="mt-4 text-lg max-w-3xl animate-slideUpFade">
              Our comprehensive academic offerings cater to a wide range of educational needs and career aspirations.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {academicServices.map((service, index) => (
              <div key={index} className="card-3d">
                <Card 
                  variant="elevated" 
                  className="animate-fadeIn"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="flex items-start">
                    <div className="flex-shrink-0 mr-5">
                      <div className="bg-uk-blue rounded-full p-4 text-gold shimmer">
                        {service.icon}
                      </div>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-uk-blue mb-2">{service.title}</h3>
                      <p>{service.description}</p>
                    </div>
                  </div>
                </Card>
              </div>
            ))}
          </div>
          
          <div className="mt-12 text-center animate-fadeIn" style={{ animationDelay: '0.5s' }}>
            <Button 
              href="/courses" 
              variant="primary" 
              icon={<FaUserGraduate />}
              effect="3d"
            >
              View Our Courses
            </Button>
          </div>
        </div>
      </section>
      
      {/* Support Services */}
      <section className="section bg-uk-white">
        <div className="container">
          <div className="mb-12">
            <span className="badge badge-secondary animate-flipIn">Student Success</span>
            <h2 className="mt-4 section-title text-uk-blue">
              Support <span className="text-uk-red">Services</span>
            </h2>
            <p className="mt-4 text-lg max-w-3xl animate-slideUpFade">
              We provide comprehensive support services to ensure you have everything you need to succeed in your educational journey.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {supportServices.map((service, index) => (
              <div key={index} className="uk-border-gradient">
                <Card 
                  variant="bordered" 
                  className="animate-fadeIn"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="flex items-start">
                    <div className="flex-shrink-0 mr-5">
                      <div className="bg-uk-red rounded-full p-4 text-uk-white shimmer">
                        {service.icon}
                      </div>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-uk-blue mb-2">{service.title}</h3>
                      <p>{service.description}</p>
                    </div>
                  </div>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Wave Separator */}
      <div className="wave-separator uk-blue">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 100" preserveAspectRatio="none">
          <path d="M0,50 C150,100 350,0 500,50 C650,100 800,0 1000,50 C1200,100 1350,0 1440,50 L1440,100 L0,100 Z"></path>
        </svg>
      </div>
      
      {/* Custom Programs */}
      <section className="py-16 bg-uk-blue text-uk-white pattern-grid">
        <div className="container">
          <div className="glass-dark rounded-xl p-12 animate-fadeIn">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="animate-slideRight">
                <span className="badge badge-gold animate-flipIn">Tailored Solutions</span>
                <h2 className="mt-4 text-3xl font-serif font-bold text-gold text-shadow-gold mb-6">Custom Corporate Training</h2>
                <p className="text-uk-white/90 mb-4 animate-slideUpFade" style={{ animationDelay: '0.2s' }}>
                  We work with organizations to develop customized training programs that address specific industry challenges and upskill your workforce. Our tailored corporate solutions include:
                </p>
                <ul className="space-y-3 text-uk-white/90">
                  <li className="flex items-start animate-slideLeft" style={{ animationDelay: '0.3s' }}>
                    <span className="text-gold mr-2">✓</span>
                    <span>Customized curriculum development based on your organization's needs</span>
                  </li>
                  <li className="flex items-start animate-slideLeft" style={{ animationDelay: '0.4s' }}>
                    <span className="text-gold mr-2">✓</span>
                    <span>On-site or virtual training delivery options</span>
                  </li>
                  <li className="flex items-start animate-slideLeft" style={{ animationDelay: '0.5s' }}>
                    <span className="text-gold mr-2">✓</span>
                    <span>Industry-specific certifications and compliance training</span>
                  </li>
                  <li className="flex items-start animate-slideLeft" style={{ animationDelay: '0.6s' }}>
                    <span className="text-gold mr-2">✓</span>
                    <span>Leadership and management development programs</span>
                  </li>
                  <li className="flex items-start animate-slideLeft" style={{ animationDelay: '0.7s' }}>
                    <span className="text-gold mr-2">✓</span>
                    <span>Assessment and reporting on training effectiveness</span>
                  </li>
                </ul>
                <div className="mt-8 animate-scaleIn" style={{ animationDelay: '0.8s' }}>
                  <Button 
                    href="/contact" 
                    variant="gold" 
                    icon={<FaBuilding />}
                    effect="hoverglow"
                  >
                    Inquire About Corporate Training
                  </Button>
                </div>
              </div>
              <div className="relative h-[400px] w-full rounded-lg overflow-hidden shadow-xl animate-slideLeft uk-border-gradient p-1">
                <Image 
                  src="/images/services/corporate-training.jpg" 
                  alt="Corporate Training"
                  fill
                  className="object-cover rounded-lg"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-uk-blue-dark/70 to-transparent"></div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Service Process */}
      <section className="section bg-gray-50">
        <div className="container">
          <div className="text-center mb-12">
            <span className="badge badge-primary animate-flipIn">How We Work</span>
            <h2 className="section-title text-uk-blue mt-4">
              Our Service <span className="text-gold">Process</span>
            </h2>
            <p className="text-lg max-w-3xl mx-auto animate-slideUpFade">
              A streamlined approach to delivering exceptional educational services
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {serviceProcess.map((step, index) => (
              <div key={index} className="card-3d">
                <Card 
                  variant={index % 2 === 0 ? "gradient" : "glass"} 
                  color={index % 3 === 0 ? "blue" : index % 3 === 1 ? "gold" : "red"}
                  className="animate-fadeIn"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="relative">
                    <div className="absolute -top-4 -left-4 bg-white/10 rounded-full w-12 h-12 flex items-center justify-center font-serif font-bold text-xl shimmer">
                      {step.number}
                    </div>
                    <div className="corner-dots top-right"></div>
                    <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                    <p>{step.description}</p>
                  </div>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* FAQ Section */}
      <section className="section bg-uk-white">
        <div className="container">
          <div className="text-center mb-12">
            <span className="badge badge-gold animate-flipIn">Common Questions</span>
            <h2 className="section-title text-uk-blue mt-4">
              Frequently Asked <span className="text-gold">Questions</span>
            </h2>
            <p className="text-lg max-w-3xl mx-auto animate-slideUpFade">
              Answers to common questions about our services
            </p>
          </div>
          
          <div className="max-w-3xl mx-auto">
            <div className="space-y-6">
              {[
                {
                  question: "Are your courses accredited?",
                  answer: "Yes, all our degree programs and many of our professional certifications are fully accredited by recognized education authorities and industry bodies, ensuring your qualifications are valued by employers worldwide."
                },
                {
                  question: "Can I transfer credits from another institution?",
                  answer: "We accept transfer credits from recognized institutions for many of our programs. The number of credits accepted depends on the program and the institution. Contact our admissions team for a personalized credit evaluation."
                },
                {
                  question: "What support is available for international students?",
                  answer: "We offer comprehensive support for international students, including visa assistance, English language support, cultural orientation, accommodation guidance, and dedicated international student advisors."
                },
                {
                  question: "Do you offer financial aid or scholarships?",
                  answer: "Yes, we offer various financial aid options and scholarships based on academic merit, financial need, and other criteria. Our financial aid office can help you explore all available options."
                },
                {
                  question: "What career services do you provide?",
                  answer: "Our career services include personalized career counseling, resume and interview preparation, job search assistance, networking events, career fairs, and access to our exclusive job portal with opportunities from our industry partners."
                }
              ].map((faq, index) => (
                <div key={index} className="card uk-border-gradient animate-fadeIn" style={{ animationDelay: `${index * 0.15}s` }}>
                  <h3 className="text-lg font-bold text-uk-blue mb-2 gradient-text">{faq.question}</h3>
                  <p>{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-br from-uk-blue-dark to-uk-blue">
        <div className="container">
          <div className="callout-ribbon p-12 rounded-xl bg-white/5 backdrop-blur-lg border border-white/10 animate-fadeIn">
            <div className="content">
              <h2 className="text-3xl font-serif font-bold text-gold text-shadow-gold mb-6">Ready to Start Your Educational Journey?</h2>
              <p className="text-xl text-uk-white mb-8 max-w-3xl mx-auto animate-slideUpFade">
                Contact us today to learn more about our services and how we can help you achieve your educational and career goals.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center animate-scaleIn">
                <Button 
                  href="/courses" 
                  variant="gold"
                  effect="3d"
                >
                  Browse Courses
                </Button>
                <Button 
                  href="/contact" 
                  variant="white"
                  effect="hoverglow"
                >
                  Get in Touch
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
} 