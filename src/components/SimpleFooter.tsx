import Link from 'next/link';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaYoutube, FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';

export default function SimpleFooter() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="pt-16 pb-8 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-gray via-gold to-gray"></div>
      <div className="absolute top-10 right-10 w-64 h-64 rounded-full bg-dark-blue opacity-10 blur-3xl"></div>
      <div className="absolute bottom-10 left-10 w-72 h-72 rounded-full bg-gray opacity-5 blur-3xl"></div>
      
      <div className="container relative z-10">
        {/* Newsletter signup */}
        <div className="bg-dark-blue/20 backdrop-blur-lg p-8 rounded-lg shadow-lg mb-16 transform hover:shadow-2xl transition-all">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-gold text-xl font-bold mb-2">Subscribe to Our Newsletter</h3>
              <p className="text-white mb-0">Stay updated with the latest courses, educational trends, and exclusive offers.</p>
            </div>
            <div>
              <form className="flex flex-col sm:flex-row gap-3">
                <input 
                  type="email" 
                  placeholder="Your Email Address" 
                  className="flex-1 px-4 py-3 rounded-md bg-white/10 border border-white/20 text-white placeholder:text-white/50 focus:outline-none focus:ring-2 focus:ring-gold"
                />
                <button className="btn bg-dark-blue text-white hover:bg-opacity-90 whitespace-nowrap">
                  <span>Subscribe</span>
                </button>
              </form>
            </div>
          </div>
        </div>
        
        {/* Main footer content */}
        <div className="grid gap-8" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))' }}>
          {/* About */}
          <div className="animate-fadeIn">
            <div className="flex items-center mb-4 gap-2">
              <div className="bg-gold text-dark-blue flex items-center justify-center rounded-full w-8 h-8 font-bold text-sm">UK</div>
              <h2 className="text-gold text-xl">UK Institute</h2>
            </div>
            <p className="text-white/80 mb-6">
              A premier educational institution committed to excellence in academic and professional development.
            </p>
            
            {/* Social Media */}
            <div className="flex gap-3">
              <a href="#" className="bg-white/10 hover:bg-gold hover:text-dark-blue w-9 h-9 rounded-full flex items-center justify-center text-white transition-all">
                <FaFacebookF />
              </a>
              <a href="#" className="bg-white/10 hover:bg-gold hover:text-dark-blue w-9 h-9 rounded-full flex items-center justify-center text-white transition-all">
                <FaTwitter />
              </a>
              <a href="#" className="bg-white/10 hover:bg-gold hover:text-dark-blue w-9 h-9 rounded-full flex items-center justify-center text-white transition-all">
                <FaInstagram />
              </a>
              <a href="#" className="bg-white/10 hover:bg-gold hover:text-dark-blue w-9 h-9 rounded-full flex items-center justify-center text-white transition-all">
                <FaLinkedinIn />
              </a>
              <a href="#" className="bg-white/10 hover:bg-gold hover:text-dark-blue w-9 h-9 rounded-full flex items-center justify-center text-white transition-all">
                <FaYoutube />
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div className="animate-fadeIn" style={{ animationDelay: '100ms' }}>
            <h3 className="text-white text-lg font-bold mb-4 relative inline-block">
              Quick Links
              <span className="absolute -bottom-1 left-0 w-12 h-1 bg-gold"></span>
            </h3>
            <ul className="space-y-3">
              <li>
                <Link href="/" className="text-white/80 hover:text-gold flex items-center gap-2 transition-all hover:translate-x-1">
                  <span className="text-gold">›</span> Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-white/80 hover:text-gold flex items-center gap-2 transition-all hover:translate-x-1">
                  <span className="text-gold">›</span> About Us
                </Link>
              </li>
              <li>
                <Link href="/courses" className="text-white/80 hover:text-gold flex items-center gap-2 transition-all hover:translate-x-1">
                  <span className="text-gold">›</span> Courses
                </Link>
              </li>
              <li>
                <Link href="/certificates" className="text-white/80 hover:text-gold flex items-center gap-2 transition-all hover:translate-x-1">
                  <span className="text-gold">›</span> Certificates
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-white/80 hover:text-gold flex items-center gap-2 transition-all hover:translate-x-1">
                  <span className="text-gold">›</span> Contact Us
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Policies */}
          <div className="animate-fadeIn" style={{ animationDelay: '200ms' }}>
            <h3 className="text-white text-lg font-bold mb-4 relative inline-block">
              Policies
              <span className="absolute -bottom-1 left-0 w-12 h-1 bg-gold"></span>
            </h3>
            <ul className="space-y-3">
              <li>
                <Link href="/privacy-policy" className="text-white/80 hover:text-gold flex items-center gap-2 transition-all hover:translate-x-1">
                  <span className="text-gold">›</span> Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/refund-policy" className="text-white/80 hover:text-gold flex items-center gap-2 transition-all hover:translate-x-1">
                  <span className="text-gold">›</span> Refund Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-white/80 hover:text-gold flex items-center gap-2 transition-all hover:translate-x-1">
                  <span className="text-gold">›</span> Terms of Service
                </Link>
              </li>
              <li>
                <Link href="/cookie-policy" className="text-white/80 hover:text-gold flex items-center gap-2 transition-all hover:translate-x-1">
                  <span className="text-gold">›</span> Cookie Policy
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Contact Us */}
          <div className="animate-fadeIn" style={{ animationDelay: '300ms' }}>
            <h3 className="text-white text-lg font-bold mb-4 relative inline-block">
              Contact Us
              <span className="absolute -bottom-1 left-0 w-12 h-1 bg-gold"></span>
            </h3>
            <address className="not-italic space-y-3">
              <div className="flex items-start gap-3 text-white/80">
                <FaMapMarkerAlt className="text-gold mt-1 flex-shrink-0" />
                <p className="m-0">123 Education Street<br />London, UK</p>
              </div>
              <div className="flex items-center gap-3 text-white/80">
                <FaEnvelope className="text-gold flex-shrink-0" />
                <a href="mailto:info@ukinstitute.edu" className="text-white/80 hover:text-gold transition-all">info@ukinstitute.edu</a>
              </div>
              <div className="flex items-center gap-3 text-white/80">
                <FaPhone className="text-gold flex-shrink-0" />
                <a href="tel:+441234567890" className="text-white/80 hover:text-gold transition-all">+44 123 456 7890</a>
              </div>
            </address>
          </div>
        </div>
        
        {/* Footer bottom */}
        <div className="footer-bottom">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-white/70 text-sm">
              © {currentYear} UK Institute. All rights reserved.
            </p>
            <div className="flex gap-4 text-sm text-white/70">
              <Link href="/help" className="hover:text-gold">Help</Link>
              <Link href="/sitemap" className="hover:text-gold">Sitemap</Link>
              <Link href="/careers" className="hover:text-gold">Careers</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
} 