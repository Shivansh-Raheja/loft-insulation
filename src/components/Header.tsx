'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { 
  Menu, X, ChevronDown, Quote, Home, Info, Star, 
  Wrench, Building, Users, Key, MapPin, Layers, Wind, 
  Droplets, Square, Sun, Leaf, Syringe, Box, Package, Shield
} from 'lucide-react';
import { cn } from '@/lib/utils';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const shouldBeScrolled = scrollTop > 20;
      setIsScrolled(shouldBeScrolled);
    };

    // Set initial state
    handleScroll();

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const services = [
    { name: 'Loft Insulation Installation', href: '/services/loft-insulation-installation', icon: 'Home' },
    { name: 'Loft Clearance & Preparation', href: '/services/loft-clearance-preparation', icon: 'Wrench' },
    { name: 'Loft Boarding & Storage', href: '/services/loft-boarding-storage', icon: 'Package' },
    { name: 'Roof / Rafter Insulation', href: '/services/roof-rafter-insulation', icon: 'Square' },
    { name: 'Cavity Wall & Floor Insulation', href: '/services/cavity-wall-floor-insulation', icon: 'Layers' },
    { name: 'Insulation Removal & Replacement', href: '/services/insulation-removal-replacement', icon: 'Wrench' },
  ];

  const sectors = [
    { name: 'Residential Homes', href: '/sectors/residential-homes', icon: 'Home' },
    { name: 'Commercial & Industrial Buildings', href: '/sectors/commercial-industrial', icon: 'Building' },
    { name: 'Housing Associations / Builders', href: '/sectors/housing-associations', icon: 'Users' },
    { name: 'Landlords / Property Managers', href: '/sectors/landlords-property-managers', icon: 'Key' },
    { name: 'Public Sector', href: '/sectors/public-sector', icon: 'Shield' },
    { name: 'Countries / Locations', href: '/sectors/countries-locations', icon: 'MapPin' },
  ];

  const insulationTypes = [
    { name: 'Batts & Rolls', href: '/insulation/batts-rolls', icon: 'Layers' },
    { name: 'Loose-Fill Insulation', href: '/insulation/loose-fill', icon: 'Wind' },
    { name: 'Spray Foam Insulation', href: '/insulation/spray-foam', icon: 'Droplets' },
    { name: 'Rigid Foam Board', href: '/insulation/rigid-foam-board', icon: 'Square' },
    { name: 'Radiant Barrier', href: '/insulation/radiant-barrier', icon: 'Sun' },
    { name: 'Multifoil', href: '/insulation/multifoil', icon: 'Layers' },
    { name: 'Natural Materials', href: '/insulation/natural-materials', icon: 'Leaf' },
    { name: 'Foam-in-Place Injection', href: '/insulation/foam-in-place', icon: 'Syringe' },
    { name: 'Insulating Concrete Forms', href: '/insulation/icf', icon: 'Box' },
    { name: 'Structural Insulated Panels', href: '/insulation/sips', icon: 'Package' },
  ];

  const navigation = [
    { name: 'Home', href: '/', icon: 'Home' },
    { name: 'About Us', href: '/about', icon: 'Info' },
    { name: 'Why Choose Us', href: '/why-choose-us', icon: 'Star' },
    { name: 'Services', href: '#', dropdown: services, icon: 'Wrench' },
    { name: 'Sectors', href: '#', dropdown: sectors, icon: 'Building' },
    { name: 'Insulation', href: '#', dropdown: insulationTypes, icon: 'Layers' },
  ];

  const getIcon = (iconName: string) => {
    const icons = {
      Home, Info, Star, Wrench, Building, Users, Key, MapPin, 
      Layers, Wind, Droplets, Square, Sun, Leaf, Syringe, Box, Package, Shield
    };
    return icons[iconName as keyof typeof icons] || Home;
  };

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const toggleDropdown = (name: string) => {
    setActiveDropdown(activeDropdown === name ? null : name);
  };

  const handleMouseEnter = (name: string) => {
    setActiveDropdown(name);
  };

  const handleMouseLeave = () => {
    setActiveDropdown(null);
  };

  return (
    <header className={cn(
      "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
      isScrolled 
        ? "bg-white/70 backdrop-blur-md shadow-lg" 
        : "bg-white shadow-md"
    )}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center">
              <div className="h-10 w-auto">
                <Image
                  src="/image.png"
                  alt="Loft Insulation Services"
                  width={120}
                  height={40}
                  className="h-full w-auto object-contain"
                  priority
                />
              </div>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-2">
            {navigation.map((item) => {
              const IconComponent = getIcon(item.icon);
              return (
                <div 
                  key={item.name} 
                  className="relative group"
                  onMouseEnter={() => item.dropdown && handleMouseEnter(item.name)}
                  onMouseLeave={() => item.dropdown && handleMouseLeave()}
                >
                  {item.dropdown ? (
                    <button className="flex items-center text-gray-700 hover:text-primary-blue px-3 py-2 text-sm font-medium transition-colors duration-200 rounded-lg hover:bg-gray-50">
                      <IconComponent className="h-4 w-4 mr-2" />
                      {item.name}
                      <ChevronDown className="ml-1 h-4 w-4 transition-transform duration-200 group-hover:rotate-180" />
                    </button>
                  ) : (
                    <Link
                      href={item.href}
                      className="flex items-center text-gray-700 hover:text-primary-blue px-3 py-2 text-sm font-medium transition-colors duration-200 rounded-lg hover:bg-gray-50"
                    >
                      <IconComponent className="h-4 w-4 mr-2" />
                      {item.name}
                    </Link>
                  )}

                  {/* Dropdown Menu */}
                  {item.dropdown && (
                    <div
                      className={cn(
                        'absolute top-full left-0 w-72 bg-white shadow-xl rounded-lg py-2 z-50 transition-all duration-200 border border-gray-100',
                        activeDropdown === item.name
                          ? 'opacity-100 visible translate-y-0'
                          : 'opacity-0 invisible -translate-y-2 pointer-events-none'
                      )}
                    >
                      <div className="px-3 py-2">
                        {item.dropdown.map((dropdownItem, index) => {
                          const DropdownIcon = getIcon(dropdownItem.icon);
                          const colors = [
                            'text-blue-600 hover:bg-blue-50',
                            'text-green-600 hover:bg-green-50', 
                            'text-purple-600 hover:bg-purple-50',
                            'text-orange-600 hover:bg-orange-50',
                            'text-pink-600 hover:bg-pink-50',
                            'text-indigo-600 hover:bg-indigo-50',
                            'text-cyan-600 hover:bg-cyan-50',
                            'text-emerald-600 hover:bg-emerald-50'
                          ];
                          const colorClass = colors[index % colors.length];
                          return (
                            <Link
                              key={dropdownItem.name}
                              href={dropdownItem.href}
                              className={`flex items-center px-3 py-2.5 text-sm font-medium transition-colors duration-200 rounded-lg group/item ${colorClass}`}
                            >
                              <DropdownIcon className="h-4 w-4 mr-3" />
                              <span className="flex-1">{dropdownItem.name}</span>
                            </Link>
                          );
                        })}
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </nav>

          {/* CTA Button */}
          <div className="hidden lg:flex items-center">
            <Link
              href="/quote"
              className="bg-primary-blue text-white px-5 py-2.5 rounded-lg text-sm font-medium hover:bg-blue-700 transition-colors duration-200 flex items-center shadow-lg hover:shadow-xl whitespace-nowrap"
            >
              <Quote className="h-4 w-4 mr-2" />
              Get a Free Quote
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <button
              onClick={toggleMenu}
              className="text-gray-700 hover:text-blue-600 p-2 rounded-lg hover:bg-gray-50"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-white border-t">
              {navigation.map((item) => {
                const IconComponent = getIcon(item.icon);
                return (
                  <div key={item.name}>
                    <button
                      onClick={() => item.dropdown && toggleDropdown(item.name)}
                      className="flex items-center justify-between w-full text-left text-gray-700 hover:text-primary-blue px-4 py-3 text-base font-medium rounded-lg hover:bg-gray-50"
                    >
                      <div className="flex items-center">
                        <IconComponent className="h-4 w-4 mr-3" />
                        {item.name}
                      </div>
                      {item.dropdown && (
                        <ChevronDown
                          className={cn(
                            'h-4 w-4 transition-transform duration-200',
                            activeDropdown === item.name && 'rotate-180'
                          )}
                        />
                      )}
                    </button>
                    {item.dropdown && activeDropdown === item.name && (
                      <div className="pl-4 space-y-1">
                        {item.dropdown.map((dropdownItem) => {
                          const DropdownIcon = getIcon(dropdownItem.icon);
                          return (
                            <Link
                              key={dropdownItem.name}
                              href={dropdownItem.href}
                              className="flex items-center text-gray-600 hover:text-primary-blue px-4 py-2.5 text-sm rounded-lg hover:bg-gray-50"
                            >
                              <DropdownIcon className="h-4 w-4 mr-3" />
                              {dropdownItem.name}
                            </Link>
                          );
                        })}
                      </div>
                    )}
                  </div>
                );
              })}
              <div className="pt-4 border-t border-gray-100">
                <Link
                  href="/quote"
                  className="flex items-center bg-primary-blue text-white px-4 py-3 rounded-lg text-base font-medium hover:bg-blue-700 transition-colors duration-200"
                >
                  <Quote className="h-5 w-5 mr-3" />
                  Get a Free Quote
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
