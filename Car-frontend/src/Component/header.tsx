import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../assets/logo.png';
import { FaUserCircle } from "react-icons/fa";
import Signin from "../Component/Authentication/Signin";
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
  const [open, setOpen] = useState(false);

  return (
    <nav className="relative w-full bg-black px-6 py-4">
      <div className="max-w-[1400px] mx-auto flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center">
          <img
            src={logo}
            alt="LuxAuto Logo"
            className="h-8 w-auto"
          />
          <NavLink
            to="/"
            className="ml-2 text-lg font-bold text-white"
          >
            LuxAuto
          </NavLink>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8 absolute left-1/2 -translate-x-1/2">
          {navItems.map((item) => (
            <NavLink
              key={item.label}
              to={item.href}
              end={item.href === '/'}
              className={({ isActive }) =>
                `text-sm font-medium transition-colors duration-200 ${isActive
                  ? 'text-white'
                  : 'text-white/70 hover:text-white'
                }`
              }
            >
              {item.label}
            </NavLink>
          ))}
        </div>

        {/* Sign In */}
        <div className="hidden md:flex items-center">
          <NavLink
            to="/signin"
            className={({ isActive }) =>
              `inline-flex items-center gap-2 text-sm font-medium transition-colors duration-200 ${isActive
                ? 'text-white'
                : 'text-white/70 hover:text-white'
              }`
            }
          >
            <button className="border-gray-500 border px-3 py-1 rounded-md flex items-center gap-1">
              <FaUserCircle className="text-lg" />
              Sign in
            </button>
          </NavLink>
        </div>

        {/* Mobile Menu Button */}
        <button
          aria-label="Toggle menu"
          className="md:hidden text-white text-2xl"
          onClick={() => setOpen(!open)}
        >
          {open ? '✕' : '☰'}
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden mt-4 flex flex-col space-y-4 px-6 pb-4">
          {navItems.map((item) => (
            <NavLink
              key={item.label}
              to={item.href}
              end={item.href === '/'}
              onClick={() => setOpen(false)}
              className={({ isActive }) =>
                `text-sm font-medium ${isActive
                  ? 'text-white'
                  : 'text-white/70 hover:text-white'
                }`
              }
            >
              {item.label}
            </NavLink>
          ))}

          <NavLink
            to="/signin"
            onClick={() => setOpen(false)}
            className={({ isActive }) =>
              `text-sm font-medium ${isActive
                ? 'text-white'
                : 'text-white/70 hover:text-white'
              }`
            }
          >
            Sign in
            
          </NavLink>
        </div>
      )}

      {/* Bottom Gradient Line */}
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
    </nav>
  );
};

export default Navbar;