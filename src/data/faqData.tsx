import React from 'react';
import { 
  FaGraduationCap, 
  FaMoneyBillWave, 
  FaCertificate, 
  FaLaptop, 
  FaLightbulb
} from 'react-icons/fa';

interface FaqItem {
  question: string;
  answer: string;
}

interface FaqCategory {
  id: string;
  title: string;
  icon: React.ReactElement;
  faqs: FaqItem[];
}

export const faqCategories: FaqCategory[] = [
  {
    id: 'courses',
    title: 'Courses & Curriculum',
    icon: <FaLightbulb className="h-5 w-5" />,
    faqs: [
      {
        question: 'How long does it take to complete a course?',
        answer: 'Course duration varies by program. Certificate courses typically take 8-12 weeks, diploma programs 6-12 months, and advanced professional qualifications 12-24 months. Most courses allow for flexible pacing based on your schedule and learning style.',
      },
      {
        question: 'Are courses self-paced or do they have fixed schedules?',
        answer: 'We offer both options. Many courses are self-paced, allowing you to study at your convenience. Others follow a cohort model with scheduled live sessions and deadlines. Each course page specifies the format, and even scheduled courses offer some flexibility.',
      },
      {
        question: 'What learning materials are provided?',
        answer: 'All courses include comprehensive digital materials: video lectures, reading materials, interactive exercises, case studies, and assessments. Some courses also provide software access, downloadable templates, and supplementary reading recommendations.',
      },
    ]
  },
  {
    id: 'payments',
    title: 'Fees & Payment',
    icon: <FaMoneyBillWave className="h-5 w-5" />,
    faqs: [
      {
        question: 'What are the tuition fees for your courses?',
        answer: 'Tuition fees vary by course, ranging from £200 for short certificate courses to £2,000-£5,000 for comprehensive diploma programs. Current fees are listed on each course page, and we regularly offer promotions and early enrollment discounts.',
      },
      {
        question: 'Do you offer payment plans?',
        answer: 'Yes, we offer flexible payment plans for most courses. You can choose to pay in full or in monthly installments. For courses over £1,000, we offer plans of 3, 6, or 12 monthly payments. Payment plans are interest-free, with a possible small administration fee.',
      },
    ]
  },
  {
    id: 'certifications',
    title: 'Certificates & Accreditation',
    icon: <FaCertificate className="h-5 w-5" />,
    faqs: [
      {
        question: 'Are your courses accredited?',
        answer: 'Yes, our courses are accredited by relevant professional bodies and educational authorities. We hold institutional accreditation from the British Accreditation Council for Independent Further and Higher Education and program-specific accreditations from various professional organizations.',
      },
      {
        question: 'What certification will I receive upon completion?',
        answer: 'Upon completion, you\'ll receive an official Greenwich Institute certificate specifying the course title, duration, completion date, and relevant accreditations. For professionally recognized qualifications, you\'ll also receive the appropriate industry certification.',
      },
    ]
  },
  {
    id: 'technical',
    title: 'Technical Requirements',
    icon: <FaLaptop className="h-5 w-5" />,
    faqs: [
      {
        question: 'What technical requirements do I need for online courses?',
        answer: 'For optimal experience, we recommend a computer with at least 4GB RAM, a modern browser (Chrome, Firefox, Safari, or Edge), stable internet connection (minimum 5 Mbps), and speakers or headphones. Some specialized courses may have additional software or hardware requirements.',
      },
      {
        question: 'Do I need any special software for the courses?',
        answer: 'Most courses can be completed using standard web browsers and our online learning platform. For specific programs in technology, design, or data analysis, you may need specialized software. When required, we either provide access to cloud-based tools or list the necessary software.',
      },
    ]
  }
]; 