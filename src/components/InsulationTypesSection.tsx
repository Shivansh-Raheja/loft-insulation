'use client';

import { useState } from 'react';
import { ChevronDown, ChevronUp, Layers, Wind, Droplets, Square, Sun, Leaf, Syringe, Box, Package } from 'lucide-react';
import { insulationTypes } from '@/data/content';
import { cn } from '@/lib/utils';

const InsulationTypesSection = () => {
  const [expandedItems, setExpandedItems] = useState<string[]>([]);

  const toggleExpanded = (id: string) => {
    setExpandedItems(prev => 
      prev.includes(id) 
        ? prev.filter(item => item !== id)
        : [...prev, id]
    );
  };

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
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Types of Insulation
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore different insulation materials and find the perfect solution for your property. 
            Each type has unique benefits and applications.
          </p>
        </div>

        {/* Insulation Types Accordion */}
        <div className="max-w-4xl mx-auto space-y-4">
          {insulationTypes.map((type) => {
            const IconComponent = getIcon(type.icon);
            const isExpanded = expandedItems.includes(type.id);
            
            return (
              <div
                key={type.id}
                className="bg-white border border-gray-200 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden"
              >
                {/* Header */}
                <button
                  onClick={() => toggleExpanded(type.id)}
                  className="w-full p-6 text-left flex items-center justify-between hover:bg-gray-50 transition-colors duration-200"
                >
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center">
                      <IconComponent className="h-6 w-6 text-purple-600" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900">
                        {type.title}
                      </h3>
                      <p className="text-gray-600 mt-1">
                        {type.description}
                      </p>
                    </div>
                  </div>
                  <div className="flex-shrink-0 ml-4">
                    {isExpanded ? (
                      <ChevronUp className="h-6 w-6 text-gray-400" />
                    ) : (
                      <ChevronDown className="h-6 w-6 text-gray-400" />
                    )}
                  </div>
                </button>

                {/* Expanded Content */}
                <div
                  className={cn(
                    'overflow-hidden transition-all duration-300',
                    isExpanded ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                  )}
                >
                  <div className="px-6 pb-6 border-t border-gray-100">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-6">
                      {/* Pros */}
                      <div>
                        <h4 className="text-lg font-semibold text-green-600 mb-3 flex items-center">
                          <div className="w-2 h-2 bg-green-600 rounded-full mr-2"></div>
                          Advantages
                        </h4>
                        <ul className="space-y-2">
                          {type.pros.map((pro, index) => (
                            <li key={index} className="flex items-start text-gray-700">
                              <div className="w-1.5 h-1.5 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                              {pro}
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Cons */}
                      <div>
                        <h4 className="text-lg font-semibold text-red-600 mb-3 flex items-center">
                          <div className="w-2 h-2 bg-red-600 rounded-full mr-2"></div>
                          Considerations
                        </h4>
                        <ul className="space-y-2">
                          {type.cons.map((con, index) => (
                            <li key={index} className="flex items-start text-gray-700">
                              <div className="w-1.5 h-1.5 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                              {con}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-purple-600 to-indigo-600 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">
              Need Help Choosing the Right Insulation?
            </h3>
            <p className="text-purple-100 mb-6 max-w-2xl mx-auto">
              Our certified experts can assess your property and recommend the best insulation type 
              for your specific needs and budget.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-purple-50 transition-colors duration-200">
                Get Expert Advice
              </button>
              <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-colors duration-200">
                View All Types
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InsulationTypesSection;
