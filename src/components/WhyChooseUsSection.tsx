import { Shield, Zap, Leaf, Wrench, Award, Clock, Users, CheckCircle } from 'lucide-react';

const WhyChooseUsSection = () => {
  const features = [
    {
      icon: Shield,
      title: 'Certified Installers',
      description: 'All our installers are fully certified and experienced professionals with proven track records.',
      color: 'blue'
    },
    {
      icon: Zap,
      title: 'Energy Savings',
      description: 'Reduce your energy bills by up to 25% with our high-quality insulation solutions.',
      color: 'yellow'
    },
    {
      icon: Leaf,
      title: 'Eco-Friendly Materials',
      description: 'We use sustainable, environmentally friendly insulation materials whenever possible.',
      color: 'green'
    },
    {
      icon: Wrench,
      title: 'Hassle-Free Installation',
      description: 'Complete installation service with minimal disruption to your daily routine.',
      color: 'purple'
    },
    {
      icon: Award,
      title: 'Quality Guarantee',
      description: 'All our work comes with comprehensive warranties and quality guarantees.',
      color: 'indigo'
    },
    {
      icon: Clock,
      title: 'Quick Turnaround',
      description: 'Fast, efficient installation that fits your schedule and timeline requirements.',
      color: 'orange'
    },
    {
      icon: Users,
      title: 'Expert Team',
      description: 'Dedicated team of insulation specialists with years of industry experience.',
      color: 'pink'
    },
    {
      icon: CheckCircle,
      title: 'Satisfaction Guaranteed',
      description: '100% customer satisfaction guarantee with ongoing support and maintenance.',
      color: 'emerald'
    }
  ];

  const getColorClasses = (color: string) => {
    const colorMap = {
      blue: 'bg-blue-100 text-primary-blue group-hover:bg-primary-blue group-hover:text-white',
      yellow: 'bg-cyan-100 text-secondary-blue group-hover:bg-secondary-blue group-hover:text-white',
      green: 'bg-blue-100 text-primary-blue group-hover:bg-primary-blue group-hover:text-white',
      purple: 'bg-cyan-100 text-secondary-blue group-hover:bg-secondary-blue group-hover:text-white',
      indigo: 'bg-blue-100 text-primary-blue group-hover:bg-primary-blue group-hover:text-white',
      orange: 'bg-cyan-100 text-secondary-blue group-hover:bg-secondary-blue group-hover:text-white',
      pink: 'bg-blue-100 text-primary-blue group-hover:bg-primary-blue group-hover:text-white',
      emerald: 'bg-cyan-100 text-secondary-blue group-hover:bg-secondary-blue group-hover:text-white',
    };
    return colorMap[color as keyof typeof colorMap] || colorMap.blue;
  };

  return (
    <section className="py-12 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Why Choose LIS?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We&apos;re not just another insulation company. We&apos;re your trusted partner in creating 
            energy-efficient, comfortable homes with professional service you can count on.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <div
                key={index}
                className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100"
              >
                {/* Icon */}
                <div className={`w-16 h-16 rounded-xl flex items-center justify-center mb-6 transition-all duration-300 ${getColorClasses(feature.color)}`}>
                  <IconComponent className="h-8 w-8" />
                </div>

                {/* Content */}
                <h3 className="text-xl font-semibold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors duration-300">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Bottom Stats */}
        <div className="mt-20 bg-white rounded-2xl shadow-xl p-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-blue-600 mb-2">500+</div>
              <div className="text-gray-600 font-medium">Projects Completed</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-green-600 mb-2">98%</div>
              <div className="text-gray-600 font-medium">Customer Satisfaction</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-purple-600 mb-2">25%</div>
              <div className="text-gray-600 font-medium">Average Energy Savings</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-orange-600 mb-2">10+</div>
              <div className="text-gray-600 font-medium">Years Experience</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUsSection;
