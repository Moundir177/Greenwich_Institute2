import Link from 'next/link';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaYoutube } from 'react-icons/fa';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-dark-blue text-white">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Column 1 - About */}
          <div>
            <h3 className="text-gold font-serif text-lg font-bold mb-4">UK Institute</h3>
            <p className="text-sm mb-4">
              A premier educational institution committed to excellence in academic and professional development.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-white hover:text-gold"><FaFacebook size={20} /></a>
              <a href="#" className="text-white hover:text-gold"><FaTwitter size={20} /></a>
              <a href="#" className="text-white hover:text-gold"><FaInstagram size={20} /></a>
              <a href="#" className="text-white hover:text-gold"><FaLinkedin size={20} /></a>
              <a href="#" className="text-white hover:text-gold"><FaYoutube size={20} /></a>
            </div>
          </div>
          
          {/* Column 2 - Quick Links */}
          <div>
            <h3 className="text-gold font-serif text-lg font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/" className="hover:text-gold">Home</Link></li>
              <li><Link href="/about" className="hover:text-gold">About Us</Link></li>
              <li><Link href="/courses" className="hover:text-gold">Courses</Link></li>
              <li><Link href="/certificates" className="hover:text-gold">Certificates</Link></li>
              <li><Link href="/contact" className="hover:text-gold">Contact Us</Link></li>
            </ul>
          </div>
          
          {/* Column 3 - Policies */}
          <div>
            <h3 className="text-gold font-serif text-lg font-bold mb-4">Policies</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/privacy-policy" className="hover:text-gold">Privacy Policy</Link></li>
              <li><Link href="/refund-policy" className="hover:text-gold">Refund Policy</Link></li>
              <li><Link href="/terms" className="hover:text-gold">Terms of Service</Link></li>
              <li><Link href="/cookies" className="hover:text-gold">Cookie Policy</Link></li>
            </ul>
          </div>
          
          {/* Column 4 - Contact */}
          <div>
            <h3 className="text-gold font-serif text-lg font-bold mb-4">Contact Us</h3>
            <address className="not-italic text-sm space-y-2">
              <p>123 Education Street</p>
              <p>London, UK</p>
              <p>SW1 1AA</p>
              <p className="pt-2">Email: <a href="mailto:info@ukinstitute.edu" className="hover:text-gold">info@ukinstitute.edu</a></p>
              <p>Phone: <a href="tel:+44-20-1234-5678" className="hover:text-gold">+44 20 1234 5678</a></p>
            </address>
          </div>
        </div>
        
        <div className="border-t border-gray mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-light-gray">&copy; {currentYear} UK Institute. All rights reserved.</p>
          <div className="mt-4 md:mt-0">
            <div className="flex flex-wrap justify-center md:justify-end space-x-4 text-xs text-light-gray">
              <Link href="/privacy-policy" className="hover:text-gold">Privacy</Link>
              <Link href="/refund-policy" className="hover:text-gold">Refunds</Link>
              <Link href="/terms" className="hover:text-gold">Terms</Link>
              <Link href="/sitemap" className="hover:text-gold">Sitemap</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
} 