import Link from 'next/link';
import { FaSearch, FaChevronDown, FaChevronUp } from 'react-icons/fa';
import Button from '@/components/ui/Button';

export const metadata = {
  title: 'Frequently Asked Questions | UK Institute',
  description: 'Find answers to common questions about admissions, courses, payments, certifications, and student support at UK Institute.',
};

const faqCategories = [
  {
    id: 'admissions',
    title: 'Admissions & Enrollment',
    faqs: [
      {
        question: 'What are the entry requirements for your courses?',
        answer: 'Entry requirements vary by course. Most professional courses require a high school diploma or equivalent, while advanced courses may require previous qualifications or experience. Please check the specific course page for detailed requirements or contact our admissions team for guidance.',
      },
      {
        question: 'How do I apply for a course?',
        answer: 'You can apply online through our website. Navigate to your desired course page and click the "Apply Now" or "Enroll" button. Follow the instructions to create an account, complete your application, and submit any required documentation. Our admissions team will review your application and contact you within 5 business days.',
      },
      {
        question: 'Can I enroll in multiple courses simultaneously?',
        answer: 'Yes, you can enroll in multiple courses simultaneously. However, we recommend carefully considering your available time for study. Our advisors can help you create a balanced study plan that allows you to manage multiple courses effectively without compromising your learning experience.',
      },
      {
        question: 'Is there an application deadline?',
        answer: 'Most of our courses have rolling admissions, meaning you can apply at any time. However, some specialized programs have specific start dates and application deadlines. These are clearly indicated on the relevant course pages. We recommend applying at least 2-4 weeks before your intended start date to allow time for processing.',
      },
      {
        question: 'Do you accept international students?',
        answer: 'Yes, we welcome students from around the world. Our online courses are accessible globally. For in-person courses, international students may need to arrange appropriate visas. We provide supporting documentation for visa applications where required. Our enrollment advisors can provide guidance specific to your country of residence.',
      },
    ],
  },
  {
    id: 'courses',
    title: 'Courses & Curriculum',
    faqs: [
      {
        question: 'How long does it take to complete a course?',
        answer: 'Course duration varies depending on the program. Certificate courses typically take 8-12 weeks, diploma programs 6-12 months, and advanced professional qualifications 12-24 months. Most courses allow for flexible pacing, so you can complete them faster or slower depending on your schedule and learning style.',
      },
      {
        question: 'Are courses self-paced or do they have fixed schedules?',
        answer: 'We offer both options. Many of our courses are self-paced, allowing you to study at your convenience. Others follow a cohort model with scheduled live sessions and deadlines. Each course page specifies the format. Even our scheduled courses offer some flexibility to accommodate working professionals.',
      },
      {
        question: 'What learning materials are provided?',
        answer: 'All courses include comprehensive digital learning materials accessible through our online learning platform. These typically include video lectures, reading materials, interactive exercises, case studies, and assessments. Some courses also provide additional resources like software access, downloadable templates, and supplementary reading recommendations.',
      },
      {
        question: 'Do you offer practical, hands-on components in your courses?',
        answer: 'Yes, most of our courses include practical components like projects, case studies, simulations, or lab work. Our business and technology courses particularly emphasize practical application of concepts. For online courses, we use virtual labs, simulations, and project-based assessments to ensure you gain practical experience.',
      },
      {
        question: 'Can I transfer credits from other institutions?',
        answer: 'We consider transfer credits on a case-by-case basis. Credits from accredited institutions may be transferable if the course content aligns with our curriculum. To apply for credit transfer, please submit your official transcripts and course descriptions to our admissions team for evaluation. A maximum of 30% of credits may be transferred for any program.',
      },
    ],
  },
  {
    id: 'payments',
    title: 'Fees & Payment',
    faqs: [
      {
        question: 'What are the tuition fees for your courses?',
        answer: 'Tuition fees vary by course, ranging from £200 for short certificate courses to £2,000-£5,000 for comprehensive diploma and professional qualification programs. Current fees are listed on each course page. We regularly offer promotions and early enrollment discounts, so check our website for the most up-to-date pricing.',
      },
      {
        question: 'Do you offer payment plans?',
        answer: 'Yes, we offer flexible payment plans for most courses. Typically, you can choose to pay in full or in monthly installments. For courses over £1,000, we offer plans of 3, 6, or 12 monthly payments. Payment plans are interest-free, though a small administration fee may apply. Details are available during the enrollment process.',
      },
      {
        question: 'What payment methods do you accept?',
        answer: 'We accept major credit and debit cards (Visa, Mastercard, American Express), PayPal, bank transfers, and in some cases, employer-sponsored payments. All payments are processed securely through our encrypted payment gateway. For bank transfers, please contact our finance team for detailed instructions.',
      },
      {
        question: 'Are there any additional costs beyond tuition?',
        answer: 'Tuition covers all essential learning materials and assessments. Some courses may recommend optional textbooks or software. Advanced professional certifications sometimes have external examination fees set by the certifying body. Any additional costs are clearly indicated on the course page under "Additional Information."',
      },
      {
        question: 'What is your refund policy?',
        answer: 'We offer a 14-day money-back guarantee from the date of enrollment for most courses. If you withdraw within this period, you\'ll receive a full refund minus any administration fees. After 14 days, refunds are prorated based on the portion of the course completed. Some specialized programs with limited enrollment may have different refund policies, which are specified on their respective pages.',
      },
    ],
  },
  {
    id: 'certifications',
    title: 'Certificates & Accreditation',
    faqs: [
      {
        question: 'Are your courses accredited?',
        answer: 'Yes, our courses are accredited by relevant professional bodies and educational authorities. We hold institutional accreditation from the British Accreditation Council for Independent Further and Higher Education. Individual courses have program-specific accreditations from organizations like Chartered Management Institute (CMI), Chartered Institute of Marketing (CIM), and various technology certification bodies.',
      },
      {
        question: 'What certification will I receive upon completion?',
        answer: 'Upon successful completion, you will receive an official UK Institute certificate specifying the course title, duration, completion date, and relevant accreditations. For professionally recognized qualifications, you\'ll also receive the appropriate industry certification. All certificates are available in digital format, with physical copies available upon request (shipping fees may apply).',
      },
      {
        question: 'Are your certificates recognized by employers?',
        answer: 'Yes, our certificates and qualifications are widely recognized by employers across industries. We continuously collaborate with industry partners to ensure our curriculum meets current market needs. Our professional qualification programs are particularly valued for their practical relevance and alignment with industry standards.',
      },
      {
        question: 'How do I verify the authenticity of a certificate?',
        answer: 'All certificates issued by UK Institute include a unique verification code. Employers and other institutions can verify certificate authenticity through our online verification portal at verify.ukinstitute.edu. Simply enter the verification code and student name to confirm certificate validity and view completion details.',
      },
      {
        question: 'Do certificates expire?',
        answer: 'Our general education certificates do not expire. However, certain professional and technical certifications may require renewal or continuing education credits to remain current, especially in rapidly evolving fields like technology or healthcare. Any renewal requirements are clearly communicated during the course and in the certification documentation.',
      },
    ],
  },
  {
    id: 'support',
    title: 'Student Support',
    faqs: [
      {
        question: 'What kind of support do you offer to students?',
        answer: 'We provide comprehensive support throughout your learning journey. This includes academic support from tutors and instructors, technical assistance for our learning platform, and administrative support for enrollment and payment matters. We also offer career guidance, study skills workshops, and access to our student community forums. Our support team is available via email, live chat, and scheduled video calls.',
      },
      {
        question: 'How do I contact my instructor?',
        answer: 'You can contact your instructor directly through our learning platform\'s messaging system. For courses with live components, you can interact during scheduled sessions. Most instructors hold regular virtual office hours where you can ask questions in real-time. Our policy ensures that all instructor queries receive a response within 48 hours during business days.',
      },
      {
        question: 'Is there technical support available?',
        answer: 'Yes, we provide technical support for all aspects of our learning platform. Our technical support team is available Monday-Friday, 9am-8pm GMT, and Saturday 10am-4pm GMT. You can reach them through the help center on your student dashboard, by email at support@ukinstitute.edu, or via live chat during business hours.',
      },
      {
        question: 'Do you provide accommodations for students with disabilities?',
        answer: 'Absolutely. We are committed to making our courses accessible to all learners. We provide reasonable accommodations such as extended assignment deadlines, alternative format materials, and modified assessments based on documented needs. Please contact our accessibility services team at accessibility@ukinstitute.edu before or during enrollment to discuss your specific requirements.',
      },
      {
        question: 'Are there networking opportunities with other students?',
        answer: 'Yes, we foster a vibrant student community. Our learning platform includes discussion forums for each course where you can engage with peers. We also host virtual networking events, student clubs, and group projects. For professional development courses, we organize industry meetups and alumni networking sessions to help you build valuable connections in your field.',
      },
    ],
  },
  {
    id: 'technical',
    title: 'Technical Requirements',
    faqs: [
      {
        question: 'What are the technical requirements for online courses?',
        answer: 'For optimal experience with our online courses, you need a reliable internet connection (minimum 5 Mbps download speed), a computer with at least 4GB RAM, and an updated browser (Chrome, Firefox, Safari, or Edge). Some courses require specific software that will be detailed on the course page. For video conferencing, a webcam and microphone are recommended. Mobile access is available through our app, but a computer is recommended for most coursework.',
      },
      {
        question: 'Can I access courses on mobile devices?',
        answer: 'Yes, our learning platform is mobile-responsive, and we offer dedicated apps for iOS and Android devices. While you can review lecture materials, participate in discussions, and complete some assignments on mobile devices, certain interactive elements and assignments may require a desktop or laptop computer. We recommend using mobile access as a supplement to, rather than replacement for, computer access.',
      },
      {
        question: 'What browsers are supported?',
        answer: 'Our platform works best with the latest versions of Chrome, Firefox, Safari, and Edge. We recommend keeping your browser updated for optimal performance and security. Internet Explorer is not supported. If you encounter any browser-specific issues, our technical support team can assist you.',
      },
      {
        question: 'Do I need to install special software?',
        answer: 'Basic course access requires no special software beyond a modern web browser. However, specific courses, particularly in areas like design, programming, or data analysis, may require specialized software. Required software is clearly listed on the course description page. Where possible, we provide student licenses or recommend free alternatives. Cloud-based options are available for many applications to minimize installation requirements.',
      },
      {
        question: 'Are course materials available offline?',
        answer: 'Many course materials, including readings, lecture slides, and some videos, can be downloaded for offline use. However, interactive elements, assessments, and discussion forums require an internet connection. Our mobile app offers limited offline functionality, allowing you to download certain content for viewing when internet access is unavailable. Materials automatically sync when you reconnect.',
      },
    ],
  },
];

export default function FAQPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-uk-blue py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-3xl font-serif font-bold text-uk-white mb-2">Frequently Asked Questions</h1>
            <p className="text-uk-white/90 max-w-xl mx-auto">
              Find answers to common questions about our courses, admissions, payments, and more.
            </p>
          </div>
        </div>
      </section>
      
      {/* Search Section */}
      <section className="py-8 bg-gray-50 border-b border-gray-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <FaSearch className="h-5 w-5 text-gray-400" />
            </div>
            <input
              type="text"
              className="block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-uk-blue focus:border-uk-blue sm:text-sm"
              placeholder="Search for a question..."
            />
          </div>
        </div>
      </section>
      
      {/* FAQ Categories Section */}
      <section className="py-6 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4">
            {faqCategories.map((category) => (
              <a 
                key={category.id}
                href={`#${category.id}`}
                className="px-4 py-2 bg-gray-100 hover:bg-gray-200 rounded-full text-gray-700 font-medium text-sm transition-colors"
              >
                {category.title}
              </a>
            ))}
          </div>
        </div>
      </section>
      
      {/* FAQ Content */}
      <section className="py-12 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {faqCategories.map((category) => (
              <div key={category.id} id={category.id} className="scroll-mt-24">
                <h2 className="text-2xl font-serif font-bold text-uk-blue mb-6 pb-2 border-b border-gray-200">
                  {category.title}
                </h2>
                <div className="space-y-6">
                  {category.faqs.map((faq, index) => (
                    <details key={index} className="group bg-gray-50 rounded-lg p-6 open:ring-1 open:ring-uk-blue/10 open:shadow-lg">
                      <summary className="flex cursor-pointer items-center justify-between">
                        <h3 className="text-lg font-medium text-gray-900">{faq.question}</h3>
                        <span className="ml-6 flex-shrink-0 text-uk-blue">
                          <FaChevronDown className="block group-open:hidden h-5 w-5" />
                          <FaChevronUp className="hidden group-open:block h-5 w-5" />
                        </span>
                      </summary>
                      <div className="mt-4 text-gray-600 leading-relaxed">
                        <p>{faq.answer}</p>
                      </div>
                    </details>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Contact CTA */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-uk-blue rounded-lg shadow-lg p-8">
            <div className="text-center">
              <h2 className="text-2xl font-serif font-bold text-white mb-4">Couldn't Find Your Answer?</h2>
              <p className="text-white/90 max-w-2xl mx-auto mb-8">
                Our support team is here to help. Contact us for personalized assistance with any questions you may have.
              </p>
              <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
                <Button href="/contact" variant="secondary">
                  Contact Support
                </Button>
                <Button href="/live-chat" variant="white">
                  Start Live Chat
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
} 