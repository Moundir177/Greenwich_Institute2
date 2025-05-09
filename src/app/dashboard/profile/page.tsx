import Link from 'next/link';
import { FaUser, FaLock, FaEnvelope, FaBell, FaGlobe, FaCreditCard, FaShieldAlt, FaFileAlt } from 'react-icons/fa';
import Button from '@/components/ui/Button';

export const metadata = {
  title: 'Profile Settings | UK Institute',
  description: 'Manage your profile, account settings, and preferences.',
};

export default function ProfilePage() {
  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Profile Header */}
      <div className="bg-uk-blue py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center">
            <Link href="/dashboard" className="text-white/80 hover:text-white mr-2">
              Dashboard
            </Link>
            <span className="text-white/60 mx-2">/</span>
            <span className="text-white">Profile Settings</span>
          </div>
          <h1 className="text-2xl font-bold text-white mt-4">Profile Settings</h1>
        </div>
      </div>
      
      {/* Profile Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Sidebar Navigation */}
          <div className="md:col-span-1">
            <div className="bg-white shadow-sm rounded-lg border border-gray-100 overflow-hidden">
              <div className="p-6 border-b border-gray-100">
                <div className="flex items-center">
                  <div className="relative h-16 w-16 rounded-full overflow-hidden border-2 border-uk-blue">
                    <div className="absolute inset-0 bg-gray-300"></div>
                  </div>
                  <div className="ml-4">
                    <h2 className="font-bold text-gray-800">John Doe</h2>
                    <p className="text-sm text-gray-500">Student ID: UK-2023-78945</p>
                  </div>
                </div>
              </div>
              
              <nav className="p-4 space-y-1">
                <Link href="/dashboard/profile" className="flex items-center px-3 py-3 text-gray-800 bg-gray-100 rounded-md">
                  <FaUser className="text-uk-blue mr-3" />
                  <span>Personal Information</span>
                </Link>
                <Link href="/dashboard/profile/security" className="flex items-center px-3 py-3 text-gray-600 hover:bg-gray-50 rounded-md">
                  <FaLock className="text-gray-500 mr-3" />
                  <span>Security</span>
                </Link>
                <Link href="/dashboard/profile/notifications" className="flex items-center px-3 py-3 text-gray-600 hover:bg-gray-50 rounded-md">
                  <FaBell className="text-gray-500 mr-3" />
                  <span>Notifications</span>
                </Link>
                <Link href="/dashboard/profile/payment" className="flex items-center px-3 py-3 text-gray-600 hover:bg-gray-50 rounded-md">
                  <FaCreditCard className="text-gray-500 mr-3" />
                  <span>Payment Methods</span>
                </Link>
                <Link href="/dashboard/profile/privacy" className="flex items-center px-3 py-3 text-gray-600 hover:bg-gray-50 rounded-md">
                  <FaShieldAlt className="text-gray-500 mr-3" />
                  <span>Privacy</span>
                </Link>
              </nav>
            </div>
          </div>
          
          {/* Main Content */}
          <div className="md:col-span-3">
            <div className="bg-white shadow-sm rounded-lg border border-gray-100 overflow-hidden">
              <div className="px-6 py-4 border-b border-gray-100">
                <h2 className="text-xl font-bold text-uk-blue">Personal Information</h2>
                <p className="text-sm text-gray-500 mt-1">Update your personal details and profile information</p>
              </div>
              
              <div className="p-6">
                {/* Profile Photo */}
                <div className="mb-8">
                  <h3 className="text-lg font-medium text-gray-800 mb-4">Profile Photo</h3>
                  <div className="flex items-center">
                    <div className="relative h-24 w-24 rounded-full overflow-hidden border-2 border-gray-200">
                      <div className="absolute inset-0 bg-gray-300"></div>
                    </div>
                    <div className="ml-6">
                      <div className="flex space-x-3">
                        <button className="px-4 py-2 bg-gray-100 text-gray-700 rounded-md hover:bg-gray-200 text-sm font-medium">
                          Change Photo
                        </button>
                        <button className="px-4 py-2 text-gray-500 rounded-md hover:bg-gray-50 text-sm">
                          Remove
                        </button>
                      </div>
                      <p className="text-xs text-gray-500 mt-2">
                        JPG, GIF or PNG. Max size 2MB.
                      </p>
                    </div>
                  </div>
                </div>
                
                {/* Personal Details Form */}
                <form className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-1">
                        First Name
                      </label>
                      <input
                        type="text"
                        id="firstName"
                        className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-uk-blue focus:border-uk-blue sm:text-sm"
                        defaultValue="John"
                      />
                    </div>
                    <div>
                      <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-1">
                        Last Name
                      </label>
                      <input
                        type="text"
                        id="lastName"
                        className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-uk-blue focus:border-uk-blue sm:text-sm"
                        defaultValue="Doe"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                      Email Address
                    </label>
                    <div className="flex items-center">
                      <input
                        type="email"
                        id="email"
                        className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-uk-blue focus:border-uk-blue sm:text-sm"
                        defaultValue="john.doe@example.com"
                        disabled
                      />
                      <span className="ml-2 px-2 py-1 text-xs bg-gray-100 text-gray-800 rounded-md">
                        Verified
                      </span>
                    </div>
                    <p className="text-xs text-gray-500 mt-1">
                      To change your email, please contact support.
                    </p>
                  </div>
                  
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-uk-blue focus:border-uk-blue sm:text-sm"
                      defaultValue="+44 7123 456789"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="address" className="block text-sm font-medium text-gray-700 mb-1">
                      Address
                    </label>
                    <textarea
                      id="address"
                      rows={3}
                      className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-uk-blue focus:border-uk-blue sm:text-sm"
                      defaultValue="123 Main Street, London, UK"
                    ></textarea>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="city" className="block text-sm font-medium text-gray-700 mb-1">
                        City
                      </label>
                      <input
                        type="text"
                        id="city"
                        className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-uk-blue focus:border-uk-blue sm:text-sm"
                        defaultValue="London"
                      />
                    </div>
                    <div>
                      <label htmlFor="postcode" className="block text-sm font-medium text-gray-700 mb-1">
                        Postal Code
                      </label>
                      <input
                        type="text"
                        id="postcode"
                        className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-uk-blue focus:border-uk-blue sm:text-sm"
                        defaultValue="SW1 1AA"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="country" className="block text-sm font-medium text-gray-700 mb-1">
                      Country
                    </label>
                    <select
                      id="country"
                      className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-uk-blue focus:border-uk-blue sm:text-sm"
                      defaultValue="UK"
                    >
                      <option value="UK">United Kingdom</option>
                      <option value="US">United States</option>
                      <option value="CA">Canada</option>
                      <option value="AU">Australia</option>
                      <option value="FR">France</option>
                      <option value="DE">Germany</option>
                    </select>
                  </div>
                  
                  <div>
                    <label htmlFor="bio" className="block text-sm font-medium text-gray-700 mb-1">
                      Bio
                    </label>
                    <textarea
                      id="bio"
                      rows={4}
                      className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-uk-blue focus:border-uk-blue sm:text-sm"
                      defaultValue="Business professional looking to enhance management skills and leadership capabilities."
                    ></textarea>
                    <p className="text-xs text-gray-500 mt-1">
                      Brief description for your profile. This will be visible to instructors and other students.
                    </p>
                  </div>
                  
                  <hr className="my-8" />
                  
                  <h3 className="text-lg font-medium text-gray-800 mb-4">Additional Information</h3>
                  
                  <div>
                    <label htmlFor="education" className="block text-sm font-medium text-gray-700 mb-1">
                      Education
                    </label>
                    <input
                      type="text"
                      id="education"
                      className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-uk-blue focus:border-uk-blue sm:text-sm"
                      defaultValue="BA in Business, University of London, 2018"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="employment" className="block text-sm font-medium text-gray-700 mb-1">
                      Current Employment
                    </label>
                    <input
                      type="text"
                      id="employment"
                      className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-uk-blue focus:border-uk-blue sm:text-sm"
                      defaultValue="Marketing Manager at ABC Company"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="interests" className="block text-sm font-medium text-gray-700 mb-1">
                      Learning Interests
                    </label>
                    <select
                      id="interests"
                      multiple
                      className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-uk-blue focus:border-uk-blue sm:text-sm"
                      defaultValue={['business', 'marketing']}
                    >
                      <option value="business">Business & Management</option>
                      <option value="marketing">Marketing</option>
                      <option value="technology">Technology</option>
                      <option value="design">Design</option>
                      <option value="finance">Finance</option>
                      <option value="language">Languages</option>
                    </select>
                    <p className="text-xs text-gray-500 mt-1">
                      Hold Ctrl (or Cmd) to select multiple options.
                    </p>
                  </div>
                  
                  <div className="flex justify-end space-x-3 pt-4">
                    <button
                      type="button"
                      className="px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50 text-sm font-medium"
                    >
                      Cancel
                    </button>
                    <Button type="submit" variant="primary">
                      Save Changes
                    </Button>
                  </div>
                </form>
              </div>
            </div>
            
            {/* Danger Zone */}
            <div className="bg-white shadow-sm rounded-lg border border-gray-100 overflow-hidden mt-8">
              <div className="px-6 py-4 border-b border-gray-100">
                <h2 className="text-xl font-bold text-uk-red">Danger Zone</h2>
                <p className="text-sm text-gray-500 mt-1">These actions are irreversible. Please proceed with caution.</p>
              </div>
              
              <div className="p-6">
                <div className="space-y-4">
                  <div className="p-4 border border-gray-200 rounded-md">
                    <h3 className="font-medium text-gray-800">Download Your Data</h3>
                    <p className="text-sm text-gray-500 mt-1 mb-3">Download all your personal data in a portable format.</p>
                    <button className="px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50 text-sm font-medium flex items-center">
                      <FaFileAlt className="mr-2" />
                      Request Data Export
                    </button>
                  </div>
                  
                  <div className="p-4 border border-red-200 rounded-md bg-red-50">
                    <h3 className="font-medium text-red-700">Delete Account</h3>
                    <p className="text-sm text-red-500 mt-1 mb-3">
                      Once you delete your account, all your data will be permanently removed. This action cannot be undone.
                    </p>
                    <button className="px-4 py-2 border border-red-300 rounded-md text-red-700 hover:bg-red-100 text-sm font-medium">
                      Delete Account
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 