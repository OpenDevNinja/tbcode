import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Menu, X, MessageSquareMore } from 'lucide-react';
import TBCode from './TBCode'; // Assuming this is your existing component

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const whatsappNumber = '+22966476760'; // Remplacez par votre numéro WhatsApp
  const whatsappMessage = 'Bonjour, je souhaiterais obtenir plus d\'informations.';

  const handleWhatsAppClick = () => {
    const encodedMessage = encodeURIComponent(whatsappMessage);
    window.open(`https://wa.me/${whatsappNumber}?text=${encodedMessage}`, '_blank');
  };

  return (
    <header className="sticky top-0 z-50 bg-background-light dark:bg-secondary shadow-soft dark:shadow-none">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <Link 
            to="/" 
            className="group flex items-center gap-2 transition-all duration-300 hover:scale-105"
          >
            <motion.div
              whileHover={{ rotate: 360 }}
              transition={{ duration: 0.6 }}
              className="flex items-center justify-center"
            >
              <TBCode/>
            </motion.div>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden lg:flex space-x-8 items-center">
            <Link to="/" className="text-primary dark:text-white hover:text-teal dark:hover:text-accent-light transition-colors duration-200">
              Accueil
            </Link>
            <a href="about" className="text-primary dark:text-white hover:text-teal dark:hover:text-accent-light transition-colors duration-200">
              À Propos
            </a>
            <a href="portfolio" className="text-primary dark:text-white hover:text-teal dark:hover:text-accent-light transition-colors duration-200">
              Portfolio
            </a>
           {/*  <a href="blog" className="text-primary dark:text-white hover:text-teal dark:hover:text-accent-light transition-colors duration-200">
              Blog
            </a> */}
            <a href="contact" className="text-primary dark:text-white hover:text-teal dark:hover:text-accent-light transition-colors duration-200">
              Contact
            </a>
            
            {/* WhatsApp Button - Desktop */}
            <motion.button
              onClick={handleWhatsAppClick}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-2 bg-teal text-white px-4 py-2 rounded-full shadow-lg  transition-colors duration-300"
            >
              <MessageSquareMore size={24} />
              <span className="font-medium">Chat with me</span>
            </motion.button>
          </div>

          {/* Mobile Menu and WhatsApp Button */}
          <div className="flex items-center lg:hidden space-x-4">
            {/* Mobile Menu Toggle */}
            <button
              className="p-2 rounded-md hover:bg-teal-light/10 dark:hover:bg-secondary-dark transition-colors duration-200"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} className="text-primary dark:text-white" /> : <Menu size={24} className="text-primary dark:text-white" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu with WhatsApp */}
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="lg:hidden mt-4 space-y-2"
          >
            <Link to="/" className="block py-2 text-primary dark:text-white hover:text-teal dark:hover:text-accent-light transition-colors duration-200">
              Accueil
            </Link>
            <a href="about" className="block py-2 text-primary dark:text-white hover:text-teal dark:hover:text-accent-light transition-colors duration-200">
            À Propos
            </a>
            <a href="portfolio" className="block py-2 text-primary dark:text-white hover:text-teal dark:hover:text-accent-light transition-colors duration-200">
              Portfolio
            </a>
           {/*  <a href="#blog" className="block py-2 text-primary dark:text-white hover:text-teal dark:hover:text-accent-light transition-colors duration-200">
              Blog
            </a> */}
            <a href="contact" className="block py-2 text-primary dark:text-white hover:text-teal dark:hover:text-accent-light transition-colors duration-200">
              Contact
            </a>
            
            {/* WhatsApp Button - Mobile */}
            <motion.button
              onClick={handleWhatsAppClick}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-full flex items-center justify-center gap-2 bg-teal text-white px-4 py-2 rounded-full shadow-lg  transition-colors duration-300"
            >
              <MessageSquareMore size={24} />
              <span className="font-medium">Chat with me</span>
            </motion.button>
          </motion.div>
        )}
      </nav>
    </header>
  );
};

export default Header;