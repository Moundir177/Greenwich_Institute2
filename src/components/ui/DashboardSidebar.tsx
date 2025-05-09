'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { 
  FaHome, FaBook, FaUserCircle, FaEnvelope, FaBell,
  FaTrophy, FaUsers, FaGraduationCap, FaCertificate,
  FaCalendarAlt, FaCog
} from 'react-icons/fa';

interface NavItem {
  name: string;
  href: string;
  icon: React.ReactNode;
  badge?: number;
}

export default function DashboardSidebar() {
  const pathname = usePathname();
  const [unreadNotifications, setUnreadNotifications] = useState(3);
  const [unreadMessages, setUnreadMessages] = useState(2);
  
  const navigation: NavItem[] = [
    { name: 'Dashboard', href: '/dashboard', icon: <FaHome className="w-5 h-5" /> },
    { name: 'Courses', href: '/dashboard/courses', icon: <FaBook className="w-5 h-5" /> },
    { name: 'Messages', href: '/dashboard/messages', icon: <FaEnvelope className="w-5 h-5" />, badge: unreadMessages },
    { name: 'Notifications', href: '/dashboard/notifications', icon: <FaBell className="w-5 h-5" />, badge: unreadNotifications },
    { name: 'Achievements', href: '/dashboard/achievements', icon: <FaTrophy className="w-5 h-5" /> },
    { name: 'Community', href: '/dashboard/community', icon: <FaUsers className="w-5 h-5" /> },
    { name: 'Profile', href: '/dashboard/profile', icon: <FaUserCircle className="w-5 h-5" /> },
  ];
  
  return (
    <div className="hidden md:flex md:w-64 md:flex-col">
      <div className="flex-1 flex flex-col min-h-0 bg-white border-r border-gray-200">
        <div className="flex-1 flex flex-col pt-5 pb-4 overflow-y-auto">
          <div className="flex items-center justify-center flex-shrink-0 px-4 mb-5">
            <Link href="/">
              <div className="flex items-center">
                <div className="text-uk-blue">
                  <FaGraduationCap className="h-8 w-8" />
                </div>
                <span className="ml-2 text-lg font-semibold text-gray-900">UK Institute</span>
              </div>
            </Link>
          </div>
          <nav className="mt-5 px-2 space-y-1">
            {navigation.map((item) => {
              const isActive = pathname === item.href || pathname?.startsWith(`${item.href}/`);
              
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`
                    group flex items-center px-3 py-3 text-sm font-medium rounded-md
                    ${isActive 
                      ? 'bg-uk-blue text-white'
                      : 'text-gray-700 hover:text-uk-blue hover:bg-gray-50'}
                  `}
                >
                  <div className="mr-3">
                    {item.icon}
                  </div>
                  <span className="flex-1">{item.name}</span>
                  {item.badge && item.badge > 0 && (
                    <span className={`
                      ml-3 inline-block py-0.5 px-2 text-xs rounded-full
                      ${isActive ? 'bg-white text-uk-blue' : 'bg-red-100 text-red-800'}
                    `}>
                      {item.badge}
                    </span>
                  )}
                </Link>
              );
            })}
          </nav>
        </div>
        <div className="flex-shrink-0 flex border-t border-gray-200 p-4">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <div className="h-10 w-10 rounded-full bg-gray-300 flex items-center justify-center">
                <FaUserCircle className="h-8 w-8 text-gray-500" />
              </div>
            </div>
            <div className="ml-3">
              <p className="text-sm font-medium text-gray-900">John Doe</p>
              <p className="text-xs font-medium text-gray-500">View profile</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 