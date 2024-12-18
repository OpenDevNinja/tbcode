import React from 'react';
import { motion } from 'framer-motion';
import { Users, Briefcase, Star, Code, Target, Zap } from 'lucide-react';
import imgAbout from "../assets/cap.png";

const StatCard = ({ icon: Icon, value, label }) => {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      className="relative p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg"
    >
      <div className="absolute -top-6 left-6">
        <div className="p-3 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-lg shadow-lg">
          <Icon className="text-white" size={20} />
        </div>
      </div>
      <div className="mt-6 text-center">
        <h4 className="text-2xl font-bold text-gray-900 dark:text-white mb-1">{value}</h4>
        <p className="text-sm text-gray-600 dark:text-gray-300">{label}</p>
      </div>
    </motion.div>
  );
};

const ExpertiseCard = ({ icon: Icon, title, description }) => {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      className="p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg"
    >
      <div className="inline-flex items-center justify-center p-3 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-lg shadow-lg mb-4">
        <Icon className="text-white" size={20} />
      </div>
      <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">{title}</h3>
      <p className="text-gray-600 dark:text-gray-300">{description}</p>
    </motion.div>
  );
};

const AboutSection = () => {
  const stats = [
    { 
      icon: Users,
      value: "50+",
      label: "Clients Satisfaits"
    },
    {
      icon: Briefcase,
      value: "100+",
      label: "Projets Livrés"
    },
    {
      icon: Star,
      value: "5+",
      label: "Années d'Expérience"
    }
  ];

  const expertise = [
    {
      icon: Code,
      title: "Développement Expert",
      description: "Solutions web modernes avec les dernières technologies et frameworks"
    },
    {
      icon: Target,
      title: "Solutions Sur-Mesure",
      description: "Développement personnalisé adapté à vos objectifs business"
    },
    {
      icon: Zap,
      title: "Performance Optimale",
      description: "Applications optimisées pour une expérience utilisateur exceptionnelle"
    }
  ];

  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 bg-indigo-100 dark:bg-indigo-900 text-indigo-600 dark:text-indigo-300 rounded-full text-sm font-semibold mb-4">
          QUI-SUIS JE ?
          </span>
         {/*  <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Transformez vos idées en réalité digitale
          </h2> */}
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Expert en développement web Fullstack, Consultant en Solutions Numériques, passionné par la création de solutions innovantes et les IA
          </p>
        </motion.div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-12  mb-20">
          {/* Image Side */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative z-10 rounded-xl overflow-hidden shadow-xl">
              <img 
                src={imgAbout}
                alt="Portrait professionnel"
                className="w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-indigo-600/20 to-purple-600/20"></div>
            </div>
            {/* Decorative background */}
            <div className="absolute -top-4 -right-4 w-72 h-72 bg-gradient-to-r from-indigo-600/10 to-purple-600/10 rounded-full blur-3xl"></div>
          </motion.div>

          {/* Content Side */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                Expertise & Vision
              </h3>
              <p className="text-gray-600 dark:text-gray-300 ">
              {/*   Passionné par les nouvelles technologies, je m'engage à créer des solutions web 
                qui combinent excellence technique et expérience utilisateur intuitive. Ma mission 
                est de vous accompagner dans votre transformation digitale avec des solutions 
                innovantes et sur-mesure. */}

Animé par une passion profonde pour l'innovation technologique, je suis dédié à propulser les entreprises dans l'ère digitale grâce à des solutions web audacieuses et personnalisées. Mon approche est simple : comprendre vos besoins uniques, anticiper les attentes de vos utilisateurs,
 et transformer vos idées en expériences digitales captivantes et performantes.
 <br />
 Chaque projet est pour moi l’opportunité de repousser les limites de la technologie pour offrir un produit aussi puissant qu’élégant. De la conception à la mise en œuvre, je m'engage à fournir des solutions qui allient précision technique, intuitivité et esthétique. Mon but ? Vous offrir un avantage compétitif solide, avec des outils digitaux qui non seulement fonctionnent, mais qui marquent les esprits.
              </p>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-3 gap-6  pt-10">
              {stats.map((stat, index) => (
                <StatCard key={index} {...stat} />
              ))}
            </div>

            {/* CTA */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-medium rounded-lg shadow-lg hover:shadow-xl transition-shadow"
            >
              Démarrer un projet
              <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </motion.button>
          </motion.div>
        </div>

        {/* Expertise Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-3 gap-8"
        >
          {expertise.map((item, index) => (
            <ExpertiseCard key={index} {...item} />
          ))}
        </motion.div>

        {/* Testimonial */}
        {/* <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-20 p-8 bg-white dark:bg-gray-800 rounded-xl shadow-xl"
        >
          <div className="flex items-center space-x-4 mb-6">
            <div className="p-3 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-lg shadow-lg">
              <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M4.583 17.321C3.553 16.227 3 15 3 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 01-3.5 3.5c-1.073 0-2.099-.49-2.748-1.179zm10 0C13.553 16.227 13 15 13 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 01-3.5 3.5c-1.073 0-2.099-.49-2.748-1.179z"/>
              </svg>
            </div>
            <h4 className="text-xl font-bold text-gray-900 dark:text-white">
              Témoignage Client
            </h4>
          </div>
          <blockquote className="text-gray-600 dark:text-gray-300 italic mb-4">
            "Un développeur exceptionnel qui allie expertise technique et compréhension business. 
            Son approche professionnelle et ses solutions innovantes ont dépassé nos attentes."
          </blockquote>
          <footer className="text-right">
            <cite className="block text-gray-900 dark:text-white font-medium not-italic">
              Pierre Durand
            </cite>
            <span className="text-sm text-gray-600 dark:text-gray-400">
              CEO, TechInnovate
            </span>
          </footer>
        </motion.div> */}
      </div>
    </section>
  );
};

export default AboutSection;