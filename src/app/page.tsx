import Hero from '@/components/Hero';
import ServicesSection from '@/components/ServicesSection';
import SectorsSection from '@/components/SectorsSection';
import InsulationTypesSection from '@/components/InsulationTypesSection';
import WhyChooseUsSection from '@/components/WhyChooseUsSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import BlogPreviewSection from '@/components/BlogPreviewSection';
import CTABanner from '@/components/CTABanner';
import FAQSection from '@/components/FAQSection';

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <Hero />
      
      {/* Intro Section */}
      <section className="py-6 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              LIS (Loft Insulation Services): Your Global Marketplace for Certified Loft Insulation Installers
            </h2>
            <p className="text-xl text-gray-600 leading-relaxed">
              We connect homeowners and businesses with professional, certified loft insulation installers 
              across the UK. Our comprehensive platform ensures you get the best service, quality materials, 
              and expert installation for maximum energy efficiency and cost savings.
            </p>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <ServicesSection />

      {/* Sectors Section */}
      <SectorsSection />

      {/* Insulation Types Section */}
      <InsulationTypesSection />

      {/* Why Choose Us Section */}
      <WhyChooseUsSection />

      {/* Testimonials Section */}
      <TestimonialsSection />

      {/* Blog Preview Section */}
      <BlogPreviewSection />

      {/* CTA Banner */}
      <CTABanner />

      {/* FAQ Section */}
      <FAQSection />
    </div>
  );
}
