import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, Award, GraduationCap, Book } from 'lucide-react';

const AcademicTimeline = () => {
  const academicPath = [
    {
      degree: "Licence en Systèmes des Informations et Réseaux Informatiques",
      institution: "Institut de Formation et de Recherche en Informatique",
      period: "Novembre 2019",
      location: "Abomey-Calavi",
      status: "En Instance de Soutenance",
      icon: Award,
      highlights: [
        "Spécialisation en systèmes d'information et réseaux",
        "Projet de fin d'études axé sur les technologies émergentes",
        "Développement de compétences en analyse et conception de systèmes"
      ]
    },
    {
      degree: "BTS en Informatique de Gestion",
      institution: "ESCAE-BÉNIN",
      period: "Octobre 2015 - Décembre 2017",
      location: "Abomey-Calavi",
      icon: GraduationCap,
      highlights: [
        "Formation approfondie en gestion informatique",
        "Développement de compétences en gestion de projets numériques",
        "Apprentissage des méthodes de management des systèmes d'information"
      ]
    },
    {
      degree: "Licence 1 en Mathématique Informatique Appliquée",
      institution: "Fast-UAC",
      period: "Octobre 2015",
      location: "Abomey-Calavi",
      icon: Book,
      highlights: [
        "Bases solides en mathématiques appliquées",
        "Introduction aux algorithmes et méthodes computationnelles",
        "Développement du raisonnement logique et analytique"
      ]
    },
    {
      degree: "Baccalauréat Série C",
      institution: "CEG 1 Ouidah",
      period: "Juillet 2013",
      location: "Ouidah",
      icon: Book,
      highlights: [
        "Formation scientifique classique",
        "Développement des compétences en mathématiques et sciences",
        "Préparation aux études supérieures en informatique"
      ]
    }
  ];

  const IconComponent = ({ academic }) => {
    const Icon = academic.icon;
    return (
      <div className="flex-shrink-0">
        <div className="bg-purple-500 dark:bg-purple-700 text-white p-4 rounded-full flex items-center justify-center">
          <Icon size={24} />
        </div>
      </div>
    );
  };

  return (
    <div className="bg-white dark:bg-secondary-dark rounded-lg shadow-medium dark:shadow-hard w-full max-w-4xl mx-auto p-8 md:p-12">
      <div className="flex items-center justify-between mb-8">
        <h2 className="text-2xl font-heading font-bold text-purple-500 uppercase dark:text-white">
          Parcours Académique
        </h2>
        <div className="flex items-center space-x-4">
          <Calendar size={24} className="text-purple-500 dark:text-purple-400" />
          <p className="text-gray-600 dark:text-white">Dernière mise à jour</p>
        </div>
      </div>
      <div className="space-y-12">
        {academicPath.map((academic, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2 }}
            className="flex items-start space-x-6"
          >
            <IconComponent academic={academic} />
            <div className="flex-1">
              <h3 className="text-lg font-heading font-bold text-primary-dark dark:text-white">
                {academic.degree}
              </h3>
              <div className="flex items-center space-x-2 mb-2">
                <Calendar size={18} className="text-purple-500 dark:text-purple-400" />
                <p className="text-gray-600 dark:text-white">{academic.period}</p>
              </div>
              <p className="text-accent font-medium dark:text-accent-light mb-2">
                {academic.institution} | {academic.location}
              </p>
              {academic.status && (
                <p className="text-accent-light italic mb-2">
                  {academic.status}
                </p>
              )}
              <ul className="list-disc pl-6 space-y-2 text-gray-600 dark:text-white">
                {academic.highlights.map((highlight, highIndex) => (
                  <li key={highIndex}>{highlight}</li>
                ))}
              </ul>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default AcademicTimeline;