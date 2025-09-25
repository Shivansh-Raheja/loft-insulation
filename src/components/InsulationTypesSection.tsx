import { Layers, Wind, Droplets, Square, Sun, Leaf, Syringe, Box, Package } from 'lucide-react';
import { insulationTypes } from '@/data/content';

const InsulationTypesSection = () => {
  const getIcon = (iconName: string) => {
    const icons = {
      Layers,
      Wind,
      Droplets,
      Square,
      Sun,
      Leaf,
      Syringe,
      Box,
      Package,
    };
    return icons[iconName as keyof typeof icons] || Layers;
  };

  return (
    <section className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Types of Insulation
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore different insulation materials and find the perfect solution for your property. 
            Each type has unique benefits and applications.
          </p>
        </div>

        {/* Insulation Types Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-6">
          {insulationTypes.map((type) => {
            const IconComponent = getIcon(type.icon);
            
            return (
              <div
                key={type.id}
                className="bg-white border border-gray-200 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group"
              >
                {/* Card Header */}
                <div className="p-4 border-b border-gray-100">
                  <div className="flex items-center space-x-3 mb-3">
                    <div className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center group-hover:bg-gray-200 transition-colors duration-300">
                      <IconComponent className="h-5 w-5 text-primary-blue" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-gray-900 group-hover:text-primary-blue transition-colors duration-300">
                        {type.title}
                      </h3>
                    </div>
                  </div>
                  <p className="text-gray-600 leading-relaxed text-sm">
                    {type.description}
                  </p>
                </div>

                {/* Card Content - Pros and Cons */}
                <div className="p-4">
                  <div className="grid grid-cols-1 gap-4">
                    {/* Pros */}
                    <div>
                      <h4 className="text-sm font-semibold text-green-600 mb-2 flex items-center">
                        <div className="w-1.5 h-1.5 bg-green-600 rounded-full mr-2"></div>
                        Advantages
                      </h4>
                      <ul className="space-y-1.5">
                        {type.pros.map((pro, index) => (
                          <li key={index} className="flex items-start text-gray-700 text-xs">
                            <div className="w-1 h-1 bg-green-500 rounded-full mt-1.5 mr-2 flex-shrink-0"></div>
                            {pro}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Cons */}
                    <div>
                      <h4 className="text-sm font-semibold text-red-600 mb-2 flex items-center">
                        <div className="w-1.5 h-1.5 bg-red-600 rounded-full mr-2"></div>
                        Considerations
                      </h4>
                      <ul className="space-y-1.5">
                        {type.cons.map((con, index) => (
                          <li key={index} className="flex items-start text-gray-700 text-xs">
                            <div className="w-1 h-1 bg-red-500 rounded-full mt-1.5 mr-2 flex-shrink-0"></div>
                            {con}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default InsulationTypesSection;
