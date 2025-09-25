import Link from 'next/link';
import Image from 'next/image';
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  const quickLinks = [
    { name: 'Home', href: '/' },
    { name: 'About Us', href: '/about' },
    { name: 'Services', href: '/services' },
    { name: 'Sectors', href: '/sectors' },
    { name: 'Insulation Types', href: '/insulation' },
    { name: 'Blog', href: '/blog' },
    { name: 'Contact', href: '/contact' },
  ];

  const policies = [
    { name: 'Privacy Policy', href: '/privacy' },
    { name: 'Terms of Service', href: '/terms' },
    { name: 'Cookie Policy', href: '/cookies' },
    { name: 'Accessibility', href: '/accessibility' },
  ];

  const services = [
    { name: 'Loft Insulation Installation', href: '/services/loft-insulation-installation' },
    { name: 'Loft Clearance & Preparation', href: '/services/loft-clearance-preparation' },
    { name: 'Loft Boarding & Storage', href: '/services/loft-boarding-storage' },
    { name: 'Roof / Rafter Insulation', href: '/services/roof-rafter-insulation' },
    { name: 'Cavity Wall & Floor Insulation', href: '/services/cavity-wall-floor-insulation' },
    { name: 'Insulation Removal & Replacement', href: '/services/insulation-removal-replacement' },
  ];

  const importantLinks = [
    { name: 'Free Loft Insulation UK', href: '/free-loft-insulation-uk' },
    { name: 'Loft Insulation London', href: '/loft-insulation-london' },
    { name: 'Loft Insulation Leads', href: '/loft-insulation-leads' },
    { name: 'Loft Insulation Near Me', href: '/loft-insulation-near-me' },
  ];

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center">
              <div className="h-10 w-auto">
                <Image
                  src="/image.png"
                  alt="Loft Insulation Services"
                  width={120}
                  height={40}
                  className="h-full w-auto object-contain"
                />
              </div>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed">
              Your trusted partner for professional loft insulation services across the UK. 
              We connect you with certified installers for energy-efficient, cost-effective solutions.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors duration-200"
                aria-label="Facebook"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors duration-200"
                aria-label="Twitter"
              >
                <Twitter className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors duration-200"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors duration-200"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-300 hover:text-white transition-colors duration-200 text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Our Services</h3>
            <ul className="space-y-2">
              {services.slice(0, 6).map((service) => (
                <li key={service.name}>
                  <Link
                    href={service.href}
                    className="text-gray-300 hover:text-white transition-colors duration-200 text-sm"
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Important Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Important Links</h3>
            <ul className="space-y-2">
              {importantLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-300 hover:text-white transition-colors duration-200 text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-secondary-blue mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-gray-300 text-sm">
                    123 Business Street<br />
                    London, UK SW1A 1AA
                  </p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-secondary-blue flex-shrink-0" />
                <a
                  href="tel:+44123456789"
                  className="text-gray-300 hover:text-white transition-colors duration-200 text-sm"
                >
                  +44 123 456 789
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-secondary-blue flex-shrink-0" />
                <a
                  href="mailto:info@loftinsulationservices.co.uk"
                  className="text-gray-300 hover:text-white transition-colors duration-200 text-sm"
                >
                  info@loftinsulationservices.co.uk
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-gray-400 text-sm">
              © 2024 Loft Insulation Services. All rights reserved.
            </div>
            <div className="flex space-x-6">
              {policies.map((policy) => (
                <Link
                  key={policy.name}
                  href={policy.href}
                  className="text-gray-400 hover:text-white transition-colors duration-200 text-sm"
                >
                  {policy.name}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
