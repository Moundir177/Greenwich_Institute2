'use client';

import { useState, useEffect, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import Link from 'next/link';
import { FaUsers, FaPlus, FaSearch } from 'react-icons/fa';

// Component that uses useSearchParams
const GroupContent = () => {
  const searchParams = useSearchParams();
  const id = searchParams.get('id');
  
  // If we have an ID parameter, show the group details
  if (id) {
    return <GroupDetails id={id} />;
  }
  
  // Otherwise show the list of groups
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-2xl font-bold text-gray-900">Study Groups</h1>
        <button className="bg-uk-blue text-white px-4 py-2 rounded-md flex items-center">
          <FaPlus className="mr-2" />
          Create Group
        </button>
      </div>
      
      <div className="relative mb-6">
        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
          <FaSearch className="text-gray-400" />
        </div>
        <input 
          type="text" 
          placeholder="Search study groups..." 
          className="pl-10 pr-4 py-2 border border-gray-300 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-uk-blue focus:border-transparent"
        />
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Group Cards */}
        {[1, 2, 3].map((groupId) => (
          <div key={groupId} className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-200">
            <div className="p-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-medium text-gray-900">
                  Study Group {groupId}
                </h3>
                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                  Active
                </span>
              </div>
              <p className="text-gray-600 mb-4">
                A collaborative group for students to discuss and study together.
              </p>
              <div className="flex items-center text-sm text-gray-500">
                <FaUsers className="mr-1" />
                <span>8 members</span>
              </div>
            </div>
            <div className="bg-gray-50 px-6 py-4">
              <a 
                href={`/dashboard/community/groups?id=${groupId}`}
                className="text-uk-blue font-medium hover:underline"
              >
                View Group
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

// StudyGroup component if an ID is passed in the URL
const GroupDetails = ({ id }: { id: string }) => {
  // This would typically make an API call to fetch the group details
  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h1 className="text-2xl font-bold mb-4">Study Group {id}</h1>
      <p>This is a fallback page for the study group with ID: {id}</p>
      <p className="mt-4">For static export, we're using this page as a fallback for dynamic routes.</p>
      <div className="mt-6">
        <Link 
          href="/dashboard/community/groups"
          className="text-uk-blue hover:underline"
        >
          Back to all groups
        </Link>
      </div>
    </div>
  );
};

// Main Groups Page with Suspense boundary
export default function GroupsPage() {
  return (
    <Suspense fallback={
      <div className="flex justify-center items-center min-h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-uk-blue"></div>
      </div>
    }>
      <GroupContent />
    </Suspense>
  );
} 