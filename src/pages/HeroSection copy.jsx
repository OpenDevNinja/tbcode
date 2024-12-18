import React from 'react';
import { motion } from 'framer-motion';
import { Code, Smartphone, Database } from 'lucide-react';

const HeroSection = () => {
  return (
    <div className="relative h-screen flex items-center overflow-hidden">
      {/* Fond avec dégradé en superposition */}
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-600/90 to-purple-600/90">
        <div className="absolute inset-0 bg-grid-white/[0.2] bg-[size:20px_20px]" />
      </div>

      <div className="container mx-auto px-4 z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Développeur Web Senior
              <span className="block text-yellow-400">& Expert Mobile</span>
            </h1>
            <p className="text-xl text-white/90 mb-8">
              Transformer des idées en solutions élégantes et évolutives. Spécialisé dans les applications web modernes
              et le développement mobile multiplateforme.
            </p>
            <div className="flex space-x-4">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-3 bg-white text-indigo-600 rounded-lg font-semibold hover:bg-yellow-400 transition"
              >
                Voir Portfolio
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-3 border-2 border-white text-white rounded-lg font-semibold hover:bg-white/10 transition"
              >
                Me Contacter
              </motion.button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="hidden lg:grid grid-cols-2 gap-4"
          >
            <div className="space-y-4">
              <motion.div
                whileHover={{ y: -5 }}
                className="p-6 bg-white/10 backdrop-blur-lg rounded-lg"
              >
                <Code className="text-white mb-4" size={32} />
                <h3 className="text-white font-semibold text-lg mb-2">Développement Web</h3>
                <p className="text-white/80">Applications web modernes et évolutives avec React et Node.js</p>
              </motion.div>
              <motion.div
                whileHover={{ y: -5 }}
                className="p-6 bg-white/10 backdrop-blur-lg rounded-lg"
              >
                <Database className="text-white mb-4" size={32} />
                <h3 className="text-white font-semibold text-lg mb-2">Solutions Backend</h3>
                <p className="text-white/80">APIs robustes et architecture de bases de données</p>
              </motion.div>
            </div>
            <div className="space-y-4 mt-8">
              <motion.div
                whileHover={{ y: -5 }}
                className="p-6 bg-white/10 backdrop-blur-lg rounded-lg"
              >
                <Smartphone className="text-white mb-4" size={32} />
                <h3 className="text-white font-semibold text-lg mb-2">Développement Mobile</h3>
                <p className="text-white/80">Applications mobiles multiplateformes avec React Native</p>
              </motion.div>
              <div className="relative h-32">
                <motion.div
                  animate={{
                    y: [0, -10, 0],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                  className="absolute inset-0 bg-yellow-400/20 backdrop-blur-lg rounded-lg"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Particules animées en arrière-plan */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-white/30 rounded-full"
            animate={{
              y: [-20, window.innerHeight],
              x: Math.random() * window.innerWidth,
            }}
            transition={{
              duration: Math.random() * 5 + 5,
              repeat: Infinity,
              ease: "linear",
            }}
            style={{
              left: `${Math.random() * 100}%`,
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default HeroSection;
