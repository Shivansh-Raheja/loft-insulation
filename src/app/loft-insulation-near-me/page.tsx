import { CheckCircle, Users, Shield, Award, Phone, Quote, Mail, Globe, MapPin, Home, Wrench, Package, Layers, Star, Clock, Building, Target, Database, FileText, TrendingUp, Handshake, Heart, Thermometer, AlertTriangle, BookOpen, UserCheck } from 'lucide-react';
import Link from 'next/link';

export const metadata = {
  title: 'Loft Insulation Near Me – Affordable & Energy-Efficient Solutions',
  description: 'Looking for loft insulation near you? Our certified installers provide fast, affordable, and energy-saving insulation to keep your home warm and bills low.',
  keywords: 'loft insulation near me, loft insulation installers near me, loft insulation company near me, local loft insulation services, best loft insulation installers UK, affordable loft insulation near me, loft insulation experts near me, certified loft insulation installers, professional loft insulation near me, home loft insulation services near me',
  openGraph: {
    siteName: 'Loft Insulation Near Me',
    url: 'https://www.loft-insulation-services-uk.com/loft-insulation-near-me',
    title: 'Find the Best Loft Insulation Near Me – Save on Energy Bills',
    description: 'Get expert loft insulation near me services. Improve energy efficiency, reduce heating costs, and enjoy a warmer home with our trusted local team.',
    images: [
      {
        url: 'https://www.loft-insulation-services-uk.com/_next/image?url=%2FLOFT%20INSULATION.png&w=640&q=75',
        width: 1200,
        height: 630,
        alt: 'Loft Insulation Near Me',
      },
    ],
    locale: 'en_GB',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Professional Loft Insulation Services Near Me | Free Quotes',
    description: 'Find professional loft insulation near you. Free surveys, fast installation, and high-quality materials to boost comfort and save energy.',
    images: ['https://www.loft-insulation-services-uk.com/_next/image?url=%2FLOFT%20INSULATION.png&w=640&q=75'],
    creator: '@l4rgindia',
  },
  alternates: {
    canonical: 'https://www.loft-insulation-services-uk.com/loft-insulation-near-me',
    languages: {
      'en-US': 'https://www.loft-insulation-services-uk.com/loft-insulation-near-me',
      'en-GB': 'https://www.loft-insulation-services-uk.com/loft-insulation-near-me',
      'en': 'https://www.loft-insulation-services-uk.com/loft-insulation-near-me',
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

export default function LoftInsulationNearMe() {
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
                  Free Loft Insulation Near Me
                  <span className="text-primary-blue block break-words">About LIS UK – Leading Loft Insulation Specialists</span>
                </h1>
                <p className="text-base sm:text-lg text-gray-600 leading-relaxed break-words">
                  LIS UK is a trusted provider of loft insulation solutions across the United Kingdom. With over 5,000 certified installers operating in the UK, Canada, USA, Germany, and India, our global reach ensures local expertise.
                </p>
              </div>

              <div className="space-y-3 lg:space-y-4">
                <p className="text-sm sm:text-base text-gray-700 leading-relaxed break-words">
                  We are committed to helping homeowners and tenants access free loft insulation through government-backed energy efficiency schemes such as ECO4, GBIS, and PAS 2035.
                </p>

                <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                  <Link
                    href="/quote"
                    className="inline-flex items-center justify-center px-6 sm:px-8 py-3 sm:py-4 bg-primary-blue text-white text-base sm:text-lg font-semibold rounded-lg hover:bg-blue-700 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
                  >
                    <Quote className="h-4 w-4 sm:h-5 sm:w-5 mr-2" />
                    Find Local Installers
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
                  <div className="text-xs sm:text-sm text-gray-600">Energy Savings</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl sm:text-3xl font-bold text-primary-blue">5</div>
                  <div className="text-xs sm:text-sm text-gray-600">Countries</div>
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
                        <MapPin className="h-6 w-6 sm:h-8 sm:w-8" />
                      </div>
                      <p className="text-base sm:text-lg font-semibold group-hover:scale-105 transition-transform duration-300">Local Services</p>
                      <p className="text-xs sm:text-sm opacity-90 group-hover:opacity-100 transition-opacity duration-300">Near You</p>
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
        {/* What is Loft Insulation */}
        <section className="mb-16">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4 break-words">What is Loft Insulation?</h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto break-words">
              Understanding the basics of loft insulation and its benefits
            </p>
          </div>
          
          <div className="bg-gradient-to-r from-blue-50 to-indigo-50 border-2 border-blue-200 rounded-2xl p-4 sm:p-6 lg:p-8 shadow-lg">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 items-center">
              <div>
                <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 mb-4 break-words">How Loft Insulation Works</h3>
                <p className="text-sm sm:text-base lg:text-lg text-gray-700 leading-relaxed mb-4 sm:mb-6 break-words">
                  Loft insulation involves placing insulating material between and over the joists in your loft or attic space. This layer helps reduce the amount of heat that escapes from your roof, ensuring your home stays warmer in winter and cooler in summer.
                </p>
                <div className="space-y-2 sm:space-y-3">
                  {[
                    'Reduces heat loss through the roof by up to 25%',
                    'Keeps your home warmer in winter and cooler in summer',
                    'Lowers energy bills and reduces carbon footprint',
                    'Improves overall home comfort and energy efficiency'
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
                  <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Home className="h-8 w-8 text-white" />
                  </div>
                  <h4 className="text-lg sm:text-xl font-bold text-gray-900 mb-2 break-words">Energy Efficiency</h4>
                  <p className="text-sm sm:text-base text-gray-600 break-words">Transform your home&apos;s energy performance</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Technical Terms Explained */}
        <section className="mb-16">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4 break-words">Technical Terms Explained</h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto break-words">
              Understanding the key terms and schemes related to loft insulation
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {[
              {
                term: 'ECO4',
                description: 'The latest phase of the government scheme that obligates energy suppliers to deliver energy-saving measures to UK homes.',
                icon: Shield,
                color: 'blue'
              },
              {
                term: 'GBIS',
                description: 'A secondary support scheme targeting middle-income households and more properties.',
                icon: Award,
                color: 'green'
              },
              {
                term: 'PAS 2035',
                description: 'A government standard that outlines the whole-house approach to retrofit measures, ensuring safety, quality, and compliance.',
                icon: FileText,
                color: 'purple'
              },
              {
                term: 'U-Value',
                description: 'Measures how effective insulation is; the lower the U-value, the better the insulation.',
                icon: Thermometer,
                color: 'orange'
              },
              {
                term: 'R-Value',
                description: 'Indicates the thermal resistance of the insulation material.',
                icon: Layers,
                color: 'pink'
              },
              {
                term: 'EPC Rating',
                description: 'A measure of a property\'s energy efficiency. Most homes with EPC ratings D–G are eligible for insulation grants.',
                icon: Star,
                color: 'indigo'
              }
            ].map((item, index) => {
              const IconComponent = item.icon;
              const colorClasses = {
                blue: 'from-blue-50 to-blue-100 border-blue-200 bg-blue-500',
                green: 'from-green-50 to-green-100 border-green-200 bg-green-500',
                purple: 'from-purple-50 to-purple-100 border-purple-200 bg-purple-500',
                orange: 'from-orange-50 to-orange-100 border-orange-200 bg-orange-500',
                pink: 'from-pink-50 to-pink-100 border-pink-200 bg-pink-500',
                indigo: 'from-indigo-50 to-indigo-100 border-indigo-200 bg-indigo-500'
              };
              
              return (
                <div key={index} className={`bg-gradient-to-br ${colorClasses[item.color as keyof typeof colorClasses].split(' ')[0]} ${colorClasses[item.color as keyof typeof colorClasses].split(' ')[1]} rounded-2xl p-4 sm:p-6 shadow-lg border ${colorClasses[item.color as keyof typeof colorClasses].split(' ')[2]} hover:shadow-xl transition-shadow duration-300`}>
                  <div className="flex items-start space-x-3 sm:space-x-4">
                    <div className={`w-10 h-10 sm:w-12 sm:h-12 ${colorClasses[item.color as keyof typeof colorClasses].split(' ')[3]} rounded-full flex items-center justify-center flex-shrink-0 mt-1`}>
                      <IconComponent className="h-5 w-5 sm:h-6 sm:w-6 text-white" />
                    </div>
                    <div className="min-w-0 flex-1">
                      <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2 sm:mb-3 break-words">{item.term}</h3>
                      <p className="text-sm sm:text-base text-gray-700 break-words">{item.description}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* Customer Challenges in the UK */}
        <section className="mb-16">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4 break-words">Customer Challenges in the UK</h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto break-words">
              Common challenges UK homeowners face and how LIS helps solve them
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
            {[
              {
                challenge: 'Rising Energy Bills',
                description: 'UK households face increasing utility costs. Poor insulation leads to heat loss, especially through the roof, causing energy bills to skyrocket.',
                solution: 'We provide high-quality insulation that can cut heating bills by up to 25%, significantly reducing energy usage.',
                icon: AlertTriangle,
                color: 'red'
              },
              {
                challenge: 'Lack of Awareness About Government Schemes',
                description: 'Many eligible households are unaware they qualify for free loft insulation.',
                solution: 'Our advisors guide homeowners through the application process, including checking eligibility, submitting documents, and scheduling free surveys.',
                icon: Users,
                color: 'blue'
              },
              {
                challenge: 'Complex Regulations',
                description: 'Regulatory frameworks like PAS 2035 can be confusing for property owners.',
                solution: 'We ensure full compliance with PAS 2035, offering expert advice and handling all documentation.',
                icon: BookOpen,
                color: 'purple'
              },
              {
                challenge: 'Access to Certified Installers',
                description: 'Finding reliable, certified tradespeople for loft insulation is often a challenge.',
                solution: 'With 5,000+ certified professionals, we ensure that only qualified experts carry out the installation in accordance with British standards.',
                icon: Wrench,
                color: 'green'
              },
              {
                challenge: 'Elderly & Vulnerable Homeowners',
                description: 'Senior citizens may not have the means or technical know-how to apply for help.',
                solution: 'We prioritise support for individuals aged 60+ by simplifying the process and offering personalised assistance.',
                icon: Heart,
                color: 'pink'
              }
            ].map((item, index) => {
              const IconComponent = item.icon;
              const colorClasses = {
                red: 'from-red-50 to-red-100 border-red-200 bg-red-500',
                blue: 'from-blue-50 to-blue-100 border-blue-200 bg-blue-500',
                purple: 'from-purple-50 to-purple-100 border-purple-200 bg-purple-500',
                green: 'from-green-50 to-green-100 border-green-200 bg-green-500',
                pink: 'from-pink-50 to-pink-100 border-pink-200 bg-pink-500'
              };
              
              return (
                <div key={index} className={`bg-gradient-to-br ${colorClasses[item.color as keyof typeof colorClasses].split(' ')[0]} ${colorClasses[item.color as keyof typeof colorClasses].split(' ')[1]} rounded-xl p-3 sm:p-4 lg:p-6 shadow-lg border ${colorClasses[item.color as keyof typeof colorClasses].split(' ')[2]} hover:shadow-xl transition-shadow duration-300`}>
                  <div className="flex items-start space-x-3 mb-3 sm:mb-4">
                    <div className={`w-8 h-8 sm:w-10 sm:h-10 ${colorClasses[item.color as keyof typeof colorClasses].split(' ')[3]} rounded-full flex items-center justify-center flex-shrink-0 mt-1`}>
                      <IconComponent className="h-4 w-4 sm:h-5 sm:w-5 text-white" />
                    </div>
                    <div className="min-w-0 flex-1">
                      <h3 className="text-base sm:text-lg font-bold text-gray-900 mb-1 sm:mb-2 break-words">{item.challenge}</h3>
                      <p className="text-xs sm:text-sm text-gray-700 break-words">{item.description}</p>
                    </div>
                  </div>
                  
                  <div className="bg-white rounded-lg p-3 sm:p-4 border border-gray-200">
                    <div className="flex items-start space-x-2 sm:space-x-3">
                      <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-1 text-xs sm:text-sm break-words">How LIS Helps:</h4>
                        <p className="text-xs sm:text-sm text-gray-700 break-words">{item.solution}</p>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* Eligibility for Free Loft Insulation */}
        <section className="mb-16">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4 break-words">Eligibility for Free Loft Insulation</h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto break-words">
              Check if you qualify for free loft insulation installation
            </p>
          </div>
          
          <div className="bg-gradient-to-r from-green-50 to-emerald-50 border-2 border-green-200 rounded-2xl p-4 sm:p-6 lg:p-8 shadow-lg">
            <div className="text-center mb-6 sm:mb-8">
              <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <UserCheck className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 mb-4 break-words">You may qualify for a free loft insulation installation if:</h3>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
              {[
                'You are a homeowner or tenant in the UK',
                'You or someone in your household receives government benefits',
                'Your property has an EPC rating between D and G',
                'You are aged 60+ or have a health condition exacerbated by cold housing'
              ].map((criteria, index) => (
                <div key={index} className="bg-white rounded-xl p-4 sm:p-6 shadow-md border border-green-100">
                  <div className="flex items-start space-x-3 sm:space-x-4">
                    <div className="w-6 h-6 sm:w-8 sm:h-8 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <CheckCircle className="h-4 w-4 sm:h-5 sm:w-5 text-green-600" />
                    </div>
                    <div className="min-w-0 flex-1">
                      <p className="text-sm sm:text-base text-gray-700 break-words">{criteria}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="mt-6 sm:mt-8 bg-white rounded-xl p-4 sm:p-6 border-2 border-green-200">
              <p className="text-center text-sm sm:text-base lg:text-lg text-gray-700 break-words">
                <strong className="text-green-600">We also work with landlords</strong> to improve rental properties under regulatory requirements.
              </p>
            </div>
          </div>
        </section>

        {/* Our Loft Insulation Process */}
        <section className="mb-16">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4 break-words">Our Loft Insulation Process</h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto break-words">
              A simple 5-step process from initial contact to post-installation support
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 sm:gap-6">
            {[
              {
                step: '1',
                title: 'Eligibility Assessment',
                description: 'Contact LIS UK to find out if you qualify. Our team will ask basic questions and schedule an initial consultation.',
                icon: UserCheck,
                color: 'blue'
              },
              {
                step: '2',
                title: 'Free Home Survey',
                description: 'A certified installer will visit your home to assess the loft, measure thermal losses, and confirm suitability.',
                icon: Home,
                color: 'green'
              },
              {
                step: '3',
                title: 'Application Submission',
                description: 'We handle the full submission process with energy providers and scheme administrators, including all PAS 2035 documentation.',
                icon: FileText,
                color: 'purple'
              },
              {
                step: '4',
                title: 'Professional Installation',
                description: 'Once approved, our local technician installs loft insulation with minimal disruption. All materials used are compliant with UK standards and schemes.',
                icon: Wrench,
                color: 'orange'
              },
              {
                step: '5',
                title: 'Post-Installation Check & Support',
                description: 'After completion, our quality team ensures compliance and customer satisfaction. We also provide ongoing support for any concerns or adjustments.',
                icon: Shield,
                color: 'pink'
              }
            ].map((item, index) => {
              const IconComponent = item.icon;
              const colorClasses = {
                blue: 'from-blue-50 to-blue-100 border-blue-200 bg-blue-500',
                green: 'from-green-50 to-green-100 border-green-200 bg-green-500',
                purple: 'from-purple-50 to-purple-100 border-purple-200 bg-purple-500',
                orange: 'from-orange-50 to-orange-100 border-orange-200 bg-orange-500',
                pink: 'from-pink-50 to-pink-100 border-pink-200 bg-pink-500'
              };
              
              return (
                <div key={index} className={`bg-gradient-to-br ${colorClasses[item.color as keyof typeof colorClasses].split(' ')[0]} ${colorClasses[item.color as keyof typeof colorClasses].split(' ')[1]} rounded-xl p-3 sm:p-4 text-center shadow-lg border ${colorClasses[item.color as keyof typeof colorClasses].split(' ')[2]} hover:shadow-xl transition-shadow duration-300`}>
                  <div className={`w-10 h-10 sm:w-12 sm:h-12 ${colorClasses[item.color as keyof typeof colorClasses].split(' ')[3]} rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4`}>
                    <IconComponent className="h-5 w-5 sm:h-6 sm:w-6 text-white" />
                  </div>
                  <div className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">{item.step}</div>
                  <h3 className="text-sm sm:text-base font-bold text-gray-900 mb-2 sm:mb-3 break-words">{item.title}</h3>
                  <p className="text-xs sm:text-sm text-gray-700 break-words">{item.description}</p>
                </div>
              );
            })}
          </div>
        </section>

        {/* Benefits of Choosing LIS UK */}
        <section className="mb-16">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4 break-words">Benefits of Choosing LIS UK</h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto break-words">
              Why thousands of UK homeowners trust LIS UK for their insulation needs
            </p>
          </div>
          
          <div className="bg-gradient-to-r from-blue-50 to-indigo-50 border-2 border-blue-200 rounded-2xl p-4 sm:p-6 lg:p-8 shadow-lg">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
              {[
                { icon: Shield, title: 'Expertise in Government Schemes', description: 'We specialise in ECO4 and GBIS applications.' },
                { icon: Award, title: 'Compliance Guarantee', description: 'Every project adheres to PAS 2035 guidelines.' },
                { icon: Star, title: 'High-Quality Materials', description: 'All insulation materials are sustainable and energy-efficient.' },
                { icon: Globe, title: 'Global Reach, Local Service', description: 'Despite our international presence, we provide personalised service in every UK city.' },
                { icon: Heart, title: 'Senior-Citizen Friendly', description: 'Special support available for people aged 60 and above.' }
              ].map((benefit, index) => {
                const IconComponent = benefit.icon;
                return (
                  <div key={index} className="bg-white rounded-xl p-4 sm:p-6 shadow-md border border-blue-100">
                    <div className="flex items-start space-x-3 sm:space-x-4">
                      <div className="w-8 h-8 sm:w-10 sm:h-10 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                        <IconComponent className="h-4 w-4 sm:h-5 sm:w-5 text-white" />
                      </div>
                      <div className="min-w-0 flex-1">
                        <h3 className="font-semibold text-gray-900 mb-1 sm:mb-2 text-sm sm:text-base break-words">{benefit.title}</h3>
                        <p className="text-xs sm:text-sm text-gray-700 break-words">{benefit.description}</p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Common UK Cities We Serve */}
        <section className="mb-16">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4 break-words">Common UK Cities We Serve</h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto break-words">
              LIS UK has active projects across major UK cities and rural communities
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3 sm:gap-4">
            {[
              'London', 'Manchester', 'Birmingham', 'Glasgow', 'Leeds',
              'Liverpool', 'Sheffield', 'Bristol', 'Newcastle', 'Cardiff'
            ].map((city, index) => (
              <div key={index} className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl p-3 sm:p-4 text-center shadow-md border border-gray-200 hover:shadow-lg transition-shadow duration-300">
                <div className="flex items-center justify-center mb-2">
                  <MapPin className="h-4 w-4 text-primary-blue mr-2" />
                </div>
                <h3 className="text-sm sm:text-base font-semibold text-gray-900 break-words">{city}</h3>
              </div>
            ))}
          </div>
          
          <div className="mt-6 sm:mt-8 text-center">
            <p className="text-sm sm:text-base text-gray-600 break-words">
              We also support rural communities and underserved areas.
            </p>
          </div>
        </section>

        {/* FAQs */}
        <section className="mb-16">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4 break-words">FAQs – Free Loft Insulation Near Me</h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto break-words">
              Common questions about free loft insulation services
            </p>
          </div>
          
          <div className="space-y-4 sm:space-y-6">
            {[
              {
                question: 'Is this really free?',
                answer: 'Yes, if you meet the eligibility criteria under ECO4 or GBIS, the entire cost is covered by the government.'
              },
              {
                question: 'How long does installation take?',
                answer: 'Most loft insulation jobs take 2–4 hours to complete.'
              },
              {
                question: 'Will it disrupt my daily routine?',
                answer: 'Minimal disruption. We work efficiently and cleanly.'
              },
              {
                question: 'What if I\'m not eligible?',
                answer: 'We\'ll provide a detailed report and suggest other cost-saving home improvement options.'
              },
              {
                question: 'Can landlords apply?',
                answer: 'Yes, we work with landlords to upgrade rental properties under legal requirements.'
              }
            ].map((faq, index) => (
              <div key={index} className="bg-white rounded-xl p-4 sm:p-6 shadow-lg border border-gray-200">
                <div className="flex items-start space-x-3 sm:space-x-4">
                  <div className="w-6 h-6 sm:w-8 sm:h-8 bg-primary-blue rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white text-sm sm:text-base font-bold">Q</span>
                  </div>
                  <div className="min-w-0 flex-1">
                    <h3 className="text-sm sm:text-base lg:text-lg font-bold text-gray-900 mb-2 sm:mb-3 break-words">{faq.question}</h3>
                    <div className="flex items-start space-x-3">
                      <div className="w-6 h-6 sm:w-8 sm:h-8 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                        <span className="text-white text-sm sm:text-base font-bold">A</span>
                      </div>
                      <p className="text-xs sm:text-sm lg:text-base text-gray-700 break-words">{faq.answer}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Contact LIS UK */}
        <section className="mb-16">
          <div className="bg-gradient-to-r from-primary-blue to-secondary-blue rounded-2xl p-3 sm:p-4 lg:p-6 text-center text-white shadow-2xl">
            <div className="max-w-2xl mx-auto">
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-3 sm:mb-4 break-words">Contact LIS UK – Book Your Free Survey Today</h2>
              <p className="text-sm sm:text-base md:text-lg text-blue-100 mb-4 sm:mb-6 break-words">
                Looking for &quot;free loft insulation near me&quot;? LIS UK is your trusted partner in energy efficiency. Don&apos;t miss the chance to insulate your home at no cost. Contact us now to check eligibility and schedule a free survey.
              </p>
              
              <div className="bg-white rounded-xl p-3 sm:p-4 lg:p-6 shadow-xl">
                <h3 className="text-base sm:text-lg lg:text-xl font-bold text-gray-900 mb-3 sm:mb-4 break-words">Get in Touch</h3>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-3 sm:gap-4">
                  <div className="text-center">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-primary-blue rounded-full flex items-center justify-center mx-auto mb-2 sm:mb-3">
                      <Mail className="h-5 w-5 sm:h-6 sm:w-6 text-white" />
                    </div>
                    <h4 className="text-xs sm:text-sm font-semibold text-gray-900 mb-1 break-words">Email</h4>
                    <p className="text-primary-blue font-bold text-xs sm:text-sm break-words">support@lisuk.com</p>
                  </div>
                  
                  <div className="text-center">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-2 sm:mb-3">
                      <Phone className="h-5 w-5 sm:h-6 sm:w-6 text-white" />
                    </div>
                    <h4 className="text-xs sm:text-sm font-semibold text-gray-900 mb-1 break-words">Phone</h4>
                    <p className="text-primary-blue font-bold text-xs sm:text-sm break-words">0800-123-4567</p>
                  </div>
                  
                  <div className="text-center">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-purple-500 rounded-full flex items-center justify-center mx-auto mb-2 sm:mb-3">
                      <Globe className="h-5 w-5 sm:h-6 sm:w-6 text-white" />
                    </div>
                    <h4 className="text-xs sm:text-sm font-semibold text-gray-900 mb-1 break-words">Website</h4>
                    <p className="text-primary-blue font-bold text-xs sm:text-sm break-words">www.lisuk.com</p>
                  </div>
                </div>
                
                <div className="mt-4 sm:mt-6 pt-3 sm:pt-4 border-t border-gray-200">
                  <div className="flex flex-col sm:flex-row gap-2 sm:gap-3 justify-center">
                    <Link
                      href="/quote"
                      className="inline-flex items-center justify-center px-4 sm:px-6 py-2 sm:py-3 bg-primary-blue text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors duration-200 shadow-lg text-xs sm:text-sm"
                    >
                      <Quote className="h-3 w-3 sm:h-4 sm:w-4 mr-1 sm:mr-2" />
                      Book Free Survey
                    </Link>
                    <Link
                      href="tel:08001234567"
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
            "name": "Loft Insulation Near Me",
            "potentialAction": {
              "@type": "SearchAction",
              "target": {
                "@type": "EntryPoint",
                "urlTemplate": "https://www.loft-insulation-services-uk.com/loft-insulation-near-me/search?q={search_term_string}"
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
            "name": "Loft Insulation Near Me | LIS UK",
            "url": "https://www.loft-insulation-services-uk.com/loft-insulation-near-me",
            "description": "LIS UK provides professional and affordable loft insulation services near you. Certified installers, free surveys, and energy-saving solutions across the UK.",
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
              "description": "Find expert loft insulation services near you with LIS UK. We offer free surveys, certified installers, and cost-effective solutions to reduce heat loss and lower your energy bills across the UK."
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
            "name": "Loft Insulation Near Me",
            "image": "https://www.loftinsulationservicesuk.com/images/free-loft-insulation.jpg",
            "description": "Professional loft insulation service by LIS UK. Reduce heat loss, save on energy bills, and improve home comfort with certified UK installers.",
            "brand": {
              "@type": "Brand",
              "name": "Loft Insulation Near Me"
            },
            "aggregateRating": {
              "@type": "AggregateRating",
              "ratingValue": "4.9",
              "bestRating": "5",
              "worstRating": "1",
              "ratingCount": "148",
              "reviewCount": "49"
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
            "name": "Loft Insulation Near Me",
            "image": "https://www.loft-insulation-services-uk.com/_next/image?url=%2FLOFT%20INSULATION.png&w=640&q=75",
            "@id": "home",
            "url": "https://www.loft-insulation-services-uk.com/loft-insulation-near-me",
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
              "https://www.loft-insulation-services-uk.com/loft-insulation-near-me"
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
            "name": "Loft Insulation Near Me",
            "description": "LIS UK provides professional loft insulation services across the UK with certified installers. Improve energy efficiency, reduce heat loss, and lower energy bills.",
            "url": "https://www.loft-insulation-services-uk.com/loft-insulation-near-me",
            "aggregateRating": {
              "@type": "AggregateRating",
              "ratingValue": "4.9",
              "reviewCount": "8654"
            },
            "audience": {
              "@type": "audience",
              "description": "8654 Reviews",
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
            "name": "Loft Insulation Near Me",
            "url": "https://www.loft-insulation-services-uk.com/loft-insulation-near-me",
            "image": "https://www.loft-insulation-services-uk.com/_next/image?url=%2FLOFT%20INSULATION.png&w=640&q=75",
            "author": "Mike",
            "reviewBody": "LIS UK provided exceptional loft insulation services. The installers were professional, and my home feels much warmer while my heating bills have gone down.",
            "reviewRating": {
              "@type": "Rating",
              "ratingValue": "4.9"
            },
            "itemReviewed": {
              "@type": "LocalBusiness",
              "name": "Loft Insulation Near Me",
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
