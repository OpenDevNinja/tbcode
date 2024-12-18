import React from 'react';
import { motion } from 'framer-motion';
import { Code, Smartphone, Database, Layout, Terminal, Cloud } from 'lucide-react';

const ServiceCard = ({ icon: Icon, title, description, tech }) => {
  return (
    <motion.div
      className="relative p-6 bg-white dark:bg-gray-800 rounded-xl shadow-xl"
      whileHover={{ y: -10 }}
    >
      <div className="absolute -top-6 left-6">
        <div className="p-4 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-lg shadow-lg">
          <Icon className="text-white" size={24} />
        </div>
      </div>
      <div className="mt-8">
        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">{title}</h3>
        <p className="text-gray-600 dark:text-gray-300 mb-4">{description}</p>
        <div className="border-t dark:border-gray-700 pt-4 mt-4">
          <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-2">Technologies :</h4>
          <div className="flex flex-wrap gap-2">
            {tech.map((item, index) => (
              <span
                key={index}
                className="px-3 py-1 text-sm bg-indigo-100 dark:bg-indigo-900 text-indigo-600 dark:text-indigo-300 rounded-full"
              >
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const ServicesSection = () => {
  const services = [
    {
      icon: Code,
      title: "Développement Web",
      description: "Applications web sur mesure construites avec des frameworks modernes et de bonnes pratiques.",
      tech: ["React", "JavaScript.js", "Node.js", "TypeScript", "Next.js"]
    },
    {
      icon: Smartphone,
      title: "Développement Mobile",
      description: "Applications mobiles cross-plateforme offrant des performances natives.",
      tech: ["React Native", "iOS", "Android", "PWA"]
    },
    {
      icon: Database,
      title: "Développement Backend",
      description: "Solutions backend évolutives et sécurisées pour vos applications.",
      tech: ["Node.js", "Python", "MongoDB", "PostgreSQL", "MySQL"]
    },
   /*  {
      icon: Layout,
      title: "Design UI/UX",
      description: "Design centré sur l'utilisateur pour créer des expériences engageantes.",
      tech: ["Figma", "Adobe XD", "Sketch", "Tailwind CSS", "Material-UI"]
    },
    {
      icon: Terminal,
      title: "DevOps",
      description: "Déploiement fluide et gestion d'infrastructure.",
      tech: ["Docker", "AWS", "CI/CD", "Kubernetes", "Jenkins"]
    },
    {
      icon: Cloud,
      title: "Solutions Cloud",
      description: "Applications et infrastructures cloud-natives.",
      tech: ["AWS", "Azure", "GCP", "Serverless", "Microservices"]
    } */
  ];

  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-900" id="services">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
  Des compétences qui favorisent le succès
</h2>
<p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
  Des solutions de développement complètes adaptées à vos besoins d'entreprise
</p>

        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;