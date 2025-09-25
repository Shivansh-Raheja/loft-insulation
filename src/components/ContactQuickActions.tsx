import { Calendar, MessageCircle, Award, ArrowRight } from 'lucide-react';

const ContactQuickActions = () => {
  const actions = [
    {
      icon: Calendar,
      title: 'Book Free Survey',
      description: 'Schedule a free home energy survey',
      action: 'Book Now',
      href: '/survey',
      color: 'blue'
    },
    {
      icon: MessageCircle,
      title: 'Live Chat',
      description: 'Chat with our experts online',
      action: 'Start Chat',
      href: '/chat',
      color: 'green'
    },
    {
      icon: Award,
      title: 'Get Quote',
      description: 'Get a detailed quote for your project',
      action: 'Get Quote',
      href: '/quote',
      color: 'purple'
    }
  ];

  const getColorClasses = (color: string) => {
    const colorMap = {
      blue: 'bg-blue-100 text-blue-600 group-hover:bg-blue-600 group-hover:text-white',
      green: 'bg-green-100 text-green-600 group-hover:bg-green-600 group-hover:text-white',
      purple: 'bg-purple-100 text-purple-600 group-hover:bg-purple-600 group-hover:text-white',
    };
    return colorMap[color as keyof typeof colorMap] || colorMap.blue;
  };

  return (
    <div className="bg-white rounded-xl lg:rounded-2xl shadow-xl p-4 sm:p-6 lg:p-8">
      <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-900 mb-4 sm:mb-6">Quick Actions</h3>
      <div className="space-y-3 sm:space-y-4">
        {actions.map((action, index) => {
          const IconComponent = action.icon;
          return (
            <a
              key={index}
              href={action.href}
              className="flex items-center p-3 sm:p-4 bg-gray-50 hover:bg-blue-50 rounded-lg lg:rounded-xl transition-all duration-200 group"
            >
              <div className={`w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 rounded-lg lg:rounded-xl flex items-center justify-center flex-shrink-0 transition-all duration-200 ${getColorClasses(action.color)}`}>
                <IconComponent className="h-4 w-4 sm:h-5 sm:w-5 lg:h-6 lg:w-6" />
              </div>
              <div className="ml-3 sm:ml-4 flex-1 min-w-0">
                <h4 className="text-sm sm:text-base lg:text-lg font-semibold text-gray-900 group-hover:text-primary-blue transition-colors duration-200">
                  {action.title}
                </h4>
                <p className="text-gray-600 text-xs sm:text-sm">
                  {action.description}
                </p>
              </div>
              <div className="flex items-center text-primary-blue font-semibold group-hover:text-blue-700 text-xs sm:text-sm">
                {action.action}
                <ArrowRight className="h-3 w-3 sm:h-4 sm:w-4 ml-1 group-hover:translate-x-1 transition-transform duration-200" />
              </div>
            </a>
          );
        })}
      </div>
    </div>
  );
};

export default ContactQuickActions;
