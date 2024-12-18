import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Eye, Github, Star, Code, Layout, Smartphone, Palette } from 'lucide-react';

import energy from "../assets/portfolio/energy.png";
import usodev from "../assets/portfolio/usodev.png";
import scs from "../assets/portfolio/scs.png";

import appMcr from "../assets/portfolio/app_mcr.jpeg";

import mcr from "../assets/portfolio/mcr.png";
import livraison from "../assets/portfolio/livr.jpg";
import constructionImage from "../assets/portfolio/btp.png";

const Card = ({ children, className, ...props }) => (
  <div
    className={`bg-white dark:bg-gray-800 rounded-xl shadow-lg ${className}`}
    {...props}
  >
    {children}
  </div>
);

const CardContent = ({ children, className, ...props }) => (
  <div className={`p-6 ${className}`} {...props}>
    {children}
  </div>
);

const Badge = ({ children, variant = 'primary', className, ...props }) => (
  <span
    className={`inline-block px-3 py-1 rounded-full text-xs font-medium ${
      variant === 'primary'
        ? 'bg-indigo-100 dark:bg-indigo-900 text-indigo-600 dark:text-indigo-300'
        : 'bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300'
    } ${className}`}
    {...props}
  >
    {children}
  </span>
);

const PortfolioSection = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [selectedProject, setSelectedProject] = useState(null);
  const [displayedProjects, setDisplayedProjects] = useState(6);

  const filters = [
    { id: 'all', label: 'Tous les projets', icon: Layout },
    { id: 'web', label: 'Applications Web', icon: Code },
    { id: 'mobile', label: 'Applications Mobiles', icon: Smartphone },
  ];

  const projects = [
    {
      id: 7,
      title: "Entreprise de Construction Générale",
      category: "web",
      image: constructionImage,
      description: "Site web de gestion de projets pour une entreprise de BTP, permettant de suivre les chantiers, gérer les devis, les factures, et les délais de construction tout en offrant une interface de communication avec les clients.",
      technologies: ["React", "TailwindCSS", "Node.js", "MongoDB", "Express"],
      liveUrl: "https://btp-delta.vercel.app/",
      githubUrl: "/",
      features: [
        "Suivi des projets en temps réel avec tableau de bord interactif",
        "Gestion des devis et factures des projets de construction",
        "Notifications automatiques des dates de début et de fin des travaux",
        "Espace client pour consulter les documents et l'avancement des chantiers"
      ],
      stats: {
        stars: 312,
        forks: 68
      }
    },
    {
      id: 1,
      title: "Site de courtage énergétique",
      category: "web",
      image: energy,
      description: "Plateforme de courtage en énergie permettant aux utilisateurs de gérer leurs contrats énergétiques, d'optimiser leur consommation, et d'accéder à des solutions de trading énergétique avec des fonctionnalités avancées.",
      technologies: ["React", "TailwindCSS", "Node.js", "MongoDB", "Express"],
      liveUrl: "https://minfo-test.web.app/",
      githubUrl: "/",
      features: [
        "Authentification avec MetaMask pour un accès sécurisé",
        "Gestion des contrats énergétiques et optimisation de consommation",
        "Marketplace pour le trading d'énergie en temps réel",
        "Dashboard analytique pour suivre les performances et la consommation énergétique"
      ],
      stats: {
        stars: 245,
        forks: 45
      }
    },
    {
      id: 2,
      title: "Application Religieuse",
      category: "mobile",
      image: appMcr,
      description: "Application mobile religieuse avec méditations guidées, diffusion de lives, formations et contenus hebdomadaires pour accompagner les fidèles dans leur foi.",
      technologies: ["React Native", "Firebase", "Redux", "Expo","Node.js", "MongoDB", "Express"],
      liveUrl: "https://play.google.com/store/apps/details?id=com.opendennindja.rhema&hl=fr",
      githubUrl: "/",
      features: [
        "Notifications push pour les rappels et mises à jour",
        "Diffusions en direct pour les offices et événements",
        "Méditations et prières guidées",
        "Suivi des progrès spirituels et des sessions",
        "Contenus hebdomadaires et formations",
        "Mode hors ligne pour accéder aux contenus sans connexion",
        "Rappels personnalisés pour la prière et les événements",
        "Communauté intégrée pour l'échange et le soutien"
      ],
      stats: {
        users: "500+",
        rating: 4.8
      }
    },
    {
      id: 3,
      title: "Union pour la Solidarité et le Développement (USODEV)",
      category: "web",
      image: usodev,
      description: "L'association béninoise USODEV, située à Abomey-Calavi, qui facilite le suivi et l'évaluation de projets de développement en lien avec les Objectifs de Développement Durable (ODD). Cette plateforme permet à USODEV de gérer ses initiatives de manière transparente et d'évaluer l'impact de ses actions sur les communautés locales.",
      technologies: ["React",  "Node.js", "PostgreSQL", "Express"],
      liveUrl: "https://usodev.com/",
      githubUrl: "/",
      features: [
        "Visualisations en temps réel des indicateurs de développement",
        "Rapports automatisés pour les projets en cours",
        "Prédictions basées sur l'IA pour optimiser les ressources",
        "Export de données pour les rapports externes"
      ],
      stats: {
        stars: 245,
        forks: 45
      }
    },
    {
      id: 4,
      title: "Application de SCS Worker",
      category: "design",
      image: scs,
      description: "Prenez rendez-vous dès aujourd'hui et lancez-vous dans une aventure de services personnalisés et inclusifs pour les personnes atteintes de déficiences intellectuelles et de troubles du développement (DID).",
      technologies: ["React Native", "Node.js", "MongoDB", "Express"],
      liveUrl: "https://apps.apple.com/us/app/scs-worker/id6556688105",
      githubUrl: "/",
      features: [
        "Prise de rendez-vous facile pour les utilisateurs",
        "Suivi en temps réel des interventions et tâches",
        "Notifications push pour les rappels et mises à jour",
        "Accès sécurisé et gestion des profils utilisateurs",
        "Historique des services et interventions",
        "Tableau de bord analytique pour le suivi des progrès",
        "Support multilingue pour une meilleure accessibilité"
      ],      
      stats: {
        downloads: "100+",
        contributors: 35
      }
    },
    {
      id: 5,
      title: "App de Livraison Locale",
      category: "mobile",
      image: livraison,
      description: "Application mobile de livraison qui connecte les commerces locaux avec leurs clients, offrant une expérience de livraison rapide, sécurisée et pratique.",
      technologies: ["React Native", "Firebase", "Google Maps", "Stripe", "Expo", "TypeScript", "React Navigation", "React Hooks", "Redux", "Node.js", "MongoDB"],
      liveUrl: "",
      githubUrl: "/",
      features: [
        "Suivi de commande en temps réel grâce à la géolocalisation",
        "Paiement intégré et sécurisé avec Stripe",
        "Chat en direct entre clients et commerçants pour une communication fluide",
        "Programme de fidélité pour les clients réguliers",
        "Notifications push pour les mises à jour de commande",
        "Options de livraison express et planifiée",
        "Historique des commandes pour une gestion facile des achats",
        "Interface utilisateur intuitive et adaptée aux commerces locaux"
      ],
      stats: {
        merchants: "500+",
        deliveries: "10K+"
      }
    },
    {
      id: 6,
      title: "Plateforme Éducative Religieuse",
      category: "web",
      image: mcr,
      description: "Plateforme interactive pour l'apprentissage religieux en ligne, offrant des formations, des cours en direct, et des contenus personnalisés pour guider les utilisateurs dans leur parcours spirituel.",
      technologies: ["React.js", "Node.js", "MongoDB", "Express.js", "Next.js", "Tailwind CSS", "TypeScript"],
      liveUrl: "https://mcrhema.org/",
      githubUrl: "/",
      features: [
        "Cours en direct et en replay pour les enseignements religieux",
        "Sessions de méditation et prières guidées",
        "Formations en ligne et parcours spirituels personnalisés",
        "Quiz interactifs pour renforcer les connaissances religieuses",
        "Communauté en ligne pour échanger et poser des questions",
        "Rappels automatiques pour les événements et les sessions de prière"
      ],
      stats: {
        students: "100K+",
        courses: "1000+"
      }
    }
  ];

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  const ProjectCard = ({ project }) => (
    <motion.div
      layout
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="group relative overflow-hidden rounded-xl bg-white dark:bg-gray-800 shadow-lg hover:shadow-xl transition-all duration-300"
    >
       <div className="relative">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
          <button
            onClick={() => setSelectedProject(project)}
            className="w-full bg-white/90 dark:bg-gray-800/90 text-gray-900 dark:text-white py-2 rounded-lg flex items-center justify-center gap-2 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300"
          >
            <Eye size={18} />
            Voir les détails
          </button>
        </div>
      </div>
      <div className="p-6">
        <div className="flex items-center justify-between mb-3">
          <h3 className="text-xl font-bold text-gray-900 dark:text-white">
            {project.title}
          </h3>
          <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
            <Star size={16} />
            <span className="text-sm">{project.stats?.stars || project.stats?.rating}</span>
          </div>
        </div>
        <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-2">
          {project.description}
        </p>
        <div className="flex flex-wrap gap-2">
          {project.technologies.slice(0, 3).map((tech, index) => (
            <Badge
              key={index}
              variant="secondary"
              className="bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300"
            >
              {tech}
            </Badge>
          ))}
          {project.technologies.length > 3 && (
            <Badge variant="secondary" className="bg-gray-100 dark:bg-gray-700">
              +{project.technologies.length - 3}
            </Badge>
          )}
        </div>
      </div>
    </motion.div>
  );

  const ProjectModal = ({ project, onClose }) => (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm"
      onClick={onClose}
    >
       <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        className="bg-white dark:bg-gray-800 rounded-xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
        onClick={e => e.stopPropagation()}
      >
        <div className="relative">
          <img 
            src={project.image} 
            alt={project.title}
            className="w-full h-72 object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent">
            <div className="absolute bottom-0 left-0 p-8">
              <h3 className="text-3xl font-bold text-white mb-2">
                {project.title}
              </h3>
              <div className="flex items-center gap-4">
                {Object.entries(project.stats).map(([key, value]) => (
                  <div key={key} className="px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-white text-sm">
                    {key}: {value}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        
        <div className="p-8">
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
            {project.description}
          </p>
          
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <Card>
              <CardContent className="pt-6">
                <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                  Technologies utilisées
                </h4>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, index) => (
                    <Badge
                      key={index}
                      variant="secondary"
                      className="bg-indigo-100 dark:bg-indigo-900 text-indigo-600 dark:text-indigo-300"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="pt-6">
                <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                  Fonctionnalités clés
                </h4>
                <ul className="space-y-2">
                  {project.features.map((feature, index) => (
                    <li key={index} className="flex items-start gap-2 text-gray-600 dark:text-gray-300">
                      <Star size={16} className="mt-1 text-indigo-500" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>

          <div className="flex flex-wrap gap-4">
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-6 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition"
            >
              <ExternalLink size={18} />
              Voir en direct
            </a>
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-6 py-3 bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-white rounded-lg hover:bg-gray-200 dark:hover:bg-gray-600 transition"
            >
              <Github size={18} />
              Code source
            </a>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );

  return (
    <section id='portfolio' className="py-24 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-indigo-600 dark:text-white mb-6">
            Projets en vedette
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Découvrez une sélection de mes projets les plus innovants, démontrant mon expertise en développement web et mobile
          </p>
        </motion.div>

        <div className="flex flex-wrap justify-center gap-4 mb-16">
          {filters.map(filter => {
            const FilterIcon = filter.icon;
            return (
              <button
                key={filter.id}
                onClick={() => setActiveFilter(filter.id)}
                className={`flex items-center gap-2 px-6 py-3 rounded-full transition-all duration-300 ${
                  activeFilter === filter.id
                    ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-500/30'
                    : 'bg-white dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 hover:shadow'
                }`}
              >
                <FilterIcon size={18} />
                {filter.label}
              </button>
            );
          })}
        </div>

        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.slice(0, displayedProjects).map(project => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </AnimatePresence>
        </motion.div>

        {filteredProjects.length > displayedProjects && (
          <div className="flex justify-center mt-12">
            <button
              onClick={() => setDisplayedProjects(prev => prev + 3)}
              className="px-8 py-3 bg-indigo-600 text-white rounded-full hover:bg-indigo-700 transition-colors duration-300 flex items-center gap-2 shadow-lg hover:shadow-xl"
            >
              Voir plus de projets
              <Code size={18} />
            </button>
          </div>
        )}

        <AnimatePresence>
          {selectedProject && (
            <ProjectModal
              project={selectedProject}
              onClose={() => setSelectedProject(null)}
            />
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default PortfolioSection;