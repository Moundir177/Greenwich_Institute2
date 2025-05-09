import Link from 'next/link';

export const metadata = {
  title: 'Terms of Service | UK Institute',
  description: 'The terms and conditions that govern your use of UK Institute services and website.',
};

export default function TermsPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-uk-blue py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-serif font-bold text-uk-white mb-6">Terms of Service</h1>
            <p className="text-xl text-uk-white/90 max-w-3xl mx-auto">
              Terms and conditions governing your use of UK Institute services.
            </p>
            <p className="text-sm text-uk-white/70 mt-4">Last Updated: June 15, 2023</p>
          </div>
        </div>
      </section>
      
      {/* Terms Content */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none text-gray-600">
            <h2 className="text-2xl font-serif font-bold text-uk-blue mt-8 mb-4">1. Introduction</h2>
            <p>
              Welcome to UK Institute. These Terms of Service ("Terms") govern your use of our website located at <a href="https://www.ukinstitute.edu" className="text-uk-blue hover:underline">www.ukinstitute.edu</a> (the "Site"), and all related services, applications, content, and products (collectively, the "Services") provided by UK Institute ("we," "us," or "our").
            </p>
            <p>
              By accessing or using our Services, you agree to be bound by these Terms and our Privacy Policy. If you do not agree to these Terms, you may not access or use our Services.
            </p>
            
            <h2 className="text-2xl font-serif font-bold text-uk-blue mt-8 mb-4">2. Eligibility</h2>
            <p>
              You must be at least 16 years old to use our Services. If you are under 18, you represent that you have your parent's or guardian's permission to use the Services and that they have read and agree to these Terms on your behalf.
            </p>
            <p>
              By using our Services, you represent that you meet all eligibility requirements and that you have the right, authority, and capacity to enter into these Terms and to abide by all of the terms and conditions set forth herein.
            </p>
            
            <h2 className="text-2xl font-serif font-bold text-uk-blue mt-8 mb-4">3. Account Registration</h2>
            <p>
              To access certain features of our Services, you may be required to register for an account. When you register, you agree to:
            </p>
            <ul className="list-disc pl-6 my-4 space-y-2">
              <li>Provide accurate, current, and complete information</li>
              <li>Maintain and promptly update your account information</li>
              <li>Maintain the security of your account credentials</li>
              <li>Accept responsibility for all activities that occur under your account</li>
              <li>Notify us immediately of any unauthorized use of your account</li>
            </ul>
            <p>
              We reserve the right to suspend or terminate your account if any information provided is inaccurate, false, or outdated.
            </p>
            
            <h2 className="text-2xl font-serif font-bold text-uk-blue mt-8 mb-4">4. Course Enrollment and Payment</h2>
            <p>
              When you enroll in a course or program:
            </p>
            <ul className="list-disc pl-6 my-4 space-y-2">
              <li>You agree to pay all applicable fees for the course or program in which you enroll</li>
              <li>You authorize us to charge your chosen payment method for these fees</li>
              <li>All fees are exclusive of applicable taxes, which will be charged where required by law</li>
              <li>All payments are non-refundable except as specified in our Refund Policy</li>
            </ul>
            <p>
              For details on refunds, please see our <Link href="/refund-policy" className="text-uk-blue hover:underline">Refund Policy</Link>.
            </p>
            
            <h2 className="text-2xl font-serif font-bold text-uk-blue mt-8 mb-4">5. Intellectual Property Rights</h2>
            <p>
              All content included in our Services, such as text, graphics, logos, images, audio clips, video clips, data compilations, and software, is the property of UK Institute or our content suppliers and is protected by international copyright laws.
            </p>
            
            <h3 className="text-xl font-bold text-uk-blue mt-6 mb-3">5.1 Our Content</h3>
            <p>
              We grant you a limited, non-exclusive, non-transferable license to access and use the content solely for your personal, non-commercial educational purposes. You may not:
            </p>
            <ul className="list-disc pl-6 my-4 space-y-2">
              <li>Reproduce, distribute, publicly display, or publicly perform our content</li>
              <li>Modify, adapt, or create derivative works based on our content</li>
              <li>Use our content for any commercial purpose</li>
              <li>Remove any copyright, trademark, or other proprietary notices</li>
            </ul>
            
            <h3 className="text-xl font-bold text-uk-blue mt-6 mb-3">5.2 User Content</h3>
            <p>
              By submitting any content to our Services, including course assignments, forum posts, or comments (collectively, "User Content"), you grant us a worldwide, non-exclusive, royalty-free, sublicensable, and transferable license to use, reproduce, distribute, prepare derivative works of, display, and perform your User Content in connection with our Services.
            </p>
            <p>
              You represent and warrant that you own or have the necessary rights to your User Content and that it does not violate any intellectual property rights or these Terms.
            </p>
            
            <h2 className="text-2xl font-serif font-bold text-uk-blue mt-8 mb-4">6. Prohibited Conduct</h2>
            <p>
              You agree not to engage in any of the following prohibited activities:
            </p>
            <ul className="list-disc pl-6 my-4 space-y-2">
              <li>Violating any applicable laws or regulations</li>
              <li>Infringing upon the intellectual property rights of others</li>
              <li>Sharing your account credentials with any third party</li>
              <li>Using our Services to distribute unsolicited commercial communications</li>
              <li>Attempting to interfere with, compromise the system integrity or security, or decipher any transmissions to or from the servers running our Services</li>
              <li>Using our Services in any manner that could disable, overburden, damage, or impair the site</li>
              <li>Uploading or transmitting viruses, malware, or other malicious code</li>
              <li>Collecting or tracking the personal information of others</li>
              <li>Engaging in any automated use of the system, such as using scripts to send comments or messages</li>
              <li>Using our Services for any purpose that is unlawful or prohibited by these Terms</li>
            </ul>
            
            <h2 className="text-2xl font-serif font-bold text-uk-blue mt-8 mb-4">7. Limitation of Liability</h2>
            <p>
              To the maximum extent permitted by law, UK Institute and our directors, officers, employees, and agents shall not be liable for any indirect, incidental, special, consequential, or punitive damages, including loss of profits, data, or goodwill, arising out of or in connection with your use of our Services.
            </p>
            <p>
              In no event shall our aggregate liability for all claims related to the Services exceed the greater of £100 or the amount you paid us in the past twelve months.
            </p>
            
            <h2 className="text-2xl font-serif font-bold text-uk-blue mt-8 mb-4">8. Indemnification</h2>
            <p>
              You agree to indemnify, defend, and hold harmless UK Institute and our affiliates, officers, directors, employees, and agents from and against any and all claims, liabilities, damages, losses, or expenses, including reasonable attorneys' fees and costs, arising out of or in any way connected with your access to or use of our Services or your violation of these Terms.
            </p>
            
            <h2 className="text-2xl font-serif font-bold text-uk-blue mt-8 mb-4">9. Term and Termination</h2>
            <p>
              These Terms shall remain in full force and effect while you use our Services. We may terminate or suspend your access to our Services, without prior notice or liability, for any reason whatsoever, including if you breach these Terms.
            </p>
            <p>
              Upon termination, your right to use our Services will immediately cease. All provisions of these Terms which by their nature should survive termination shall survive, including ownership provisions, warranty disclaimers, indemnity, and limitations of liability.
            </p>
            
            <h2 className="text-2xl font-serif font-bold text-uk-blue mt-8 mb-4">10. Changes to Terms</h2>
            <p>
              We reserve the right to modify these Terms at any time. If we make material changes to these Terms, we will notify you by email or by posting a notice on our Site. Your continued use of our Services after such notification constitutes your acceptance of the modified Terms.
            </p>
            
            <h2 className="text-2xl font-serif font-bold text-uk-blue mt-8 mb-4">11. Governing Law and Dispute Resolution</h2>
            <p>
              These Terms shall be governed by and construed in accordance with the laws of England and Wales, without regard to its conflict of law provisions.
            </p>
            <p>
              Any dispute arising out of or relating to these Terms or our Services shall be resolved exclusively through binding arbitration in London, England, in accordance with the rules of the London Court of International Arbitration.
            </p>
            
            <h2 className="text-2xl font-serif font-bold text-uk-blue mt-8 mb-4">12. Miscellaneous</h2>
            <p>
              If any provision of these Terms is found to be unenforceable or invalid, that provision will be limited or eliminated to the minimum extent necessary so that the Terms will otherwise remain in full force and effect.
            </p>
            <p>
              These Terms constitute the entire agreement between you and UK Institute regarding our Services and supersede any prior agreements or understandings.
            </p>
            <p>
              Our failure to enforce any right or provision of these Terms will not be considered a waiver of those rights.
            </p>
            
            <h2 className="text-2xl font-serif font-bold text-uk-blue mt-8 mb-4">13. Contact Information</h2>
            <p>
              If you have any questions about these Terms, please contact us at:
            </p>
            <div className="my-4">
              <p><strong>UK Institute</strong></p>
              <p>123 Education Street</p>
              <p>London, UK, SW1 1AA</p>
              <p>Email: legal@ukinstitute.edu</p>
              <p>Phone: +44 20 1234 5686</p>
            </div>
            
            <div className="mt-10 mb-6 border-t border-gray-200 pt-8">
              <p>
                By using our Services, you acknowledge that you have read, understood, and agree to be bound by these Terms.
              </p>
              <div className="mt-6">
                <Link href="/privacy-policy" className="text-uk-blue hover:underline">
                  Privacy Policy
                </Link> | 
                <Link href="/refund-policy" className="text-uk-blue hover:underline ml-2">
                  Refund Policy
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
} 