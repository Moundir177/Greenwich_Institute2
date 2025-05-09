import Link from 'next/link';

export const metadata = {
  title: 'Privacy Policy | UK Institute',
  description: 'Learn about how UK Institute collects, uses, and protects your personal information. Our privacy policy explains your rights and our data handling practices.',
};

export default function PrivacyPolicyPage() {
  const lastUpdated = 'June 15, 2023';
  
  return (
    <>
      {/* Hero Section */}
      <section className="bg-uk-blue py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-3xl font-serif font-bold text-uk-white mb-2">Privacy Policy</h1>
            <p className="text-uk-white/90 max-w-xl mx-auto">
              How we collect, use, and protect your personal information
            </p>
            <p className="text-sm text-uk-white/70 mt-4">Last Updated: {lastUpdated}</p>
          </div>
        </div>
      </section>
      
      {/* Policy Content */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none text-gray-600">
            <h2 className="text-2xl font-serif font-bold text-uk-blue mt-8 mb-4">1. Introduction</h2>
            <p>
              This Privacy Policy explains how UK Institute ("we," "us," or "our") collects, uses, shares, and protects personal information obtained from individuals ("you") who visit our website, use our services, or otherwise interact with us. We are committed to ensuring the privacy and security of your personal information.
            </p>
            <p>
              By accessing our website at <a href="https://www.ukinstitute.edu" className="text-uk-blue hover:underline">www.ukinstitute.edu</a> and using our services, you consent to the collection, use, and disclosure of your information as described in this Privacy Policy. If you do not agree with these terms, please do not use our website or services.
            </p>
            
            <h2 className="text-2xl font-serif font-bold text-uk-blue mt-8 mb-4">2. Information We Collect</h2>
            
            <h3 className="text-xl font-bold text-uk-blue mt-6 mb-3">2.1 Personal Information</h3>
            <p>We may collect the following types of personal information:</p>
            <ul className="list-disc pl-6 my-4 space-y-2">
              <li><strong>Contact Information:</strong> Name, email address, postal address, phone number</li>
              <li><strong>Account Information:</strong> Username, password, account preferences</li>
              <li><strong>Educational Information:</strong> Academic history, qualifications, course selections, progress records, grades, and assessment results</li>
              <li><strong>Payment Information:</strong> Credit card details, billing address, transaction history (note: payment details are processed securely through third-party payment processors)</li>
              <li><strong>Demographic Information:</strong> Age, gender, nationality, employment status</li>
              <li><strong>Identity Verification Information:</strong> Date of birth, identification documents (when required for course registration or certification)</li>
            </ul>
            
            <h3 className="text-xl font-bold text-uk-blue mt-6 mb-3">2.2 Automatically Collected Information</h3>
            <p>When you visit our website or use our online learning platform, we automatically collect certain information, including:</p>
            <ul className="list-disc pl-6 my-4 space-y-2">
              <li><strong>Usage Data:</strong> Pages visited, time spent on pages, links clicked, learning progress</li>
              <li><strong>Device Information:</strong> IP address, browser type, operating system, device type</li>
              <li><strong>Location Information:</strong> General location based on IP address</li>
              <li><strong>Cookies and Similar Technologies:</strong> Information collected through cookies, web beacons, and similar technologies (see our Cookie Policy section)</li>
            </ul>
            
            <h2 className="text-2xl font-serif font-bold text-uk-blue mt-8 mb-4">3. How We Use Your Information</h2>
            <p>We use your personal information for the following purposes:</p>
            
            <h3 className="text-xl font-bold text-uk-blue mt-6 mb-3">3.1 Providing and Improving Our Services</h3>
            <ul className="list-disc pl-6 my-4 space-y-2">
              <li>Processing course enrollments and delivering educational content</li>
              <li>Managing your account and providing student support</li>
              <li>Processing payments and maintaining financial records</li>
              <li>Issuing certificates and verifying course completion</li>
              <li>Improving our website, services, and educational offerings</li>
              <li>Analyzing usage patterns to enhance user experience</li>
            </ul>
            
            <h3 className="text-xl font-bold text-uk-blue mt-6 mb-3">3.2 Communication</h3>
            <ul className="list-disc pl-6 my-4 space-y-2">
              <li>Sending essential service notifications and updates</li>
              <li>Responding to your inquiries and support requests</li>
              <li>Providing information about courses, programs, and educational opportunities</li>
              <li>Sending promotional content and newsletters (with your consent)</li>
              <li>Conducting surveys and collecting feedback</li>
            </ul>
            
            <h3 className="text-xl font-bold text-uk-blue mt-6 mb-3">3.3 Legal and Security Purposes</h3>
            <ul className="list-disc pl-6 my-4 space-y-2">
              <li>Complying with legal obligations and regulations</li>
              <li>Enforcing our Terms of Service and other policies</li>
              <li>Detecting and preventing fraud, unauthorized access, and other harmful activity</li>
              <li>Protecting the rights, property, or safety of UK Institute, our users, or others</li>
            </ul>
            
            <h2 className="text-2xl font-serif font-bold text-uk-blue mt-8 mb-4">4. Legal Basis for Processing</h2>
            <p>We process your personal information based on the following legal grounds:</p>
            <ul className="list-disc pl-6 my-4 space-y-2">
              <li><strong>Performance of a Contract:</strong> Processing necessary to fulfill our contractual obligations to you (e.g., providing courses you've enrolled in)</li>
              <li><strong>Legitimate Interests:</strong> Processing necessary for our legitimate interests, such as improving our services, marketing, and fraud prevention</li>
              <li><strong>Consent:</strong> Processing based on your specific consent, such as for marketing communications</li>
              <li><strong>Legal Obligation:</strong> Processing necessary to comply with our legal obligations</li>
            </ul>
            
            <h2 className="text-2xl font-serif font-bold text-uk-blue mt-8 mb-4">5. Cookies and Similar Technologies</h2>
            <p>
              We use cookies and similar technologies to enhance your browsing experience, analyze website traffic, personalize content, and serve targeted advertisements. Cookies are small text files that are stored on your device when you visit our website.
            </p>
            <p>Types of cookies we use:</p>
            <ul className="list-disc pl-6 my-4 space-y-2">
              <li><strong>Essential Cookies:</strong> Required for the basic functionality of our website</li>
              <li><strong>Performance Cookies:</strong> Help us understand how visitors interact with our website</li>
              <li><strong>Functionality Cookies:</strong> Allow us to remember your preferences and customize your experience</li>
              <li><strong>Targeting/Advertising Cookies:</strong> Used to deliver relevant advertisements and track the effectiveness of marketing campaigns</li>
            </ul>
            <p>
              You can manage your cookie preferences through your browser settings. However, disabling certain cookies may limit your ability to use some features of our website.
            </p>
            
            <h2 className="text-2xl font-serif font-bold text-uk-blue mt-8 mb-4">6. Sharing Your Information</h2>
            <p>We may share your personal information with the following third parties:</p>
            
            <h3 className="text-xl font-bold text-uk-blue mt-6 mb-3">6.1 Service Providers</h3>
            <p>
              We share information with trusted third-party service providers who perform services on our behalf, such as:
            </p>
            <ul className="list-disc pl-6 my-4 space-y-2">
              <li>Learning management system providers</li>
              <li>Payment processors</li>
              <li>Cloud hosting and storage providers</li>
              <li>Analytics providers</li>
              <li>Customer support services</li>
              <li>Email service providers</li>
            </ul>
            <p>
              These service providers are contractually obligated to use your information only for the specific services they provide to us and are required to maintain the confidentiality and security of your information.
            </p>
            
            <h3 className="text-xl font-bold text-uk-blue mt-6 mb-3">6.2 Educational Partners and Accrediting Bodies</h3>
            <p>
              We may share your information with educational partners, accrediting bodies, and examination authorities for the purpose of course delivery, certification, and verification of qualifications.
            </p>
            
            <h3 className="text-xl font-bold text-uk-blue mt-6 mb-3">6.3 Legal Requirements</h3>
            <p>
              We may disclose your information if required to do so by law or in response to valid requests by public authorities (e.g., court orders, government requests).
            </p>
            
            <h3 className="text-xl font-bold text-uk-blue mt-6 mb-3">6.4 Business Transfers</h3>
            <p>
              If UK Institute is involved in a merger, acquisition, or sale of all or a portion of its assets, your information may be transferred as part of that transaction. We will notify you via email and/or prominent notice on our website of any change in ownership or uses of your personal information.
            </p>
            
            <h2 className="text-2xl font-serif font-bold text-uk-blue mt-8 mb-4">7. Data Retention</h2>
            <p>
              We retain your personal information for as long as necessary to fulfill the purposes outlined in this Privacy Policy, unless a longer retention period is required or permitted by law. The criteria used to determine our retention periods include:
            </p>
            <ul className="list-disc pl-6 my-4 space-y-2">
              <li>The duration of your relationship with UK Institute (e.g., how long you maintain an account or are enrolled in courses)</li>
              <li>Legal obligations that require us to keep data for certain periods</li>
              <li>Statute of limitations under applicable law</li>
              <li>Recommendations from regulatory authorities</li>
              <li>Whether retention is advisable in light of our legal position (e.g., for statutes of limitations, litigation, or regulatory investigations)</li>
            </ul>
            <p>
              Academic records are typically maintained for a longer period to support transcript and verification services for our students.
            </p>
            
            <h2 className="text-2xl font-serif font-bold text-uk-blue mt-8 mb-4">8. Data Security</h2>
            <p>
              We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. These measures include:
            </p>
            <ul className="list-disc pl-6 my-4 space-y-2">
              <li>Encryption of sensitive information</li>
              <li>Secure access controls and authentication procedures</li>
              <li>Regular security assessments and testing</li>
              <li>Staff training on data protection and security practices</li>
              <li>Physical security measures for our facilities</li>
            </ul>
            <p>
              While we strive to protect your personal information, no method of transmission over the Internet or electronic storage is 100% secure. Therefore, we cannot guarantee absolute security.
            </p>
            
            <h2 className="text-2xl font-serif font-bold text-uk-blue mt-8 mb-4">9. Your Data Protection Rights</h2>
            <p>
              Depending on your location, you may have certain rights regarding your personal information, which may include:
            </p>
            <ul className="list-disc pl-6 my-4 space-y-2">
              <li><strong>Right to Access:</strong> You can request a copy of the personal information we hold about you.</li>
              <li><strong>Right to Rectification:</strong> You can request that we correct inaccurate or incomplete information.</li>
              <li><strong>Right to Erasure:</strong> In certain circumstances, you can request that we delete your personal information.</li>
              <li><strong>Right to Restrict Processing:</strong> You can request that we restrict the processing of your information under certain conditions.</li>
              <li><strong>Right to Data Portability:</strong> You can request that we transfer your information to another organization or directly to you.</li>
              <li><strong>Right to Object:</strong> You can object to our processing of your personal information, particularly for marketing purposes.</li>
              <li><strong>Right to Withdraw Consent:</strong> You can withdraw your consent at any time where we rely on consent to process your information.</li>
            </ul>
            <p>
              To exercise any of these rights, please contact us using the information provided in the "Contact Us" section below. We will respond to your request within the timeframe required by applicable law.
            </p>
            
            <h2 className="text-2xl font-serif font-bold text-uk-blue mt-8 mb-4">10. International Data Transfers</h2>
            <p>
              UK Institute is based in the United Kingdom, and your information may be transferred to, stored, and processed in the UK and other countries where our service providers maintain facilities. We ensure that any international transfers of personal data are subject to appropriate safeguards as required by data protection laws.
            </p>
            <p>
              When we transfer personal data outside the UK or European Economic Area (EEA), we implement appropriate safeguards such as:
            </p>
            <ul className="list-disc pl-6 my-4 space-y-2">
              <li>Standard Contractual Clauses approved by the European Commission</li>
              <li>Binding Corporate Rules for transfers within a corporate group</li>
              <li>Adherence to frameworks that ensure adequate protection</li>
            </ul>
            
            <h2 className="text-2xl font-serif font-bold text-uk-blue mt-8 mb-4">11. Children's Privacy</h2>
            <p>
              Our services are not intended for children under the age of 16, and we do not knowingly collect personal information from children under 16. If you are a parent or guardian and believe that your child has provided us with personal information, please contact us immediately, and we will take steps to delete such information.
            </p>
            
            <h2 className="text-2xl font-serif font-bold text-uk-blue mt-8 mb-4">12. Changes to This Privacy Policy</h2>
            <p>
              We may update this Privacy Policy from time to time to reflect changes in our practices or for other operational, legal, or regulatory reasons. The updated policy will be posted on this page with a revised "Last Updated" date at the top. We encourage you to review this Privacy Policy periodically to stay informed about how we collect, use, and protect your information.
            </p>
            <p>
              For material changes, we will provide appropriate notice, such as through email or a prominent notice on our website before the changes become effective.
            </p>
            
            <h2 className="text-2xl font-serif font-bold text-uk-blue mt-8 mb-4">13. Contact Us</h2>
            <p>
              If you have any questions, concerns, or requests regarding this Privacy Policy or our data practices, please contact us at:
            </p>
            <div className="my-4">
              <p><strong>UK Institute Data Protection Officer</strong></p>
              <p>123 Education Street</p>
              <p>London, UK, SW1 1AA</p>
              <p>Email: privacy@ukinstitute.edu</p>
              <p>Phone: +44 20 1234 5687</p>
            </div>
            <p>
              For EU/EEA residents: You have the right to lodge a complaint with your local data protection authority if you believe that our processing of your personal information does not comply with applicable data protection laws.
            </p>
            
            <div className="mt-10 mb-6 border-t border-gray-200 pt-8">
              <div className="flex items-center justify-between flex-wrap">
                <div>
                  <p className="text-sm text-gray-500">Last Updated: {lastUpdated}</p>
                </div>
                <div className="mt-4 md:mt-0">
                  <Link href="/terms" className="text-uk-blue hover:underline mr-4">
                    Terms of Service
                  </Link>
                  <Link href="/cookie-policy" className="text-uk-blue hover:underline">
                    Cookie Policy
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
} 