import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Twitter, 
  Linkedin, 
  Github, 
 
  Mail, 
  Phone, 
  MapPin 
} from 'lucide-react';
import { motion } from 'framer-motion';
import TBCode from './TBCode';

const Footer = () => {
  return (
    <>
      {/* Dark Mode Footer */}
      <footer className="bg-secondary-dark text-white py-12">
        <div className="container mx-auto px-4">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-1 md:grid-cols-4 gap-8"
          >
            <div>
              <Link
                to="/"
                className="group flex items-center gap-2 transition-all duration-300 hover:scale-105"
              >
                <TBCode />
                  </Link>
              <p className="text-paragraph mt-4">
                Solutions expertes de développement web et mobile pour les besoins de votre entreprise.
              </p>
            </div>
            <div>
              <h4 className="text-lg font-heading font-semibold mb-4 text-sand-light">
                Liens rapides
              </h4>
              <ul className="space-y-2">
                {[
                  { to: "/about", label: "À Propos" },
                  { to: "/portfolio", label: "Portfolio" },
                  { to: "/contact", label: "Contact" }
                ].map((link) => (
                  <motion.li 
                    key={link.to}
                    whileHover={{ translateX: 5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <Link 
                      to={link.to} 
                      className="text-paragraph hover:text-sand transition-colors duration-200"
                    >
                      {link.label}
                    </Link>
                  </motion.li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-heading font-semibold mb-4 text-sand-light">
                Contact
              </h4>
              <ul className="space-y-3">
                {[
                  { icon: Mail, text: "toybonadev@gmail.com" },
                  { icon: Phone, text: "+229 01 66 47 67 67 / 01 48 44 44 08" },
                  { icon: MapPin, text: "Abomey-Calavi, Bénin" }
                ].map((contact, index) => (
                  <li 
                    key={index} 
                    className="flex items-center text-[15px] gap-3 text-paragraph"
                  >
                    <contact.icon size={20} className="text-accent" />
                    {contact.text}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-heading font-semibold mb-4 text-sand-light">
                Suivez-nous
              </h4>
              <div className="flex space-x-4">
                {[
                  
                  { icon: Linkedin, href: "https://www.linkedin.com/in/toyibonaventure" },
                  { icon: Github, href: "https://github.com/OpenDevNinja" }
                ].map((social) => (
                  <motion.a
                    key={social.href}
                    href={social.href}
                    whileHover={{ scale: 1.2 }}
                    whileTap={{ scale: 0.9 }}
                    target='_blank'
                    className="text-paragraph hover:text-sand transition-colors duration-200"
                  >
                    <social.icon size={24} />
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>
          <div className="border-t border-secondary mt-8 pt-8 text-center">
            <motion.p 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="text-paragraph"
            >
              © 2024 NumSphere. Tous droits réservés.
            </motion.p>
          </div>
        </div>
      </footer>

    
    </>
  );
};

export default Footer;