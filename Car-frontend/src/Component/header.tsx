import React, { useState } from 'react';
import logo from '../assets/logo.png';

interface NavItem {
  label: string;
  href: string;
}

const navItems: NavItem[] = [
  { label: 'Home', href: '/' },
  { label: 'Inventory', href: '/inventory' },
  { label: 'About', href: '/about' },
  { label: 'Services', href: '/services' },
  { label: 'Contact', href: '/contact' },
];

const Navbar: React.FC = () => {
  const [activeItem, setActiveItem] = useState<string>('Home');
  const [open, setOpen] = useState<boolean>(false);

  return (
    <nav className="relative w-full bg-black px-6 py-4">

      <div className="max-w-[1400px] mx-auto flex items-center justify-between">

        {/* Logo */}
        <div className="flex items-center">
          <img src={logo} alt="LuxAuto Logo" className="h-8 w-auto " />
          <a href="/" className="ml-2 text-lg font-bold text-white">
            LuxAuto
          </a>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8 absolute left-1/2 -translate-x-1/2">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              onClick={(e) => {
                e.preventDefault();
                setActiveItem(item.label);
              }}
              className={`text-sm font-medium transition-colors duration-200
                ${activeItem === item.label
                  ? 'text-white'
                  : 'text-white/70 hover:text-white'
                }`}
            >
              {item.label}
            </a>
          ))}
        </div>

        {/* Mobile Button */}
        <button
          className="md:hidden text-white text-2xl"
          onClick={() => setOpen(!open)}
        >
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden mt-4 flex flex-col space-y-4 px-6 pb-4">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              onClick={(e) => {
                e.preventDefault();
                setActiveItem(item.label);
                setOpen(false);
              }}
              className={`text-sm font-medium
                ${activeItem === item.label ? 'text-white' : 'text-white/70'}
              `}
            >
              {item.label}
            </a>
          ))}
        </div>
      )}

      {/* Gradient Divider Line (NO BORDER USED) */}
      <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>

    </nav>
  );
};

export default Navbar;