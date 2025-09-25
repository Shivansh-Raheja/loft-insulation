import Link from 'next/link';
import { ArrowRight, Home, Building, Users, Key, MapPin } from 'lucide-react';
import { sectors } from '@/data/content';

const SectorsSection = () => {
  const getIcon = (iconName: string) => {
    const icons = {
      Home,
      Building,
      Users,
      Key,
      MapPin,
    };
    return icons[iconName as keyof typeof icons] || Home;
  };

  return (
    <section className="py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Sectors We Serve
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From residential homes to large commercial projects, 
            we provide insulation solutions for every sector and property type.
          </p>
        </div>

        {/* Sectors Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {sectors.map((sector) => {
            const IconComponent = getIcon(sector.icon);
            return (
              <div
                key={sector.id}
                className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 overflow-hidden"
              >
                <div className="p-8">
                  {/* Icon */}
                  <div className="w-16 h-16 bg-blue-100 rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary-blue transition-colors duration-300">
                    <IconComponent className="h-8 w-8 text-primary-blue group-hover:text-white transition-colors duration-300" />
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-semibold text-gray-900 mb-4 group-hover:text-primary-blue transition-colors duration-300">
                    {sector.title}
                  </h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {sector.description}
                  </p>

                  {/* CTA */}
                  <Link
                    href={sector.href}
                    className="inline-flex items-center text-primary-blue font-semibold hover:text-blue-700 transition-colors duration-200 group/link"
                  >
                    Explore Sector
                    <ArrowRight className="h-4 w-4 ml-2 group-hover/link:translate-x-1 transition-transform duration-200" />
                  </Link>
                </div>

                {/* Hover Effect Border */}
                <div className="h-1 bg-gradient-to-r from-green-600 to-emerald-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default SectorsSection;
