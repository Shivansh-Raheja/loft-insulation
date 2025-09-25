import { Users, Clock, Award, CheckCircle } from 'lucide-react';

const ContactStats = () => {
  const stats = [
    {
      icon: Users,
      number: '500+',
      label: 'Happy Customers',
      description: 'Satisfied clients across the UK'
    },
    {
      icon: Clock,
      number: '24h',
      label: 'Response Time',
      description: 'Quick response to all inquiries'
    },
    {
      icon: Award,
      number: '10+',
      label: 'Years Experience',
      description: 'Professional expertise you can trust'
    },
    {
      icon: CheckCircle,
      number: '100%',
      label: 'Satisfaction Rate',
      description: 'Guaranteed customer satisfaction'
    }
  ];

  return (
    <div className="bg-white rounded-xl lg:rounded-2xl shadow-xl p-4 sm:p-6 lg:p-8">
      <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-900 mb-4 sm:mb-6">Our Track Record</h3>
      <div className="grid grid-cols-2 gap-3 sm:gap-4 lg:gap-6">
        {stats.map((stat, index) => {
          const IconComponent = stat.icon;
          return (
            <div key={index} className="text-center">
              <div className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 bg-blue-100 rounded-lg lg:rounded-xl flex items-center justify-center mx-auto mb-2 sm:mb-3">
                <IconComponent className="h-4 w-4 sm:h-5 sm:w-5 lg:h-6 lg:w-6 text-primary-blue" />
              </div>
              <div className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-900 mb-1">{stat.number}</div>
              <div className="text-xs sm:text-sm font-semibold text-gray-700 mb-1">{stat.label}</div>
              <div className="text-xs text-gray-500 leading-tight">{stat.description}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ContactStats;
