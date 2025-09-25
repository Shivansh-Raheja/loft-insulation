import { CheckCircle, Users, Shield, Award, Phone, Quote, Mail, Globe } from 'lucide-react';
import Link from 'next/link';

export const metadata = {
  title: 'Free Loft Insulation UK, Save Energy & Cut Bills | LIS UK Experts',
  description: 'Check if you qualify for free loft insulation in the UK. Reduce heating costs, boost comfort, and improve energy efficiency with certified installers.',
  keywords: 'free loft insulation UK, loft insulation grants UK, government loft insulation scheme, ECO4 loft insulation UK, free home insulation UK, how to get free loft insulation in UK, loft insulation grant eligibility UK, free loft insulation for pensioners UK, government funded loft insulation UK, loft insulation scheme for low income households UK, free loft insulation London, loft insulation grants Manchester, free loft insulation Birmingham, loft insulation scheme Liverpool, free home insulation Scotland, loft insulation grants Wales, free loft insulation Northern Ireland, energy saving home insulation UK, loft insulation funding UK, free attic insulation UK, cavity wall and loft insulation grants, UK insulation scheme for elderly',
  openGraph: {
    siteName: 'Free Loft Insulation UK',
    url: 'https://www.loft-insulation-services-uk.com/free-loft-insulation-uk',
    title: 'UK Free Loft Insulation Scheme | Apply Today',
    description: 'Get free loft insulation under UK energy schemes. Quick eligibility checks, trusted installers, and guaranteed energy savings. Apply now.',
    images: [
      {
        url: 'https://www.loft-insulation-services-uk.com/_next/image?url=%2FLOFT%20INSULATION.png&w=640&q=75',
        width: 1200,
        height: 630,
        alt: 'Free Loft Insulation UK',
      },
    ],
    locale: 'en_GB',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Free Loft Insulation Grants UK | LIS UK Experts',
    description: 'LIS UK helps homeowners access free loft insulation grants. Save on bills, reduce carbon footprint, and enjoy warmer homes this winter.',
    images: ['https://www.loft-insulation-services-uk.com/_next/image?url=%2FLOFT%20INSULATION.png&w=640&q=75'],
    creator: '@l4rgindia',
  },
  alternates: {
    canonical: 'https://www.loft-insulation-services-uk.com/free-loft-insulation-uk',
    languages: {
      'en-US': 'https://www.loft-insulation-services-uk.com/free-loft-insulation-uk',
      'en-GB': 'https://www.loft-insulation-services-uk.com/free-loft-insulation-uk',
      'en': 'https://www.loft-insulation-services-uk.com/free-loft-insulation-uk',
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

export default function FreeLoftInsulationUK() {
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
                   Free Loft Insulation UK
                   <span className="text-primary-blue block break-words">Save Energy and Money with Professional Loft Insulation</span>
                   <span className="text-gray-700 text-xl sm:text-2xl block mt-2 break-words">Services Across the UK</span>
                 </h1>
                 <p className="text-base sm:text-lg text-gray-600 leading-relaxed break-words">
                   Loft insulation is one of the most effective ways to reduce heat loss, lower your energy bills, and make your home more comfortable.
                 </p>
              </div>

              <div className="space-y-3 lg:space-y-4">
                <p className="text-sm sm:text-base text-gray-700 leading-relaxed break-words">
                  At LIS UK, we specialise in delivering free loft insulation services to homeowners and tenants across the United Kingdom, in compliance with the latest government-backed energy efficiency schemes such as ECO4, GBIS, and PAS 2035.
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
                  <div className="text-2xl sm:text-3xl font-bold text-primary-blue">£500</div>
                  <div className="text-xs sm:text-sm text-gray-600">Annual Savings</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl sm:text-3xl font-bold text-primary-blue">25%</div>
                  <div className="text-xs sm:text-sm text-gray-600">Heat Loss Reduction</div>
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
                        <Shield className="h-6 w-6 sm:h-8 sm:w-8" />
                      </div>
                      <p className="text-base sm:text-lg font-semibold group-hover:scale-105 transition-transform duration-300">Free Government Scheme</p>
                      <p className="text-xs sm:text-sm opacity-90 group-hover:opacity-100 transition-opacity duration-300">ECO4 & GBIS Approved</p>
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
         {/* Introduction Section */}
         <section className="mb-16">
           <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-4 sm:p-6 lg:p-8 border border-blue-200">
             <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 items-center">
               <div>
                 <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 mb-4 break-words">Your Trusted Partner in Energy Efficiency</h2>
                 <p className="text-sm sm:text-base lg:text-lg text-gray-700 leading-relaxed mb-4 sm:mb-6 break-words">
                   Backed by a global network of 5000+ certified installers across the UK, Canada, USA, Germany, and India, LIS UK brings technical expertise and reliable service to every property we work with.
                 </p>
                 <p className="text-sm sm:text-base text-gray-700 leading-relaxed break-words">
                   Whether you&apos;re a homeowner, landlord, or a senior citizen eligible under government grants, we help you navigate the process smoothly and efficiently.
                 </p>
               </div>
               <div className="grid grid-cols-2 gap-3 sm:gap-4">
                 <div className="bg-white rounded-xl p-3 sm:p-4 text-center shadow-lg">
                   <div className="text-xl sm:text-2xl lg:text-3xl font-bold text-primary-blue mb-1 sm:mb-2">5000+</div>
                   <div className="text-xs sm:text-sm text-gray-600 break-words">Global Installers</div>
                 </div>
                 <div className="bg-white rounded-xl p-3 sm:p-4 text-center shadow-lg">
                   <div className="text-xl sm:text-2xl lg:text-3xl font-bold text-green-600 mb-1 sm:mb-2">5</div>
                   <div className="text-xs sm:text-sm text-gray-600 break-words">Countries</div>
                 </div>
                 <div className="bg-white rounded-xl p-3 sm:p-4 text-center shadow-lg">
                   <div className="text-xl sm:text-2xl lg:text-3xl font-bold text-purple-600 mb-1 sm:mb-2">20+</div>
                   <div className="text-xs sm:text-sm text-gray-600 break-words">Years Experience</div>
                 </div>
                 <div className="bg-white rounded-xl p-3 sm:p-4 text-center shadow-lg">
                   <div className="text-xl sm:text-2xl lg:text-3xl font-bold text-orange-600 mb-1 sm:mb-2">3000+</div>
                   <div className="text-xs sm:text-sm text-gray-600 break-words">Successful Installations</div>
                 </div>
               </div>
             </div>
           </div>
         </section>

         {/* Why Loft Insulation Matters */}
         <section className="mb-16">
           <div className="text-center mb-8 sm:mb-12">
             <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4 break-words">Why Loft Insulation Matters</h2>
             <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto break-words">
               Understanding the impact of proper insulation on your home, energy bills, and the environment
             </p>
           </div>
           
           <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 mb-8 sm:mb-12">
             {/* The Problem */}
             <div className="bg-gradient-to-br from-red-50 to-red-100 border-2 border-red-200 rounded-2xl p-4 sm:p-6 lg:p-8 shadow-lg">
               <div className="flex items-start sm:items-center mb-4 sm:mb-6">
                 <div className="w-10 h-10 sm:w-12 sm:h-12 bg-red-500 rounded-full flex items-center justify-center mr-3 sm:mr-4 flex-shrink-0">
                   <span className="text-white text-lg sm:text-xl font-bold">!</span>
                 </div>
                 <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-red-800 break-words">The Problem: Heat Loss and Rising Energy Bills</h3>
               </div>
               <div className="space-y-3 sm:space-y-4">
                 <p className="text-gray-700 text-sm sm:text-base lg:text-lg break-words">
                   Did you know that around <strong className="text-red-600">25% of the heat</strong> in an uninsulated home escapes through the roof?
                 </p>
                 <p className="text-gray-700 text-sm sm:text-base break-words">
                   Without proper insulation, you&apos;re not just losing heat — you&apos;re also losing money. As energy prices in the UK continue to rise, it&apos;s more important than ever to ensure your home is properly insulated.
                 </p>
                 <div className="bg-white rounded-lg p-3 sm:p-4 border border-red-200">
                   <p className="text-red-700 font-semibold text-center text-sm sm:text-base break-words">
                     Average UK household loses £500+ annually due to poor insulation
                   </p>
                 </div>
               </div>
             </div>

             {/* The Solution */}
             <div className="bg-gradient-to-br from-green-50 to-green-100 border-2 border-green-200 rounded-2xl p-4 sm:p-6 lg:p-8 shadow-lg">
               <div className="flex items-start sm:items-center mb-4 sm:mb-6">
                 <div className="w-10 h-10 sm:w-12 sm:h-12 bg-green-500 rounded-full flex items-center justify-center mr-3 sm:mr-4 flex-shrink-0">
                   <CheckCircle className="h-5 w-5 sm:h-6 sm:w-6 text-white" />
                 </div>
                 <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-green-800 break-words">The Solution: Free Loft Insulation</h3>
               </div>
               <div className="space-y-3 sm:space-y-4">
                 <p className="text-gray-700 text-sm sm:text-base lg:text-lg break-words">
                   Loft insulation acts as a <strong className="text-green-600">thermal barrier</strong>, reducing the need for heating in winter and cooling in summer.
                 </p>
                 <p className="text-gray-700 text-sm sm:text-base break-words">
                   This results in lower utility bills, reduced carbon footprint, and a warmer, more comfortable living space.
                 </p>
                 <div className="bg-white rounded-lg p-3 sm:p-4 border border-green-200">
                   <p className="text-green-700 font-semibold text-center text-sm sm:text-base break-words">
                     Save up to £500 per year with proper loft insulation
                   </p>
                 </div>
               </div>
             </div>
           </div>
         </section>

         {/* Eligibility Section */}
         <section className="mb-16">
           <div className="text-center mb-8 sm:mb-12">
             <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4 break-words">Who Can Benefit from Free Loft Insulation?</h2>
             <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto break-words">
               Check if you qualify for government-backed free loft insulation through ECO4 and other UK schemes
             </p>
           </div>
           
           <div className="bg-gradient-to-r from-blue-50 to-indigo-50 border-2 border-blue-200 rounded-2xl p-4 sm:p-6 lg:p-8 shadow-lg">
             <div className="text-center mb-6 sm:mb-8">
               <div className="w-12 h-12 sm:w-16 sm:h-16 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
                 <Shield className="h-6 w-6 sm:h-8 sm:w-8 text-white" />
               </div>
               <p className="text-base sm:text-lg md:text-xl text-gray-700 font-semibold break-words">
                 You may qualify for free loft insulation under ECO4 and other UK government schemes if you:
               </p>
             </div>
             
             <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 mb-6 sm:mb-8">
               <div className="bg-white rounded-xl p-4 sm:p-6 shadow-md border border-blue-100">
                 <div className="flex items-start space-x-3 sm:space-x-4">
                   <div className="w-6 h-6 sm:w-8 sm:h-8 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                     <CheckCircle className="h-4 w-4 sm:h-5 sm:w-5 text-green-600" />
                   </div>
                   <div className="min-w-0 flex-1">
                     <h3 className="font-semibold text-gray-900 mb-1 sm:mb-2 text-sm sm:text-base break-words">Age & Income Requirements</h3>
                     <p className="text-gray-700 text-sm sm:text-base break-words">Are aged 60+ or a low-income household</p>
                   </div>
                 </div>
               </div>
               
               <div className="bg-white rounded-xl p-4 sm:p-6 shadow-md border border-blue-100">
                 <div className="flex items-start space-x-3 sm:space-x-4">
                   <div className="w-6 h-6 sm:w-8 sm:h-8 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                     <CheckCircle className="h-4 w-4 sm:h-5 sm:w-5 text-green-600" />
                   </div>
                   <div className="min-w-0 flex-1">
                     <h3 className="font-semibold text-gray-900 mb-1 sm:mb-2 text-sm sm:text-base break-words">Benefit Recipients</h3>
                     <p className="text-gray-700 text-sm sm:text-base break-words">Receive qualifying benefits (Pension Credit, Universal Credit, Child Tax Credit)</p>
                   </div>
                 </div>
               </div>
               
               <div className="bg-white rounded-xl p-4 sm:p-6 shadow-md border border-blue-100">
                 <div className="flex items-start space-x-3 sm:space-x-4">
                   <div className="w-6 h-6 sm:w-8 sm:h-8 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                     <CheckCircle className="h-4 w-4 sm:h-5 sm:w-5 text-green-600" />
                   </div>
                   <div className="min-w-0 flex-1">
                     <h3 className="font-semibold text-gray-900 mb-1 sm:mb-2 text-sm sm:text-base break-words">Property Efficiency</h3>
                     <p className="text-gray-700 text-sm sm:text-base break-words">Live in an energy-inefficient property (EPC rating D or below)</p>
                   </div>
                 </div>
               </div>
               
               <div className="bg-white rounded-xl p-4 sm:p-6 shadow-md border border-blue-100">
                 <div className="flex items-start space-x-3 sm:space-x-4">
                   <div className="w-6 h-6 sm:w-8 sm:h-8 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                     <CheckCircle className="h-4 w-4 sm:h-5 sm:w-5 text-green-600" />
                   </div>
                   <div className="min-w-0 flex-1">
                     <h3 className="font-semibold text-gray-900 mb-1 sm:mb-2 text-sm sm:text-base break-words">Landlords</h3>
                     <p className="text-gray-700 text-sm sm:text-base break-words">Are a landlord with eligible tenants</p>
                   </div>
                 </div>
               </div>
             </div>
             
             <div className="bg-white rounded-xl p-4 sm:p-6 border-2 border-blue-200">
               <p className="text-gray-700 text-center text-sm sm:text-base md:text-lg break-words">
                 <strong className="text-blue-600">LIS UK will assess your eligibility</strong> and manage the end-to-end application process, ensuring compliance with all regulatory requirements.
               </p>
             </div>
           </div>
         </section>

         {/* What Makes LIS UK Different */}
         <section className="mb-16">
           <div className="text-center mb-8 sm:mb-12">
             <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4 break-words">What Makes LIS UK Different?</h2>
             <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto break-words">
               Discover why thousands of UK homeowners trust LIS UK for their insulation needs
             </p>
           </div>
           
           <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
             {/* Nationwide Coverage */}
             <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-4 sm:p-6 lg:p-8 text-center shadow-lg border border-blue-200 hover:shadow-xl transition-shadow duration-300">
               <div className="w-16 h-16 sm:w-20 sm:h-20 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6 shadow-lg">
                 <Users className="h-8 w-8 sm:h-10 sm:w-10 text-white" />
               </div>
               <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-900 mb-3 sm:mb-4 break-words">1. Nationwide Coverage</h3>
               <p className="text-gray-700 mb-3 sm:mb-4 text-sm sm:text-base lg:text-lg break-words">
                 With a presence across the UK and access to a global team of trained professionals, we provide local service with international standards.
               </p>
               <div className="bg-white rounded-lg p-3 sm:p-4 border border-blue-200">
                 <p className="text-blue-600 font-semibold text-xs sm:text-sm break-words">5000+ Installers Across 5 Countries</p>
               </div>
             </div>

             {/* Government Scheme Experts */}
             <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-2xl p-4 sm:p-6 lg:p-8 text-center shadow-lg border border-green-200 hover:shadow-xl transition-shadow duration-300">
               <div className="w-16 h-16 sm:w-20 sm:h-20 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6 shadow-lg">
                 <Shield className="h-8 w-8 sm:h-10 sm:w-10 text-white" />
               </div>
               <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-900 mb-3 sm:mb-4 break-words">2. Government Scheme Experts</h3>
               <p className="text-gray-700 mb-3 sm:mb-4 text-sm sm:text-base lg:text-lg break-words">
                 We specialise in helping customers access insulation through schemes like:
               </p>
               <div className="bg-white rounded-lg p-3 sm:p-4 border border-green-200 space-y-1 sm:space-y-2">
                 <p className="text-green-600 font-semibold text-xs sm:text-sm break-words">• ECO4 (Energy Company Obligation Phase 4)</p>
                 <p className="text-green-600 font-semibold text-xs sm:text-sm break-words">• GBIS (Great British Insulation Scheme)</p>
                 <p className="text-green-600 font-semibold text-xs sm:text-sm break-words">• PAS 2035 Retrofit Regulations</p>
               </div>
             </div>

             {/* Certified Installers */}
             <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-2xl p-4 sm:p-6 lg:p-8 text-center shadow-lg border border-purple-200 hover:shadow-xl transition-shadow duration-300">
               <div className="w-16 h-16 sm:w-20 sm:h-20 bg-purple-500 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6 shadow-lg">
                 <Award className="h-8 w-8 sm:h-10 sm:w-10 text-white" />
               </div>
               <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-900 mb-3 sm:mb-4 break-words">3. Certified Installers</h3>
               <p className="text-gray-700 mb-3 sm:mb-4 text-sm sm:text-base lg:text-lg break-words">
                 Our network of 5000+ certified professionals ensures fast, safe, and compliant installation services.
               </p>
               <div className="bg-white rounded-lg p-3 sm:p-4 border border-purple-200">
                 <p className="text-purple-600 font-semibold text-xs sm:text-sm break-words">BBA-Approved Materials & UK Standards</p>
               </div>
             </div>
           </div>
         </section>

        {/* Technical Side */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Understanding the Technical Side</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Learn about insulation types, materials, and the science behind energy efficiency
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* What is Loft Insulation */}
            <div className="bg-gradient-to-br from-gray-50 to-gray-100 border-2 border-gray-200 rounded-2xl p-8 shadow-xl">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-gray-600 rounded-full flex items-center justify-center mr-4">
                  <span className="text-white text-xl font-bold">?</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-900">What is Loft Insulation?</h3>
              </div>
              <p className="text-gray-700 mb-6 text-lg">
                Loft insulation involves placing a <strong className="text-gray-800">thermal barrier</strong> (usually made from mineral wool, glass fibre, or cellulose) between and over joists in your loft space.
              </p>
              <div className="bg-white rounded-xl p-4 border border-gray-200 mb-6">
                <p className="text-center text-gray-800 font-bold text-lg">
                  Standard thickness for optimal performance: <span className="text-primary-blue">270mm</span>
                </p>
              </div>
              
              <h4 className="text-xl font-semibold text-gray-900 mb-4">Types of Loft Insulation:</h4>
              <div className="space-y-3">
                <div className="bg-white rounded-lg p-4 border border-gray-200">
                  <h5 className="font-semibold text-gray-900 mb-1">Blanket Insulation (Rolls)</h5>
                  <p className="text-gray-600 text-sm">Ideal for accessible lofts with standard joist spacing</p>
                </div>
                <div className="bg-white rounded-lg p-4 border border-gray-200">
                  <h5 className="font-semibold text-gray-900 mb-1">Loose-fill Insulation</h5>
                  <p className="text-gray-600 text-sm">Best for irregular spaces or topping up existing insulation</p>
                </div>
                <div className="bg-white rounded-lg p-4 border border-gray-200">
                  <h5 className="font-semibold text-gray-900 mb-1">Blown-Fibre Insulation</h5>
                  <p className="text-gray-600 text-sm">Suitable for hard-to-reach areas and complex layouts</p>
                </div>
                <div className="bg-white rounded-lg p-4 border border-gray-200">
                  <h5 className="font-semibold text-gray-900 mb-1">Sheet Insulation</h5>
                  <p className="text-gray-600 text-sm">Used in loft conversions or where storage is needed</p>
                </div>
              </div>
            </div>

            {/* Benefits */}
            <div className="bg-gradient-to-br from-green-50 to-emerald-50 border-2 border-green-200 rounded-2xl p-8 shadow-xl">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center mr-4">
                  <CheckCircle className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Benefits of Proper Loft Insulation</h3>
              </div>
              <div className="space-y-4">
                <div className="bg-white rounded-xl p-4 border border-green-200 shadow-md">
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="h-6 w-6 text-green-600 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">Reduces heating bills by up to £500 per year</h4>
                      <p className="text-gray-600 text-sm">Significant long-term savings on energy costs</p>
                    </div>
                  </div>
                </div>
                
                <div className="bg-white rounded-xl p-4 border border-green-200 shadow-md">
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="h-6 w-6 text-green-600 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">Improves EPC rating and increases property value</h4>
                      <p className="text-gray-600 text-sm">Better energy performance certificate and higher resale value</p>
                    </div>
                  </div>
                </div>
                
                <div className="bg-white rounded-xl p-4 border border-green-200 shadow-md">
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="h-6 w-6 text-green-600 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">Cuts down carbon emissions</h4>
                      <p className="text-gray-600 text-sm">Reduces your home&apos;s environmental impact</p>
                    </div>
                  </div>
                </div>
                
                <div className="bg-white rounded-xl p-4 border border-green-200 shadow-md">
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="h-6 w-6 text-green-600 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">Minimises dampness and condensation issues</h4>
                      <p className="text-gray-600 text-sm">Prevents moisture problems and mold growth</p>
                    </div>
                  </div>
                </div>
                
                <div className="bg-white rounded-xl p-4 border border-green-200 shadow-md">
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="h-6 w-6 text-green-600 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">Improves indoor comfort year-round</h4>
                      <p className="text-gray-600 text-sm">Consistent temperature and better living conditions</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Challenges and Solutions */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Challenges Customers Face (And How We Solve Them)</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We understand the common obstacles homeowners face and have developed solutions to make the process seamless
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Challenge 1 */}
            <div className="bg-gradient-to-br from-red-50 to-red-100 border-2 border-red-200 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-red-500 rounded-full flex items-center justify-center mr-4">
                  <span className="text-white text-xl font-bold">!</span>
                </div>
                <h3 className="text-xl font-bold text-red-800">1. Confusing Eligibility Criteria</h3>
              </div>
              <div className="bg-white rounded-xl p-6 border border-red-200">
                <h4 className="font-semibold text-gray-900 mb-3 text-green-600">✓ Our Solution:</h4>
                <p className="text-gray-700 text-lg">
                  Our admin team simplifies the process and checks your eligibility for you. We handle all the complex paperwork and requirements.
                </p>
              </div>
            </div>

            {/* Challenge 2 */}
            <div className="bg-gradient-to-br from-orange-50 to-orange-100 border-2 border-orange-200 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center mr-4">
                  <span className="text-white text-xl font-bold">!</span>
                </div>
                <h3 className="text-xl font-bold text-orange-800">2. Complex Application Process</h3>
              </div>
              <div className="bg-white rounded-xl p-6 border border-orange-200">
                <h4 className="font-semibold text-gray-900 mb-3 text-green-600">✓ Our Solution:</h4>
                <p className="text-gray-700 text-lg">
                  We manage all ECO4 and GBIS paperwork, so you don&apos;t need to. Our experts handle every step of the application process.
                </p>
              </div>
            </div>

            {/* Challenge 3 */}
            <div className="bg-gradient-to-br from-yellow-50 to-yellow-100 border-2 border-yellow-200 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-yellow-500 rounded-full flex items-center justify-center mr-4">
                  <span className="text-white text-xl font-bold">!</span>
                </div>
                <h3 className="text-xl font-bold text-yellow-800">3. Trust Issues with Installers</h3>
              </div>
              <div className="bg-white rounded-xl p-6 border border-yellow-200">
                <h4 className="font-semibold text-gray-900 mb-3 text-green-600">✓ Our Solution:</h4>
                <p className="text-gray-700 text-lg">
                  All our partners are certified, insured, and background-verified. We only work with the most trusted professionals.
                </p>
              </div>
            </div>

            {/* Challenge 4 */}
            <div className="bg-gradient-to-br from-purple-50 to-purple-100 border-2 border-purple-200 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-purple-500 rounded-full flex items-center justify-center mr-4">
                  <span className="text-white text-xl font-bold">!</span>
                </div>
                <h3 className="text-xl font-bold text-purple-800">4. Post-Installation Concerns</h3>
              </div>
              <div className="bg-white rounded-xl p-6 border border-purple-200">
                <h4 className="font-semibold text-gray-900 mb-3 text-green-600">✓ Our Solution:</h4>
                <p className="text-gray-700 text-lg">
                  We offer aftercare support and quality assurance to ensure long-term performance. Your satisfaction is our priority.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* How the Process Works */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">How the Process Works</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our streamlined 6-step process makes getting free loft insulation simple and stress-free
            </p>
          </div>
          
          <div className="bg-gradient-to-r from-blue-50 to-indigo-50 border-2 border-blue-200 rounded-2xl p-8 shadow-xl">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="text-center group">
                <div className="w-16 h-16 bg-primary-blue text-white rounded-full flex items-center justify-center mx-auto mb-6 text-xl font-bold shadow-lg group-hover:scale-110 transition-transform duration-300">1</div>
                <h3 className="text-lg font-bold text-gray-900 mb-3">Free Eligibility Check</h3>
                <p className="text-gray-600 text-sm">We assess your eligibility for government schemes in minutes</p>
              </div>
              
              <div className="text-center group">
                <div className="w-16 h-16 bg-primary-blue text-white rounded-full flex items-center justify-center mx-auto mb-6 text-xl font-bold shadow-lg group-hover:scale-110 transition-transform duration-300">2</div>
                <h3 className="text-lg font-bold text-gray-900 mb-3">Property Survey by Certified Assessor</h3>
                <p className="text-gray-600 text-sm">Professional assessment of your loft space and requirements</p>
              </div>
              
              <div className="text-center group">
                <div className="w-16 h-16 bg-primary-blue text-white rounded-full flex items-center justify-center mx-auto mb-6 text-xl font-bold shadow-lg group-hover:scale-110 transition-transform duration-300">3</div>
                <h3 className="text-lg font-bold text-gray-900 mb-3">Submit Application via ECO4 or GBIS</h3>
                <p className="text-gray-600 text-sm">We handle all paperwork and government scheme applications</p>
              </div>
              
              <div className="text-center group">
                <div className="w-16 h-16 bg-primary-blue text-white rounded-full flex items-center justify-center mx-auto mb-6 text-xl font-bold shadow-lg group-hover:scale-110 transition-transform duration-300">4</div>
                <h3 className="text-lg font-bold text-gray-900 mb-3">Schedule Installation Date</h3>
                <p className="text-gray-600 text-sm">Convenient scheduling that works with your timetable</p>
              </div>
              
              <div className="text-center group">
                <div className="w-16 h-16 bg-primary-blue text-white rounded-full flex items-center justify-center mx-auto mb-6 text-xl font-bold shadow-lg group-hover:scale-110 transition-transform duration-300">5</div>
                <h3 className="text-lg font-bold text-gray-900 mb-3">Insulation Installation Completed in 1 Day</h3>
                <p className="text-gray-600 text-sm">Professional installation by certified experts in just one day</p>
              </div>
              
              <div className="text-center group">
                <div className="w-16 h-16 bg-primary-blue text-white rounded-full flex items-center justify-center mx-auto mb-6 text-xl font-bold shadow-lg group-hover:scale-110 transition-transform duration-300">6</div>
                <h3 className="text-lg font-bold text-gray-900 mb-3">Post-Installation Quality Check</h3>
                <p className="text-gray-600 text-sm">Final inspection to ensure everything meets our high standards</p>
              </div>
            </div>
            
          </div>
        </section>

        {/* Why Choose LIS UK */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Why Choose LIS UK?</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover what makes us the preferred choice for thousands of UK homeowners
            </p>
          </div>
          
          <div className="bg-gradient-to-br from-gray-50 to-blue-50 border-2 border-gray-200 rounded-2xl p-8 shadow-xl">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-white rounded-xl p-6 shadow-md border border-gray-100 hover:shadow-lg transition-shadow duration-300">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <CheckCircle className="h-6 w-6 text-green-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 mb-1">20+ Years of Experience</h3>
                    <p className="text-gray-600 text-sm">Decades of expertise in insulation solutions</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-white rounded-xl p-6 shadow-md border border-gray-100 hover:shadow-lg transition-shadow duration-300">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <CheckCircle className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 mb-1">3000+ Successful Installations</h3>
                    <p className="text-gray-600 text-sm">Proven track record of quality work</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-white rounded-xl p-6 shadow-md border border-gray-100 hover:shadow-lg transition-shadow duration-300">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <CheckCircle className="h-6 w-6 text-purple-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 mb-1">Operating in 50+ Countries</h3>
                    <p className="text-gray-600 text-sm">Global expertise, local service</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-white rounded-xl p-6 shadow-md border border-gray-100 hover:shadow-lg transition-shadow duration-300">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <CheckCircle className="h-6 w-6 text-orange-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 mb-1">Full UK Compliance</h3>
                    <p className="text-gray-600 text-sm">Meets all UK standards & government schemes</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-white rounded-xl p-6 shadow-md border border-gray-100 hover:shadow-lg transition-shadow duration-300">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-pink-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <CheckCircle className="h-6 w-6 text-pink-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 mb-1">Fast & Friendly Service</h3>
                    <p className="text-gray-600 text-sm">Transparent, efficient, and customer-focused</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-white rounded-xl p-6 shadow-md border border-gray-100 hover:shadow-lg transition-shadow duration-300">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-indigo-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <CheckCircle className="h-6 w-6 text-indigo-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 mb-1">5000+ Certified Installers</h3>
                    <p className="text-gray-600 text-sm">Nationwide network of qualified professionals</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="mt-8 pt-6 border-t border-gray-200">
              <div className="text-center">
                <p className="text-lg text-gray-700 font-semibold">
                  <span className="text-primary-blue">Trusted by thousands</span> of UK homeowners for reliable, professional insulation services
                </p>
              </div>
            </div>
          </div>
        </section>

         {/* Ready to Apply Section */}
         <section className="mb-16">
           <div className="bg-gradient-to-r from-primary-blue to-secondary-blue rounded-2xl p-4 sm:p-6 lg:p-8 text-center text-white shadow-2xl">
             <div className="max-w-3xl mx-auto">
               <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6 break-words">Ready to Apply for Free Loft Insulation?</h2>
               <p className="text-base sm:text-lg md:text-xl text-blue-100 mb-6 sm:mb-8 break-words">
                 Search &quot;Free Loft Insulation Near Me&quot; and find LIS UK at the top. We&apos;re here to support UK residents in making their homes warmer, more energy efficient, and more sustainable.
               </p>
               
               <div className="bg-white rounded-2xl p-4 sm:p-6 lg:p-8 shadow-xl">
                 <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-900 mb-4 sm:mb-6 break-words">Nationwide Service in England, Scotland, and Wales</h3>
                 <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
                   <div className="text-center">
                     <div className="w-12 h-12 sm:w-16 sm:h-16 bg-primary-blue rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
                       <Phone className="h-6 w-6 sm:h-8 sm:w-8 text-white" />
                     </div>
                     <h4 className="text-sm sm:text-base lg:text-lg font-semibold text-gray-900 mb-1 sm:mb-2 break-words">Call or WhatsApp</h4>
                     <p className="text-primary-blue font-bold text-base sm:text-lg lg:text-xl break-words">+44 XXX XXX XXXX</p>
                     <p className="text-gray-600 text-xs sm:text-sm mt-1 sm:mt-2 break-words">Available 24/7</p>
                   </div>
                   
                   <div className="text-center">
                     <div className="w-12 h-12 sm:w-16 sm:h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
                       <Mail className="h-6 w-6 sm:h-8 sm:w-8 text-white" />
                     </div>
                     <h4 className="text-sm sm:text-base lg:text-lg font-semibold text-gray-900 mb-1 sm:mb-2 break-words">Email Us</h4>
                     <p className="text-primary-blue font-bold text-sm sm:text-base lg:text-lg break-words">contact@lisuk.co.uk</p>
                     <p className="text-gray-600 text-xs sm:text-sm mt-1 sm:mt-2 break-words">Quick response guaranteed</p>
                   </div>
                   
                   <div className="text-center">
                     <div className="w-12 h-12 sm:w-16 sm:h-16 bg-purple-500 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
                       <Globe className="h-6 w-6 sm:h-8 sm:w-8 text-white" />
                     </div>
                     <h4 className="text-sm sm:text-base lg:text-lg font-semibold text-gray-900 mb-1 sm:mb-2 break-words">Visit Our Website</h4>
                     <p className="text-primary-blue font-bold text-sm sm:text-base lg:text-lg break-words">www.lisuk.co.uk</p>
                     <p className="text-gray-600 text-xs sm:text-sm mt-1 sm:mt-2 break-words">Complete information</p>
                   </div>
                 </div>
                 
                 <div className="mt-6 sm:mt-8 pt-4 sm:pt-6 border-t border-gray-200">
                   <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
                     <Link
                       href="/quote"
                       className="inline-flex items-center justify-center px-6 sm:px-8 py-3 sm:py-4 bg-primary-blue text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors duration-200 shadow-lg text-sm sm:text-base"
                     >
                       <Quote className="h-4 w-4 sm:h-5 sm:w-5 mr-2" />
                       Get Free Quote Now
                     </Link>
                     <Link
                       href="tel:+44123456789"
                       className="inline-flex items-center justify-center px-6 sm:px-8 py-3 sm:py-4 border-2 border-primary-blue text-primary-blue font-semibold rounded-lg hover:bg-primary-blue hover:text-white transition-colors duration-200 text-sm sm:text-base"
                     >
                       <Phone className="h-4 w-4 sm:h-5 sm:w-5 mr-2" />
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
            "name": "Free Loft Insulation UK",
            "potentialAction": {
              "@type": "SearchAction",
              "target": {
                "@type": "EntryPoint",
                "urlTemplate": "https://www.loft-insulation-services-uk.com/free-loft-insulation-uk/search?q={search_term_string}"
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
            "name": "LIS UK - Loft Insulation Services",
            "url": "https://www.loft-insulation-services-uk.com/free-loft-insulation-uk",
            "description": "LIS UK provides professional loft insulation services across the UK, helping homeowners save energy and reduce heating costs with certified installers.",
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
              "description": "Expert loft insulation installation services, energy efficiency upgrades, and free insulation surveys."
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
            "name": "Free Loft Insulation UK",
            "image": "https://www.loftinsulationservicesuk.com/images/free-loft-insulation.jpg",
            "description": "Government-backed free loft insulation service in the UK, helping homeowners save on energy bills with expert installation.",
            "brand": {
              "@type": "Brand",
              "name": "Free Loft Insulation UK"
            },
            "aggregateRating": {
              "@type": "AggregateRating",
              "ratingValue": "4.9",
              "bestRating": "5",
              "worstRating": "1",
              "ratingCount": "158",
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
            "name": "Free Loft Insulation UK",
            "image": "https://www.loft-insulation-services-uk.com/_next/image?url=%2FLOFT%20INSULATION.png&w=640&q=75",
            "@id": "home",
            "url": "https://www.loft-insulation-services-uk.com/free-loft-insulation-uk",
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
              "https://www.loft-insulation-services-uk.com/free-loft-insulation-uk"
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
            "name": "Free Loft Insulation UK",
            "description": "Government-backed free loft insulation service for UK homeowners, helping reduce energy bills with expert installation.",
            "url": "https://www.loft-insulation-services-uk.com/free-loft-insulation-uk",
            "aggregateRating": {
              "@type": "AggregateRating",
              "ratingValue": "4.9",
              "reviewCount": "3468654"
            },
            "audience": {
              "@type": "audience",
              "description": "3468654 Reviews",
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
            "name": "Free Loft Insulation UK",
            "url": "https://www.loft-insulation-services-uk.com/free-loft-insulation-uk",
            "image": "https://www.loft-insulation-services-uk.com/_next/image?url=%2FLOFT%20INSULATION.png&w=640&q=75",
            "author": "Mike",
            "reviewBody": "The team at Free Loft Insulation UK was fantastic. They arrived on time, completed the loft insulation quickly, and left the place clean. I've already noticed a big difference in warmth and reduced heating bills.",
            "reviewRating": {
              "@type": "Rating",
              "ratingValue": "4.9"
            },
            "itemReviewed": {
              "@type": "LocalBusiness",
              "name": "Free Loft Insulation UK",
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
