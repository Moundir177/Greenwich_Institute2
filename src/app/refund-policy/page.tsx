import Link from 'next/link';

export const metadata = {
  title: 'Refund Policy | UK Institute',
  description: 'Our refund policy details the terms and conditions for refunds on courses and programs.',
};

export default function RefundPolicyPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-uk-blue py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-serif font-bold text-uk-white mb-6">Refund Policy</h1>
            <p className="text-xl text-uk-white/90 max-w-3xl mx-auto">
              Our commitment to fair and transparent refund procedures.
            </p>
            <p className="text-sm text-uk-white/70 mt-4">Last Updated: June 15, 2023</p>
          </div>
        </div>
      </section>
      
      {/* Refund Policy Content */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none text-gray-600">
            <p>
              This Refund Policy outlines the terms and conditions for refunds at UK Institute. We are committed to providing quality education and ensuring our refund processes are fair and transparent. Please read this policy carefully to understand your rights and obligations regarding refunds.
            </p>
            
            <h2 className="text-2xl font-serif font-bold text-uk-blue mt-8 mb-4">1. Scope of Policy</h2>
            <p>
              This Refund Policy applies to all fees paid to UK Institute for courses, programs, workshops, and other educational services. This includes both online and in-person programs, unless otherwise specified.
            </p>
            
            <h2 className="text-2xl font-serif font-bold text-uk-blue mt-8 mb-4">2. Course Cancellations by UK Institute</h2>
            <p>
              If UK Institute cancels a course or program for any reason, registered students will receive a full refund of all fees paid for that course or program. Such refunds will be processed within 14 business days from the date of cancellation.
            </p>
            
            <h2 className="text-2xl font-serif font-bold text-uk-blue mt-8 mb-4">3. Withdrawals and Cancellations by Students</h2>
            
            <h3 className="text-xl font-bold text-uk-blue mt-6 mb-3">3.1 Cooling-Off Period</h3>
            <p>
              You have the right to cancel your enrollment within 14 calendar days from the date of registration without any penalty. A full refund will be provided if cancellation is requested within this period, provided that the course has not already begun.
            </p>
            
            <h3 className="text-xl font-bold text-uk-blue mt-6 mb-3">3.2 Withdrawals Before Course Commencement</h3>
            <ul className="list-disc pl-6 my-4 space-y-2">
              <li>If you withdraw more than 30 days before the course start date, you will receive a full refund minus a £50 administrative fee.</li>
              <li>If you withdraw between 15-30 days before the course start date, you will receive a 70% refund of the total course fee.</li>
              <li>If you withdraw less than 15 days before the course start date, you will receive a 50% refund of the total course fee.</li>
            </ul>
            
            <h3 className="text-xl font-bold text-uk-blue mt-6 mb-3">3.3 Withdrawals After Course Commencement</h3>
            <ul className="list-disc pl-6 my-4 space-y-2">
              <li>If you withdraw within the first week of the course (or first module for online courses), you will receive a 30% refund of the total course fee.</li>
              <li>No refunds will be provided for withdrawals after the first week of the course or first module completion.</li>
            </ul>
            
            <h3 className="text-xl font-bold text-uk-blue mt-6 mb-3">3.4 Special Considerations</h3>
            <p>
              In cases of serious illness, bereavement, or other extenuating circumstances that prevent a student from continuing their studies, UK Institute may consider partial refunds or credits on a case-by-case basis. Supporting documentation will be required.
            </p>
            
            <h2 className="text-2xl font-serif font-bold text-uk-blue mt-8 mb-4">4. Payment Plans and Installments</h2>
            <p>
              For students on payment plans, the refund policy applies to the total course fee, not just the amount paid at the time of withdrawal. Any outstanding installments may still be due, depending on the timing of the withdrawal as per the above schedule.
            </p>
            
            <h2 className="text-2xl font-serif font-bold text-uk-blue mt-8 mb-4">5. Non-Refundable Fees</h2>
            <p>
              The following fees are non-refundable under any circumstances:
            </p>
            <ul className="list-disc pl-6 my-4 space-y-2">
              <li>Application fees</li>
              <li>Registration fees</li>
              <li>Materials that have been dispatched or downloaded</li>
              <li>Technology/platform access fees once access has been granted</li>
            </ul>
            
            <h2 className="text-2xl font-serif font-bold text-uk-blue mt-8 mb-4">6. Refund Process</h2>
            <p>
              To request a refund, students must:
            </p>
            <ol className="list-decimal pl-6 my-4 space-y-2">
              <li>Submit a formal written request to finance@ukinstitute.edu</li>
              <li>Include your full name, student ID, course details, and reason for withdrawal</li>
              <li>Provide any supporting documentation (if applicable)</li>
            </ol>
            <p>
              Refunds will typically be processed within 14-21 business days from the approval of the refund request. Refunds will be issued using the same payment method used for the original transaction unless otherwise agreed.
            </p>
            
            <h2 className="text-2xl font-serif font-bold text-uk-blue mt-8 mb-4">7. Course Transfers</h2>
            <p>
              In lieu of a refund, students may request to transfer to another course or to defer enrollment to a later session. Transfer requests are subject to availability and approval, and may incur a transfer fee of £75. Transfer requests must be made at least 14 days before the original course start date.
            </p>
            
            <h2 className="text-2xl font-serif font-bold text-uk-blue mt-8 mb-4">8. Course Quality and Complaints</h2>
            <p>
              If you are dissatisfied with the quality of a course, please follow our Complaints Procedure. Refund requests based on quality concerns will be considered only after the complaint has been formally investigated and substantiated.
            </p>
            
            <h2 className="text-2xl font-serif font-bold text-uk-blue mt-8 mb-4">9. Changes to Refund Policy</h2>
            <p>
              UK Institute reserves the right to modify this Refund Policy at any time. Changes will be effective immediately upon posting to our website, but will not apply retroactively to enrollments made before the change.
            </p>
            
            <h2 className="text-2xl font-serif font-bold text-uk-blue mt-8 mb-4">10. Contact Information</h2>
            <p>
              For any questions or concerns regarding this Refund Policy, please contact:
            </p>
            <div className="my-4">
              <p><strong>Finance Department</strong></p>
              <p>UK Institute</p>
              <p>123 Education Street</p>
              <p>London, UK, SW1 1AA</p>
              <p>Email: finance@ukinstitute.edu</p>
              <p>Phone: +44 20 1234 5681</p>
            </div>
            
            <div className="mt-10 mb-6 border-t border-gray-200 pt-8">
              <p>
                By enrolling in any course or program offered by UK Institute, you acknowledge that you have read, understood, and agree to this Refund Policy.
              </p>
              <div className="mt-6">
                <Link href="/privacy-policy" className="text-uk-blue hover:underline">
                  Privacy Policy
                </Link> | 
                <Link href="/terms" className="text-uk-blue hover:underline ml-2">
                  Terms of Service
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
} 