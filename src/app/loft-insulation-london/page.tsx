import { CheckCircle, Users, Shield, Award, Phone, Quote, Mail, Globe, MapPin, Home, Wrench, Package, Layers, Star, Clock, Building } from 'lucide-react';
import Link from 'next/link';

export const metadata = {
  title: 'Free Loft Insulation in London – Save Energy & Reduce Bills',
  description: 'Apply for free loft insulation in London and cut your energy bills. Expert installers, fast approval, and government-backed grants available.',
  keywords: 'free loft insulation London, loft insulation grants London, London loft insulation scheme, government free loft insulation London, loft insulation installers London, energy saving loft insulation London, eco loft insulation London, free home insulation London',
  openGraph: {
    siteName: 'Free Loft Insulation in London',
    url: 'https://www.loft-insulation-services-uk.com/blog/free-loft-insulation-in-london',
    title: 'London\'s Free Loft Insulation Scheme – Check Your Eligibility Today',
    description: 'Discover how to get free loft insulation in London. Reduce heat loss, save money, and enjoy a warmer home this winter.',
    images: [
      {
        url: 'https://www.loft-insulation-services-uk.com/_next/image?url=%2FLOFT%20INSULATION.png&w=640&q=75',
        width: 1200,
        height: 630,
        alt: 'Free Loft Insulation in London',
      },
    ],
    locale: 'en_GB',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Get Free Loft Insulation in London – Government Grants Available',
    description: 'London homeowners can now qualify for free loft insulation through eco-friendly government schemes. Check if you\'re eligible today.',
    images: ['https://www.loft-insulation-services-uk.com/_next/image?url=%2FLOFT%20INSULATION.png&w=640&q=75'],
    creator: '@l4rgindia',
  },
  alternates: {
    canonical: 'https://www.loft-insulation-services-uk.com/blog/free-loft-insulation-in-london',
    languages: {
      'en-US': 'https://www.loft-insulation-services-uk.com/blog/free-loft-insulation-in-london',
      'en-GB': 'https://www.loft-insulation-services-uk.com/blog/free-loft-insulation-in-london',
      'en': 'https://www.loft-insulation-services-uk.com/blog/free-loft-insulation-in-london',
    },
  },
  robots: {
    index: true,
    follow: true,
  },
  authors: [{ name: 'LIS UK' }],
  other: {
    'copyright': '© 2025',
  },
};

export default function LoftInsulationLondon() {
  return (
    <div className="min-h-screen overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-50 to-indigo-100 min-h-screen flex items-center overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-12 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 items-start">
            {/* Left Content */}
            <div className="space-y-4 lg:space-y-6">
              <div className="space-y-2 lg:space-y-3">
                <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight break-words">
                  Loft Insulation London
                  <span className="text-primary-blue block break-words">Save Energy & Cut Heating Costs</span>
                  <span className="text-gray-700 text-xl sm:text-2xl block mt-2 break-words">Professional Loft Insulation Services Across London</span>
                </h1>
                <p className="text-base sm:text-lg text-gray-600 leading-relaxed break-words">
                  At LIS UK, we specialise in providing high-quality loft insulation in London, helping homeowners and landlords reduce heat loss, lower energy bills, and improve indoor comfort.
                </p>
              </div>

              <div className="space-y-3 lg:space-y-4">
                <p className="text-sm sm:text-base text-gray-700 leading-relaxed break-words">
                  With a network of 5,000+ certified installers across the UK, we cover all London boroughs, including Westminster, Camden, Islington, Kensington & Chelsea, Southwark, and beyond.
                </p>

                <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                  <Link
                    href="/quote"
                    className="inline-flex items-center justify-center px-6 sm:px-8 py-3 sm:py-4 bg-primary-blue text-white text-base sm:text-lg font-semibold rounded-lg hover:bg-blue-700 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
                  >
                    <Quote className="h-4 w-4 sm:h-5 sm:w-5 mr-2" />
                    Get Free Quote
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
                  <div className="text-2xl sm:text-3xl font-bold text-primary-blue">5000+</div>
                  <div className="text-xs sm:text-sm text-gray-600">Certified Installers</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl sm:text-3xl font-bold text-primary-blue">25%</div>
                  <div className="text-xs sm:text-sm text-gray-600">Heat Loss Reduction</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl sm:text-3xl font-bold text-primary-blue">10+</div>
                  <div className="text-xs sm:text-sm text-gray-600">Years Experience</div>
                </div>
              </div>
            </div>

            {/* Right Content - Image Container */}
            <div className="relative mt-6 lg:mt-0">
              <div className="relative bg-gray-900 rounded-xl overflow-hidden shadow-2xl group hover:scale-105 transition-transform duration-500 ease-in-out">
                <div className="aspect-video relative max-h-80">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary-blue to-secondary-blue flex items-center justify-center group-hover:scale-110 transition-transform duration-700 ease-in-out">
                    <div className="text-center text-white px-4">
                      <div className="w-16 h-16 sm:w-20 sm:h-20 bg-white bg-opacity-20 rounded-full flex items-center justify-center mb-3 sm:mb-4 mx-auto group-hover:rotate-12 transition-transform duration-500">
                        <Building className="h-6 w-6 sm:h-8 sm:w-8" />
                      </div>
                      <p className="text-base sm:text-lg font-semibold group-hover:scale-105 transition-transform duration-300">London Coverage</p>
                      <p className="text-xs sm:text-sm opacity-90 group-hover:opacity-100 transition-opacity duration-300">All Boroughs Covered</p>
                    </div>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>
              </div>

              {/* Floating Elements - Hidden on mobile */}
              <div className="hidden lg:block absolute -top-4 -right-4 w-24 h-24 bg-yellow-400 rounded-full opacity-20 animate-pulse"></div>
              <div className="hidden lg:block absolute -bottom-4 -left-4 w-16 h-16 bg-blue-400 rounded-full opacity-20 animate-pulse delay-1000"></div>
              <div className="hidden lg:block absolute top-1/2 -right-8 w-12 h-12 bg-green-400 rounded-full opacity-15 animate-pulse delay-500"></div>
              <div className="hidden lg:block absolute -top-8 -left-8 w-20 h-20 bg-purple-400 rounded-full opacity-10 animate-pulse delay-700"></div>
            </div>
          </div>
        </div>

        {/* Background Decoration - Hidden on mobile */}
        <div className="hidden lg:block absolute top-0 right-0 w-96 h-96 bg-blue-200 rounded-full opacity-10 -translate-y-48 translate-x-48 pointer-events-none"></div>
        <div className="hidden lg:block absolute bottom-0 left-0 w-64 h-64 bg-indigo-200 rounded-full opacity-10 translate-y-32 -translate-x-32 pointer-events-none"></div>
      </section>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 w-full overflow-hidden">
        {/* Why Loft Insulation is Essential */}
        <section className="mb-16">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4 break-words">Why Loft Insulation is Essential in London</h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto break-words">
              Without proper insulation, up to 25% of your home&apos;s heat escapes through the roof
            </p>
          </div>
          
          <div className="bg-gradient-to-r from-red-50 to-orange-50 border-2 border-red-200 rounded-2xl p-4 sm:p-6 lg:p-8 shadow-lg">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 items-center">
              <div>
                <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 mb-4 break-words">The London Problem</h3>
                <p className="text-sm sm:text-base lg:text-lg text-gray-700 leading-relaxed mb-4 sm:mb-6 break-words">
                  This means wasted energy, higher bills, and less comfort. Installing or upgrading your loft insulation provides:
                </p>
                <div className="space-y-2 sm:space-y-3">
                  {[
                    'Lower heating costs year-round',
                    'A warmer home in winter & cooler in summer',
                    'Improved EPC rating – ideal for landlords',
                    'Increased property value',
                    'Reduced carbon footprint',
                    'Potential eligibility for government insulation grants'
                  ].map((benefit, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <span className="text-sm sm:text-base text-gray-700 break-words">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="bg-white rounded-xl p-4 sm:p-6 shadow-lg">
                <div className="text-center">
                  <div className="w-16 h-16 bg-red-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-white text-2xl font-bold">25%</span>
                  </div>
                  <h4 className="text-lg sm:text-xl font-bold text-gray-900 mb-2 break-words">Heat Loss Through Roof</h4>
                  <p className="text-sm sm:text-base text-gray-600 break-words">Without proper insulation</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Our Loft Insulation Services */}
        <section className="mb-16">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4 break-words">Our Loft Insulation Services in London</h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto break-words">
              Professional insulation solutions tailored to your London property
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {/* Blanket Insulation */}
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-4 sm:p-6 text-center shadow-lg border border-blue-200 hover:shadow-xl transition-shadow duration-300">
              <div className="w-12 h-12 sm:w-16 sm:h-16 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
                <Layers className="h-6 w-6 sm:h-8 sm:w-8 text-white" />
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2 sm:mb-3 break-words">Blanket (Roll) Insulation</h3>
              <p className="text-sm sm:text-base text-gray-700 break-words">Cost-effective and perfect for most standard loft spaces.</p>
            </div>

            {/* Blown Fibre Insulation */}
            <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-2xl p-4 sm:p-6 text-center shadow-lg border border-green-200 hover:shadow-xl transition-shadow duration-300">
              <div className="w-12 h-12 sm:w-16 sm:h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
                <Wrench className="h-6 w-6 sm:h-8 sm:w-8 text-white" />
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2 sm:mb-3 break-words">Blown Fibre Insulation</h3>
              <p className="text-sm sm:text-base text-gray-700 break-words">Ideal for irregularly shaped or hard-to-access lofts.</p>
            </div>

            {/* Rigid Board Insulation */}
            <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-2xl p-4 sm:p-6 text-center shadow-lg border border-purple-200 hover:shadow-xl transition-shadow duration-300">
              <div className="w-12 h-12 sm:w-16 sm:h-16 bg-purple-500 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
                <Package className="h-6 w-6 sm:h-8 sm:w-8 text-white" />
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2 sm:mb-3 break-words">Rigid Board Insulation</h3>
              <p className="text-sm sm:text-base text-gray-700 break-words">Best for loft conversions and storage areas.</p>
            </div>

            {/* Removal & Replacement */}
            <div className="bg-gradient-to-br from-orange-50 to-orange-100 rounded-2xl p-4 sm:p-6 text-center shadow-lg border border-orange-200 hover:shadow-xl transition-shadow duration-300">
              <div className="w-12 h-12 sm:w-16 sm:h-16 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
                <Wrench className="h-6 w-6 sm:h-8 sm:w-8 text-white" />
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2 sm:mb-3 break-words">Removal & Replacement</h3>
              <p className="text-sm sm:text-base text-gray-700 break-words">Safe and clean removal of old or contaminated insulation before fitting new materials.</p>
            </div>
          </div>
        </section>

        {/* How We Work - 4-Step Process */}
        <section className="mb-16">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4 break-words">How We Work – Simple 4-Step Process</h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto break-words">
              From initial survey to final installation, we make the process simple and stress-free
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {[
              {
                step: '1',
                title: 'Free Home Survey',
                description: 'Our experts assess your loft space',
                icon: Home,
                color: 'blue'
              },
              {
                step: '2',
                title: 'No-Obligation Quote',
                description: 'Clear, competitive pricing',
                icon: Quote,
                color: 'green'
              },
              {
                step: '3',
                title: 'Expert Installation',
                description: 'Fast, tidy, and fully compliant',
                icon: Wrench,
                color: 'purple'
              },
              {
                step: '4',
                title: 'Aftercare & Support',
                description: 'Ensuring your insulation lasts for years',
                icon: Shield,
                color: 'orange'
              }
            ].map((item, index) => {
              const IconComponent = item.icon;
              const colorClasses = {
                blue: {
                  bg: 'from-blue-50 to-blue-100 border-blue-200',
                  iconBg: 'bg-blue-500'
                },
                green: {
                  bg: 'from-green-50 to-green-100 border-green-200',
                  iconBg: 'bg-green-500'
                },
                purple: {
                  bg: 'from-purple-50 to-purple-100 border-purple-200',
                  iconBg: 'bg-purple-500'
                },
                orange: {
                  bg: 'from-orange-50 to-orange-100 border-orange-200',
                  iconBg: 'bg-orange-500'
                }
              };
              
              return (
                <div key={index} className={`bg-gradient-to-br ${colorClasses[item.color as keyof typeof colorClasses].bg} rounded-2xl p-4 sm:p-6 text-center shadow-lg border hover:shadow-xl transition-shadow duration-300`}>
                  <div className={`w-12 h-12 sm:w-16 sm:h-16 ${colorClasses[item.color as keyof typeof colorClasses].iconBg} rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4`}>
                    <IconComponent className="h-6 w-6 sm:h-8 sm:w-8 text-white" />
                  </div>
                  <div className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">{item.step}</div>
                  <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2 sm:mb-3 break-words">{item.title}</h3>
                  <p className="text-sm sm:text-base text-gray-700 break-words">{item.description}</p>
                </div>
              );
            })}
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="mb-16">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4 break-words">Why Choose Us for Loft Insulation in London?</h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto break-words">
              Trusted by thousands of London homeowners and landlords
            </p>
          </div>
          
          <div className="bg-gradient-to-r from-blue-50 to-indigo-50 border-2 border-blue-200 rounded-2xl p-4 sm:p-6 lg:p-8 shadow-lg">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
              {[
                { icon: Clock, title: '10+ years of insulation experience', color: 'blue' },
                { icon: Shield, title: 'Fully qualified and insured installers', color: 'green' },
                { icon: Award, title: 'High-performance, eco-friendly materials', color: 'purple' },
                { icon: Star, title: 'Competitive prices with flexible payment', color: 'orange' },
                { icon: Users, title: 'Thousands of satisfied customers', color: 'pink' }
              ].map((item, index) => {
                const IconComponent = item.icon;
                const colorClasses = {
                  blue: 'text-blue-600 bg-blue-100',
                  green: 'text-green-600 bg-green-100',
                  purple: 'text-purple-600 bg-purple-100',
                  orange: 'text-orange-600 bg-orange-100',
                  pink: 'text-pink-600 bg-pink-100'
                };
                
                return (
                  <div key={index} className="bg-white rounded-xl p-4 sm:p-6 shadow-md border border-gray-100">
                    <div className="flex items-start space-x-3 sm:space-x-4">
                      <div className={`w-8 h-8 sm:w-10 sm:h-10 ${colorClasses[item.color as keyof typeof colorClasses]} rounded-full flex items-center justify-center flex-shrink-0 mt-1`}>
                        <IconComponent className="h-4 w-4 sm:h-5 sm:w-5" />
                      </div>
                      <div className="min-w-0 flex-1">
                        <h3 className="font-semibold text-gray-900 mb-1 sm:mb-2 text-sm sm:text-base break-words">{item.title}</h3>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Areas We Cover */}
        <section className="mb-16">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4 break-words">Areas We Cover in London</h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto break-words">
              We serve all London boroughs with professional insulation services
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {[
              {
                area: 'Central London',
                boroughs: ['Westminster', 'Camden', 'Islington'],
                color: 'blue'
              },
              {
                area: 'North London',
                boroughs: ['Barnet', 'Enfield', 'Haringey'],
                color: 'green'
              },
              {
                area: 'South London',
                boroughs: ['Croydon', 'Lambeth', 'Southwark'],
                color: 'purple'
              },
              {
                area: 'East London',
                boroughs: ['Newham', 'Tower Hamlets', 'Barking & Dagenham'],
                color: 'orange'
              },
              {
                area: 'West London',
                boroughs: ['Hounslow', 'Ealing', 'Kensington & Chelsea'],
                color: 'pink'
              }
            ].map((region, index) => {
              const colorClasses = {
                blue: 'from-blue-50 to-blue-100 border-blue-200',
                green: 'from-green-50 to-green-100 border-green-200',
                purple: 'from-purple-50 to-purple-100 border-purple-200',
                orange: 'from-orange-50 to-orange-100 border-orange-200',
                pink: 'from-pink-50 to-pink-100 border-pink-200'
              };
              
              return (
                <div key={index} className={`bg-gradient-to-br ${colorClasses[region.color as keyof typeof colorClasses]} rounded-2xl p-4 sm:p-6 shadow-lg border`}>
                  <div className="flex items-center mb-3 sm:mb-4">
                    <MapPin className="h-5 w-5 sm:h-6 sm:w-6 text-gray-600 mr-2" />
                    <h3 className="text-lg sm:text-xl font-bold text-gray-900 break-words">{region.area}</h3>
                  </div>
                  <div className="space-y-1 sm:space-y-2">
                    {region.boroughs.map((borough, boroughIndex) => (
                      <div key={boroughIndex} className="flex items-center">
                        <div className="w-1.5 h-1.5 bg-gray-600 rounded-full mr-2 flex-shrink-0"></div>
                        <span className="text-sm sm:text-base text-gray-700 break-words">{borough}</span>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* CTA Section */}
        <section className="mb-16">
          <div className="bg-gradient-to-r from-primary-blue to-secondary-blue rounded-2xl p-3 sm:p-4 lg:p-6 text-center text-white shadow-2xl">
            <div className="max-w-2xl mx-auto">
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-3 sm:mb-4 break-words">Get Your Free Loft Insulation Quote in London</h2>
              <p className="text-sm sm:text-base md:text-lg text-blue-100 mb-4 sm:mb-6 break-words">
                Stop losing heat and money – upgrade your loft insulation today. Call LIS UK or complete our online enquiry form to arrange your free survey and no-obligation quote.
              </p>
              
              <div className="bg-white rounded-xl p-3 sm:p-4 lg:p-6 shadow-xl">
                <h3 className="text-base sm:text-lg lg:text-xl font-bold text-gray-900 mb-3 sm:mb-4 break-words">Contact Us Today</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-3 sm:gap-4">
                  <div className="text-center">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-primary-blue rounded-full flex items-center justify-center mx-auto mb-2 sm:mb-3">
                      <Phone className="h-5 w-5 sm:h-6 sm:w-6 text-white" />
                    </div>
                    <h4 className="text-xs sm:text-sm lg:text-base font-semibold text-gray-900 mb-1 break-words">Call Us</h4>
                    <p className="text-primary-blue font-bold text-sm sm:text-base lg:text-lg break-words">+44 XXX XXX XXXX</p>
                    <p className="text-gray-600 text-xs mt-1 break-words">Available 24/7</p>
                  </div>
                  
                  <div className="text-center">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-2 sm:mb-3">
                      <Mail className="h-5 w-5 sm:h-6 sm:w-6 text-white" />
                    </div>
                    <h4 className="text-xs sm:text-sm lg:text-base font-semibold text-gray-900 mb-1 break-words">Email Us</h4>
                    <p className="text-primary-blue font-bold text-xs sm:text-sm lg:text-base break-words">contact@lisuk.co.uk</p>
                    <p className="text-gray-600 text-xs mt-1 break-words">Quick response guaranteed</p>
                  </div>
                  
                  <div className="text-center">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-purple-500 rounded-full flex items-center justify-center mx-auto mb-2 sm:mb-3">
                      <Quote className="h-5 w-5 sm:h-6 sm:w-6 text-white" />
                    </div>
                    <h4 className="text-xs sm:text-sm lg:text-base font-semibold text-gray-900 mb-1 break-words">Get Quote</h4>
                    <p className="text-primary-blue font-bold text-xs sm:text-sm lg:text-base break-words">Online Form</p>
                    <p className="text-gray-600 text-xs mt-1 break-words">Free & no obligation</p>
                  </div>
                </div>
                
                <div className="mt-4 sm:mt-6 pt-3 sm:pt-4 border-t border-gray-200">
                  <div className="flex flex-col sm:flex-row gap-2 sm:gap-3 justify-center">
                    <Link
                      href="/quote"
                      className="inline-flex items-center justify-center px-4 sm:px-6 py-2 sm:py-3 bg-primary-blue text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors duration-200 shadow-lg text-xs sm:text-sm"
                    >
                      <Quote className="h-3 w-3 sm:h-4 sm:w-4 mr-1 sm:mr-2" />
                      Get Free Quote Now
                    </Link>
                    <Link
                      href="tel:+44123456789"
                      className="inline-flex items-center justify-center px-4 sm:px-6 py-2 sm:py-3 border-2 border-primary-blue text-primary-blue font-semibold rounded-lg hover:bg-primary-blue hover:text-white transition-colors duration-200 text-xs sm:text-sm"
                    >
                      <Phone className="h-3 w-3 sm:h-4 sm:w-4 mr-1 sm:mr-2" />
                      Call Now
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      
      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebSite",
            "url": "https://www.loft-insulation-services-uk.com/",
            "name": "Free Loft Insulation in London",
            "potentialAction": {
              "@type": "SearchAction",
              "target": {
                "@type": "EntryPoint",
                "urlTemplate": "https://www.loft-insulation-services-uk.com/blog/free-loft-insulation-in-london/search?q={search_term_string}"
              },
              "query-input": "required name=search_term_string"
            }
          })
        }}
      />
      
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            "name": "Free Loft Insulation in London | LIS UK",
            "url": "https://www.loft-insulation-services-uk.com/blog/free-loft-insulation-in-london",
            "description": "Professional loft insulation installers in London. Free installation available for qualifying households under the latest UK grant schemes.",
            "inLanguage": "en-GB",
            "publisher": {
              "@type": "Organization",
              "name": "LIS UK",
              "logo": {
                "@type": "ImageObject",
                "url": "https://www.loft-insulation-services-uk.com/_next/image?url=%2FLOFT%20INSULATION.png&w=640&q=75"
              }
            },
            "mainEntity": {
              "@type": "Service",
              "serviceType": "Loft Insulation",
              "provider": {
                "@type": "Organization",
                "name": "LIS UK"
              },
              "areaServed": {
                "@type": "Country",
                "name": "United Kingdom"
              },
              "description": "London homeowners can now qualify for free loft insulation through eco-friendly government schemes. Check if you're eligible today."
            }
          })
        }}
      />
      
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Product",
            "name": "Free Loft Insulation in London",
            "image": "https://www.loftinsulationservicesuk.com/images/free-loft-insulation.jpg",
            "description": "Free loft insulation installation service for London homeowners, helping reduce energy bills and improve home warmth through UK government grants.",
            "brand": {
              "@type": "Brand",
              "name": "Free Loft Insulation in London"
            },
            "aggregateRating": {
              "@type": "AggregateRating",
              "ratingValue": "4.9",
              "bestRating": "5",
              "worstRating": "1",
              "ratingCount": "130",
              "reviewCount": "55"
            }
          })
        }}
      />
      
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ProfessionalService",
            "name": "Free Loft Insulation in London",
            "image": "https://www.loft-insulation-services-uk.com/_next/image?url=%2FLOFT%20INSULATION.png&w=640&q=75",
            "@id": "home",
            "url": "https://www.loft-insulation-services-uk.com/blog/free-loft-insulation-in-london",
            "telephone": "+44-800-123-4567",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "123 High Street",
              "addressLocality": "London",
              "postalCode": "SW1A 1AA",
              "addressCountry": "GB"
            },
            "geo": {
              "@type": "GeoCoordinates",
              "latitude": "51.5072",
              "longitude": "-0.1276"
            },
            "openingHoursSpecification": {
              "@type": "OpeningHoursSpecification",
              "dayOfWeek": [
                "Monday",
                "Tuesday",
                "Wednesday",
                "Thursday",
                "Friday"
              ],
              "opens": "09:00",
              "closes": "18:00"
            },
            "sameAs": [
              "https://www.facebook.com/L4RGINDIA/",
              "https://twitter.com/L4rgindia",
              "https://www.instagram.com/l4rgllc/",
              "https://www.youtube.com/c/L4RGINDIA",
              "https://in.linkedin.com/company/l4rgindia",
              "https://in.pinterest.com/L4RGINDIA/",
              "https://l4rgcompany.quora.com/",
              "https://www.loft-insulation-services-uk.com/blog/free-loft-insulation-in-london"
            ]
          })
        }}
      />
      
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "http://schema.org",
            "@id": "#product",
            "@type": "Product",
            "name": "Free Loft Insulation in London",
            "description": "Get free loft insulation in London for eligible homeowners. Improve your home's energy efficiency, save on heating bills, and stay warm all year round.",
            "url": "https://www.loft-insulation-services-uk.com/blog/free-loft-insulation-in-london",
            "aggregateRating": {
              "@type": "AggregateRating",
              "ratingValue": "4.9",
              "reviewCount": "806541"
            },
            "audience": {
              "@type": "audience",
              "description": "806541 Reviews",
              "audienceType": "UK Homeowners aged 60-80"
            }
          })
        }}
      />
      
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Review",
            "name": "Free Loft Insulation in London",
            "url": "https://www.loft-insulation-services-uk.com/blog/free-loft-insulation-in-london",
            "image": "https://www.loft-insulation-services-uk.com/_next/image?url=%2FLOFT%20INSULATION.png&w=640&q=75",
            "author": "Jack",
            "reviewBody": "LIS UK provided a professional and efficient loft insulation service in London. The team was friendly, quick, and the quality of work exceeded expectations. My home is noticeably warmer, and my heating costs have gone down significantly.",
            "reviewRating": {
              "@type": "Rating",
              "ratingValue": "4.9"
            },
            "itemReviewed": {
              "@type": "LocalBusiness",
              "name": "Free Loft Insulation in London",
              "priceRange": "200",
              "image": "https://www.loftinsulationservicesuk.com/images/free-loft-insulation.jpg",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "123 High Street",
                "addressLocality": "London",
                "postalCode": "SW1A 1AA",
                "addressCountry": "GB"
              }
            }
          })
        }}
      />
    </div>
  );
}
