import { Phone, Mail, MapPin, Clock } from 'lucide-react';

const ContactInfo = () => {
  const contactDetails = [
    {
      icon: Phone,
      title: 'Phone',
      details: ['+44 123 456 789', '+44 987 654 321'],
      description: 'Call us for immediate assistance'
    },
    {
      icon: Mail,
      title: 'Email',
      details: ['info@loftinsulationservices.co.uk', 'quotes@loftinsulationservices.co.uk'],
      description: 'Send us an email anytime'
    },
    {
      icon: MapPin,
      title: 'Address',
      details: ['123 Business Street', 'London, UK SW1A 1AA'],
      description: 'Visit our office'
    },
    {
      icon: Clock,
      title: 'Business Hours',
      details: ['Monday - Friday: 8:00 AM - 6:00 PM', 'Saturday: 9:00 AM - 4:00 PM', 'Sunday: Closed'],
      description: 'We&apos;re here to help'
    }
  ];


  const stats = [
    { number: '500+', label: 'Happy Customers' },
    { number: '24h', label: 'Response Time' },
    { number: '10+', label: 'Years Experience' },
    { number: '100%', label: 'Satisfaction Rate' }
  ];

  return (
    <div className="space-y-4 sm:space-y-6">
      {/* Contact Details */}
      <div className="bg-white rounded-xl lg:rounded-2xl shadow-xl p-4 sm:p-6">
        <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-3 sm:mb-4">Contact Information</h3>
        <div className="space-y-3 sm:space-y-4">
          {contactDetails.map((item, index) => {
            const IconComponent = item.icon;
            return (
              <div key={index} className="flex items-start space-x-3">
                <div className="w-8 h-8 sm:w-10 sm:h-10 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <IconComponent className="h-4 w-4 sm:h-5 sm:w-5 text-primary-blue" />
                </div>
                <div className="flex-1 min-w-0">
                  <h4 className="text-xs sm:text-sm font-semibold text-gray-900 mb-1">
                    {item.title}
                  </h4>
                  <div className="space-y-1">
                    {item.details.map((detail, idx) => (
                      <p key={idx} className="text-xs sm:text-sm text-gray-600 break-words">
                        {detail}
                      </p>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Stats - Compact Version */}
      <div className="bg-gradient-to-r from-primary-blue to-secondary-blue rounded-xl lg:rounded-2xl shadow-xl p-4 sm:p-6 text-white">
        <h3 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4">Why Choose Us?</h3>
        <div className="grid grid-cols-2 gap-3 sm:gap-4">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-lg sm:text-2xl font-bold mb-1">{stat.number}</div>
              <div className="text-blue-100 text-xs">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;
