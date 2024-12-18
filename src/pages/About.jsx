import React from 'react';
import { motion } from 'framer-motion';
import { Target, Award, MessageCircle, Clock, ChevronRight } from 'lucide-react';
import AboutSection from './AboutSection';
import ExperienceTimeline from './ProfessionalExperience';

const About = () => {
  const values = [
    { 
      title: 'Innovation', 
      description: 'Explorer de nouvelles idées et repousser les frontières technologiques pour offrir des solutions web et mobiles innovantes qui transforment les expériences utilisateur.',
      icon: Target,
      color: 'bg-gradient-to-br from-teal-500 to-teal-700'
    },
    { 
      title: 'Qualité', 
      description: 'Fournir des applications robustes et performantes grâce à une attention méticuleuse aux détails, garantissant une évolutivité et une maintenabilité optimales.',
      icon: Award,
      color: 'bg-gradient-to-br from-purple-500 to-purple-700'
    },
    { 
      title: 'Communication', 
      description: 'Établir des échanges transparents et proactifs pour assurer une compréhension parfaite des besoins, tout en garantissant une collaboration fluide et efficace.',
      icon: MessageCircle,
      color: 'bg-gradient-to-br from-indigo-500 to-indigo-700'
    },
    { 
      title: 'Fiabilité', 
      description: 'S’engager à respecter les délais tout en dépassant les attentes, en offrant des résultats constants et une satisfaction client garantie.',
      icon: Clock,
      color: 'bg-gradient-to-br from-pink-500 to-pink-700'
    }
  ];
  
  return (
   <>
   <AboutSection />
    <div className="bg-gray-50 dark:bg-gray-900 py-16">
      
      <div className="container mx-auto px-4 max-w-6xl">
        <motion.h2 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-extrabold text-center mb-16 text-gray-800 dark:text-white"
        >
          Mes Valeurs Professionnelles
        </motion.h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ 
                delay: index * 0.2,
                type: "spring",
                stiffness: 100
              }}
              className="group"
            >
              <div className="relative transform transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl">
                <div className={`absolute -inset-0.5 ${value.color} rounded-2xl opacity-50 group-hover:opacity-75 transition-all duration-300 blur-lg`}></div>
                
                <div className="relative bg-white dark:bg-gray-800 rounded-2xl p-8 space-y-6 h-full flex flex-col">
                  <div className={`w-16 h-16 ${value.color} rounded-full flex items-center justify-center mb-4 transform transition-transform group-hover:rotate-6`}>
                    <value.icon className="text-white w-8 h-8" />
                  </div>
                  
                  <div className="flex-grow">
                    <h3 className="text-xl font-bold mb-4 text-gray-800 dark:text-white">
                      {value.title}
                    </h3>
                    <p className="text-gray-600  dark:text-gray-300 mb-6">
                      {value.description}
                    </p>
                  </div>
                  
                  
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
    <ExperienceTimeline />
   </>
  );
};

export default About;