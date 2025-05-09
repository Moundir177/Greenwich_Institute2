'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { 
  FaBell, FaCheckCircle, FaUser, FaBook, FaCalendarAlt, 
  FaEnvelope, FaGraduationCap, FaCertificate, FaExclamationCircle,
  FaCog, FaTimes, FaFilter, FaEllipsisH, FaEye, FaTrash
} from 'react-icons/fa';
import Button from '@/components/ui/Button';
import Card from '@/components/ui/Card';

// Mock data for notifications
const mockNotifications = [
  {
    id: '1',
    type: 'course',
    title: 'New Module Released',
    message: 'A new module "Advanced Financial Modeling" has been added to your Business Management course.',
    date: '2023-11-27T14:30:00',
    isRead: false,
    actionUrl: '/dashboard/courses/business-management',
    icon: 'FaBook'
  },
  {
    id: '2',
    type: 'message',
    title: 'New Message from Instructor',
    message: 'Dr. Lisa Anderson sent you a message regarding your recent assignment submission.',
    date: '2023-11-26T10:15:00',
    isRead: true,
    actionUrl: '/dashboard/messages/instructor/45',
    icon: 'FaEnvelope'
  },
  {
    id: '3',
    type: 'deadline',
    title: 'Assignment Due Tomorrow',
    message: 'Your "Market Analysis Report" assignment for Digital Marketing Essentials is due tomorrow at 11:59 PM.',
    date: '2023-11-25T09:00:00',
    isRead: false,
    actionUrl: '/dashboard/courses/digital-marketing/assignments/12',
    icon: 'FaCalendarAlt'
  },
  {
    id: '4',
    type: 'achievement',
    title: 'New Badge Earned',
    message: 'Congratulations! You\'ve earned the "Perfect Attendance" badge for completing all scheduled sessions.',
    date: '2023-11-24T16:45:00',
    isRead: true,
    actionUrl: '/dashboard/profile/achievements',
    icon: 'FaCertificate'
  },
  {
    id: '5',
    type: 'system',
    title: 'Account Security Alert',
    message: 'Your account was accessed from a new device. If this wasn\'t you, please change your password immediately.',
    date: '2023-11-23T08:20:00',
    isRead: false,
    actionUrl: '/dashboard/profile/security',
    icon: 'FaExclamationCircle'
  },
  {
    id: '6',
    type: 'course',
    title: 'Course Completion',
    message: 'You\'ve successfully completed the "Project Management Professional" course. Your certificate is now available.',
    date: '2023-11-22T14:30:00',
    isRead: true,
    actionUrl: '/dashboard/profile/certificates',
    icon: 'FaGraduationCap'
  },
  {
    id: '7',
    type: 'message',
    title: 'Study Group Invitation',
    message: 'Emma Taylor has invited you to join the "Financial Analysis Study Group".',
    date: '2023-11-21T11:05:00',
    isRead: false,
    actionUrl: '/dashboard/community/groups/45',
    icon: 'FaUser'
  },
  {
    id: '8',
    type: 'system',
    title: 'Scheduled Maintenance',
    message: 'The learning platform will be undergoing scheduled maintenance on Sunday, December 3rd from 2:00 AM to 5:00 AM GMT.',
    date: '2023-11-20T17:00:00',
    isRead: true,
    actionUrl: '/dashboard/announcements',
    icon: 'FaCog'
  }
];

export default function NotificationsPage() {
  const [notifications, setNotifications] = useState(mockNotifications);
  const [activeFilter, setActiveFilter] = useState('all');
  const [isLoading, setIsLoading] = useState(true);
  
  // Simulate loading data
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 800);
    
    return () => clearTimeout(timer);
  }, []);
  
  // Filter notifications based on active filter
  const filteredNotifications = notifications.filter(notification => {
    if (activeFilter === 'all') return true;
    if (activeFilter === 'unread') return !notification.isRead;
    return notification.type === activeFilter;
  });
  
  // Mark notification as read
  const markAsRead = (id: string) => {
    setNotifications(prevNotifications => 
      prevNotifications.map(notification => 
        notification.id === id 
          ? { ...notification, isRead: true } 
          : notification
      )
    );
  };
  
  // Mark all notifications as read
  const markAllAsRead = () => {
    setNotifications(prevNotifications => 
      prevNotifications.map(notification => ({ ...notification, isRead: true }))
    );
  };
  
  // Delete notification
  const deleteNotification = (id: string) => {
    setNotifications(prevNotifications => 
      prevNotifications.filter(notification => notification.id !== id)
    );
  };
  
  // Clear all notifications
  const clearAllNotifications = () => {
    setNotifications([]);
  };
  
  // Format date helper
  const formatDate = (dateString: string): string => {
    const date = new Date(dateString);
    const now = new Date();
    const diffTime = Math.abs(now.getTime() - date.getTime());
    const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));
    
    if (diffDays === 0) {
      const diffHours = Math.floor(diffTime / (1000 * 60 * 60));
      if (diffHours === 0) {
        const diffMinutes = Math.floor(diffTime / (1000 * 60));
        return `${diffMinutes} minute${diffMinutes !== 1 ? 's' : ''} ago`;
      }
      return `${diffHours} hour${diffHours !== 1 ? 's' : ''} ago`;
    } else if (diffDays === 1) {
      return 'Yesterday';
    } else if (diffDays < 7) {
      return `${diffDays} day${diffDays !== 1 ? 's' : ''} ago`;
    } else {
      return date.toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' });
    }
  };
  
  // Get icon component based on string name
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'FaBook': return <FaBook />;
      case 'FaEnvelope': return <FaEnvelope />;
      case 'FaCalendarAlt': return <FaCalendarAlt />;
      case 'FaCertificate': return <FaCertificate />;
      case 'FaExclamationCircle': return <FaExclamationCircle />;
      case 'FaGraduationCap': return <FaGraduationCap />;
      case 'FaUser': return <FaUser />;
      case 'FaCog': return <FaCog />;
      default: return <FaBell />;
    }
  };
  
  // Get notification background color based on type
  const getNotificationColor = (type: string, isRead: boolean): string => {
    const baseClass = isRead ? 'bg-gray-50' : 'bg-blue-50 border-l-4 border-uk-blue';
    
    switch (type) {
      case 'achievement':
        return isRead ? 'bg-gray-50' : 'bg-green-50 border-l-4 border-green-500';
      case 'deadline':
        return isRead ? 'bg-gray-50' : 'bg-amber-50 border-l-4 border-amber-500';
      case 'system':
        return isRead ? 'bg-gray-50' : 'bg-red-50 border-l-4 border-red-500';
      default:
        return baseClass;
    }
  };
  
  // Get icon color based on notification type
  const getIconColor = (type: string): string => {
    switch (type) {
      case 'course': return 'text-uk-blue';
      case 'message': return 'text-purple-600';
      case 'deadline': return 'text-amber-500';
      case 'achievement': return 'text-green-500';
      case 'system': return 'text-red-500';
      default: return 'text-gray-500';
    }
  };
  
  const unreadCount = notifications.filter(n => !n.isRead).length;
  
  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Header */}
      <div className="bg-uk-blue py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center">
            <Link href="/dashboard" className="text-white/80 hover:text-white mr-2">
              Dashboard
            </Link>
            <span className="text-white/60 mx-2">/</span>
            <span className="text-white">Notifications</span>
          </div>
          <div className="flex items-center justify-between mt-4">
            <h1 className="text-2xl font-bold text-white">Notifications</h1>
            <div className="flex items-center space-x-2">
              {unreadCount > 0 && (
                <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-white text-uk-blue">
                  {unreadCount} unread
                </span>
              )}
            </div>
          </div>
        </div>
      </div>
      
      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Sidebar */}
          <div className="lg:col-span-1">
            <Card variant="elevated" className="overflow-hidden sticky top-8">
              <div className="p-6 border-b border-gray-200">
                <h2 className="text-lg font-bold text-gray-900">Filters</h2>
              </div>
              
              <div className="p-4">
                <nav className="space-y-1">
                  <button
                    onClick={() => setActiveFilter('all')}
                    className={`flex items-center px-3 py-2 w-full text-left rounded-md ${
                      activeFilter === 'all'
                        ? 'bg-uk-blue text-white'
                        : 'text-gray-700 hover:bg-gray-100'
                    }`}
                  >
                    <FaBell className="mr-3" />
                    <span>All Notifications</span>
                    <span className="ml-auto bg-gray-200 text-gray-800 px-2 py-0.5 rounded-full text-xs">
                      {notifications.length}
                    </span>
                  </button>
                  
                  <button
                    onClick={() => setActiveFilter('unread')}
                    className={`flex items-center px-3 py-2 w-full text-left rounded-md ${
                      activeFilter === 'unread'
                        ? 'bg-uk-blue text-white'
                        : 'text-gray-700 hover:bg-gray-100'
                    }`}
                  >
                    <FaExclamationCircle className="mr-3" />
                    <span>Unread</span>
                    {unreadCount > 0 && (
                      <span className="ml-auto bg-red-100 text-red-800 px-2 py-0.5 rounded-full text-xs">
                        {unreadCount}
                      </span>
                    )}
                  </button>
                  
                  <button
                    onClick={() => setActiveFilter('course')}
                    className={`flex items-center px-3 py-2 w-full text-left rounded-md ${
                      activeFilter === 'course'
                        ? 'bg-uk-blue text-white'
                        : 'text-gray-700 hover:bg-gray-100'
                    }`}
                  >
                    <FaBook className="mr-3" />
                    <span>Courses</span>
                  </button>
                  
                  <button
                    onClick={() => setActiveFilter('message')}
                    className={`flex items-center px-3 py-2 w-full text-left rounded-md ${
                      activeFilter === 'message'
                        ? 'bg-uk-blue text-white'
                        : 'text-gray-700 hover:bg-gray-100'
                    }`}
                  >
                    <FaEnvelope className="mr-3" />
                    <span>Messages</span>
                  </button>
                  
                  <button
                    onClick={() => setActiveFilter('deadline')}
                    className={`flex items-center px-3 py-2 w-full text-left rounded-md ${
                      activeFilter === 'deadline'
                        ? 'bg-uk-blue text-white'
                        : 'text-gray-700 hover:bg-gray-100'
                    }`}
                  >
                    <FaCalendarAlt className="mr-3" />
                    <span>Deadlines</span>
                  </button>
                  
                  <button
                    onClick={() => setActiveFilter('achievement')}
                    className={`flex items-center px-3 py-2 w-full text-left rounded-md ${
                      activeFilter === 'achievement'
                        ? 'bg-uk-blue text-white'
                        : 'text-gray-700 hover:bg-gray-100'
                    }`}
                  >
                    <FaCertificate className="mr-3" />
                    <span>Achievements</span>
                  </button>
                  
                  <button
                    onClick={() => setActiveFilter('system')}
                    className={`flex items-center px-3 py-2 w-full text-left rounded-md ${
                      activeFilter === 'system'
                        ? 'bg-uk-blue text-white'
                        : 'text-gray-700 hover:bg-gray-100'
                    }`}
                  >
                    <FaCog className="mr-3" />
                    <span>System</span>
                  </button>
                </nav>
              </div>
              
              <div className="p-4 border-t border-gray-200">
                <div className="space-y-3">
                  <Button 
                    variant="outline" 
                    size="sm" 
                    fullWidth 
                    onClick={markAllAsRead}
                    icon={<FaCheckCircle />}
                    disabled={!notifications.some(n => !n.isRead)}
                  >
                    Mark All as Read
                  </Button>
                  <Button 
                    variant="outline" 
                    size="sm" 
                    fullWidth 
                    onClick={clearAllNotifications}
                    icon={<FaTrash />}
                    disabled={notifications.length === 0}
                  >
                    Clear All
                  </Button>
                </div>
              </div>
            </Card>
          </div>
          
          {/* Notifications List */}
          <div className="lg:col-span-3">
            <Card variant="elevated">
              <div className="p-6 border-b border-gray-200 flex items-center justify-between">
                <h2 className="text-lg font-bold text-gray-900">
                  {activeFilter === 'all' ? 'All Notifications' : 
                   activeFilter === 'unread' ? 'Unread Notifications' : 
                   `${activeFilter.charAt(0).toUpperCase() + activeFilter.slice(1)} Notifications`}
                </h2>
                <div className="flex items-center space-x-2">
                  <Button
                    variant="outline"
                    size="sm"
                    icon={<FaFilter />}
                  >
                    Sort
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    icon={<FaCog />}
                  >
                    Settings
                  </Button>
                </div>
              </div>
              
              {isLoading ? (
                <div className="p-20 flex justify-center">
                  <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-uk-blue"></div>
                </div>
              ) : filteredNotifications.length === 0 ? (
                <div className="p-12 text-center">
                  <div className="inline-flex rounded-full bg-gray-100 p-4 mb-4">
                    <FaBell className="h-8 w-8 text-gray-400" />
                  </div>
                  <h3 className="mt-2 text-lg font-medium text-gray-900">No notifications</h3>
                  <p className="mt-1 text-sm text-gray-500">
                    {activeFilter === 'all' 
                      ? "You don't have any notifications yet." 
                      : `You don't have any ${activeFilter} notifications.`}
                  </p>
                </div>
              ) : (
                <div className="divide-y divide-gray-200">
                  {filteredNotifications.map((notification) => (
                    <div 
                      key={notification.id} 
                      className={`p-4 sm:p-6 ${getNotificationColor(notification.type, notification.isRead)}`}
                    >
                      <div className="flex items-start">
                        <div className={`flex-shrink-0 mr-4 p-2 rounded-full ${notification.isRead ? 'bg-gray-100' : 'bg-white'}`}>
                          <div className={getIconColor(notification.type)}>
                            {getIcon(notification.icon)}
                          </div>
                        </div>
                        
                        <div className="flex-1 min-w-0">
                          <div className="flex justify-between items-start">
                            <h3 className={`text-base font-medium ${notification.isRead ? 'text-gray-900' : 'text-uk-blue'}`}>
                              {notification.title}
                            </h3>
                            <span className="text-xs text-gray-500 whitespace-nowrap ml-2">
                              {formatDate(notification.date)}
                            </span>
                          </div>
                          
                          <p className="mt-1 text-sm text-gray-600">
                            {notification.message}
                          </p>
                          
                          <div className="mt-3 flex flex-wrap gap-2">
                            <Link href={notification.actionUrl}>
                              <Button 
                                variant="primary" 
                                size="sm" 
                                effect="hoverglow"
                              >
                                View Details
                              </Button>
                            </Link>
                            
                            {!notification.isRead && (
                              <Button 
                                variant="outline" 
                                size="sm" 
                                onClick={() => markAsRead(notification.id)}
                                icon={<FaCheckCircle />}
                              >
                                Mark as Read
                              </Button>
                            )}
                            
                            <Button 
                              variant="outline" 
                              size="sm"
                              className="!text-gray-500 border-gray-200 hover:bg-gray-50"
                              onClick={() => deleteNotification(notification.id)}
                              icon={<FaTimes />}
                            >
                              Dismiss
                            </Button>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </Card>
            
            {/* Notification Settings Teaser */}
            <Card variant="glass" className="mt-6 p-6">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-lg font-bold text-gray-900">Notification Preferences</h3>
                  <p className="text-sm text-gray-600 mt-1">
                    Customize which notifications you receive and how they're delivered.
                  </p>
                </div>
                <Button 
                  variant="primary" 
                  effect="3d"
                  icon={<FaCog />}
                >
                  Manage Settings
                </Button>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
} 