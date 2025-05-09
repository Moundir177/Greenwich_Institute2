'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { 
  FaTrophy, FaCertificate, FaStar, FaBook, FaCalendarAlt, 
  FaChartLine, FaUserGraduate, FaLock, FaUnlock, FaRegClock,
  FaShareAlt, FaDownload, FaEye, FaBullseye, FaUserFriends
} from 'react-icons/fa';
import Button from '@/components/ui/Button';
import Card from '@/components/ui/Card';

// Define types for our data
interface Badge {
  id: string;
  name: string;
  description: string;
  icon: string;
  unlocked: boolean;
  progress?: number;
  dateEarned?: string;
  category: 'academic' | 'engagement' | 'milestone';
  rarity: 'common' | 'uncommon' | 'rare' | 'legendary';
}

interface Certificate {
  id: string;
  name: string;
  issueDate: string;
  course: string;
  instructor: string;
  credentialID: string;
  completed: boolean;
  downloadUrl?: string;
}

interface Milestone {
  id: string;
  name: string;
  description: string;
  progress: number;
  completed: boolean;
  rewards: string[];
}

// Mock data
const mockBadges: Badge[] = [
  {
    id: '1',
    name: 'Fast Learner',
    description: 'Complete 5 lessons in a single day',
    icon: 'FaChartLine',
    unlocked: true,
    dateEarned: '2023-11-05T10:15:00',
    category: 'academic',
    rarity: 'common'
  },
  {
    id: '2',
    name: 'Perfect Attendance',
    description: 'Attend all scheduled sessions for a course',
    icon: 'FaCalendarAlt',
    unlocked: true,
    dateEarned: '2023-10-22T14:30:00',
    category: 'engagement',
    rarity: 'uncommon'
  },
  {
    id: '3',
    name: 'First Honors',
    description: 'Achieve top marks in a course assessment',
    icon: 'FaTrophy',
    unlocked: true,
    dateEarned: '2023-09-18T09:45:00',
    category: 'academic',
    rarity: 'rare'
  },
  {
    id: '4',
    name: 'Coding Wizard',
    description: 'Submit 10 perfect coding assignments',
    icon: 'FaBook',
    unlocked: false,
    progress: 70,
    category: 'academic',
    rarity: 'legendary'
  },
  {
    id: '5',
    name: 'Community Leader',
    description: 'Help 25 students in discussion forums',
    icon: 'FaUserFriends',
    unlocked: false,
    progress: 60,
    category: 'engagement',
    rarity: 'rare'
  },
  {
    id: '6',
    name: 'Study Marathon',
    description: 'Study for 8 hours consecutively',
    icon: 'FaRegClock',
    unlocked: false,
    progress: 25,
    category: 'milestone',
    rarity: 'uncommon'
  }
];

const mockCertificates: Certificate[] = [
  {
    id: '1',
    name: 'Financial Analysis Fundamentals',
    issueDate: '2023-11-10T14:30:00',
    course: 'Business Management',
    instructor: 'Prof. Robert Johnson',
    credentialID: 'BM-FA-2023-1456',
    completed: true,
    downloadUrl: '/certificates/financial-analysis.pdf'
  },
  {
    id: '2',
    name: 'Digital Marketing Essentials',
    issueDate: '2023-09-27T11:15:00',
    course: 'Digital Marketing',
    instructor: 'Dr. Lisa Anderson',
    credentialID: 'DM-ESS-2023-0892',
    completed: true,
    downloadUrl: '/certificates/digital-marketing.pdf'
  },
  {
    id: '3',
    name: 'Project Management Professional',
    issueDate: '2023-07-15T09:45:00',
    course: 'Project Management',
    instructor: 'Dr. Michael Chen',
    credentialID: 'PM-PRO-2023-0347',
    completed: true,
    downloadUrl: '/certificates/project-management.pdf'
  },
  {
    id: '4',
    name: 'Advanced Data Analytics',
    issueDate: '',
    course: 'Data Science',
    instructor: 'Prof. Sarah Williams',
    credentialID: 'DS-ADA-2023-0675',
    completed: false
  }
];

const mockMilestones: Milestone[] = [
  {
    id: '1',
    name: 'Learning Foundations',
    description: 'Complete your first 5 courses',
    progress: 60,
    completed: false,
    rewards: ['Academic Excellence Badge', '10% Discount on Next Course']
  },
  {
    id: '2',
    name: 'Subject Matter Expert',
    description: 'Complete all courses in a specialization',
    progress: 75,
    completed: false,
    rewards: ['Specialization Certificate', 'Expert Badge']
  },
  {
    id: '3',
    name: 'Community Contributor',
    description: 'Participate actively in the learning community',
    progress: 40,
    completed: false,
    rewards: ['Community Leader Badge', 'Mentor Status']
  }
];

export default function AchievementsPage() {
  const [badges, setBadges] = useState<Badge[]>(mockBadges);
  const [certificates, setCertificates] = useState<Certificate[]>(mockCertificates);
  const [milestones, setMilestones] = useState<Milestone[]>(mockMilestones);
  const [activeTab, setActiveTab] = useState<'badges' | 'certificates' | 'milestones'>('badges');
  const [badgeFilter, setBadgeFilter] = useState<'all' | 'academic' | 'engagement' | 'milestone'>('all');
  const [isLoading, setIsLoading] = useState(true);
  
  // Simulate loading data
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 800);
    
    return () => clearTimeout(timer);
  }, []);
  
  // Filter badges based on filter
  const filteredBadges = badges.filter(badge => {
    if (badgeFilter === 'all') return true;
    return badge.category === badgeFilter;
  });
  
  // Stats calculations
  const totalBadges = badges.length;
  const unlockedBadges = badges.filter(b => b.unlocked).length;
  const completedCertificates = certificates.filter(c => c.completed).length;
  const badgeProgress = Math.round((unlockedBadges / totalBadges) * 100);
  
  // Get icon component based on string name
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'FaTrophy': return <FaTrophy />;
      case 'FaCertificate': return <FaCertificate />;
      case 'FaBook': return <FaBook />;
      case 'FaCalendarAlt': return <FaCalendarAlt />;
      case 'FaChartLine': return <FaChartLine />;
      case 'FaUserGraduate': return <FaUserGraduate />;
      case 'FaRegClock': return <FaRegClock />;
      case 'FaUserFriends': return <FaUserFriends />;
      default: return <FaStar />;
    }
  };
  
  // Get badge color based on rarity
  const getBadgeColor = (rarity: string): string => {
    switch (rarity) {
      case 'common': return 'bg-gray-100 border-gray-300 text-gray-700';
      case 'uncommon': return 'bg-green-100 border-green-300 text-green-700';
      case 'rare': return 'bg-blue-100 border-blue-300 text-blue-700';
      case 'legendary': return 'bg-purple-100 border-purple-300 text-purple-700';
      default: return 'bg-gray-100 border-gray-300 text-gray-700';
    }
  };
  
  // Format date helper
  const formatDate = (dateString: string): string => {
    if (!dateString) return 'Not completed';
    
    const date = new Date(dateString);
    return date.toLocaleDateString('en-GB', { 
      day: 'numeric', 
      month: 'long', 
      year: 'numeric' 
    });
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
            <span className="text-white">Achievements</span>
          </div>
          <div className="flex items-center justify-between mt-4">
            <h1 className="text-2xl font-bold text-white">Your Achievements</h1>
          </div>
        </div>
      </div>
      
      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {isLoading ? (
          <div className="flex justify-center items-center min-h-[60vh]">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-uk-blue"></div>
          </div>
        ) : (
          <div className="space-y-8">
            {/* Stats Overview */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card variant="glass" className="p-6">
                <div className="flex items-center">
                  <div className="p-3 rounded-full bg-blue-100 text-uk-blue mr-4">
                    <FaTrophy size={24} />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Badges Earned</p>
                    <div className="flex items-baseline">
                      <h3 className="text-2xl font-bold text-gray-900">{unlockedBadges}</h3>
                      <span className="text-sm text-gray-500 ml-2">/ {totalBadges}</span>
                    </div>
                  </div>
                </div>
                <div className="mt-4">
                  <div className="relative pt-1">
                    <div className="flex mb-2 items-center justify-between">
                      <div>
                        <span className="text-xs font-semibold inline-block text-uk-blue">
                          {badgeProgress}% Complete
                        </span>
                      </div>
                    </div>
                    <div className="overflow-hidden h-2 mb-4 text-xs flex rounded bg-blue-50">
                      <div 
                        style={{ width: `${badgeProgress}%` }} 
                        className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-uk-blue"
                      ></div>
                    </div>
                  </div>
                </div>
              </Card>
              
              <Card variant="glass" className="p-6">
                <div className="flex items-center">
                  <div className="p-3 rounded-full bg-green-100 text-green-600 mr-4">
                    <FaCertificate size={24} />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Certificates</p>
                    <div className="flex items-baseline">
                      <h3 className="text-2xl font-bold text-gray-900">{completedCertificates}</h3>
                      <span className="text-sm text-gray-500 ml-2">/ {certificates.length}</span>
                    </div>
                  </div>
                </div>
                <div className="mt-4">
                  <div className="relative pt-1">
                    <div className="flex mb-2 items-center justify-between">
                      <div>
                        <span className="text-xs font-semibold inline-block text-green-600">
                          {Math.round((completedCertificates / certificates.length) * 100)}% Complete
                        </span>
                      </div>
                    </div>
                    <div className="overflow-hidden h-2 mb-4 text-xs flex rounded bg-green-50">
                      <div 
                        style={{ width: `${Math.round((completedCertificates / certificates.length) * 100)}%` }} 
                        className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-green-600"
                      ></div>
                    </div>
                  </div>
                </div>
              </Card>
              
              <Card variant="glass" className="p-6">
                <div className="flex items-center">
                  <div className="p-3 rounded-full bg-amber-100 text-amber-600 mr-4">
                    <FaBullseye size={24} />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Learning Milestones</p>
                    <div className="flex items-baseline">
                      <h3 className="text-2xl font-bold text-gray-900">
                        {milestones.filter(m => m.completed).length}
                      </h3>
                      <span className="text-sm text-gray-500 ml-2">/ {milestones.length}</span>
                    </div>
                  </div>
                </div>
                <div className="mt-4">
                  <div className="relative pt-1">
                    <div className="flex mb-2 items-center justify-between">
                      <div>
                        <span className="text-xs font-semibold inline-block text-amber-600">
                          {Math.round((milestones.reduce((acc, m) => acc + m.progress, 0) / milestones.length))}% Average Progress
                        </span>
                      </div>
                    </div>
                    <div className="overflow-hidden h-2 mb-4 text-xs flex rounded bg-amber-50">
                      <div 
                        style={{ width: `${Math.round((milestones.reduce((acc, m) => acc + m.progress, 0) / milestones.length))}%` }} 
                        className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-amber-600"
                      ></div>
                    </div>
                  </div>
                </div>
              </Card>
            </div>
            
            {/* Tabs */}
            <div className="border-b border-gray-200">
              <nav className="-mb-px flex space-x-6">
                <button
                  className={`py-4 px-1 border-b-2 font-medium text-sm ${
                    activeTab === 'badges'
                      ? 'border-uk-blue text-uk-blue'
                      : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                  }`}
                  onClick={() => setActiveTab('badges')}
                >
                  <div className="flex items-center">
                    <FaTrophy className="mr-2" />
                    <span>Badges</span>
                  </div>
                </button>
                
                <button
                  className={`py-4 px-1 border-b-2 font-medium text-sm ${
                    activeTab === 'certificates'
                      ? 'border-uk-blue text-uk-blue'
                      : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                  }`}
                  onClick={() => setActiveTab('certificates')}
                >
                  <div className="flex items-center">
                    <FaCertificate className="mr-2" />
                    <span>Certificates</span>
                  </div>
                </button>
                
                <button
                  className={`py-4 px-1 border-b-2 font-medium text-sm ${
                    activeTab === 'milestones'
                      ? 'border-uk-blue text-uk-blue'
                      : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                  }`}
                  onClick={() => setActiveTab('milestones')}
                >
                  <div className="flex items-center">
                    <FaBullseye className="mr-2" />
                    <span>Learning Milestones</span>
                  </div>
                </button>
              </nav>
            </div>
            
            {/* Tab Content */}
            <div>
              {/* Badges Tab */}
              {activeTab === 'badges' && (
                <div>
                  <div className="flex justify-between items-center mb-6">
                    <div>
                      <h2 className="text-xl font-bold text-gray-900">Your Badges</h2>
                      <p className="text-sm text-gray-500">Collect badges by completing various achievements</p>
                    </div>
                    
                    <div className="flex space-x-2">
                      <Button 
                        variant={badgeFilter === 'all' ? 'primary' : 'outline'}
                        size="sm"
                        onClick={() => setBadgeFilter('all')}
                      >
                        All
                      </Button>
                      <Button 
                        variant={badgeFilter === 'academic' ? 'primary' : 'outline'}
                        size="sm"
                        onClick={() => setBadgeFilter('academic')}
                      >
                        Academic
                      </Button>
                      <Button 
                        variant={badgeFilter === 'engagement' ? 'primary' : 'outline'}
                        size="sm"
                        onClick={() => setBadgeFilter('engagement')}
                      >
                        Engagement
                      </Button>
                      <Button 
                        variant={badgeFilter === 'milestone' ? 'primary' : 'outline'}
                        size="sm"
                        onClick={() => setBadgeFilter('milestone')}
                      >
                        Milestone
                      </Button>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {filteredBadges.map((badge) => (
                      <Card key={badge.id} variant="elevated" className="overflow-hidden">
                        <div className={`p-6 border-b ${getBadgeColor(badge.rarity)}`}>
                          <div className="flex justify-between items-start">
                            <div className="flex-1">
                              <div className="flex items-center">
                                <div className="mr-3 text-xl">
                                  {getIcon(badge.icon)}
                                </div>
                                <h3 className="text-lg font-medium text-gray-900">
                                  {badge.name}
                                </h3>
                              </div>
                              <p className="mt-1 text-sm text-gray-500">{badge.description}</p>
                            </div>
                            {badge.unlocked ? (
                              <div className="bg-green-100 text-green-600 p-1 rounded-full">
                                <FaUnlock />
                              </div>
                            ) : (
                              <div className="bg-gray-100 text-gray-400 p-1 rounded-full">
                                <FaLock />
                              </div>
                            )}
                          </div>
                        </div>
                        
                        <div className="p-4">
                          <div className="flex items-center justify-between text-sm">
                            <div className="flex items-center">
                              <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                                badge.rarity === 'common' ? 'bg-gray-100 text-gray-700' :
                                badge.rarity === 'uncommon' ? 'bg-green-100 text-green-700' :
                                badge.rarity === 'rare' ? 'bg-blue-100 text-blue-700' :
                                'bg-purple-100 text-purple-700'
                              }`}>
                                {badge.rarity.charAt(0).toUpperCase() + badge.rarity.slice(1)}
                              </span>
                              <span className="ml-2 text-gray-500">
                                {badge.category.charAt(0).toUpperCase() + badge.category.slice(1)}
                              </span>
                            </div>
                            
                            <div className="text-gray-500">
                              {badge.unlocked ? (
                                <span>Earned: {formatDate(badge.dateEarned || '')}</span>
                              ) : badge.progress ? (
                                <span>{badge.progress}% Complete</span>
                              ) : (
                                <span>Not started</span>
                              )}
                            </div>
                          </div>
                          
                          {!badge.unlocked && badge.progress && (
                            <div className="mt-2">
                              <div className="overflow-hidden h-2 mb-1 text-xs flex rounded bg-gray-100">
                                <div 
                                  style={{ width: `${badge.progress}%` }} 
                                  className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-uk-blue"
                                ></div>
                              </div>
                            </div>
                          )}
                          
                          <div className="mt-4 flex justify-end space-x-2">
                            {badge.unlocked && (
                              <Button
                                variant="outline"
                                size="sm"
                                icon={<FaShareAlt />}
                              >
                                Share
                              </Button>
                            )}
                          </div>
                        </div>
                      </Card>
                    ))}
                  </div>
                </div>
              )}
              
              {/* Certificates Tab */}
              {activeTab === 'certificates' && (
                <div>
                  <div className="mb-6">
                    <h2 className="text-xl font-bold text-gray-900">Your Certificates</h2>
                    <p className="text-sm text-gray-500">Certificates earned from completed courses</p>
                  </div>
                  
                  <div className="space-y-6">
                    {certificates.map((certificate) => (
                      <Card key={certificate.id} variant="elevated" className="overflow-hidden">
                        <div className="p-6 flex flex-col md:flex-row md:items-center justify-between">
                          <div className="flex-1">
                            <div className="flex items-center">
                              <div className={`p-3 rounded-full mr-4 ${
                                certificate.completed 
                                  ? 'bg-green-100 text-green-600' 
                                  : 'bg-gray-100 text-gray-600'
                              }`}>
                                <FaCertificate size={24} />
                              </div>
                              
                              <div>
                                <h3 className="text-lg font-medium text-gray-900">{certificate.name}</h3>
                                <p className="text-sm text-gray-500">{certificate.course} • {certificate.instructor}</p>
                                <div className="mt-1 flex items-center">
                                  <span className="text-xs text-gray-500">Credential ID: {certificate.credentialID}</span>
                                  <span className="mx-2 text-gray-300">|</span>
                                  <span className="text-xs text-gray-500">
                                    {certificate.completed 
                                      ? `Issued: ${formatDate(certificate.issueDate)}`
                                      : 'In progress'
                                    }
                                  </span>
                                </div>
                              </div>
                            </div>
                          </div>
                          
                          <div className="mt-4 md:mt-0 flex items-center space-x-3">
                            {certificate.completed ? (
                              <>
                                <Button
                                  variant="outline"
                                  size="sm"
                                  icon={<FaEye />}
                                >
                                  View
                                </Button>
                                
                                <Button
                                  variant="primary"
                                  size="sm"
                                  effect="hoverglow"
                                  icon={<FaDownload />}
                                >
                                  Download
                                </Button>
                              </>
                            ) : (
                              <div className="inline-flex rounded-md bg-gray-100 px-3 py-2 text-sm text-gray-600">
                                <FaRegClock className="mr-2" />
                                <span>In Progress</span>
                              </div>
                            )}
                          </div>
                        </div>
                      </Card>
                    ))}
                  </div>
                </div>
              )}
              
              {/* Milestones Tab */}
              {activeTab === 'milestones' && (
                <div>
                  <div className="mb-6">
                    <h2 className="text-xl font-bold text-gray-900">Learning Milestones</h2>
                    <p className="text-sm text-gray-500">Track your progress towards important learning goals</p>
                  </div>
                  
                  <div className="space-y-6">
                    {milestones.map((milestone) => (
                      <Card key={milestone.id} variant="elevated" className="p-6">
                        <div className="flex items-start justify-between">
                          <div className="flex-1">
                            <div className="flex items-center">
                              <div className="p-3 rounded-full bg-amber-100 text-amber-600 mr-4">
                                <FaBullseye size={20} />
                              </div>
                              
                              <div>
                                <h3 className="text-lg font-medium text-gray-900">{milestone.name}</h3>
                                <p className="text-sm text-gray-500">{milestone.description}</p>
                              </div>
                            </div>
                            
                            <div className="mt-4">
                              <div className="flex mb-1 items-center justify-between">
                                <div>
                                  <span className="text-xs font-medium text-gray-500">Progress</span>
                                </div>
                                <div>
                                  <span className="text-xs font-semibold inline-block text-amber-600">
                                    {milestone.progress}%
                                  </span>
                                </div>
                              </div>
                              <div className="overflow-hidden h-2 mb-4 text-xs flex rounded bg-amber-50">
                                <div 
                                  style={{ width: `${milestone.progress}%` }} 
                                  className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-amber-600"
                                ></div>
                              </div>
                            </div>
                            
                            <div className="mt-2">
                              <h4 className="text-sm font-medium text-gray-900">Rewards:</h4>
                              <ul className="mt-1 space-y-1">
                                {milestone.rewards.map((reward, idx) => (
                                  <li key={idx} className="flex items-center text-sm text-gray-500">
                                    <FaStar className="text-amber-400 mr-2" />
                                    <span>{reward}</span>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          </div>
                          
                          <div className="ml-4">
                            {milestone.completed ? (
                              <div className="bg-green-100 text-green-600 p-2 rounded-full">
                                <FaUnlock size={20} />
                              </div>
                            ) : (
                              <div className="bg-gray-100 text-gray-400 p-2 rounded-full">
                                <FaLock size={20} />
                              </div>
                            )}
                          </div>
                        </div>
                      </Card>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
} 