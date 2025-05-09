'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { 
  FaUser, FaLock, FaEnvelope, FaBell, FaGlobe, 
  FaCreditCard, FaShieldAlt, FaFileAlt, FaMedal, 
  FaCertificate, FaTrophy, FaStar, FaShareAlt,
  FaDownload, FaChevronRight, FaChartLine
} from 'react-icons/fa';
import Button from '@/components/ui/Button';
import Card from '@/components/ui/Card';

// Mock data - in a real application, this would come from an API
const achievementsData = {
  stats: {
    totalCourses: 8,
    completedCourses: 5,
    certificatesEarned: 4,
    totalPoints: 2750,
    rank: 'Gold Scholar',
    nextRank: 'Platinum Scholar',
    pointsToNextRank: 250
  },
  badges: [
    {
      id: 1,
      name: 'Course Champion',
      description: 'Completed a course with a score of 95% or higher',
      icon: '/images/badges/champion.png',
      earnedDate: '2023-09-15',
      rarity: 'Rare',
      points: 500
    },
    {
      id: 2,
      name: 'Perfect Attendance',
      description: 'Attended all scheduled live sessions in a course',
      icon: '/images/badges/attendance.png',
      earnedDate: '2023-08-22',
      rarity: 'Uncommon',
      points: 300
    },
    {
      id: 3,
      name: 'Quick Learner',
      description: 'Completed a course 30% faster than the average time',
      icon: '/images/badges/quick.png',
      earnedDate: '2023-10-05',
      rarity: 'Epic',
      points: 750
    },
    {
      id: 4,
      name: 'Discussion Leader',
      description: 'Received 50+ upvotes on your discussion contributions',
      icon: '/images/badges/leader.png',
      earnedDate: '2023-11-10',
      rarity: 'Uncommon',
      points: 250
    },
    {
      id: 5,
      name: 'Knowledge Seeker',
      description: 'Completed all optional materials in a course',
      icon: '/images/badges/seeker.png',
      earnedDate: '2023-07-28',
      rarity: 'Common',
      points: 150
    }
  ],
  certificates: [
    {
      id: 1,
      courseName: 'Business Management Fundamentals',
      issueDate: '2023-10-12',
      expiryDate: '2026-10-12',
      grade: 'Distinction',
      credentialId: 'UK-BM-2023-78945-01'
    },
    {
      id: 2,
      courseName: 'Financial Analysis & Planning',
      issueDate: '2023-08-05',
      expiryDate: '2026-08-05',
      grade: 'Merit',
      credentialId: 'UK-FA-2023-78945-02'
    },
    {
      id: 3,
      courseName: 'Digital Marketing Essentials',
      issueDate: '2023-06-20',
      expiryDate: '2026-06-20',
      grade: 'Distinction',
      credentialId: 'UK-DM-2023-78945-03'
    },
    {
      id: 4,
      courseName: 'Project Management Professional',
      issueDate: '2023-11-15',
      expiryDate: '2026-11-15',
      grade: 'Pass',
      credentialId: 'UK-PM-2023-78945-04'
    }
  ],
  milestones: [
    {
      id: 1,
      title: 'First Course Completed',
      date: '2023-06-20',
      description: 'Completed Digital Marketing Essentials with distinction grade',
      icon: 'FaMedal'
    },
    {
      id: 2,
      title: 'Joined 100 Hour Club',
      date: '2023-08-15',
      description: 'Completed 100 hours of learning on the platform',
      icon: 'FaClock'
    },
    {
      id: 3,
      title: 'Mentor Program Qualification',
      date: '2023-10-20',
      description: 'Qualified to join the student mentor program',
      icon: 'FaUsers'
    },
    {
      id: 4,
      title: '5 Courses Milestone',
      date: '2023-11-15',
      description: 'Completed 5 courses in total',
      icon: 'FaTrophy'
    }
  ]
};

export default function AchievementsPage() {
  const [activeTab, setActiveTab] = useState('badges');
  
  // In a real app, we would fetch this data from an API
  const [achievements, setAchievements] = useState(achievementsData);
  const [visibleBadges, setVisibleBadges] = useState(achievementsData.badges.slice(0, 4));
  const [showAllBadges, setShowAllBadges] = useState(false);
  
  useEffect(() => {
    if (showAllBadges) {
      setVisibleBadges(achievements.badges);
    } else {
      setVisibleBadges(achievements.badges.slice(0, 4));
    }
  }, [showAllBadges, achievements.badges]);
  
  const toggleShowAllBadges = () => {
    setShowAllBadges(!showAllBadges);
  };
  
  const getBadgeClassName = (rarity: string): string => {
    switch (rarity.toLowerCase()) {
      case 'common':
        return 'bg-gray-100 text-gray-800';
      case 'uncommon':
        return 'bg-green-100 text-green-800';
      case 'rare':
        return 'bg-blue-100 text-blue-800';
      case 'epic':
        return 'bg-purple-100 text-purple-800';
      case 'legendary':
        return 'bg-amber-100 text-amber-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };
  
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
            <Link href="/dashboard/profile" className="text-white/80 hover:text-white mr-2">
              Profile Settings
            </Link>
            <span className="text-white/60 mx-2">/</span>
            <span className="text-white">Achievements</span>
          </div>
          <h1 className="text-2xl font-bold text-white mt-4">Your Achievements</h1>
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
                <Link href="/dashboard/profile" className="flex items-center px-3 py-3 text-gray-600 hover:bg-gray-50 rounded-md">
                  <FaUser className="text-gray-500 mr-3" />
                  <span>Personal Information</span>
                </Link>
                <Link href="/dashboard/profile/achievements" className="flex items-center px-3 py-3 text-gray-800 bg-gray-100 rounded-md">
                  <FaMedal className="text-uk-blue mr-3" />
                  <span>Achievements</span>
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
            {/* Stats Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
              <Card variant="glass" className="p-4">
                <div className="flex items-center">
                  <div className="mr-4 bg-uk-blue/10 p-3 rounded-full">
                    <FaFileAlt className="text-uk-blue text-xl" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Courses Completed</p>
                    <h3 className="text-2xl font-bold text-gray-900">{achievements.stats.completedCourses}/{achievements.stats.totalCourses}</h3>
                  </div>
                </div>
              </Card>
              
              <Card variant="glass" className="p-4">
                <div className="flex items-center">
                  <div className="mr-4 bg-uk-blue/10 p-3 rounded-full">
                    <FaCertificate className="text-uk-blue text-xl" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Certificates Earned</p>
                    <h3 className="text-2xl font-bold text-gray-900">{achievements.stats.certificatesEarned}</h3>
                  </div>
                </div>
              </Card>
              
              <Card variant="glass" className="p-4">
                <div className="flex items-center">
                  <div className="mr-4 bg-uk-blue/10 p-3 rounded-full">
                    <FaStar className="text-uk-blue text-xl" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Achievement Points</p>
                    <h3 className="text-2xl font-bold text-gray-900">{achievements.stats.totalPoints}</h3>
                  </div>
                </div>
              </Card>
              
              <Card variant="glass" className="p-4">
                <div className="flex items-center">
                  <div className="mr-4 bg-uk-blue/10 p-3 rounded-full">
                    <FaTrophy className="text-uk-blue text-xl" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Current Rank</p>
                    <h3 className="text-xl font-bold text-gray-900">{achievements.stats.rank}</h3>
                  </div>
                </div>
              </Card>
            </div>
            
            {/* Rank Progress */}
            <Card variant="elevated" className="mb-6">
              <div className="p-6">
                <div className="flex justify-between items-center mb-4">
                  <h3 className="text-lg font-bold text-gray-900">Rank Progress</h3>
                  <span className="text-sm text-gray-500">{achievements.stats.pointsToNextRank} points to {achievements.stats.nextRank}</span>
                </div>
                
                <div className="relative pt-1">
                  <div className="flex mb-2 items-center justify-between">
                    <div>
                      <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-uk-blue bg-blue-200">
                        {achievements.stats.rank}
                      </span>
                    </div>
                    <div className="text-right">
                      <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-purple-600 bg-purple-200">
                        {achievements.stats.nextRank}
                      </span>
                    </div>
                  </div>
                  <div className="overflow-hidden h-2 mb-4 text-xs flex rounded bg-blue-200">
                    <div 
                      style={{ width: `${(achievements.stats.totalPoints / (achievements.stats.totalPoints + achievements.stats.pointsToNextRank)) * 100}%` }} 
                      className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-uk-blue"
                    ></div>
                  </div>
                </div>
                
                <div className="text-sm text-gray-600">
                  <p>Keep earning points by completing courses, earning badges, and participating in discussions!</p>
                </div>
              </div>
            </Card>
            
            {/* Tabs */}
            <div className="bg-white shadow-sm rounded-lg border border-gray-100 overflow-hidden mb-6">
              <div className="border-b border-gray-200">
                <nav className="flex -mb-px">
                  <button
                    onClick={() => setActiveTab('badges')}
                    className={`px-6 py-4 text-sm font-medium ${
                      activeTab === 'badges'
                        ? 'border-b-2 border-uk-blue text-uk-blue'
                        : 'text-gray-500 hover:text-gray-700 hover:border-gray-300'
                    }`}
                  >
                    Badges
                  </button>
                  <button
                    onClick={() => setActiveTab('certificates')}
                    className={`px-6 py-4 text-sm font-medium ${
                      activeTab === 'certificates'
                        ? 'border-b-2 border-uk-blue text-uk-blue'
                        : 'text-gray-500 hover:text-gray-700 hover:border-gray-300'
                    }`}
                  >
                    Certificates
                  </button>
                  <button
                    onClick={() => setActiveTab('milestones')}
                    className={`px-6 py-4 text-sm font-medium ${
                      activeTab === 'milestones'
                        ? 'border-b-2 border-uk-blue text-uk-blue'
                        : 'text-gray-500 hover:text-gray-700 hover:border-gray-300'
                    }`}
                  >
                    Learning Milestones
                  </button>
                </nav>
              </div>
              
              <div className="p-6">
                {activeTab === 'badges' && (
                  <div>
                    <div className="flex justify-between items-center mb-4">
                      <h3 className="text-lg font-bold text-gray-900">Your Earned Badges</h3>
                      <Button variant="outline" size="sm">
                        View All Badges
                      </Button>
                    </div>
                    
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {visibleBadges.map((badge) => (
                        <div key={badge.id} className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow flex">
                          <div className="flex-shrink-0 w-16 h-16 bg-gray-200 rounded-full overflow-hidden mr-4 flex items-center justify-center">
                            <FaMedal className="text-uk-blue text-2xl" />
                          </div>
                          <div className="flex-1">
                            <div className="flex items-center justify-between">
                              <h4 className="font-bold text-gray-900">{badge.name}</h4>
                              <span className={`text-xs px-2 py-1 rounded-full ${getBadgeClassName(badge.rarity)}`}>
                                {badge.rarity}
                              </span>
                            </div>
                            <p className="text-sm text-gray-600 mt-1">{badge.description}</p>
                            <div className="mt-2 flex justify-between items-center">
                              <span className="text-xs text-gray-500">Earned {new Date(badge.earnedDate).toLocaleDateString()}</span>
                              <span className="text-xs font-medium text-uk-blue">{badge.points} pts</span>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                    
                    {achievements.badges.length > 4 && (
                      <div className="mt-4 text-center">
                        <Button 
                          variant="outline" 
                          onClick={toggleShowAllBadges}
                        >
                          {showAllBadges ? 'Show Less' : `Show All (${achievements.badges.length})`}
                        </Button>
                      </div>
                    )}
                  </div>
                )}
                
                {activeTab === 'certificates' && (
                  <div>
                    <div className="flex justify-between items-center mb-4">
                      <h3 className="text-lg font-bold text-gray-900">Your Certificates</h3>
                      <Button variant="outline" size="sm">
                        Export All
                      </Button>
                    </div>
                    
                    <div className="space-y-4">
                      {achievements.certificates.map((cert) => (
                        <div key={cert.id} className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
                          <div className="flex items-center justify-between">
                            <div className="flex items-center">
                              <div className="mr-4 bg-uk-blue/10 p-2 rounded-lg">
                                <FaCertificate className="text-uk-blue text-xl" />
                              </div>
                              <div>
                                <h4 className="font-bold text-gray-900">{cert.courseName}</h4>
                                <p className="text-sm text-gray-500">Issued: {new Date(cert.issueDate).toLocaleDateString()}</p>
                              </div>
                            </div>
                            <div>
                              <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-sm font-medium bg-green-100 text-green-800">
                                {cert.grade}
                              </span>
                            </div>
                          </div>
                          
                          <div className="mt-4 pt-4 border-t border-gray-100 flex justify-between items-center">
                            <div className="text-sm text-gray-500">
                              Credential ID: {cert.credentialId}
                            </div>
                            <div className="flex items-center space-x-2">
                              <Button variant="outline" size="sm" icon={<FaShareAlt />}>
                                Share
                              </Button>
                              <Button variant="outline" size="sm" icon={<FaDownload />}>
                                Download
                              </Button>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
                
                {activeTab === 'milestones' && (
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 mb-4">Your Learning Journey</h3>
                    
                    <div className="relative">
                      {/* Timeline line */}
                      <div className="absolute left-5 top-0 bottom-0 w-0.5 bg-gray-200"></div>
                      
                      <div className="space-y-8">
                        {achievements.milestones.map((milestone) => (
                          <div key={milestone.id} className="relative pl-12">
                            {/* Timeline dot */}
                            <div className="absolute left-0 w-10 h-10 rounded-full bg-uk-blue flex items-center justify-center">
                              <FaTrophy className="text-white" />
                            </div>
                            
                            <div className="bg-white rounded-lg border border-gray-200 p-4 shadow-sm">
                              <div className="flex justify-between items-start">
                                <h4 className="font-bold text-gray-900">{milestone.title}</h4>
                                <span className="text-sm text-gray-500">{new Date(milestone.date).toLocaleDateString()}</span>
                              </div>
                              <p className="mt-2 text-gray-600">{milestone.description}</p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
            
            {/* Share Profile Section */}
            <Card variant="glass" className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-lg font-bold text-gray-900">Share Your Achievements</h3>
                  <p className="text-sm text-gray-600 mt-1">
                    Create a public profile to showcase your achievements to employers and colleagues.
                  </p>
                </div>
                <Button variant="primary" effect="3d" icon={<FaShareAlt />}>
                  Create Public Profile
                </Button>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
} 