'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { 
  FaSearch, FaFilter, FaBell, FaUser, FaComments, 
  FaUsers, FaBook, FaQuestionCircle, FaLightbulb,
  FaThumbsUp, FaComment, FaEye, FaClock, FaPlus,
  FaTags, FaChalkboardTeacher, FaGraduationCap
} from 'react-icons/fa';
import Button from '@/components/ui/Button';
import Card from '@/components/ui/Card';

// Mock data - in a real application, this would come from an API
const mockCommunityData = {
  forums: [
    {
      id: 1,
      name: 'Course Discussions',
      description: 'Discuss course materials, assignments, and related topics',
      icon: 'FaBook',
      totalTopics: 324,
      totalPosts: 1875,
      latestPost: {
        title: 'Understanding Core Management Functions',
        author: 'Alice Smith',
        avatar: '/images/avatars/alice.jpg',
        date: '2023-11-25T14:32:00'
      }
    },
    {
      id: 2,
      name: 'Study Groups',
      description: 'Find or create study groups for collaborative learning',
      icon: 'FaUsers',
      totalTopics: 156,
      totalPosts: 892,
      latestPost: {
        title: 'Looking for Marketing Strategy study partners',
        author: 'Tom Wilson',
        avatar: '/images/avatars/tom.jpg',
        date: '2023-11-24T09:15:00'
      }
    },
    {
      id: 3,
      name: 'Technical Support',
      description: 'Get help with platform technical issues or questions',
      icon: 'FaQuestionCircle',
      totalTopics: 93,
      totalPosts: 412,
      latestPost: {
        title: 'Video playback issue in Chrome browser',
        author: 'David Brown',
        avatar: '/images/avatars/david.jpg',
        date: '2023-11-23T16:48:00'
      }
    },
    {
      id: 4,
      name: 'Career Development',
      description: 'Discussions about career paths, job opportunities, and professional growth',
      icon: 'FaGraduationCap',
      totalTopics: 211,
      totalPosts: 978,
      latestPost: {
        title: 'How to leverage your certificates in job interviews',
        author: 'Sarah Johnson',
        avatar: '/images/avatars/sarah.jpg',
        date: '2023-11-22T11:20:00'
      }
    }
  ],
  trendingTopics: [
    {
      id: 1,
      title: 'Best practices for analyzing financial statements',
      forum: 'Course Discussions',
      author: 'Michael Chen',
      avatar: '/images/avatars/michael.jpg',
      date: '2023-11-20T10:15:00',
      views: 324,
      replies: 28,
      lastActivity: '2023-11-25T08:45:00',
      tags: ['Finance', 'Analysis', 'Fundamentals']
    },
    {
      id: 2,
      title: 'Weekly study group for Business Management Fundamentals',
      forum: 'Study Groups',
      author: 'Emma Taylor',
      avatar: '/images/avatars/emma.jpg',
      date: '2023-11-21T14:22:00',
      views: 186,
      replies: 15,
      lastActivity: '2023-11-24T16:30:00',
      tags: ['Study Group', 'Business Management', 'Weekly']
    },
    {
      id: 3,
      title: 'How to prepare for the Project Management certification exam',
      forum: 'Career Development',
      author: 'James Wilson',
      avatar: '/images/avatars/james.jpg',
      date: '2023-11-19T09:40:00',
      views: 412,
      replies: 32,
      lastActivity: '2023-11-25T12:15:00',
      tags: ['Certification', 'Project Management', 'Exam Prep']
    }
  ],
  onlineInstructors: [
    {
      id: 1,
      name: 'Prof. Robert Johnson',
      role: 'Business Strategy Expert',
      avatar: '/images/avatars/prof-johnson.jpg',
      status: 'online'
    },
    {
      id: 2,
      name: 'Dr. Lisa Anderson',
      role: 'Financial Management',
      avatar: '/images/avatars/dr-anderson.jpg',
      status: 'online'
    },
    {
      id: 3,
      name: 'Alex Hernandez, MBA',
      role: 'Marketing Specialist',
      avatar: '/images/avatars/alex.jpg',
      status: 'away'
    }
  ],
  upcomingEvents: [
    {
      id: 1,
      title: 'Live Q&A: Digital Marketing Trends 2024',
      date: '2023-12-05T17:00:00',
      instructor: 'Prof. Mark Davis',
      participants: 68,
      type: 'webinar'
    },
    {
      id: 2,
      title: 'Study Group: Financial Analysis Case Studies',
      date: '2023-11-28T15:00:00',
      host: 'Emma Taylor',
      participants: 12,
      type: 'study-group'
    },
    {
      id: 3,
      title: 'Career Workshop: Building Your Professional Network',
      date: '2023-12-10T14:00:00',
      instructor: 'Sarah Johnson',
      participants: 45,
      type: 'workshop'
    }
  ]
};

export default function CommunityPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeTab, setActiveTab] = useState('forums');
  const [communityData, setCommunityData] = useState(mockCommunityData);
  
  // In a real app, we would fetch the data from an API based on the search query
  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Perform search logic here
    console.log('Searching for:', searchQuery);
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
  
  // Icon renderer helper
  const renderIcon = (iconName: string) => {
    switch (iconName) {
      case 'FaBook':
        return <FaBook />;
      case 'FaUsers':
        return <FaUsers />;
      case 'FaQuestionCircle':
        return <FaQuestionCircle />;
      case 'FaGraduationCap':
        return <FaGraduationCap />;
      default:
        return <FaComments />;
    }
  };
  
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
            <span className="text-white">Community</span>
          </div>
          <h1 className="text-2xl font-bold text-white mt-4">Learning Community</h1>
        </div>
      </div>
      
      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Search & Filters */}
        <div className="mb-8">
          <Card variant="glass" className="p-4">
            <form onSubmit={handleSearch} className="flex items-center">
              <div className="relative flex-grow">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <FaSearch className="text-gray-400" />
                </div>
                <input
                  type="text"
                  className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-l-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-1 focus:ring-uk-blue focus:border-uk-blue sm:text-sm"
                  placeholder="Search discussions, topics, or users..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
              <Button
                type="submit"
                variant="primary"
                className="rounded-l-none"
              >
                Search
              </Button>
              <Button
                type="button"
                variant="outline"
                className="ml-2"
                icon={<FaFilter />}
              >
                Filter
              </Button>
            </form>
          </Card>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column - Forums & Topics */}
          <div className="lg:col-span-2">
            {/* Tabs */}
            <div className="mb-6 border-b border-gray-200">
              <nav className="flex -mb-px">
                <button
                  onClick={() => setActiveTab('forums')}
                  className={`px-4 py-2 font-medium text-sm ${
                    activeTab === 'forums'
                      ? 'border-b-2 border-uk-blue text-uk-blue'
                      : 'text-gray-500 hover:text-gray-700 hover:border-gray-300'
                  }`}
                >
                  Forums
                </button>
                <button
                  onClick={() => setActiveTab('trending')}
                  className={`px-4 py-2 font-medium text-sm ${
                    activeTab === 'trending'
                      ? 'border-b-2 border-uk-blue text-uk-blue'
                      : 'text-gray-500 hover:text-gray-700 hover:border-gray-300'
                  }`}
                >
                  Trending Topics
                </button>
                <button
                  onClick={() => setActiveTab('recent')}
                  className={`px-4 py-2 font-medium text-sm ${
                    activeTab === 'recent'
                      ? 'border-b-2 border-uk-blue text-uk-blue'
                      : 'text-gray-500 hover:text-gray-700 hover:border-gray-300'
                  }`}
                >
                  Recent Activity
                </button>
                <button
                  onClick={() => setActiveTab('my-posts')}
                  className={`px-4 py-2 font-medium text-sm ${
                    activeTab === 'my-posts'
                      ? 'border-b-2 border-uk-blue text-uk-blue'
                      : 'text-gray-500 hover:text-gray-700 hover:border-gray-300'
                  }`}
                >
                  My Posts
                </button>
              </nav>
            </div>
            
            {/* Forums List */}
            {activeTab === 'forums' && (
              <div className="space-y-4">
                <div className="flex justify-between items-center mb-4">
                  <h2 className="text-xl font-bold text-gray-900">Discussion Forums</h2>
                  <Button 
                    variant="primary" 
                    size="sm" 
                    effect="hoverglow"
                    icon={<FaPlus />}
                  >
                    New Topic
                  </Button>
                </div>
                
                {communityData.forums.map((forum) => (
                  <Card key={forum.id} variant="elevated" className="p-4 hover:shadow-md transition-shadow">
                    <div className="flex">
                      <div className="mr-4 p-3 rounded-full bg-uk-blue/10 text-uk-blue">
                        {renderIcon(forum.icon)}
                      </div>
                      <div className="flex-1">
                        <div className="flex justify-between items-start">
                          <div>
                            <Link 
                              href={`/dashboard/community/forums/${forum.id}`}
                              className="text-lg font-semibold text-gray-900 hover:text-uk-blue"
                            >
                              {forum.name}
                            </Link>
                            <p className="text-sm text-gray-600 mt-1">{forum.description}</p>
                          </div>
                          <div className="text-sm text-gray-500">
                            <span className="block">{forum.totalTopics} topics</span>
                            <span className="block">{forum.totalPosts} posts</span>
                          </div>
                        </div>
                        
                        {forum.latestPost && (
                          <div className="mt-4 pt-4 border-t border-gray-100">
                            <div className="flex items-center">
                              <div className="mr-3 flex-shrink-0">
                                <div className="w-8 h-8 rounded-full bg-gray-300 overflow-hidden">
                                  {/* User avatar would go here */}
                                </div>
                              </div>
                              <div className="flex-1 min-w-0">
                                <Link 
                                  href={`/dashboard/community/topics/latest-${forum.id}`}
                                  className="text-sm font-medium text-gray-900 hover:text-uk-blue truncate block"
                                >
                                  {forum.latestPost.title}
                                </Link>
                                <div className="flex items-center text-xs text-gray-500">
                                  <span>by {forum.latestPost.author}</span>
                                  <span className="mx-1">•</span>
                                  <span>{formatDate(forum.latestPost.date)}</span>
                                </div>
                              </div>
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            )}
            
            {/* Trending Topics */}
            {activeTab === 'trending' && (
              <div className="space-y-4">
                <h2 className="text-xl font-bold text-gray-900 mb-4">Trending Topics</h2>
                
                {communityData.trendingTopics.map((topic) => (
                  <Card key={topic.id} variant="elevated" className="p-4 hover:shadow-md transition-shadow">
                    <div className="flex items-start">
                      <div className="mr-4 flex-shrink-0">
                        <div className="w-10 h-10 rounded-full bg-gray-300 overflow-hidden">
                          {/* User avatar would go here */}
                        </div>
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center justify-between">
                          <Link 
                            href={`/dashboard/community/topics/${topic.id}`}
                            className="text-lg font-semibold text-gray-900 hover:text-uk-blue truncate block"
                          >
                            {topic.title}
                          </Link>
                          <span className="text-xs text-gray-500">{formatDate(topic.date)}</span>
                        </div>
                        
                        <div className="flex items-center text-xs text-gray-500 mt-1">
                          <span>by {topic.author}</span>
                          <span className="mx-1">•</span>
                          <span>in {topic.forum}</span>
                        </div>
                        
                        <div className="flex flex-wrap gap-1 mt-2">
                          {topic.tags.map((tag, index) => (
                            <span 
                              key={index}
                              className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-gray-100 text-gray-800"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                        
                        <div className="mt-3 flex items-center space-x-4 text-sm text-gray-500">
                          <div className="flex items-center">
                            <FaEye className="mr-1" />
                            <span>{topic.views}</span>
                          </div>
                          <div className="flex items-center">
                            <FaComment className="mr-1" />
                            <span>{topic.replies}</span>
                          </div>
                          <div className="flex items-center">
                            <FaClock className="mr-1" />
                            <span>Last activity {formatDate(topic.lastActivity)}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Card>
                ))}
                
                <div className="mt-4 text-center">
                  <Button variant="outline">
                    View More Topics
                  </Button>
                </div>
              </div>
            )}
            
            {/* Recent Activity */}
            {activeTab === 'recent' && (
              <div className="space-y-4">
                <h2 className="text-xl font-bold text-gray-900 mb-4">Recent Activity</h2>
                <Card variant="bordered" className="p-6 text-center">
                  <p className="text-gray-500 mb-4">This feature is coming soon!</p>
                  <Button variant="primary" effect="3d">
                    Explore Trending Topics
                  </Button>
                </Card>
              </div>
            )}
            
            {/* My Posts */}
            {activeTab === 'my-posts' && (
              <div className="space-y-4">
                <h2 className="text-xl font-bold text-gray-900 mb-4">My Posts</h2>
                <Card variant="bordered" className="p-6 text-center">
                  <p className="text-gray-500 mb-4">This feature is coming soon!</p>
                  <Button variant="primary" effect="3d">
                    Start Posting
                  </Button>
                </Card>
              </div>
            )}
          </div>
          
          {/* Right Column - Sidebar */}
          <div className="lg:col-span-1 space-y-6">
            {/* Online Instructors */}
            <Card variant="glass" className="p-6">
              <h3 className="text-lg font-bold text-gray-900 mb-4">Online Instructors</h3>
              <div className="space-y-4">
                {communityData.onlineInstructors.map((instructor) => (
                  <div key={instructor.id} className="flex items-center">
                    <div className="relative mr-3 flex-shrink-0">
                      <div className="w-10 h-10 rounded-full bg-gray-300 overflow-hidden">
                        {/* Instructor avatar would go here */}
                      </div>
                      <span 
                        className={`absolute bottom-0 right-0 block w-2.5 h-2.5 rounded-full ring-1 ring-white ${
                          instructor.status === 'online' ? 'bg-green-400' : 'bg-yellow-400'
                        }`}
                      ></span>
                    </div>
                    <div className="min-w-0 flex-1">
                      <p className="text-sm font-medium text-gray-900 truncate">{instructor.name}</p>
                      <p className="text-xs text-gray-500 truncate">{instructor.role}</p>
                    </div>
                    <Button variant="outline" size="sm">Message</Button>
                  </div>
                ))}
              </div>
              <div className="mt-4 text-center">
                <Button variant="outline" fullWidth size="sm">
                  View All Instructors
                </Button>
              </div>
            </Card>
            
            {/* Upcoming Events */}
            <Card variant="glass" className="p-6">
              <h3 className="text-lg font-bold text-gray-900 mb-4">Upcoming Events</h3>
              <div className="space-y-4">
                {communityData.upcomingEvents.map((event) => (
                  <div key={event.id} className="p-3 bg-white rounded-lg border border-gray-200 hover:shadow-sm transition-shadow">
                    <div className="flex items-center justify-between">
                      <div className={`p-2 rounded-full ${
                        event.type === 'webinar' 
                          ? 'bg-purple-100 text-purple-600'
                          : event.type === 'study-group'
                            ? 'bg-blue-100 text-blue-600'
                            : 'bg-amber-100 text-amber-600'
                      }`}>
                        {event.type === 'webinar' 
                          ? <FaChalkboardTeacher /> 
                          : event.type === 'study-group'
                            ? <FaUsers />
                            : <FaLightbulb />
                        }
                      </div>
                      <span className="text-xs text-gray-500">
                        {new Date(event.date).toLocaleDateString('en-GB', { day: 'numeric', month: 'short' })}
                      </span>
                    </div>
                    <h4 className="font-medium text-gray-900 mt-2">{event.title}</h4>
                    <div className="flex items-center text-xs text-gray-500 mt-1">
                      <span>
                        {new Date(event.date).toLocaleTimeString('en-GB', { hour: '2-digit', minute: '2-digit' })}
                      </span>
                      <span className="mx-1">•</span>
                      <span>
                        {event.instructor || event.host}
                      </span>
                    </div>
                    <div className="mt-3 flex justify-between items-center">
                      <span className="text-xs text-gray-500">{event.participants} participants</span>
                      <Button variant="primary" size="sm" effect="hoverglow">
                        Join
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-4 text-center">
                <Button variant="outline" fullWidth size="sm">
                  View All Events
                </Button>
              </div>
            </Card>
            
            {/* Create Group */}
            <Card variant="bordered" className="p-6">
              <h3 className="text-lg font-bold text-gray-900 mb-2">Start a Study Group</h3>
              <p className="text-sm text-gray-600 mb-4">
                Create your own study group to collaborate with other students on courses and topics.
              </p>
              <Button variant="primary" effect="3d" fullWidth icon={<FaUsers />}>
                Create Group
              </Button>
            </Card>
            
            {/* Community Guidelines */}
            <Card variant="glass" className="p-6">
              <h3 className="text-lg font-bold text-gray-900 mb-3">Community Guidelines</h3>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-start">
                  <span className="text-uk-blue mr-2">•</span>
                  <span>Be respectful to all community members</span>
                </li>
                <li className="flex items-start">
                  <span className="text-uk-blue mr-2">•</span>
                  <span>Stay on topic in each discussion area</span>
                </li>
                <li className="flex items-start">
                  <span className="text-uk-blue mr-2">•</span>
                  <span>Avoid sharing personal or sensitive information</span>
                </li>
                <li className="flex items-start">
                  <span className="text-uk-blue mr-2">•</span>
                  <span>Give proper credit when sharing resources</span>
                </li>
              </ul>
              <div className="mt-4">
                <Link href="/dashboard/community/guidelines" className="text-sm font-medium text-uk-blue hover:underline">
                  Read full guidelines
                </Link>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
} 