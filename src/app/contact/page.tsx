import ContactForm from '@/components/ContactForm';
import ContactInfo from '@/components/ContactInfo';
import ContactStats from '@/components/ContactStats';
import ContactFAQ from '@/components/ContactFAQ';
import ContactQuickActions from '@/components/ContactQuickActions';

export const metadata = {
  title: 'Contact Us | Loft Insulation Services',
  description: 'Get in touch with our expert team for professional loft insulation services. Contact us for free quotes and consultations.',
};

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary-blue to-secondary-blue py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
              Contact Us
            </h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Get in touch with our expert team for professional loft insulation services. 
              We&apos;re here to help you with all your insulation needs.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-12">
            {/* Contact Form - Takes 2 columns on desktop */}
            <div className="lg:col-span-2 order-2 lg:order-1">
              <ContactForm />
            </div>

            {/* Contact Information - Takes 1 column on desktop */}
            <div className="lg:col-span-1 order-1 lg:order-2">
              <ContactInfo />
            </div>
          </div>

          {/* Additional Cards Below */}
          <div className="mt-12 lg:mt-16">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
              <ContactStats />
              <ContactFAQ />
              <ContactQuickActions />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
