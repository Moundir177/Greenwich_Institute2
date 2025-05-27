'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { FaPlay } from 'react-icons/fa';

interface VideoTestimonial {
  id: number;
  title: string;
  name: string;
  program: string;
  year: string;
  description: string;
  thumbnailUrl: string;
  videoUrl: string;
}

interface VideoTestimonialsProps {
  testimonials?: VideoTestimonial[];
}

const defaultTestimonials: VideoTestimonial[] = [
  {
    id: 1,
    title: "Business Growth Success Story",
    name: "Ahmed Khalid",
    program: "Start and Improve Your Business (SIYB)",
    year: "2022",
    description: "In this video, I share how the SIYB program helped me launch my tech startup and secure funding within six months of graduation.",
    thumbnailUrl: "/images/testimonials/video-1.jpg",
    videoUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ"
  },
  {
    id: 2,
    title: "Women in Tech Leadership",
    name: "Fatima Zahra",
    program: "Improve Your Business (IYB)",
    year: "2022", 
    description: "Watch my journey as a woman entrepreneur in sustainable technology and how Greenwich Institute connected me with mentors and opportunities.",
    thumbnailUrl: "/images/testimonials/video-2.jpg",
    videoUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ"
  },
  {
    id: 3,
    title: "International Certification Journey",
    name: "Mohammed Al-Farsi",
    program: "Professional Trainer and Consultant (PMT/TOT)",
    year: "2023",
    description: "Learn how the ILO certification opened international doors for my consulting practice and prepared me for real-world business challenges.",
    thumbnailUrl: "/images/testimonials/video-3.jpg",
    videoUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ"
  }
];

const VideoTestimonials: React.FC<VideoTestimonialsProps> = ({ 
  testimonials = defaultTestimonials 
}) => {
  const [activeVideo, setActiveVideo] = useState<string | null>(null);
  const [loadError, setLoadError] = useState<Record<number, boolean>>({});
  
  const openVideo = (videoUrl: string) => {
    setActiveVideo(videoUrl);
  };
  
  const closeVideo = () => {
    setActiveVideo(null);
  };
  
  const handleImageError = (id: number) => {
    setLoadError(prev => ({ ...prev, [id]: true }));
  };

  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {testimonials.map((testimonial) => (
          <div key={testimonial.id} className="transform transition-all duration-300 hover:-translate-y-2">
            <div className="bg-white rounded-xl shadow-xl overflow-hidden group h-full border border-gray-100">
              <div className="relative aspect-video bg-gray-100 overflow-hidden">
                {loadError[testimonial.id] ? (
                  <div className="absolute inset-0 bg-gray-200 flex items-center justify-center">
                    <p className="text-gray-500 text-sm">Image unavailable</p>
                  </div>
                ) : (
                  <Image 
                    src={testimonial.thumbnailUrl}
                    alt={`${testimonial.name} video testimonial`}
                    width={600}
                    height={400}
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-300"
                    onError={() => handleImageError(testimonial.id)}
                  />
                )}
                <div 
                  className="absolute inset-0 bg-dark-blue/50 flex items-center justify-center group-hover:bg-dark-blue/30 transition-all duration-300 cursor-pointer"
                  onClick={() => openVideo(testimonial.videoUrl)}
                >
                  <div className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center group-hover:scale-110 transform transition-all duration-300">
                    <div className="w-14 h-14 rounded-full bg-gradient-to-r from-gold to-amber-500 flex items-center justify-center">
                      <FaPlay className="text-white ml-1" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-uk-blue mb-2">
                  {testimonial.name}
                </h3>
                <p className="text-gray-500 mb-4">
                  {testimonial.program} • Class of {testimonial.year}
                </p>
                <p className="text-gray-600">
                  {testimonial.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
      
      {activeVideo && (
        <div className="fixed inset-0 bg-black/90 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="relative w-full max-w-5xl bg-gradient-to-br from-gray-900 to-black rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
            <button 
              onClick={closeVideo}
              className="absolute top-4 right-4 bg-white/10 backdrop-blur-md text-white p-3 rounded-full hover:bg-white/20 transition-colors z-10"
            >
              ✕
            </button>
            <div className="aspect-w-16 aspect-h-9">
              <iframe 
                src={`${activeVideo.replace('watch?v=', 'embed/')}?autoplay=1`}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                allowFullScreen
                className="w-full h-full"
              ></iframe>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default VideoTestimonials; 