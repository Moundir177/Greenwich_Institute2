'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { 
  FaEnvelope, FaUser, FaSearch, FaPaperPlane, FaEllipsisV,
  FaFile, FaImage, FaSmile, FaCircle, FaCheck, FaCheckDouble,
  FaUsers, FaStar, FaInbox, FaPaperclip, FaTimes, FaUserFriends,
  FaDownload
} from 'react-icons/fa';
import Button from '@/components/ui/Button';
import Card from '@/components/ui/Card';

// Define types for our data
interface Attachment {
  name: string;
  size: string;
  type: string;
}

interface Message {
  id: string;
  sender: {
    id: string;
    name: string;
    avatar: string;
  };
  text: string;
  time: string;
  isRead: boolean;
  attachments: Attachment[];
}

interface LastMessage {
  text: string;
  time: string;
  isRead: boolean;
  isFromMe: boolean;
  sender?: string;
}

interface PrivateConversation {
  id: string;
  type: 'private';
  name: string;
  role: string;
  avatar: string;
  status: string;
  unreadCount: number;
  lastMessage: LastMessage;
}

interface GroupConversation {
  id: string;
  type: 'group';
  name: string;
  members: string[];
  avatar: string;
  unreadCount: number;
  lastMessage: LastMessage;
}

type Conversation = PrivateConversation | GroupConversation;

// Mock data with proper typings
const mockConversations: Conversation[] = [
  {
    id: '1',
    type: 'private',
    name: 'Dr. Lisa Anderson',
    role: 'Instructor',
    avatar: '/images/avatars/dr-anderson.jpg',
    status: 'online',
    unreadCount: 2,
    lastMessage: {
      text: 'Your assignment submission looks great. I have a few suggestions for improvement.',
      time: '2023-11-27T15:30:00',
      isRead: false,
      isFromMe: false
    }
  },
  {
    id: '2',
    type: 'private',
    name: 'Emma Taylor',
    role: 'Student',
    avatar: '/images/avatars/emma.jpg',
    status: 'away',
    unreadCount: 0,
    lastMessage: {
      text: 'Thanks for sharing those study materials!',
      time: '2023-11-26T13:45:00',
      isRead: true,
      isFromMe: false
    }
  },
  {
    id: '3',
    type: 'group',
    name: 'Financial Analysis Study Group',
    members: ['Emma Taylor', 'Michael Chen', 'Sophie Williams', 'You', '+3 others'],
    avatar: '/images/avatars/group-1.jpg',
    unreadCount: 5,
    lastMessage: {
      sender: 'Michael Chen',
      text: 'I created a spreadsheet with all the formulas we need for the exam.',
      time: '2023-11-25T09:20:00',
      isRead: false,
      isFromMe: false
    }
  },
  {
    id: '4',
    type: 'private',
    name: 'Prof. Robert Johnson',
    role: 'Instructor',
    avatar: '/images/avatars/prof-johnson.jpg',
    status: 'offline',
    unreadCount: 0,
    lastMessage: {
      text: 'The deadline for the final project has been extended to December 15th.',
      time: '2023-11-23T16:15:00',
      isRead: true,
      isFromMe: false
    }
  },
  {
    id: '5',
    type: 'group',
    name: 'Business Management - Group Assignment',
    members: ['Alice Smith', 'Tom Wilson', 'You', '+2 others'],
    avatar: '/images/avatars/group-2.jpg',
    unreadCount: 0,
    lastMessage: {
      sender: 'You',
      text: 'I will work on the market analysis section of the report.',
      time: '2023-11-22T14:50:00',
      isRead: true,
      isFromMe: true
    }
  }
];

// Properly type the mock messages
const mockMessages: Record<string, Message[]> = {
  '1': [
    {
      id: 'm1',
      sender: {
        id: 'instructor-1',
        name: 'Dr. Lisa Anderson',
        avatar: '/images/avatars/dr-anderson.jpg'
      },
      text: 'Hello John, I wanted to discuss your recent assignment submission on financial analysis.',
      time: '2023-11-27T14:30:00',
      isRead: true,
      attachments: []
    },
    {
      id: 'm2',
      sender: {
        id: 'me',
        name: 'Me',
        avatar: '/images/avatars/user.jpg'
      },
      text: 'Hi Dr. Anderson, thank you for reaching out. I\'d be happy to discuss my submission.',
      time: '2023-11-27T14:35:00',
      isRead: true,
      attachments: []
    },
    {
      id: 'm3',
      sender: {
        id: 'instructor-1',
        name: 'Dr. Lisa Anderson',
        avatar: '/images/avatars/dr-anderson.jpg'
      },
      text: 'Your analysis of the balance sheet was excellent, but I think your cash flow projections could use some refinement.',
      time: '2023-11-27T14:40:00',
      isRead: true,
      attachments: []
    },
    {
      id: 'm4',
      sender: {
        id: 'instructor-1',
        name: 'Dr. Lisa Anderson',
        avatar: '/images/avatars/dr-anderson.jpg'
      },
      text: 'I\'ve attached some examples of strong cash flow analyses that might help guide your revisions.',
      time: '2023-11-27T14:42:00',
      isRead: true,
      attachments: [
        {
          name: 'CashFlowExamples.pdf',
          size: '1.2 MB',
          type: 'pdf'
        }
      ]
    },
    {
      id: 'm5',
      sender: {
        id: 'me',
        name: 'Me',
        avatar: '/images/avatars/user.jpg'
      },
      text: 'Thank you for the feedback and examples. I\'ll review them and make the necessary improvements to my cash flow projections.',
      time: '2023-11-27T14:50:00',
      isRead: true,
      attachments: []
    },
    {
      id: 'm6',
      sender: {
        id: 'instructor-1',
        name: 'Dr. Lisa Anderson',
        avatar: '/images/avatars/dr-anderson.jpg'
      },
      text: 'Great! Would you be available for a quick video call tomorrow at 3 PM to discuss this in more detail?',
      time: '2023-11-27T15:25:00',
      isRead: false,
      attachments: []
    },
    {
      id: 'm7',
      sender: {
        id: 'instructor-1',
        name: 'Dr. Lisa Anderson',
        avatar: '/images/avatars/dr-anderson.jpg'
      },
      text: 'I could also provide more specific guidance on how to improve your DCF model.',
      time: '2023-11-27T15:30:00',
      isRead: false,
      attachments: []
    }
  ]
};

export default function MessagesPage() {
  const [conversations, setConversations] = useState<Conversation[]>(mockConversations);
  const [activeConversation, setActiveConversation] = useState<string | null>(null);
  const [messages, setMessages] = useState<Message[]>([]);
  const [newMessage, setNewMessage] = useState('');
  const [searchQuery, setSearchQuery] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  
  const messagesEndRef = useRef<HTMLDivElement>(null);
  
  // Simulate loading data
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
      
      // Auto-select first conversation if available
      if (conversations.length > 0 && !activeConversation) {
        setActiveConversation(conversations[0].id);
        setMessages(mockMessages[conversations[0].id] || []);
      }
    }, 800);
    
    return () => clearTimeout(timer);
  }, []);
  
  // Scroll to bottom of messages when messages change
  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages]);
  
  // When active conversation changes, load its messages
  useEffect(() => {
    if (activeConversation) {
      setMessages(mockMessages[activeConversation] || []);
      
      // Mark conversation as read
      setConversations(prev => 
        prev.map(conv => 
          conv.id === activeConversation 
            ? { ...conv, unreadCount: 0, lastMessage: { ...conv.lastMessage, isRead: true } } 
            : conv
        )
      );
    }
  }, [activeConversation]);
  
  // Filter conversations based on search query
  const filteredConversations = conversations.filter(conv => 
    conv.name.toLowerCase().includes(searchQuery.toLowerCase())
  );
  
  // Send a new message
  const sendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!newMessage.trim() || !activeConversation) return;
    
    const newMsg = {
      id: `new-${Date.now()}`,
      sender: {
        id: 'me',
        name: 'Me',
        avatar: '/images/avatars/user.jpg'
      },
      text: newMessage,
      time: new Date().toISOString(),
      isRead: true,
      attachments: []
    };
    
    // Add message to current conversation
    setMessages(prev => [...prev, newMsg]);
    
    // Update conversation with new last message
    setConversations(prev => 
      prev.map(conv => 
        conv.id === activeConversation 
          ? { 
              ...conv, 
              lastMessage: {
                text: newMessage,
                time: new Date().toISOString(),
                isRead: true,
                isFromMe: true,
                sender: conv.type === 'group' ? 'You' : undefined
              }
            } 
          : conv
      )
    );
    
    // Clear input field
    setNewMessage('');
  };
  
  // Format date helper
  const formatMessageTime = (dateString: string): string => {
    const date = new Date(dateString);
    const now = new Date();
    
    // Check if same day
    if (date.toDateString() === now.toDateString()) {
      return date.toLocaleTimeString('en-GB', { hour: '2-digit', minute: '2-digit' });
    }
    
    // Check if yesterday
    const yesterday = new Date(now);
    yesterday.setDate(now.getDate() - 1);
    if (date.toDateString() === yesterday.toDateString()) {
      return 'Yesterday';
    }
    
    // Check if within a week
    const oneWeekAgo = new Date(now);
    oneWeekAgo.setDate(now.getDate() - 7);
    if (date > oneWeekAgo) {
      return date.toLocaleDateString('en-GB', { weekday: 'short' });
    }
    
    // Otherwise show date
    return date.toLocaleDateString('en-GB', { day: 'numeric', month: 'short' });
  };
  
  const formatDateTime = (dateString: string): string => {
    const date = new Date(dateString);
    return date.toLocaleString('en-GB', { 
      hour: '2-digit', 
      minute: '2-digit',
      day: 'numeric',
      month: 'short',
      year: 'numeric'
    });
  };
  
  // Get active conversation helper
  const getActiveConversation = (): Conversation | undefined => {
    return conversations.find(c => c.id === activeConversation);
  };
  
  // Check if conversation is a group
  const isGroupConversation = (conversation?: Conversation): conversation is GroupConversation => {
    return conversation?.type === 'group';
  };
  
  // Check if conversation is private
  const isPrivateConversation = (conversation?: Conversation): conversation is PrivateConversation => {
    return conversation?.type === 'private';
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
            <span className="text-white">Messages</span>
          </div>
          <h1 className="text-2xl font-bold text-white mt-4">Messages</h1>
        </div>
      </div>
      
      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {isLoading ? (
          <div className="flex justify-center items-center min-h-[60vh]">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-uk-blue"></div>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
            {/* Conversations Sidebar */}
            <div className="lg:col-span-1">
              <Card variant="elevated" className="overflow-hidden h-[75vh] flex flex-col">
                <div className="p-4 border-b border-gray-200">
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <FaSearch className="text-gray-400" />
                    </div>
                    <input
                      type="text"
                      className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-1 focus:ring-uk-blue focus:border-uk-blue sm:text-sm"
                      placeholder="Search messages..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                    />
                  </div>
                </div>
                
                <div className="flex-1 overflow-y-auto divide-y divide-gray-200">
                  {filteredConversations.length === 0 ? (
                    <div className="flex flex-col items-center justify-center h-full p-4">
                      <div className="text-gray-400 mb-2">
                        <FaEnvelope size={32} />
                      </div>
                      <p className="text-gray-500 text-center">No conversations found</p>
                    </div>
                  ) : (
                    filteredConversations.map((conv) => (
                      <button
                        key={conv.id}
                        className={`w-full text-left p-4 hover:bg-gray-50 transition-colors ${
                          activeConversation === conv.id ? 'bg-blue-50' : ''
                        }`}
                        onClick={() => setActiveConversation(conv.id)}
                      >
                        <div className="flex items-start">
                          <div className="relative flex-shrink-0 mr-3">
                            {conv.type === 'private' ? (
                              <div className="h-12 w-12 rounded-full bg-gray-300 overflow-hidden flex items-center justify-center text-gray-700">
                                <FaUser size={20} />
                              </div>
                            ) : (
                              <div className="h-12 w-12 rounded-full bg-gray-300 overflow-hidden flex items-center justify-center text-gray-700">
                                <FaUsers size={20} />
                              </div>
                            )}
                            
                            {conv.type === 'private' && conv.status && (
                              <span className={`absolute bottom-0 right-0 block w-3 h-3 rounded-full ring-2 ring-white ${
                                conv.status === 'online' ? 'bg-green-400' : 
                                conv.status === 'away' ? 'bg-yellow-400' : 'bg-gray-400'
                              }`}></span>
                            )}
                          </div>
                          
                          <div className="flex-1 min-w-0">
                            <div className="flex justify-between">
                              <h3 className="text-sm font-medium text-gray-900 truncate">
                                {conv.name}
                              </h3>
                              <span className="text-xs text-gray-500">
                                {formatMessageTime(conv.lastMessage.time)}
                              </span>
                            </div>
                            
                            {conv.type === 'private' && conv.role && (
                              <p className="text-xs text-gray-500">{conv.role}</p>
                            )}
                            
                            <p className={`text-sm truncate mt-1 ${
                              !conv.lastMessage.isRead && !conv.lastMessage.isFromMe 
                                ? 'font-medium text-gray-900' 
                                : 'text-gray-500'
                            }`}>
                              {conv.type === 'group' && !conv.lastMessage.isFromMe && (
                                <span>{conv.lastMessage.sender}: </span>
                              )}
                              {conv.lastMessage.text}
                            </p>
                          </div>
                          
                          {conv.unreadCount > 0 && (
                            <div className="ml-2 mt-1 flex-shrink-0">
                              <span className="inline-flex items-center justify-center h-5 w-5 rounded-full bg-uk-blue text-white text-xs">
                                {conv.unreadCount}
                              </span>
                            </div>
                          )}
                        </div>
                      </button>
                    ))
                  )}
                </div>
                
                <div className="p-4 border-t border-gray-200">
                  <Button 
                    variant="primary" 
                    size="sm" 
                    effect="3d" 
                    fullWidth 
                    icon={<FaUserFriends />}
                  >
                    New Conversation
                  </Button>
                </div>
              </Card>
            </div>
            
            {/* Message Thread */}
            <div className="lg:col-span-3">
              {activeConversation ? (
                <Card variant="elevated" className="overflow-hidden h-[75vh] flex flex-col">
                  {/* Conversation Header */}
                  <div className="p-4 border-b border-gray-200 flex justify-between items-center">
                    <div className="flex items-center">
                      <div className="mr-3">
                        {isGroupConversation(getActiveConversation()) ? (
                          <div className="h-10 w-10 rounded-full bg-gray-300 overflow-hidden flex items-center justify-center text-gray-700">
                            <FaUsers size={16} />
                          </div>
                        ) : (
                          <div className="relative">
                            <div className="h-10 w-10 rounded-full bg-gray-300 overflow-hidden flex items-center justify-center text-gray-700">
                              <FaUser size={16} />
                            </div>
                            {isPrivateConversation(getActiveConversation()) && 
                              getActiveConversation() && 
                              (getActiveConversation() as PrivateConversation).status === 'online' && (
                              <span className="absolute bottom-0 right-0 block w-2.5 h-2.5 rounded-full bg-green-400 ring-2 ring-white"></span>
                            )}
                          </div>
                        )}
                      </div>
                      
                      <div>
                        <h3 className="text-lg font-medium text-gray-900">
                          {getActiveConversation()?.name}
                        </h3>
                        
                        {isPrivateConversation(getActiveConversation()) && 
                          getActiveConversation() && (
                          <p className="text-sm text-gray-500">
                            {(getActiveConversation() as PrivateConversation).role}
                            {(getActiveConversation() as PrivateConversation).status === 'online' && (
                              <span className="text-green-500 ml-2">● Online</span>
                            )}
                          </p>
                        )}
                        
                        {isGroupConversation(getActiveConversation()) && 
                          getActiveConversation() && (
                          <p className="text-sm text-gray-500">
                            {(getActiveConversation() as GroupConversation).members.join(', ')}
                          </p>
                        )}
                      </div>
                    </div>
                    
                    <button className="text-gray-500 hover:text-gray-700">
                      <FaEllipsisV />
                    </button>
                  </div>
                  
                  {/* Messages Container */}
                  <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-gray-50">
                    {messages.map((message) => (
                      <div 
                        key={message.id} 
                        className={`flex ${message.sender.id === 'me' ? 'justify-end' : 'justify-start'}`}
                      >
                        <div className={`max-w-[75%] ${message.sender.id === 'me' ? 'order-2' : 'order-1'}`}>
                          {message.sender.id !== 'me' && (
                            <div className="flex items-center mb-1">
                              <div className="h-6 w-6 rounded-full bg-gray-300 overflow-hidden mr-2 flex items-center justify-center text-gray-700">
                                <FaUser size={12} />
                              </div>
                              <span className="text-xs font-medium text-gray-700">{message.sender.name}</span>
                            </div>
                          )}
                          
                          <div className={`rounded-lg p-3 shadow-sm ${
                            message.sender.id === 'me' 
                              ? 'bg-uk-blue text-white' 
                              : 'bg-white text-gray-700'
                          }`}>
                            <p className="text-sm">{message.text}</p>
                            
                            {message.attachments && message.attachments.length > 0 && (
                              <div className="mt-2 space-y-2">
                                {message.attachments.map((attachment: any, idx: number) => (
                                  <div 
                                    key={idx} 
                                    className={`flex items-center p-2 rounded-md ${
                                      message.sender.id === 'me' 
                                        ? 'bg-blue-700' 
                                        : 'bg-gray-100'
                                    }`}
                                  >
                                    <FaFile className={`mr-2 ${
                                      message.sender.id === 'me' ? 'text-white' : 'text-gray-500'
                                    }`} />
                                    <div className="flex-1 min-w-0">
                                      <p className={`text-xs font-medium truncate ${
                                        message.sender.id === 'me' ? 'text-white' : 'text-gray-700'
                                      }`}>
                                        {attachment.name}
                                      </p>
                                      <p className={`text-xs ${
                                        message.sender.id === 'me' ? 'text-blue-200' : 'text-gray-500'
                                      }`}>
                                        {attachment.size}
                                      </p>
                                    </div>
                                    <button className={`p-1 rounded-full ${
                                      message.sender.id === 'me' 
                                        ? 'text-white hover:bg-blue-600' 
                                        : 'text-gray-500 hover:bg-gray-200'
                                    }`}>
                                      <FaDownload size={12} />
                                    </button>
                                  </div>
                                ))}
                              </div>
                            )}
                          </div>
                          
                          <div className={`flex items-center mt-1 text-xs text-gray-500 ${
                            message.sender.id === 'me' ? 'justify-end' : 'justify-start'
                          }`}>
                            <span>{formatDateTime(message.time)}</span>
                            
                            {message.sender.id === 'me' && (
                              <span className="ml-1 text-gray-500">
                                {message.isRead ? <FaCheckDouble /> : <FaCheck />}
                              </span>
                            )}
                          </div>
                        </div>
                      </div>
                    ))}
                    <div ref={messagesEndRef} />
                  </div>
                  
                  {/* Message Input */}
                  <div className="border-t border-gray-200 p-4">
                    <form onSubmit={sendMessage} className="flex items-end">
                      <div className="flex-1 mr-2">
                        <textarea
                          rows={1}
                          className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-uk-blue focus:border-uk-blue"
                          placeholder="Type a message..."
                          value={newMessage}
                          onChange={(e) => setNewMessage(e.target.value)}
                          onKeyDown={(e) => {
                            if (e.key === 'Enter' && !e.shiftKey) {
                              e.preventDefault();
                              sendMessage(e);
                            }
                          }}
                        ></textarea>
                        
                        <div className="flex mt-2 space-x-2">
                          <button type="button" className="p-1 text-gray-500 hover:text-gray-700">
                            <FaPaperclip />
                          </button>
                          <button type="button" className="p-1 text-gray-500 hover:text-gray-700">
                            <FaImage />
                          </button>
                          <button type="button" className="p-1 text-gray-500 hover:text-gray-700">
                            <FaSmile />
                          </button>
                        </div>
                      </div>
                      
                      <Button 
                        type="submit" 
                        variant="primary" 
                        effect="hoverglow"
                        disabled={!newMessage.trim()}
                        icon={<FaPaperPlane />}
                      >
                        Send
                      </Button>
                    </form>
                  </div>
                </Card>
              ) : (
                <Card variant="elevated" className="flex flex-col items-center justify-center h-[75vh] p-6">
                  <div className="bg-gray-100 p-6 rounded-full mb-4">
                    <FaEnvelope className="h-12 w-12 text-gray-400" />
                  </div>
                  <h2 className="text-2xl font-bold text-gray-700 mb-2">Select a Conversation</h2>
                  <p className="text-gray-500 text-center mb-6">
                    Choose a conversation from the sidebar to start messaging
                  </p>
                  <Button 
                    variant="primary" 
                    effect="3d" 
                    icon={<FaUserFriends />}
                  >
                    Start a New Conversation
                  </Button>
                </Card>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
} 