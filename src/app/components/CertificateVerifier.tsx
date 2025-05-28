"use client";

import { useState } from 'react';
import { FaSearch, FaCheckCircle, FaTimesCircle } from 'react-icons/fa';
import { useLanguage } from '../contexts/LanguageContext';

// Mock certificate database - in a real app, this would be a server API call
const mockCertificates = {
  'RA-2023-00123': {
    name: 'John Smith',
    program: 'Master of Business Administration',
    issueDate: '2023-05-15',
    valid: true
  },
  '2023-MBA-00456': {
    name: 'Emma Johnson',
    program: 'Advanced Diploma in Digital Marketing',
    issueDate: '2023-07-20',
    valid: true
  }
};

type CertificateType = typeof mockCertificates[keyof typeof mockCertificates];

const CertificateVerifier = () => {
  const { t } = useLanguage();
  const [certificateId, setCertificateId] = useState('');
  const [verificationResult, setVerificationResult] = useState<null | {
    found: boolean;
    data?: CertificateType;
  }>(null);
  const [isVerifying, setIsVerifying] = useState(false);

  const handleVerify = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!certificateId.trim()) return;
    
    setIsVerifying(true);
    
    // Simulate API call with a slight delay
    setTimeout(() => {
      const result = mockCertificates[certificateId as keyof typeof mockCertificates];
      
      if (result) {
        setVerificationResult({
          found: true,
          data: result
        });
      } else {
        setVerificationResult({
          found: false
        });
      }
      
      setIsVerifying(false);
    }, 800);
  };

  return (
    <div className="max-w-md w-full mx-auto p-6 bg-white/5 backdrop-blur-sm rounded-lg">
      <h3 className="text-xl font-semibold text-gold mb-4">{t('verify_certificate') || 'Verify Certificate'}</h3>
      
      <form onSubmit={handleVerify}>
        <div className="relative">
          <input
            type="text"
            value={certificateId}
            onChange={(e) => setCertificateId(e.target.value)}
            placeholder={t('certificate_id_placeholder') || 'e.g., RA-2023-00123'}
            className="w-full px-4 py-3 pr-12 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-gold/50"
          />
          <button 
            type="submit"
            disabled={isVerifying || !certificateId.trim()}
            className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-gold text-dark-blue p-2 rounded-full disabled:opacity-50"
          >
            <FaSearch />
          </button>
        </div>
        
        <div className="text-sm text-white/60 mt-2">
          {t('try_demo_ids') || 'Try demo IDs:'} RA-2023-00123 {t('or') || 'or'} 2023-MBA-00456
        </div>
      </form>
      
      {isVerifying && (
        <div className="mt-4 text-center">
          <div className="inline-block h-6 w-6 animate-spin rounded-full border-2 border-solid border-white border-r-transparent"></div>
          <p className="mt-2 text-white/80">{t('verifying') || 'Verifying...'}</p>
        </div>
      )}
      
      {verificationResult && !isVerifying && (
        <div className={`mt-4 p-4 rounded-lg ${verificationResult.found ? 'bg-green-800/20' : 'bg-red-800/20'}`}>
          {verificationResult.found ? (
            <div>
              <div className="flex items-center mb-3">
                <FaCheckCircle className="text-green-400 mr-2" />
                <h4 className="font-semibold text-green-400">{t('certificate_valid') || 'Certificate Valid'}</h4>
              </div>
              <div className="text-white/90">
                <p><span className="text-white/70">{t('name') || 'Name'}:</span> {verificationResult.data?.name}</p>
                <p><span className="text-white/70">{t('program') || 'Program'}:</span> {verificationResult.data?.program}</p>
                <p><span className="text-white/70">{t('issue_date') || 'Issue Date'}:</span> {verificationResult.data?.issueDate}</p>
              </div>
            </div>
          ) : (
            <div className="flex items-center">
              <FaTimesCircle className="text-red-400 mr-2" />
              <p className="text-red-400">{t('certificate_not_found') || 'Certificate not found. Please check the ID and try again.'}</p>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default CertificateVerifier; 