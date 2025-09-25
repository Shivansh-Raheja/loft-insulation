'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Play, Phone, Quote, ArrowRight, X, User, Building } from 'lucide-react';

const Hero = () => {
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);
  const [showSellerForm, setShowSellerForm] = useState(false);
  const [showBuyerForm, setShowBuyerForm] = useState(false);

  useEffect(() => {
    // Simulate video loading
    const timer = setTimeout(() => setIsVideoLoaded(true), 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="relative bg-gradient-to-br from-blue-50 to-indigo-100 min-h-screen flex items-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 items-start">
          {/* Left Content */}
          <div className="space-y-4 lg:space-y-6">
            <div className="space-y-2 lg:space-y-3">
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
                Save Up to 25% on Energy Bills with
                <span className="text-primary-blue block">Professional Loft Insulation</span>
              </h1>
              <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
                Expert installation, certified materials, nationwide coverage.
              </p>
            </div>

            <div className="space-y-3 lg:space-y-4">
              {/* Seller/Buyer Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Seller Card */}
                <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 group cursor-pointer" onClick={() => setShowSellerForm(true)}>
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center group-hover:bg-green-200 transition-colors duration-300">
                      <Building className="h-6 w-6 text-green-600" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-gray-900 group-hover:text-green-600 transition-colors duration-300">
                        I&apos;m a Seller
                      </h3>
                      <p className="text-sm text-gray-600">
                        Offer your insulation services
                      </p>
                    </div>
                    <ArrowRight className="h-5 w-5 text-gray-400 group-hover:text-green-600 transition-colors duration-300" />
                  </div>
                </div>

                {/* Buyer Card */}
                <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 group cursor-pointer" onClick={() => setShowBuyerForm(true)}>
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center group-hover:bg-blue-200 transition-colors duration-300">
                      <User className="h-6 w-6 text-blue-600" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-gray-900 group-hover:text-blue-600 transition-colors duration-300">
                        I&apos;m a Buyer
                      </h3>
                      <p className="text-sm text-gray-600">
                        Find insulation services
                      </p>
                    </div>
                    <ArrowRight className="h-5 w-5 text-gray-400 group-hover:text-blue-600 transition-colors duration-300" />
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                <Link
                  href="/quote"
                  className="inline-flex items-center justify-center px-6 sm:px-8 py-3 sm:py-4 bg-primary-blue text-white text-base sm:text-lg font-semibold rounded-lg hover:bg-blue-700 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
                >
                  <Quote className="h-4 w-4 sm:h-5 sm:w-5 mr-2" />
                  Get Free Quote
                  <ArrowRight className="h-4 w-4 sm:h-5 sm:w-5 ml-2" />
                </Link>
                <Link
                  href="tel:+44123456789"
                  className="inline-flex items-center justify-center px-6 sm:px-8 py-3 sm:py-4 bg-white text-primary-blue text-base sm:text-lg font-semibold rounded-lg border-2 border-primary-blue hover:bg-blue-50 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
                >
                  <Phone className="h-4 w-4 sm:h-5 sm:w-5 mr-2" />
                  Call Now
                </Link>
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-3 sm:gap-4 pt-4 lg:pt-6">
              <div className="text-center">
                <div className="text-2xl sm:text-3xl font-bold text-primary-blue">500+</div>
                <div className="text-xs sm:text-sm text-gray-600">Happy Customers</div>
              </div>
              <div className="text-center">
                <div className="text-2xl sm:text-3xl font-bold text-primary-blue">25%</div>
                <div className="text-xs sm:text-sm text-gray-600">Energy Savings</div>
              </div>
              <div className="text-center">
                <div className="text-2xl sm:text-3xl font-bold text-primary-blue">10+</div>
                <div className="text-xs sm:text-sm text-gray-600">Years Experience</div>
              </div>
            </div>
          </div>

          {/* Right Content - Video */}
          <div className="relative mt-6 lg:mt-0">
            <div className="relative bg-gray-900 rounded-xl overflow-hidden shadow-2xl">
              {/* Video Container */}
              <div className="aspect-video relative max-h-80">
                {!isVideoLoaded ? (
                  // Fallback Image
                  <div className="absolute inset-0 bg-gradient-to-br from-primary-blue to-secondary-blue flex items-center justify-center">
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
                    <Play className="h-6 w-6 sm:h-8 sm:w-8 text-primary-blue ml-1" />
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

      {/* Seller Form Modal */}
      {showSellerForm && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl max-w-md w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6 border-b border-gray-200">
              <div className="flex items-center justify-between">
                <h2 className="text-2xl font-bold text-gray-900">Join as a Seller</h2>
                <button
                  onClick={() => setShowSellerForm(false)}
                  className="p-2 hover:bg-gray-100 rounded-lg transition-colors duration-200"
                >
                  <X className="h-5 w-5 text-gray-500" />
                </button>
              </div>
              <p className="text-gray-600 mt-2">Start offering your insulation services to customers</p>
            </div>
            <div className="p-6">
              <form className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Company Name *</label>
                  <input
                    type="text"
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-blue focus:border-primary-blue"
                    placeholder="Enter your company name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Contact Person *</label>
                  <input
                    type="text"
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-blue focus:border-primary-blue"
                    placeholder="Your full name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Email *</label>
                  <input
                    type="email"
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-blue focus:border-primary-blue"
                    placeholder="your@email.com"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Phone *</label>
                  <input
                    type="tel"
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-blue focus:border-primary-blue"
                    placeholder="+44 123 456 789"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Service Areas</label>
                  <input
                    type="text"
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-blue focus:border-primary-blue"
                    placeholder="e.g., London, Manchester, Birmingham"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Years of Experience</label>
                  <select className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-blue focus:border-primary-blue">
                    <option>Select experience</option>
                    <option>1-2 years</option>
                    <option>3-5 years</option>
                    <option>6-10 years</option>
                    <option>10+ years</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                  <textarea
                    rows={3}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-blue focus:border-primary-blue"
                    placeholder="Tell us about your services..."
                  />
                </div>
                <div className="flex gap-3 pt-4">
                  <button
                    type="button"
                    onClick={() => setShowSellerForm(false)}
                    className="flex-1 px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors duration-200"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="flex-1 px-4 py-2 bg-primary-blue text-white rounded-lg hover:bg-blue-700 transition-colors duration-200"
                  >
                    Submit Application
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}

      {/* Buyer Form Modal */}
      {showBuyerForm && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl max-w-md w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6 border-b border-gray-200">
              <div className="flex items-center justify-between">
                <h2 className="text-2xl font-bold text-gray-900">Find Insulation Services</h2>
                <button
                  onClick={() => setShowBuyerForm(false)}
                  className="p-2 hover:bg-gray-100 rounded-lg transition-colors duration-200"
                >
                  <X className="h-5 w-5 text-gray-500" />
                </button>
              </div>
              <p className="text-gray-600 mt-2">Get connected with certified insulation installers</p>
            </div>
            <div className="p-6">
              <form className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Full Name *</label>
                  <input
                    type="text"
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-blue focus:border-primary-blue"
                    placeholder="Your full name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Email *</label>
                  <input
                    type="email"
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-blue focus:border-primary-blue"
                    placeholder="your@email.com"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Phone *</label>
                  <input
                    type="tel"
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-blue focus:border-primary-blue"
                    placeholder="+44 123 456 789"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Property Address *</label>
                  <input
                    type="text"
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-blue focus:border-primary-blue"
                    placeholder="Enter your property address"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Service Needed *</label>
                  <select className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-blue focus:border-primary-blue">
                    <option>Select service</option>
                    <option>Loft Insulation Installation</option>
                    <option>Loft Clearance & Preparation</option>
                    <option>Loft Boarding & Storage</option>
                    <option>Roof / Rafter Insulation</option>
                    <option>Cavity Wall & Floor Insulation</option>
                    <option>Insulation Removal & Replacement</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Property Type</label>
                  <select className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-blue focus:border-primary-blue">
                    <option>Select property type</option>
                    <option>Residential Home</option>
                    <option>Commercial Building</option>
                    <option>Industrial Property</option>
                    <option>Housing Association</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Project Description</label>
                  <textarea
                    rows={3}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-blue focus:border-primary-blue"
                    placeholder="Describe your insulation project..."
                  />
                </div>
                <div className="flex gap-3 pt-4">
                  <button
                    type="button"
                    onClick={() => setShowBuyerForm(false)}
                    className="flex-1 px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors duration-200"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="flex-1 px-4 py-2 bg-primary-blue text-white rounded-lg hover:bg-blue-700 transition-colors duration-200"
                  >
                    Get Quotes
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Hero;
