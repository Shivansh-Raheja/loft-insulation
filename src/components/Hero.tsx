'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Play, Phone, Quote, ArrowRight } from 'lucide-react';

const Hero = () => {
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);

  useEffect(() => {
    // Simulate video loading
    const timer = setTimeout(() => setIsVideoLoaded(true), 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="relative bg-gradient-to-br from-blue-50 to-indigo-100 min-h-screen flex items-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-6 lg:space-y-8">
            <div className="space-y-3 lg:space-y-4">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                Professional
                <span className="text-blue-600 block">Loft Insulation</span>
                Services
              </h1>
              <p className="text-lg sm:text-xl text-gray-600 leading-relaxed">
                Connect with certified loft insulation installers across the UK. 
                Save up to 25% on energy bills with our professional installation services.
              </p>
            </div>

            <div className="space-y-4 lg:space-y-6">
              <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
                LIS (Loft Insulation Services) is your global marketplace for certified loft insulation installers. 
                We provide comprehensive insulation solutions for residential and commercial properties, 
                helping you reduce energy costs and improve home comfort.
              </p>

              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                <Link
                  href="/quote"
                  className="inline-flex items-center justify-center px-6 sm:px-8 py-3 sm:py-4 bg-blue-600 text-white text-base sm:text-lg font-semibold rounded-lg hover:bg-blue-700 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
                >
                  <Quote className="h-4 w-4 sm:h-5 sm:w-5 mr-2" />
                  Get Free Quote
                  <ArrowRight className="h-4 w-4 sm:h-5 sm:w-5 ml-2" />
                </Link>
                <Link
                  href="tel:+44123456789"
                  className="inline-flex items-center justify-center px-6 sm:px-8 py-3 sm:py-4 bg-white text-blue-600 text-base sm:text-lg font-semibold rounded-lg border-2 border-blue-600 hover:bg-blue-50 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
                >
                  <Phone className="h-4 w-4 sm:h-5 sm:w-5 mr-2" />
                  Call Now
                </Link>
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 sm:gap-6 pt-6 lg:pt-8">
              <div className="text-center">
                <div className="text-2xl sm:text-3xl font-bold text-blue-600">500+</div>
                <div className="text-xs sm:text-sm text-gray-600">Happy Customers</div>
              </div>
              <div className="text-center">
                <div className="text-2xl sm:text-3xl font-bold text-blue-600">25%</div>
                <div className="text-xs sm:text-sm text-gray-600">Energy Savings</div>
              </div>
              <div className="text-center">
                <div className="text-2xl sm:text-3xl font-bold text-blue-600">10+</div>
                <div className="text-xs sm:text-sm text-gray-600">Years Experience</div>
              </div>
            </div>
          </div>

          {/* Right Content - Video */}
          <div className="relative mt-8 lg:mt-0">
            <div className="relative bg-gray-900 rounded-xl lg:rounded-2xl overflow-hidden shadow-2xl">
              {/* Video Container */}
              <div className="aspect-video relative">
                {!isVideoLoaded ? (
                  // Fallback Image
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-600 to-indigo-700 flex items-center justify-center">
                    <div className="text-center text-white px-4">
                      <div className="w-16 h-16 sm:w-20 sm:h-20 bg-white bg-opacity-20 rounded-full flex items-center justify-center mb-3 sm:mb-4 mx-auto">
                        <Play className="h-6 w-6 sm:h-8 sm:w-8 ml-1" />
                      </div>
                      <p className="text-base sm:text-lg font-semibold">Professional Installation</p>
                      <p className="text-xs sm:text-sm opacity-90">Watch our process</p>
                    </div>
                  </div>
                ) : (
                  // Video Element
                  <video
                    className="w-full h-full object-cover"
                    autoPlay
                    muted
                    loop
                    playsInline
                  >
                    <source src="/videos/loft-insulation-demo.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                )}
                
                {/* Play Button Overlay */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <button className="w-16 h-16 sm:w-20 sm:h-20 bg-white bg-opacity-90 rounded-full flex items-center justify-center hover:bg-opacity-100 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:scale-105">
                    <Play className="h-6 w-6 sm:h-8 sm:w-8 text-blue-600 ml-1" />
                  </button>
                </div>
              </div>

              {/* Video Info */}
              <div className="absolute bottom-2 left-2 right-2 sm:bottom-4 sm:left-4 sm:right-4 bg-black bg-opacity-50 rounded-lg p-3 sm:p-4 text-white">
                <h3 className="font-semibold text-sm sm:text-lg mb-1">Professional Installation Process</h3>
                <p className="text-xs sm:text-sm opacity-90">
                  See how our certified installers transform your loft with quality insulation
                </p>
              </div>
            </div>

            {/* Floating Elements - Hidden on mobile */}
            <div className="hidden lg:block absolute -top-4 -right-4 w-24 h-24 bg-yellow-400 rounded-full opacity-20 animate-pulse"></div>
            <div className="hidden lg:block absolute -bottom-4 -left-4 w-16 h-16 bg-blue-400 rounded-full opacity-20 animate-pulse delay-1000"></div>
          </div>
        </div>
      </div>

      {/* Background Decoration - Hidden on mobile */}
      <div className="hidden lg:block absolute top-0 right-0 w-96 h-96 bg-blue-200 rounded-full opacity-10 -translate-y-48 translate-x-48"></div>
      <div className="hidden lg:block absolute bottom-0 left-0 w-64 h-64 bg-indigo-200 rounded-full opacity-10 translate-y-32 -translate-x-32"></div>
    </section>
  );
};

export default Hero;
