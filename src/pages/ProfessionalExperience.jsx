import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, Code, Server, Monitor } from 'lucide-react';
import AcademicTimeline from './AcademicJourney';

const ExperienceTimeline = () => {
 
  const experiences = [
    {
      title: "Développeur Réact/React Native",
      company: "Code Lab",
      period: "Depuis juin 2024",
      location: "Abomey-Calavi",
      icon: Code,
      type: "Mobile & Web Development",
      responsibilities: [
        "Conception et développement d'applications iOS et Android utilisant React Native",
        "Intégration de fonctionnalités avancées telles que la géolocalisation et les notifications push",
        "Utilisation de Redux ou Context API pour la gestion d'état",
        "Création d'interfaces modernes avec React.js et Material-UI",
        "Intégration d'API RESTful et utilisation d'Axios pour les appels réseau",
        "Collaboration avec une équipe en utilisant Git et GitHub"
      ]
    },
    {
      title: "Développeur Full-stack",
      company: "DIGITON SERVICES",
      period: "Mai 2023 - Mars 2024",
      location: "Cotonou",
      icon: Server,
      type: "Full-Stack Solutions",
      responsibilities: [
        "Développement de solutions web et mobiles avec React.js, React Native et Node.js",
        "Conception et optimisation de bases de données MySQL et MongoDB",
        "Implémentation de workflows agiles avec Git et tests unitaires",
        "Déploiement sur des environnements multiples et monitoring des performances"
      ]
    },
    {
      title: "Développeur Backend",
      company: "3D Technology",
      period: "Juillet 2022 - Août 2022",
      location: "Cotonou",
      icon: Monitor,
      type: "Backend Development",
      responsibilities: [
        "Conception et développement d'APIs RESTful avec Node.js et Express.js",
        "Mise en place d'architectures backend performantes",
        "Optimisation des requêtes et intégration de Redis pour le cache",
        "Implémentation de solutions de sécurité (JWT, OAuth)"
      ]
    },
    {
      title: "Informaticien",
      company: "Bénin Fintech",
      period: "Juin 2022 - Juillet 2022",
      location: "Cotonou",
      icon: Monitor,
      type: "Technical Support",
      responsibilities: [
        "Diagnostic et résolution de problèmes techniques",
        "Accompagnement et formation des utilisateurs",
        "Application des bonnes pratiques de sécurité informatique"
      ]
    },
    {
      title: "Assistant Développeur Web",
      company: "Sook Services",
      period: "Juillet 2019 - Juillet 2021",
      location: "Abomey-Calavi",
      icon: Code,
      type: "Web Development",
      responsibilities: [
        "Intégration de maquettes graphiques (HTML, CSS, JS)",
        "Développement d'extensions spécifiques et maintenance technique",
        "Mise en ligne des projets numériques"
      ]
    },
    {
      title: "Développeur Web (Stage Académique)",
      company: "PERO GROUPE",
      period: "Mai 2019 - Juillet 2019",
      location: "Cotonou",
      icon: Code,
      type: "Web Development",
      responsibilities: [
        "Conception de la partie front-end et back-end",
        "Intégration des maquettes graphiques",
        "Mise en ligne du site web"
      ]
    },
    {
      title: "Formateur en Informatique",
      company: "SETECH-BENIN",
      period: "Juin 2016 - Juin 2017",
      location: "Cotonou",
      icon: Calendar,
      type: "Technical Training",
      responsibilities: [
        "Formation en maintenance informatique et communication digitale",
        "Gestion de projets informatiques",
        "Encadrement d'apprenants en développement (WinDev)"
      ]
    }
  ];
  
  const IconComponent = ({ experience }) => {
    const Icon = experience.icon;
    return (
      <div className="flex-shrink-0">
        <div className="bg-purple-500  text-white p-4 rounded-full flex items-center justify-center">
          <Icon size={24} />
        </div>
      </div>
    );
  };

  return (

    <>
    <AcademicTimeline />
    <div className="bg-white dark:bg-secondary-dark rounded-lg shadow-medium dark:shadow-hard w-full max-w-4xl mx-auto mt-5 p-8 md:p-12">
      <div className="flex items-center justify-between mb-8">
        <h2 className="text-2xl font-heading font-bold text-purple-500 dark:text-white">
        MON PARCOURS PROFESSIONNEL
        </h2>
        <div className="flex items-center space-x-4">
          <Calendar size={24} className="text-purple-500  dark:text-purple-500 " />
          <p className="text-gray-600 dark:text-white">Dernière mise à jour</p>
        </div>
      </div>
      <div className="space-y-12">
        {experiences.map((experience, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2 }}
            className="flex items-start space-x-6"
          >
            <IconComponent experience={experience} />
            <div className="flex-1">
              <h3 className="text-lg font-heading font-bold text-primary-dark dark:text-white">
                {experience.title} - {experience.company}
              </h3>
              <div className="flex items-center space-x-2 mb-2">
                <Calendar size={18} className="text-purple-500  dark:text-purple-500 " />
                <p className="text-gray-600 dark:text-white">{experience.period}</p>
              </div>
              <p className="text-accent font-medium dark:text-accent-light mb-2">
                {experience.location} | {experience.type}
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-600 dark:text-white">
                {experience.responsibilities.map((responsibility, respIndex) => (
                  <li key={respIndex}>{responsibility}</li>
                ))}
              </ul>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
    </>
   
  );
};

export default ExperienceTimeline;