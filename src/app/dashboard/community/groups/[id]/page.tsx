'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { 
  FaUsers, FaCalendarAlt, FaBook, FaComments, 
  FaFileAlt, FaLink, FaVideo, FaUser, FaUserPlus,
  FaBell, FaChevronLeft, FaThumbsUp, FaPaperPlane,
  FaEllipsisH, FaClock, FaLock, FaGlobe, FaChalkboardTeacher
} from 'react-icons/fa';
import Button from '@/components/ui/Button';
import Card from '@/components/ui/Card';

// Mock data for the study group
const getGroupData = (id: string) => {
  // In a real app, this would be an API call
  return {
    id,
    name: 'Financial Analysis Study Group',
    description: 'A collaborative group focused on mastering financial statement analysis, valuation techniques, and investment decision-making processes.',
    createdAt: '2023-09-15T10:00:00',
    privacy: 'private',
    course: 'Financial Analysis & Planning',
    courseId: '345',
    members: [
      { id: '1', name: 'Emma Taylor', role: 'organizer', avatar: '/images/avatars/emma.jpg', isOnline: true },
      { id: '2', name: 'Michael Chen', role: 'member', avatar: '/images/avatars/michael.jpg', isOnline: true },
      { id: '3', name: 'Sophie Williams', role: 'member', avatar: '/images/avatars/sophie.jpg', isOnline: false },
      { id: '4', name: 'Daniel Smith', role: 'member', avatar: '/images/avatars/daniel.jpg', isOnline: false },
      { id: '5', name: 'Alex Johnson', role: 'member', avatar: '/images/avatars/alex.jpg', isOnline: true },
      { id: '6', name: 'Lisa Anderson', role: 'instructor', avatar: '/images/avatars/lisa.jpg', isOnline: false },
    ],
    schedule: [
      { 
        id: '1', 
        title: 'Weekly Study Session',
        date: '2023-11-28T15:00:00',
        duration: 90, // minutes
        recurring: true,
        meetingLink: 'https://zoom.us/j/123456789',
        host: 'Emma Taylor'
      },
      { 
        id: '2', 
        title: 'Exam Preparation',
        date: '2023-12-05T14:00:00',
        duration: 120, // minutes
        recurring: false,
        meetingLink: 'https://zoom.us/j/987654321',
        host: 'Lisa Anderson'
      }
    ],
    discussions: [
      {
        id: '1',
        author: 'Michael Chen',
        avatar: '/images/avatars/michael.jpg',
        date: '2023-11-25T09:30:00',
        content: 'I found this excellent article on ratio analysis that helped me understand the liquidity ratios better. Check it out!',
        link: 'https://www.investopedia.com/terms/l/liquidityratios.asp',
        likes: 5,
        replies: 3
      },
      {
        id: '2',
        author: 'Emma Taylor',
        avatar: '/images/avatars/emma.jpg',
        date: '2023-11-24T14:45:00',
        content: 'Does anyone have tips for the DCF valuation assignment due next week? I\'m having trouble with calculating the terminal value.',
        likes: 2,
        replies: 4
      },
      {
        id: '3',
        author: 'Sophie Williams',
        avatar: '/images/avatars/sophie.jpg',
        date: '2023-11-23T11:20:00',
        content: 'I created a spreadsheet template for cash flow analysis that might be helpful for everyone. I\'ve added it to our resources.',
        likes: 8,
        replies: 2
      }
    ],
    resources: [
      {
        id: '1',
        title: 'Financial Ratios Cheat Sheet',
        type: 'PDF',
        size: '420 KB',
        uploadedBy: 'Lisa Anderson',
        date: '2023-11-20T15:30:00'
      },
      {
        id: '2',
        title: 'Cash Flow Analysis Template',
        type: 'Excel',
        size: '1.2 MB',
        uploadedBy: 'Sophie Williams',
        date: '2023-11-23T11:15:00'
      },
      {
        id: '3',
        title: 'Valuation Methods Summary',
        type: 'PDF',
        size: '850 KB',
        uploadedBy: 'Emma Taylor',
        date: '2023-11-18T09:45:00'
      },
      {
        id: '4',
        title: 'Investment Decision Framework',
        type: 'PDF',
        size: '1.5 MB',
        uploadedBy: 'Lisa Anderson',
        date: '2023-11-15T14:20:00'
      }
    ]
  };
};

export default function StudyGroupPage({ params }: { params: { id: string } }) {
  const [group, setGroup] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState('discussions');
  const [newMessage, setNewMessage] = useState('');
  
  useEffect(() => {
    // Fetch group data - in a real app this would be an API call
    const data = getGroupData(params.id);
    setGroup(data);
    setLoading(false);
  }, [params.id]);
  
  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newMessage.trim()) return;
    
    // In a real app, this would send the message to the server
    console.log('Sending message:', newMessage);
    
    // Reset form
    setNewMessage('');
  };
  
  // Format date helper
  const formatDate = (dateString: string): string => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-GB', { 
      day: 'numeric', 
      month: 'short', 
      year: 'numeric'
    });
  };
  
  // Format time helper
  const formatTime = (dateString: string): string => {
    const date = new Date(dateString);
    return date.toLocaleTimeString('en-GB', { 
      hour: '2-digit', 
      minute: '2-digit'
    });
  };
  
  // Check if a date is today
  const isToday = (dateString: string): boolean => {
    const date = new Date(dateString);
    const today = new Date();
    return date.getDate() === today.getDate() &&
      date.getMonth() === today.getMonth() &&
      date.getFullYear() === today.getFullYear();
  };
  
  // Check if a date is upcoming (within the next 7 days)
  const isUpcoming = (dateString: string): boolean => {
    const date = new Date(dateString);
    const today = new Date();
    const diff = Math.floor((date.getTime() - today.getTime()) / (1000 * 60 * 60 * 24));
    return diff >= 0 && diff <= 7;
  };
  
  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-uk-blue"></div>
      </div>
    );
  }
  
  if (!group) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900">Study Group Not Found</h1>
          <p className="mt-2 text-gray-600">The study group you're looking for doesn't exist or has been removed.</p>
          <Button href="/dashboard/community" variant="primary" className="mt-4">
            Return to Community
          </Button>
        </div>
      </div>
    );
  }
  
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
            <Link href="/dashboard/community" className="text-white/80 hover:text-white mr-2">
              Community
            </Link>
            <span className="text-white/60 mx-2">/</span>
            <Link href="/dashboard/community/groups" className="text-white/80 hover:text-white mr-2">
              Study Groups
            </Link>
            <span className="text-white/60 mx-2">/</span>
            <span className="text-white">{group.name}</span>
          </div>
          <div className="flex items-center justify-between mt-4">
            <h1 className="text-2xl font-bold text-white">{group.name}</h1>
            <div className="flex items-center space-x-2">
              <Button 
                variant="outline" 
                size="sm" 
                className="text-white border-white/30 hover:bg-white/10"
                icon={<FaBell />}
              >
                Notifications
              </Button>
              {group.privacy === 'private' ? (
                <div className="flex items-center text-white/80 text-sm">
                  <FaLock className="mr-1" />
                  <span>Private Group</span>
                </div>
              ) : (
                <div className="flex items-center text-white/80 text-sm">
                  <FaGlobe className="mr-1" />
                  <span>Public Group</span>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      
      {/* Back Button */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <Link 
          href="/dashboard/community/groups" 
          className="inline-flex items-center text-sm text-gray-600 hover:text-uk-blue"
        >
          <FaChevronLeft className="mr-1" />
          <span>Back to study groups</span>
        </Link>
      </div>
      
      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column - Group Info & Members */}
          <div className="lg:col-span-1 space-y-6">
            {/* Group Info */}
            <Card variant="glass" className="p-6">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-xl font-bold text-gray-900">About</h2>
                <Button 
                  variant="outline" 
                  size="sm"
                >
                  Join Group
                </Button>
              </div>
              
              <p className="text-gray-700 mb-4">{group.description}</p>
              
              <div className="space-y-3 text-sm">
                <div className="flex items-center text-gray-600">
                  <FaBook className="mr-2" />
                  <span>Course: </span>
                  <Link 
                    href={`/dashboard/courses/${group.courseId}`}
                    className="ml-1 text-uk-blue hover:underline"
                  >
                    {group.course}
                  </Link>
                </div>
                
                <div className="flex items-center text-gray-600">
                  <FaCalendarAlt className="mr-2" />
                  <span>Created on {formatDate(group.createdAt)}</span>
                </div>
                
                <div className="flex items-center text-gray-600">
                  <FaUsers className="mr-2" />
                  <span>{group.members.length} members</span>
                </div>
              </div>
            </Card>
            
            {/* Members */}
            <Card variant="bordered" className="overflow-hidden">
              <div className="px-6 py-4 bg-gray-50 border-b border-gray-200 flex justify-between items-center">
                <h3 className="font-bold text-gray-900">Members</h3>
                <Button 
                  variant="outline" 
                  size="sm" 
                  icon={<FaUserPlus />}
                >
                  Invite
                </Button>
              </div>
              
              <div className="p-6">
                <div className="space-y-4">
                  {group.members.map((member: any) => (
                    <div key={member.id} className="flex items-center">
                      <div className="relative mr-3 flex-shrink-0">
                        <div className="w-10 h-10 rounded-full bg-gray-300 overflow-hidden">
                          {/* Member avatar would go here */}
                        </div>
                        {member.isOnline && (
                          <span className="absolute bottom-0 right-0 block w-2.5 h-2.5 rounded-full bg-green-400 ring-1 ring-white"></span>
                        )}
                      </div>
                      <div className="min-w-0 flex-1">
                        <div className="flex items-center">
                          <p className="text-sm font-medium text-gray-900 truncate">{member.name}</p>
                          {member.role === 'organizer' && (
                            <span className="ml-2 px-2 py-0.5 text-xs rounded-full bg-purple-100 text-purple-800">
                              Organizer
                            </span>
                          )}
                          {member.role === 'instructor' && (
                            <span className="ml-2 px-2 py-0.5 text-xs rounded-full bg-amber-100 text-amber-800">
                              Instructor
                            </span>
                          )}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                
                {group.members.length > 6 && (
                  <div className="mt-4 text-center">
                    <Button variant="outline" size="sm" fullWidth>
                      View All Members
                    </Button>
                  </div>
                )}
              </div>
            </Card>
            
            {/* Upcoming Sessions */}
            <Card variant="glass" className="overflow-hidden">
              <div className="px-6 py-4 border-b border-gray-200 flex justify-between items-center">
                <h3 className="font-bold text-gray-900">Upcoming Sessions</h3>
                <Button 
                  variant="outline" 
                  size="sm" 
                  icon={<FaCalendarAlt />}
                >
                  Schedule
                </Button>
              </div>
              
              <div className="p-6">
                {group.schedule.filter((session: any) => isUpcoming(session.date)).length > 0 ? (
                  <div className="space-y-4">
                    {group.schedule
                      .filter((session: any) => isUpcoming(session.date))
                      .map((session: any) => (
                        <div key={session.id} className="p-4 bg-white border border-gray-200 rounded-lg">
                          <div className="flex items-center justify-between">
                            <h4 className="font-medium text-gray-900">{session.title}</h4>
                            {session.recurring && (
                              <span className="px-2 py-0.5 text-xs rounded-full bg-blue-100 text-blue-800">
                                Recurring
                              </span>
                            )}
                          </div>
                          
                          <div className="mt-2 space-y-2 text-sm text-gray-600">
                            <div className="flex items-center">
                              <FaCalendarAlt className="mr-2 text-gray-400" />
                              <span>
                                {isToday(session.date) ? 'Today' : formatDate(session.date)},
                                {' '}{formatTime(session.date)}
                              </span>
                            </div>
                            <div className="flex items-center">
                              <FaClock className="mr-2 text-gray-400" />
                              <span>{session.duration} minutes</span>
                            </div>
                            <div className="flex items-center">
                              <FaChalkboardTeacher className="mr-2 text-gray-400" />
                              <span>Host: {session.host}</span>
                            </div>
                          </div>
                          
                          <div className="mt-4">
                            <Button 
                              variant="primary" 
                              size="sm" 
                              effect="hoverglow" 
                              fullWidth
                              icon={<FaVideo />}
                            >
                              Join Session
                            </Button>
                          </div>
                        </div>
                      ))}
                  </div>
                ) : (
                  <div className="text-center py-8">
                    <p className="text-gray-500 mb-4">No upcoming sessions scheduled</p>
                    <Button variant="outline" size="sm">
                      Schedule a Session
                    </Button>
                  </div>
                )}
              </div>
            </Card>
          </div>
          
          {/* Right Column - Tabs Content */}
          <div className="lg:col-span-2">
            <Card variant="elevated" className="overflow-hidden">
              {/* Tabs */}
              <div className="border-b border-gray-200">
                <nav className="flex">
                  <button
                    onClick={() => setActiveTab('discussions')}
                    className={`px-6 py-4 text-sm font-medium ${
                      activeTab === 'discussions'
                        ? 'border-b-2 border-uk-blue text-uk-blue'
                        : 'text-gray-500 hover:text-gray-700 hover:border-gray-300'
                    }`}
                  >
                    Discussions
                  </button>
                  <button
                    onClick={() => setActiveTab('resources')}
                    className={`px-6 py-4 text-sm font-medium ${
                      activeTab === 'resources'
                        ? 'border-b-2 border-uk-blue text-uk-blue'
                        : 'text-gray-500 hover:text-gray-700 hover:border-gray-300'
                    }`}
                  >
                    Resources
                  </button>
                  <button
                    onClick={() => setActiveTab('schedule')}
                    className={`px-6 py-4 text-sm font-medium ${
                      activeTab === 'schedule'
                        ? 'border-b-2 border-uk-blue text-uk-blue'
                        : 'text-gray-500 hover:text-gray-700 hover:border-gray-300'
                    }`}
                  >
                    Schedule
                  </button>
                </nav>
              </div>
              
              {/* Discussion Tab */}
              {activeTab === 'discussions' && (
                <div className="p-6">
                  {/* New Message Form */}
                  <form onSubmit={handleSendMessage} className="mb-8">
                    <div className="mb-4">
                      <textarea
                        placeholder="Share your thoughts, questions, or resources with the group..."
                        className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-uk-blue focus:border-uk-blue"
                        rows={3}
                        value={newMessage}
                        onChange={(e) => setNewMessage(e.target.value)}
                      ></textarea>
                    </div>
                    <div className="flex justify-end">
                      <Button
                        type="submit"
                        variant="primary"
                        effect="hoverglow"
                        icon={<FaPaperPlane />}
                        disabled={!newMessage.trim()}
                      >
                        Post
                      </Button>
                    </div>
                  </form>
                  
                  {/* Discussions List */}
                  <div className="space-y-6">
                    {group.discussions.map((discussion: any) => (
                      <div key={discussion.id} className="bg-white p-4 rounded-lg border border-gray-200">
                        <div className="flex">
                          <div className="mr-4 flex-shrink-0">
                            <div className="w-10 h-10 rounded-full bg-gray-300 overflow-hidden">
                              {/* Avatar would go here */}
                            </div>
                          </div>
                          <div className="flex-1">
                            <div className="flex items-center justify-between">
                              <h4 className="font-medium text-gray-900">{discussion.author}</h4>
                              <div className="flex items-center">
                                <span className="text-sm text-gray-500">{formatDate(discussion.date)}</span>
                                <button className="ml-2 text-gray-400 hover:text-gray-500">
                                  <FaEllipsisH />
                                </button>
                              </div>
                            </div>
                            
                            <div className="mt-2 text-gray-700">
                              <p>{discussion.content}</p>
                              
                              {discussion.link && (
                                <a 
                                  href={discussion.link} 
                                  target="_blank" 
                                  rel="noopener noreferrer"
                                  className="mt-2 flex items-center text-uk-blue hover:underline"
                                >
                                  <FaLink className="mr-1" />
                                  <span>{discussion.link}</span>
                                </a>
                              )}
                            </div>
                            
                            <div className="mt-4 flex items-center space-x-4 text-sm">
                              <button className="flex items-center text-gray-500 hover:text-uk-blue">
                                <FaThumbsUp className="mr-1" />
                                <span>{discussion.likes}</span>
                              </button>
                              <button className="flex items-center text-gray-500 hover:text-uk-blue">
                                <FaComments className="mr-1" />
                                <span>{discussion.replies} replies</span>
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
              
              {/* Resources Tab */}
              {activeTab === 'resources' && (
                <div className="p-6">
                  <div className="flex justify-between items-center mb-6">
                    <h3 className="text-lg font-bold text-gray-900">Study Materials</h3>
                    <Button 
                      variant="primary"
                      size="sm"
                      effect="hoverglow"
                      icon={<FaFileAlt />}
                    >
                      Upload Resources
                    </Button>
                  </div>
                  
                  <div className="space-y-4">
                    {group.resources.map((resource: any) => (
                      <div key={resource.id} className="flex items-center p-4 bg-white rounded-lg border border-gray-200">
                        <div className="mr-4 p-3 bg-gray-100 rounded-lg text-gray-700">
                          <FaFileAlt />
                        </div>
                        <div className="flex-1">
                          <h4 className="font-medium text-gray-900">{resource.title}</h4>
                          <div className="flex items-center text-xs text-gray-500 mt-1">
                            <span>{resource.type}</span>
                            <span className="mx-1">•</span>
                            <span>{resource.size}</span>
                            <span className="mx-1">•</span>
                            <span>Uploaded by {resource.uploadedBy}</span>
                            <span className="mx-1">•</span>
                            <span>{formatDate(resource.date)}</span>
                          </div>
                        </div>
                        <Button variant="outline" size="sm">
                          Download
                        </Button>
                      </div>
                    ))}
                  </div>
                </div>
              )}
              
              {/* Schedule Tab */}
              {activeTab === 'schedule' && (
                <div className="p-6">
                  <div className="flex justify-between items-center mb-6">
                    <h3 className="text-lg font-bold text-gray-900">Session Schedule</h3>
                    <Button 
                      variant="primary"
                      size="sm"
                      effect="hoverglow"
                      icon={<FaCalendarAlt />}
                    >
                      Schedule New Session
                    </Button>
                  </div>
                  
                  {group.schedule.length > 0 ? (
                    <div className="space-y-6">
                      {group.schedule.map((session: any) => (
                        <div key={session.id} className="p-4 bg-white rounded-lg border border-gray-200">
                          <div className="flex justify-between items-start">
                            <div>
                              <h4 className="font-medium text-gray-900">{session.title}</h4>
                              <div className="mt-2 space-y-2 text-sm text-gray-600">
                                <div className="flex items-center">
                                  <FaCalendarAlt className="mr-2 text-gray-400" />
                                  <span>{formatDate(session.date)}, {formatTime(session.date)}</span>
                                </div>
                                <div className="flex items-center">
                                  <FaClock className="mr-2 text-gray-400" />
                                  <span>{session.duration} minutes</span>
                                </div>
                                <div className="flex items-center">
                                  <FaChalkboardTeacher className="mr-2 text-gray-400" />
                                  <span>Host: {session.host}</span>
                                </div>
                              </div>
                            </div>
                            <div>
                              {session.recurring && (
                                <span className="px-2 py-0.5 text-xs rounded-full bg-blue-100 text-blue-800">
                                  Recurring
                                </span>
                              )}
                              {isToday(session.date) && (
                                <span className="ml-2 px-2 py-0.5 text-xs rounded-full bg-green-100 text-green-800">
                                  Today
                                </span>
                              )}
                            </div>
                          </div>
                          
                          <div className="mt-4 flex flex-wrap gap-2">
                            <Button 
                              variant="primary" 
                              size="sm" 
                              icon={<FaVideo />}
                            >
                              Join
                            </Button>
                            <Button 
                              variant="outline" 
                              size="sm" 
                            >
                              Add to Calendar
                            </Button>
                            <Button 
                              variant="outline" 
                              size="sm" 
                            >
                              Edit
                            </Button>
                          </div>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <div className="text-center py-12">
                      <p className="text-gray-500 mb-4">No sessions scheduled yet</p>
                      <Button variant="primary" effect="3d">
                        Schedule Your First Session
                      </Button>
                    </div>
                  )}
                </div>
              )}
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
} 