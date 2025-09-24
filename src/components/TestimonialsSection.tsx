'use client';

import { useState, useEffect } from 'react';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import { testimonials } from '@/data/content';
import { cn } from '@/lib/utils';

const TestimonialsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    const cardsPerView = isMobile ? 1 : 3;
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % Math.ceil(testimonials.length / cardsPerView));
    }, 5000);
    return () => clearInterval(timer);
  }, [isMobile]);

  const nextTestimonial = () => {
    const cardsPerView = isMobile ? 1 : 3;
    setCurrentIndex((prev) => (prev + 1) % Math.ceil(testimonials.length / cardsPerView));
  };

  const prevTestimonial = () => {
    const cardsPerView = isMobile ? 1 : 3;
    setCurrentIndex((prev) => (prev - 1 + Math.ceil(testimonials.length / cardsPerView)) % Math.ceil(testimonials.length / cardsPerView));
  };

  const goToTestimonial = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <section className="py-12 bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-8">
          <h2 className="text-2xl sm:text-3xl font-bold mb-4">
            What Our Customers Say
          </h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            Don&apos;t just take our word for it. Here&apos;s what our satisfied customers have to say 
            about their loft insulation experience.
          </p>
        </div>

        {/* Testimonials Grid - Responsive Cards */}
        <div className="relative">
          <div className="overflow-hidden">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ 
                transform: `translateX(-${currentIndex * (isMobile ? 100 : 33.333)}%)` 
              }}
            >
              {testimonials.map((testimonial) => (
                <div key={testimonial.id} className="w-full md:w-1/3 flex-shrink-0 px-2">
                  <div className="bg-white bg-opacity-95 backdrop-blur-sm rounded-xl p-4 text-center shadow-lg h-full">
                    {/* Quote Icon */}
                    <div className="w-8 h-8 bg-primary-blue rounded-full flex items-center justify-center mx-auto mb-4">
                      <Quote className="h-4 w-4 text-white" />
                    </div>

                    {/* Testimonial Content */}
                    <blockquote className="text-sm text-gray-800 mb-4 leading-relaxed font-medium line-clamp-4">
                      &ldquo;{testimonial.content}&rdquo;
                    </blockquote>

                    {/* Rating */}
                    <div className="flex justify-center mb-3">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={cn(
                            'h-3 w-3',
                            i < testimonial.rating
                              ? 'text-yellow-500 fill-current'
                              : 'text-gray-300'
                          )}
                        />
                      ))}
                    </div>

                    {/* Customer Info */}
                    <div className="flex items-center justify-center space-x-2">
                      <div className="w-8 h-8 bg-gradient-to-br from-primary-blue to-secondary-blue rounded-full flex items-center justify-center">
                        <span className="text-white font-bold text-sm">
                          {testimonial.name.charAt(0)}
                        </span>
                      </div>
                      <div className="text-left">
                        <div className="text-sm font-semibold text-gray-900">
                          {testimonial.name}
                        </div>
                        <div className="text-xs text-gray-600">
                          {testimonial.location}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={prevTestimonial}
            className="absolute left-2 top-1/2 -translate-y-1/2 w-8 h-8 bg-white bg-opacity-90 hover:bg-opacity-100 rounded-full flex items-center justify-center transition-all duration-200 shadow-lg hover:shadow-xl"
          >
            <ChevronLeft className="h-4 w-4 text-gray-700" />
          </button>
          <button
            onClick={nextTestimonial}
            className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 bg-white bg-opacity-90 hover:bg-opacity-100 rounded-full flex items-center justify-center transition-all duration-200 shadow-lg hover:shadow-xl"
          >
            <ChevronRight className="h-4 w-4 text-gray-700" />
          </button>
        </div>

        {/* Dots Indicator */}
        <div className="flex justify-center space-x-2 mt-6">
          {Array.from({ length: Math.ceil(testimonials.length / (isMobile ? 1 : 3)) }).map((_, index) => (
            <button
              key={index}
              onClick={() => goToTestimonial(index)}
              className={cn(
                'w-2 h-2 rounded-full transition-all duration-200',
                index === currentIndex
                  ? 'bg-primary-blue w-6'
                  : 'bg-white bg-opacity-60 hover:bg-opacity-80'
              )}
            />
          ))}
        </div>

      </div>
    </section>
  );
};

export default TestimonialsSection;
