import React from 'react';
import { motion } from 'framer-motion';

const SkillSection = () => {
  const skills = [
    { name: 'HTML5', icon: 'devicon-html5-plain' },
    { name: 'CSS3', icon: 'devicon-css3-plain' },
    { name: 'JavaScript', icon: 'devicon-javascript-plain' },
    { name: 'Tailwind CSS', icon: 'devicon-tailwindcss-plain' },
    { name: 'React.js', icon: 'devicon-react-original' },
    { name: 'Next.js', icon: 'devicon-nextjs-original' },
    { name: 'Node.js', icon: 'devicon-nodejs-plain' },
    { name: 'Git', icon: 'devicon-git-plain' },
    { name: 'MongoDB', icon: 'devicon-mongodb-plain' },
    { name: 'TypeScript', icon: 'devicon-typescript-plain' }
  ];

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  return (
    <section className="py-16 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Technologies Maîtrisées
          </h2>
          <div className="h-1 w-20 bg-blue-500 mx-auto rounded-full"></div>
        </div>

        <motion.div 
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 max-w-6xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="group"
            >
              <div className="bg-white rounded-xl shadow-lg p-6 transform transition-all duration-300 hover:scale-105 hover:shadow-xl">
                <div className="flex flex-col items-center space-y-4">
                  <div className="w-16 h-16 flex items-center justify-center rounded-lg bg-gray-50 group-hover:bg-blue-50 transition-colors duration-300">
                    <i className={`${skill.icon} text-4xl text-blue-500`}></i>
                  </div>
                  <span className="font-medium text-gray-700 group-hover:text-blue-600 transition-colors duration-300">
                    {skill.name}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default SkillSection;