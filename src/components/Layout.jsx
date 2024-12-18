import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Sun, Moon, Menu, X, Twitter, ChevronDown, CodeXml } from 'lucide-react';
import {  Linkedin, Phone, Mail } from 'lucide-react';

import { Link, Outlet } from 'react-router-dom';
import TBCode from './TBCode';
import Header from './Header';
import Footer from './Footer';

const Layout = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.documentElement.classList.toggle('dark');
  };
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className={`min-h-screen ${darkMode ? 'dark bg-background-dark' : 'bg-background-light'}`}>
      {/* TopBar */}
      <div className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white  px-4">
      <div className="container mx-auto px-4 py-2">
        {/* Mobile Header */}
        <div className="flex justify-between items-center md:hidden">
        <div className="space-y-4">     
                      <div className="flex items-center space-x-3 pb-3">
                <Mail size={20} />
                <a href="mailto:toybonadev@gmail.com" className="hover:text-gray-200">
                  toybonadev@gmail.com
                </a>
              </div>
            </div>

          <div className="flex items-center space-x-4">
            <a 
              href="https://www.linkedin.com/in/toyibonaventure" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="hover:text-gray-200"
            >
              <Linkedin size={20} />
            </a>
            
            <button
              onClick={toggleDarkMode}
              className="p-1 rounded-full hover:bg-white/20 transition-colors"
            >
             {/*  {darkMode ? '🌙' : '☀️'} */}
             {darkMode ? <Moon size={20} /> : <Sun size={20} />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {isMenuOpen && (
          <div className="md:hidden absolute left-0 right-0 bg-gradient-to-r from-indigo-700 to-purple-700 py-4 px-6 shadow-lg">
            <div className="space-y-4">
              <div className="flex items-center space-x-3 pb-3 border-b border-white/20">
                <Phone size={20} />
                <a href="tel:+2290166476760" className="hover:text-gray-200">
                  +229 01 66 47 67 60
                </a>
              </div>
              
              <div className="flex items-center space-x-3 pb-3 border-b border-white/20">
                <Mail size={20} />
                <a href="mailto:toybonadev@gmail.com" className="hover:text-gray-200">
                  toybonadev@gmail.com
                </a>
              </div>
            </div>
          </div>
        )}

        {/* Desktop Header */}
        <div className="hidden md:flex justify-between items-center">
          <div className="flex items-center space-x-6">
            <a 
              href="tel:+2290166476760" 
              className="flex items-center space-x-2 hover:text-gray-200"
            >
              <Phone size={20} />
              <span>+229 01 66 47 67 60</span>
            </a>
            
            <a 
              href="mailto:toybonadev@gmail.com" 
              className="flex items-center space-x-2 hover:text-gray-200"
            >
              <Mail size={20} />
              <span>toybonadev@gmail.com</span>
            </a>
          </div>

          <div className="flex items-center space-x-4">
            <a 
              href="https://www.linkedin.com/in/toyibonaventure" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="hover:text-gray-200"
            >
              <Linkedin size={20} />
            </a>
            
            <button
              onClick={toggleDarkMode}
              className="p-2 rounded-full hover:bg-white/20 transition-colors"
            >
           {/*    {darkMode ? '🌙' : '☀️'} */}
           {darkMode ? <Moon size={20} /> : <Sun size={20} />}
            </button>
          </div>
        </div>
      </div>
    </div>

      {/* Header */}
    <Header />

      <Outlet />

      {/* Footer */}
    <Footer />
    </div>
  );
};

export default Layout;