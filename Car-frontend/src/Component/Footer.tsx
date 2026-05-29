import React from 'react';
import logo from '../assets/logo.png';
import { 
  FaFacebook,  
  FaTwitter, 
  FaLinkedin, 
  FaEnvelope
} from 'react-icons/fa';

const LuxAutoFooter: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black text-gray-400 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          
          {/* Brand Section */}
          <div className="col-span-1 md:col-span-1">
            <img src={logo} alt="LuxAuto Logo" className="h-10 w-auto mb-4" />
            <h2 className="text-2xl font-bold bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent mb-3">
              LuxAuto
            </h2>
            <p className="text-sm text-gray-500">
              Crafting luxury automotive experiences since 2012.
            </p>
          </div>

          {/* Connect Section (empty based on your content, but kept for structure) */}
          <div className="col-span-1">
  <h3 className="text-white font-semibold mb-4">Connect</h3>
  <ul className="text-gray-400 space-y-2 text-sm inline-flex space-x-4">
    <li>
      <a href="https://facebook.com" className="hover:text-white transition">
        <FaFacebook />
      </a>
    </li>
    <li>
      <a href="https://twitter.com" className="hover:text-white transition">
        <FaTwitter />
      </a>
    </li>
    <li>
      <a href="https://linkedin.com" className="hover:text-white transition">
        <FaLinkedin />
      </a>
    </li>
    <li>
      <a href="mailto:hello@example.com" className="hover:text-white transition">
        <FaEnvelope />  
      </a>
    </li>
  </ul>
</div>


          {/* Quick Links Section */}
          <div className="col-span-1">
            <h3 className="text-white font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {['Home', 'Inventory', 'About', 'Services', 'Contact'].map((link) => (
                <li key={link}>
                  <a
                    href={`/${link.toLowerCase()}`}
                    className="text-sm text-gray-400 hover:text-white transition-colors duration-200"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Policies Section */}
          <div className="col-span-1">
            <h3 className="text-white font-semibold mb-4">Policies</h3>
            <ul className="space-y-2">
              {['Terms of Service', 'Privacy Policy', 'Cookie Policy'].map((policy) => (
                <li key={policy}>
                  <a
                    href={`/${policy.toLowerCase().replace(/\s+/g, '-')}`}
                    className="text-sm text-gray-400 hover:text-white transition-colors duration-200"
                  >
                    {policy}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Copyright Section */}
        <div className="pt-8 mt-4 border-t border-gray-800 text-center text-sm text-gray-500">
          <p>© {currentYear} LuxAuto Motors. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default LuxAutoFooter;