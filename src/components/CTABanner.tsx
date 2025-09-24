import Link from 'next/link';
import { ArrowRight, Phone, Calendar } from 'lucide-react';

const CTABanner = () => {
  return (
    <section className="py-20 bg-gradient-to-r from-primary-blue via-blue-700 to-secondary-blue relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          {/* Main CTA */}
          <div className="mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Get Your FREE Home Energy Survey Today!
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto leading-relaxed">
              Discover how much you could save on energy bills with professional loft insulation. 
              Our certified experts will assess your property and provide a detailed energy efficiency report.
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-12">
            <Link
              href="/survey"
              className="inline-flex items-center justify-center px-8 py-4 bg-white text-primary-blue text-lg font-semibold rounded-lg hover:bg-blue-50 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
            >
              <Calendar className="h-6 w-6 mr-2" />
              Book Free Survey
              <ArrowRight className="h-5 w-5 ml-2" />
            </Link>
            <Link
              href="tel:+44123456789"
              className="inline-flex items-center justify-center px-8 py-4 bg-transparent text-white text-lg font-semibold rounded-lg border-2 border-white hover:bg-white hover:text-primary-blue transition-all duration-200"
            >
              <Phone className="h-6 w-6 mr-2" />
              Call Now: 0123 456 789
            </Link>
          </div>

          {/* Benefits List */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="w-16 h-16 bg-white bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">💰</span>
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Save Money</h3>
              <p className="text-blue-100 text-sm">
                Reduce energy bills by up to 25% with proper insulation
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-white bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🌱</span>
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Eco-Friendly</h3>
              <p className="text-blue-100 text-sm">
                Reduce carbon footprint with sustainable materials
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-white bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🏠</span>
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Comfort</h3>
              <p className="text-blue-100 text-sm">
                Enjoy a warmer, more comfortable home year-round
              </p>
            </div>
          </div>

          {/* Trust Indicators */}
          <div className="mt-16 pt-8 border-t border-white border-opacity-20">
            <p className="text-blue-200 text-sm mb-4">
              Trusted by over 500+ homeowners across the UK
            </p>
            <div className="flex flex-wrap justify-center items-center space-x-8 opacity-60">
              <div className="text-white font-semibold">✓ Certified Installers</div>
              <div className="text-white font-semibold">✓ 10+ Years Experience</div>
              <div className="text-white font-semibold">✓ 100% Satisfaction</div>
              <div className="text-white font-semibold">✓ Free Quotes</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTABanner;
