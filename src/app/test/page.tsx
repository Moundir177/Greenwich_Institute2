import Link from 'next/link';

export default function TestPage() {
  return (
    <div className="p-10">
      <h1 className="text-3xl font-bold mb-10">Color Test Page</h1>
      
      <div className="space-y-6">
        <div className="bg-uk-blue p-6 text-white rounded-lg">
          This is uk-blue (#012169)
        </div>
        
        <div className="bg-uk-red p-6 text-white rounded-lg">
          This is uk-red (#C8102E)
        </div>
        
        <div className="bg-uk-white p-6 text-uk-blue border rounded-lg">
          This is uk-white (#FFFFFF) with uk-blue text
        </div>
        
        <div className="bg-gold p-6 text-uk-blue rounded-lg">
          This is gold (#FFD700) with uk-blue text
        </div>
        
        <div className="bg-silver p-6 text-uk-blue rounded-lg">
          This is silver (#C0C0C0) with uk-blue text
        </div>
      </div>
      
      <div className="mt-10">
        <Link href="/" className="text-uk-blue hover:text-uk-red underline">
          Back to Home
        </Link>
      </div>
    </div>
  );
} 