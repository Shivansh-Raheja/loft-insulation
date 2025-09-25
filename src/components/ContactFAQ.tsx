import { HelpCircle, ChevronRight } from 'lucide-react';

const ContactFAQ = () => {
  const faqs = [
    {
      question: 'How quickly can you start my project?',
      answer: 'We typically start projects within 1-2 weeks of booking, depending on availability.'
    },
    {
      question: 'Do you offer free quotes?',
      answer: 'Yes, all our quotes are completely free with no obligation to proceed.'
    },
    {
      question: 'What areas do you cover?',
      answer: 'We provide services across the entire UK with certified installers in every region.'
    },
    {
      question: 'What if I&apos;m not satisfied?',
      answer: 'We offer a 100% satisfaction guarantee and will work to resolve any issues.'
    }
  ];

  return (
    <div className="bg-white rounded-xl lg:rounded-2xl shadow-xl p-4 sm:p-6 lg:p-8">
      <div className="flex items-center mb-4 sm:mb-6">
        <div className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 bg-blue-100 rounded-lg lg:rounded-xl flex items-center justify-center mr-3 sm:mr-4">
          <HelpCircle className="h-4 w-4 sm:h-5 sm:w-5 lg:h-6 lg:w-6 text-primary-blue" />
        </div>
        <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-900">Frequently Asked Questions</h3>
      </div>
      
      <div className="space-y-3 sm:space-y-4">
        {faqs.map((faq, index) => (
            <div key={index} className="border-l-4 border-primary-blue pl-3 sm:pl-4 py-2">
            <h4 className="font-semibold text-gray-900 mb-1 text-xs sm:text-sm">
              {faq.question}
            </h4>
            <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">
              {faq.answer}
            </p>
          </div>
        ))}
      </div>
      
      <div className="mt-4 sm:mt-6 pt-3 sm:pt-4 border-t border-gray-100">
        <a
          href="/faq"
          className="inline-flex items-center text-primary-blue hover:text-blue-700 font-semibold text-xs sm:text-sm group"
        >
          View All FAQs
          <ChevronRight className="h-3 w-3 sm:h-4 sm:w-4 ml-1 group-hover:translate-x-1 transition-transform duration-200" />
        </a>
      </div>
    </div>
  );
};

export default ContactFAQ;
