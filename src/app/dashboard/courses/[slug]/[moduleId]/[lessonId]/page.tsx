'use client';

import { useState, useEffect, useRef } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { 
  FaArrowLeft, FaArrowRight, FaPlay, FaPause, FaVolumeUp, 
  FaVolumeMute, FaExpand, FaCompress, FaCog, FaDownload, 
  FaClipboardCheck, FaBookmark, FaStickyNote, FaThumbsUp,
  FaThumbsDown, FaCheck, FaHistory, FaChevronLeft, FaFileAlt
} from 'react-icons/fa';
import Button from '@/components/ui/Button';
import Card from '@/components/ui/Card';

// Mock course data - in a real app this would come from an API
const getLessonData = (slug: string, moduleId: string, lessonId: string) => {
  // Sample data for the business management course, module 0, lesson 2
  if (slug === 'business-management' && moduleId === '0' && lessonId === '2') {
    return {
      title: 'Core Management Functions',
      type: 'video',
      duration: '22 min',
      videoUrl: 'https://sample-videos.com/video123/mp4/720/big_buck_bunny_720p_1mb.mp4',
      description: 'In this lesson, we explore the four core management functions: planning, organizing, leading, and controlling. You will learn how these functions work together in the management process.',
      transcript: `
        Welcome to our lesson on core management functions.
        
        Today, we'll be discussing the four primary functions that all managers perform:
        planning, organizing, leading, and controlling.
        
        Let's start with planning. Planning involves setting goals and determining
        the best course of action to achieve those goals. This might include developing
        strategies, policies, and procedures. Effective planning allows organizations
        to anticipate future challenges and allocate resources efficiently.
        
        Next, organizing. Once plans are in place, managers must organize resources
        to execute these plans. This includes determining what tasks need to be done,
        who will do them, how they will be grouped, who reports to whom, and where
        decisions will be made.
        
        The third function is leading. Leading involves motivating, directing, and
        influencing employees to work toward organizational objectives. This function
        requires communication skills, motivation techniques, and an understanding
        of human behavior.
        
        Finally, controlling. The controlling function involves monitoring performance,
        comparing it to goals, and making corrections as needed. This ensures that the
        organization stays on track to achieve its objectives.
        
        Throughout this lesson, we'll examine each of these functions in detail
        and discuss how they interconnect in the management process.
      `,
      moduleTitle: 'Introduction to Business Management',
      courseTitle: 'Business Management Fundamentals',
      nextLesson: {
        id: '3',
        title: 'Module 1 Quiz',
        type: 'quiz'
      },
      previousLesson: {
        id: '1',
        title: 'The Evolution of Management Theory',
        type: 'video'
      },
      resources: [
        { title: 'Lesson Slides', type: 'PDF', size: '2.4 MB' },
        { title: 'Supplementary Reading', type: 'PDF', size: '1.8 MB' }
      ],
      notes: [
        { time: '01:24', text: 'Planning is the first of the four management functions' },
        { time: '05:37', text: 'Organizing follows planning in the management process' },
        { time: '12:15', text: 'Leading involves motivating and influencing employees' },
        { time: '16:42', text: 'Controlling ensures the organization meets its objectives' }
      ]
    };
  }
  
  // Sample quiz data
  if (slug === 'business-management' && moduleId === '0' && lessonId === '3') {
    return {
      title: 'Module 1 Quiz',
      type: 'quiz',
      duration: '20 min',
      description: 'Test your knowledge of management fundamentals with this quiz. You need to score at least 70% to pass.',
      moduleTitle: 'Introduction to Business Management',
      courseTitle: 'Business Management Fundamentals',
      nextLesson: {
        id: '0',
        moduleId: '1',
        title: 'Types of Organizational Structures',
        type: 'video'
      },
      previousLesson: {
        id: '2',
        title: 'Core Management Functions',
        type: 'video'
      },
      questions: [
        {
          id: 1,
          text: 'Which of the following is NOT one of the four core management functions?',
          options: [
            'Planning',
            'Organizing',
            'Budgeting',
            'Controlling'
          ],
          correctAnswer: 2
        },
        {
          id: 2,
          text: 'The management function that involves monitoring performance and making corrections is called:',
          options: [
            'Planning',
            'Organizing',
            'Leading',
            'Controlling'
          ],
          correctAnswer: 3
        },
        {
          id: 3,
          text: 'Which management function involves determining who will complete specific tasks?',
          options: [
            'Planning',
            'Organizing',
            'Leading',
            'Controlling'
          ],
          correctAnswer: 1
        },
        {
          id: 4,
          text: 'Who proposed the 14 principles of management?',
          options: [
            'Frederick Taylor',
            'Henri Fayol',
            'Peter Drucker',
            'Mary Parker Follett'
          ],
          correctAnswer: 1
        },
        {
          id: 5,
          text: 'Which of the following best describes the purpose of the planning function?',
          options: [
            'To establish organizational structure',
            'To motivate employees to achieve goals',
            'To set objectives and determine courses of action',
            'To evaluate performance against standards'
          ],
          correctAnswer: 2
        }
      ]
    };
  }
  
  // Default data if lesson not found
  return {
    title: 'Lesson Not Found',
    type: 'error',
    description: 'The lesson you requested could not be found.',
    courseTitle: 'Course Not Found'
  };
};

export default function LessonPage({ params }: { params: { slug: string; moduleId: string; lessonId: string } }) {
  const { slug, moduleId, lessonId } = params;
  const [lesson, setLesson] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [progress, setProgress] = useState(0);
  const [activeTab, setActiveTab] = useState('notes');
  
  // Quiz state
  const [quizAnswers, setQuizAnswers] = useState<number[]>([]);
  const [quizSubmitted, setQuizSubmitted] = useState(false);
  const [quizScore, setQuizScore] = useState(0);
  
  const videoRef = useRef<HTMLVideoElement>(null);
  const videoContainerRef = useRef<HTMLDivElement>(null);
  const router = useRouter();
  
  useEffect(() => {
    // Fetch lesson data - in a real app this would be an API call
    const data = getLessonData(slug, moduleId, lessonId);
    setLesson(data);
    setLoading(false);
    
    // Initialize quiz answers if it's a quiz
    if (data.type === 'quiz' && data.questions) {
      setQuizAnswers(new Array(data.questions.length).fill(-1));
    }
    
    // Set up keyboard shortcuts for video controls
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!videoRef.current) return;
      
      switch (e.key) {
        case ' ':
          togglePlay();
          e.preventDefault();
          break;
        case 'ArrowRight':
          videoRef.current.currentTime += 10;
          e.preventDefault();
          break;
        case 'ArrowLeft':
          videoRef.current.currentTime -= 10;
          e.preventDefault();
          break;
        case 'm':
          toggleMute();
          e.preventDefault();
          break;
        case 'f':
          toggleFullscreen();
          e.preventDefault();
          break;
      }
    };
    
    // Handle fullscreen change events
    const handleFullscreenChange = () => {
      setIsFullscreen(!!document.fullscreenElement);
    };
    
    window.addEventListener('keydown', handleKeyDown);
    document.addEventListener('fullscreenchange', handleFullscreenChange);
    
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.removeEventListener('fullscreenchange', handleFullscreenChange);
    };
  }, [slug, moduleId, lessonId]);
  
  const handleTimeUpdate = () => {
    if (!videoRef.current) return;
    
    const currentTime = videoRef.current.currentTime;
    const duration = videoRef.current.duration;
    
    setCurrentTime(currentTime);
    setDuration(duration);
    setProgress((currentTime / duration) * 100);
  };
  
  const formatTime = (seconds: number) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = Math.floor(seconds % 60);
    return `${minutes}:${remainingSeconds < 10 ? '0' : ''}${remainingSeconds}`;
  };
  
  const togglePlay = () => {
    if (!videoRef.current) return;
    
    if (isPlaying) {
      videoRef.current.pause();
    } else {
      videoRef.current.play();
    }
    
    setIsPlaying(!isPlaying);
  };
  
  const toggleMute = () => {
    if (!videoRef.current) return;
    
    videoRef.current.muted = !isMuted;
    setIsMuted(!isMuted);
  };
  
  const toggleFullscreen = () => {
    if (!videoContainerRef.current) return;
    
    if (!isFullscreen) {
      if (videoContainerRef.current.requestFullscreen) {
        videoContainerRef.current.requestFullscreen();
      }
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen();
      }
    }
    
    setIsFullscreen(!isFullscreen);
  };
  
  const handleProgressClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!videoRef.current) return;
    
    const progressBar = e.currentTarget;
    const rect = progressBar.getBoundingClientRect();
    const pos = (e.clientX - rect.left) / rect.width;
    
    videoRef.current.currentTime = pos * videoRef.current.duration;
  };
  
  const handleQuizAnswer = (questionIndex: number, answerIndex: number) => {
    if (quizSubmitted) return;
    
    const newAnswers = [...quizAnswers];
    newAnswers[questionIndex] = answerIndex;
    setQuizAnswers(newAnswers);
  };
  
  const submitQuiz = () => {
    if (!lesson || !lesson.questions) return;
    
    const answeredQuestions = quizAnswers.filter(answer => answer !== -1).length;
    if (answeredQuestions < lesson.questions.length) {
      alert(`Please answer all questions before submitting. You have answered ${answeredQuestions} out of ${lesson.questions.length} questions.`);
      return;
    }
    
    let correctAnswers = 0;
    lesson.questions.forEach((question: any, index: number) => {
      if (quizAnswers[index] === question.correctAnswer) {
        correctAnswers++;
      }
    });
    
    const score = Math.round((correctAnswers / lesson.questions.length) * 100);
    setQuizScore(score);
    setQuizSubmitted(true);
  };
  
  const goToNextLesson = () => {
    if (!lesson || !lesson.nextLesson) return;
    
    if (lesson.nextLesson.moduleId) {
      router.push(`/dashboard/courses/${slug}/${lesson.nextLesson.moduleId}/${lesson.nextLesson.id}`);
    } else {
      router.push(`/dashboard/courses/${slug}/${moduleId}/${lesson.nextLesson.id}`);
    }
  };
  
  const goToPreviousLesson = () => {
    if (!lesson || !lesson.previousLesson) return;
    
    router.push(`/dashboard/courses/${slug}/${moduleId}/${lesson.previousLesson.id}`);
  };
  
  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-uk-blue"></div>
      </div>
    );
  }
  
  if (!lesson) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900">Lesson Not Found</h1>
          <p className="mt-2 text-gray-600">The lesson you're looking for doesn't exist or has been removed.</p>
          <Button href={`/dashboard/courses/${slug}`} variant="primary" className="mt-4">
            Return to Course
          </Button>
        </div>
      </div>
    );
  }
  
  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Navigation Header */}
      <div className="bg-white border-b border-gray-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <Link href={`/dashboard/courses/${slug}`} className="mr-4 text-gray-500 hover:text-uk-blue transition-colors">
                <FaChevronLeft size={20} />
              </Link>
              <div>
                <h1 className="text-lg font-bold text-gray-900">{lesson.title}</h1>
                <p className="text-sm text-gray-500">{lesson.moduleTitle} • {lesson.courseTitle}</p>
              </div>
            </div>
            <div className="flex space-x-4">
              {lesson.previousLesson && (
                <Button 
                  variant="outline" 
                  size="sm" 
                  onClick={goToPreviousLesson}
                >
                  <FaArrowLeft className="mr-2" />
                  Previous
                </Button>
              )}
              {lesson.nextLesson && (
                <Button 
                  variant="primary" 
                  size="sm" 
                  onClick={goToNextLesson}
                  effect="hoverglow"
                >
                  Next
                  <FaArrowRight className="ml-2" />
                </Button>
              )}
            </div>
          </div>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            {lesson.type === 'video' && (
              <Card variant="elevated" className="overflow-hidden mb-6">
                {/* Video Player */}
                <div ref={videoContainerRef} className="relative bg-black">
                  <video
                    ref={videoRef}
                    className="w-full aspect-video"
                    src={lesson.videoUrl}
                    poster="/images/videos/default-poster.jpg"
                    onTimeUpdate={handleTimeUpdate}
                    onPlay={() => setIsPlaying(true)}
                    onPause={() => setIsPlaying(false)}
                    onVolumeChange={() => setIsMuted(videoRef.current?.muted || false)}
                  />
                  
                  {/* Video Controls */}
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
                    {/* Progress Bar */}
                    <div 
                      className="h-1 bg-gray-500 rounded-full mb-4 cursor-pointer"
                      onClick={handleProgressClick}
                    >
                      <div 
                        className="h-full bg-uk-blue rounded-full"
                        style={{ width: `${progress}%` }}
                      />
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-4">
                        <button 
                          className="text-white hover:text-uk-blue transition-colors"
                          onClick={togglePlay}
                        >
                          {isPlaying ? <FaPause size={20} /> : <FaPlay size={20} />}
                        </button>
                        
                        <button 
                          className="text-white hover:text-uk-blue transition-colors"
                          onClick={toggleMute}
                        >
                          {isMuted ? <FaVolumeMute size={20} /> : <FaVolumeUp size={20} />}
                        </button>
                        
                        <span className="text-white text-sm">
                          {formatTime(currentTime)} / {formatTime(duration)}
                        </span>
                      </div>
                      
                      <div className="flex items-center space-x-4">
                        <button 
                          className="text-white hover:text-uk-blue transition-colors"
                          onClick={toggleFullscreen}
                        >
                          {isFullscreen ? <FaCompress size={20} /> : <FaExpand size={20} />}
                        </button>
                        
                        <button className="text-white hover:text-uk-blue transition-colors">
                          <FaCog size={20} />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Video Info */}
                <div className="p-6">
                  <h2 className="text-xl font-bold text-gray-900 mb-2">{lesson.title}</h2>
                  <p className="text-gray-700 mb-4">{lesson.description}</p>
                  
                  <div className="flex items-center space-x-4">
                    <Button 
                      variant="outline" 
                      size="sm" 
                      icon={<FaBookmark />}
                    >
                      Bookmark
                    </Button>
                    
                    <Button 
                      variant="outline" 
                      size="sm" 
                      icon={<FaStickyNote />}
                    >
                      Add Note
                    </Button>
                    
                    <div className="flex items-center space-x-2">
                      <button className="p-2 text-gray-500 hover:text-uk-blue transition-colors">
                        <FaThumbsUp />
                      </button>
                      <button className="p-2 text-gray-500 hover:text-uk-red transition-colors">
                        <FaThumbsDown />
                      </button>
                    </div>
                  </div>
                </div>
              </Card>
            )}
            
            {lesson.type === 'quiz' && (
              <Card variant="elevated" className="mb-6">
                <div className="p-6">
                  <h2 className="text-xl font-bold text-gray-900 mb-2">{lesson.title}</h2>
                  <p className="text-gray-700 mb-6">{lesson.description}</p>
                  
                  {quizSubmitted ? (
                    <div className="mb-6">
                      <div className={`p-4 rounded-lg ${quizScore >= 70 ? 'bg-green-50 border border-green-200' : 'bg-red-50 border border-red-200'}`}>
                        <div className="flex items-center">
                          <div className={`flex-shrink-0 mr-3 ${quizScore >= 70 ? 'text-green-500' : 'text-red-500'}`}>
                            {quizScore >= 70 ? (
                              <FaCheck size={24} />
                            ) : (
                              <FaHistory size={24} />
                            )}
                          </div>
                          <div>
                            <h3 className={`text-lg font-medium ${quizScore >= 70 ? 'text-green-800' : 'text-red-800'}`}>
                              {quizScore >= 70 ? 'Quiz Passed!' : 'Quiz Failed'}
                            </h3>
                            <p className="text-sm">
                              Your score: {quizScore}% {quizScore >= 70 ? '- Congratulations!' : '- Please review the material and try again.'}
                            </p>
                          </div>
                        </div>
                      </div>
                      
                      <div className="flex justify-between mt-6">
                        {quizScore < 70 && (
                          <Button 
                            variant="outline"
                            onClick={() => {
                              setQuizSubmitted(false);
                              setQuizAnswers(new Array(lesson.questions.length).fill(-1));
                            }}
                          >
                            Retry Quiz
                          </Button>
                        )}
                        
                        {lesson.nextLesson && quizScore >= 70 && (
                          <Button 
                            variant="primary"
                            onClick={goToNextLesson}
                            effect="3d"
                          >
                            Continue to Next Lesson
                          </Button>
                        )}
                      </div>
                    </div>
                  ) : (
                    <div className="space-y-8">
                      {lesson.questions && lesson.questions.map((question: any, index: number) => (
                        <div key={index} className="p-6 bg-white rounded-lg border border-gray-200 shadow-sm">
                          <h3 className="text-lg font-medium text-gray-900 mb-4">
                            {index + 1}. {question.text}
                          </h3>
                          
                          <div className="space-y-3">
                            {question.options.map((option: string, optionIndex: number) => (
                              <div 
                                key={optionIndex}
                                className={`p-3 rounded-lg border ${
                                  quizAnswers[index] === optionIndex 
                                    ? 'border-uk-blue bg-uk-blue/5' 
                                    : 'border-gray-200 hover:border-gray-300'
                                } cursor-pointer transition-colors`}
                                onClick={() => handleQuizAnswer(index, optionIndex)}
                              >
                                <div className="flex items-center">
                                  <div className={`w-5 h-5 mr-3 rounded-full border ${
                                    quizAnswers[index] === optionIndex
                                      ? 'border-uk-blue bg-uk-blue'
                                      : 'border-gray-300'
                                  } flex items-center justify-center`}>
                                    {quizAnswers[index] === optionIndex && (
                                      <div className="w-3 h-3 rounded-full bg-white"></div>
                                    )}
                                  </div>
                                  <span>{option}</span>
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>
                      ))}
                      
                      <div className="flex justify-end">
                        <Button 
                          variant="primary"
                          onClick={submitQuiz}
                          effect="3d"
                        >
                          Submit Quiz
                        </Button>
                      </div>
                    </div>
                  )}
                </div>
              </Card>
            )}
            
            {/* Tabs */}
            {lesson.type === 'video' && (
              <Card variant="elevated">
                <div className="border-b border-gray-200">
                  <div className="flex space-x-1 overflow-x-auto py-1 scrollbar-hidden">
                    <button 
                      onClick={() => setActiveTab('notes')}
                      className={`px-4 py-2 font-medium text-sm rounded-md ${
                        activeTab === 'notes' 
                          ? 'bg-uk-blue text-white' 
                          : 'text-gray-700 hover:bg-gray-100'
                      }`}
                    >
                      Notes
                    </button>
                    <button 
                      onClick={() => setActiveTab('transcript')}
                      className={`px-4 py-2 font-medium text-sm rounded-md ${
                        activeTab === 'transcript' 
                          ? 'bg-uk-blue text-white' 
                          : 'text-gray-700 hover:bg-gray-100'
                      }`}
                    >
                      Transcript
                    </button>
                    <button 
                      onClick={() => setActiveTab('resources')}
                      className={`px-4 py-2 font-medium text-sm rounded-md ${
                        activeTab === 'resources' 
                          ? 'bg-uk-blue text-white' 
                          : 'text-gray-700 hover:bg-gray-100'
                      }`}
                    >
                      Resources
                    </button>
                  </div>
                </div>
                
                <div className="p-6">
                  {activeTab === 'notes' && (
                    <div>
                      <h3 className="text-lg font-bold text-gray-900 mb-4">Lesson Notes</h3>
                      
                      {lesson.notes && lesson.notes.length > 0 ? (
                        <div className="space-y-4">
                          {lesson.notes.map((note: any, index: number) => (
                            <div key={index} className="flex items-start p-3 bg-gray-50 rounded-lg border border-gray-200">
                              <div className="flex-shrink-0 mr-3">
                                <button 
                                  className="px-2 py-1 bg-uk-blue/10 text-uk-blue rounded hover:bg-uk-blue/20 transition-colors"
                                  onClick={() => {
                                    if (!videoRef.current) return;
                                    
                                    const [minutes, seconds] = note.time.split(':').map(Number);
                                    videoRef.current.currentTime = minutes * 60 + seconds;
                                    if (!isPlaying) {
                                      videoRef.current.play();
                                      setIsPlaying(true);
                                    }
                                  }}
                                >
                                  {note.time}
                                </button>
                              </div>
                              <div>
                                <p className="text-gray-700">{note.text}</p>
                              </div>
                            </div>
                          ))}
                        </div>
                      ) : (
                        <p className="text-gray-500">No notes available for this lesson.</p>
                      )}
                      
                      <div className="mt-6">
                        <Button variant="outline" size="sm" icon={<FaStickyNote />}>
                          Add Note
                        </Button>
                      </div>
                    </div>
                  )}
                  
                  {activeTab === 'transcript' && (
                    <div>
                      <h3 className="text-lg font-bold text-gray-900 mb-4">Lesson Transcript</h3>
                      
                      {lesson.transcript ? (
                        <div className="prose max-w-none">
                          {lesson.transcript.split('\n\n').map((paragraph: string, index: number) => (
                            <p key={index} className="mb-4">{paragraph}</p>
                          ))}
                        </div>
                      ) : (
                        <p className="text-gray-500">No transcript available for this lesson.</p>
                      )}
                    </div>
                  )}
                  
                  {activeTab === 'resources' && (
                    <div>
                      <h3 className="text-lg font-bold text-gray-900 mb-4">Lesson Resources</h3>
                      
                      {lesson.resources && lesson.resources.length > 0 ? (
                        <div className="space-y-3">
                          {lesson.resources.map((resource: any, index: number) => (
                            <div key={index} className="flex justify-between items-center p-4 bg-gray-50 rounded-lg border border-gray-200">
                              <div className="flex items-center">
                                <div className="mr-3 p-2 bg-uk-blue/10 text-uk-blue rounded-lg">
                                  <FaFileAlt />
                                </div>
                                <div>
                                  <h4 className="font-medium text-gray-900">{resource.title}</h4>
                                  <p className="text-sm text-gray-500">{resource.type} • {resource.size}</p>
                                </div>
                              </div>
                              <Button
                                variant="outline"
                                size="sm"
                                icon={<FaDownload />}
                              >
                                Download
                              </Button>
                            </div>
                          ))}
                        </div>
                      ) : (
                        <p className="text-gray-500">No resources available for this lesson.</p>
                      )}
                    </div>
                  )}
                </div>
              </Card>
            )}
          </div>
          
          {/* Sidebar */}
          <div className="lg:col-span-1">
            <Card variant="elevated" className="mb-6">
              <div className="p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-4">Course Progress</h3>
                
                <div className="mb-4">
                  <div className="flex justify-between text-sm mb-1">
                    <span className="text-gray-600">Overall Progress</span>
                    <span className="font-medium text-uk-blue">65%</span>
                  </div>
                  <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                    <div 
                      className="h-full bg-gradient-to-r from-uk-blue to-uk-blue-light rounded-full"
                      style={{ width: '65%' }}
                    ></div>
                  </div>
                </div>
                
                <div className="mb-4">
                  <div className="flex justify-between text-sm mb-1">
                    <span className="text-gray-600">Module Progress</span>
                    <span className="font-medium text-uk-blue">75%</span>
                  </div>
                  <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                    <div 
                      className="h-full bg-gradient-to-r from-uk-blue to-uk-blue-light rounded-full"
                      style={{ width: '75%' }}
                    ></div>
                  </div>
                </div>
                
                <div className="border-t border-gray-200 pt-4 mt-4">
                  <h4 className="font-medium text-gray-900 mb-2">Module: {lesson.moduleTitle}</h4>
                  
                  <div className="space-y-2">
                    <div className="flex items-center p-2 rounded-lg bg-uk-blue/5 border border-uk-blue/20">
                      <div className="mr-3 p-1 bg-uk-blue rounded-full text-white">
                        <FaCheck size={12} />
                      </div>
                      <div className="flex-1">
                        <p className="text-sm font-medium">Course Overview and Objectives</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center p-2 rounded-lg bg-uk-blue/5 border border-uk-blue/20">
                      <div className="mr-3 p-1 bg-uk-blue rounded-full text-white">
                        <FaCheck size={12} />
                      </div>
                      <div className="flex-1">
                        <p className="text-sm font-medium">The Evolution of Management Theory</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center p-2 rounded-lg bg-uk-blue/5 border border-uk-blue/20">
                      <div className="mr-3 p-1 bg-uk-blue rounded-full text-white">
                        <FaPlay size={12} />
                      </div>
                      <div className="flex-1">
                        <p className="text-sm font-medium">Core Management Functions</p>
                        <p className="text-xs text-gray-500">Current lesson</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center p-2 rounded-lg bg-gray-50 border border-gray-200">
                      <div className="mr-3 p-1 bg-gray-300 rounded-full text-white">
                        <FaClipboardCheck size={12} />
                      </div>
                      <div className="flex-1">
                        <p className="text-sm font-medium">Module 1 Quiz</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
            
            <Card variant="bordered" className="mb-6">
              <div className="p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-4">Keyboard Shortcuts</h3>
                
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-gray-700">Play/Pause</span>
                    <span className="font-mono bg-gray-100 px-2 py-1 rounded text-sm">Space</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-700">Forward 10s</span>
                    <span className="font-mono bg-gray-100 px-2 py-1 rounded text-sm">→</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-700">Back 10s</span>
                    <span className="font-mono bg-gray-100 px-2 py-1 rounded text-sm">←</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-700">Mute/Unmute</span>
                    <span className="font-mono bg-gray-100 px-2 py-1 rounded text-sm">M</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-700">Fullscreen</span>
                    <span className="font-mono bg-gray-100 px-2 py-1 rounded text-sm">F</span>
                  </div>
                </div>
              </div>
            </Card>
            
            <Card variant="glass">
              <div className="p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-3">Need Help?</h3>
                <p className="text-sm text-gray-600 mb-4">
                  If you're having trouble with this lesson or have questions, reach out to your instructor or our support team.
                </p>
                <div className="space-y-2">
                  <Button 
                    variant="outline" 
                    fullWidth 
                    href={`/dashboard/courses/${slug}/discussion`}
                  >
                    Discussion Forum
                  </Button>
                  <Button 
                    variant="outline" 
                    fullWidth 
                    href="/dashboard/support"
                  >
                    Contact Support
                  </Button>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
} 