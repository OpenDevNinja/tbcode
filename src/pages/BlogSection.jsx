import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, Calendar, Clock, Tag, ChevronRight, ArrowLeft } from 'lucide-react';

const BlogSection = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedPost, setSelectedPost] = useState(null);

  const blogPosts = [
    {
      id: 1,
      title: "Construire des applications React évolutives avec Next.js",
      excerpt: "Apprenez à créer des applications web performantes et évolutives avec Next.js et React...",
      image: "/api/placeholder/800/400",
      category: "Développement web",
      date: "2024-03-15",
      readTime: "8 min de lecture",
      tags: ["React", "Next.js", "Performance"]
    },
    {
      id: 2,
      title: "Meilleures pratiques de développement d'applications mobiles en 2024",
      excerpt: "Découvrez les dernières tendances et meilleures pratiques en développement d'applications mobiles...",
      image: "/api/placeholder/800/400",
      category: "Développement mobile",
      date: "2024-03-10",
      readTime: "10 min de lecture",
      tags: ["Mobile", "React Native", "iOS", "Android"]
    },
    {
      id: 3,
      title: "Maîtriser TypeScript pour le développement web moderne",
      excerpt: "Un guide complet sur l'utilisation de TypeScript dans vos projets web...",
      image: "/api/placeholder/800/400",
      category: "Programmation",
      date: "2024-03-05",
      readTime: "12 min de lecture",
      tags: ["TypeScript", "JavaScript", "Développement"]
    }
  ];

  const filteredPosts = searchQuery
    ? blogPosts.filter(post =>
        post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()))
      )
    : blogPosts;

  const PostModal = ({ post, onClose }) => (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        className="bg-white dark:bg-gray-800 rounded-xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
        onClick={e => e.stopPropagation()}
      >
        <img
          src={post.image}
          alt={post.title}
          className="w-full h-64 object-cover rounded-t-xl"
        />
        <div className="p-6">
          <button
            onClick={onClose}
            className="flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-300 transition mb-4"
          >
            <ArrowLeft size={18} />
            Retour
          </button>
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
            {post.title}
          </h3>
          <div className="flex items-center gap-4 mb-6">
            <span className="flex items-center text-sm text-gray-500 dark:text-gray-400">
              <Calendar size={16} className="mr-1" />
              {new Date(post.date).toLocaleDateString()}
            </span>
            <span className="flex items-center text-sm text-gray-500 dark:text-gray-400">
              <Clock size={16} className="mr-1" />
              {post.readTime}
            </span>
          </div>
          <p className="text-gray-600 dark:text-gray-300 mb-6">
            {post.excerpt}
          </p>
          <div className="border-t dark:border-gray-700 pt-6 mt-6">
            <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
              Catégorie
            </h4>
            <span className="inline-flex items-center px-3 py-1 text-sm bg-indigo-100 dark:bg-indigo-900 text-indigo-600 dark:text-indigo-300 rounded-full">
              <Tag size={14} className="mr-1" />
              {post.category}
            </span>
          </div>
          <div className="border-t dark:border-gray-700 pt-6 mt-6">
            <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
              Tags
            </h4>
            <div className="flex flex-wrap gap-2">
              {post.tags.map((tag, index) => (
                <span
                  key={index}
                  className="inline-flex items-center px-3 py-1 text-sm bg-indigo-100 dark:bg-indigo-900 text-indigo-600 dark:text-indigo-300 rounded-full"
                >
                  <Tag size={14} className="mr-1" />
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );

  return (
    <section id="blog" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white text-center mb-8">
            Derniers articles et insights
          </h2>
          
          {/* Barre de recherche */}
         {/*  <div className="relative">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
            <input
              type="text"
              placeholder="Rechercher des articles..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-3 rounded-lg bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
            />
          </div> */}
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPosts.map((post) => (
            <motion.article
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg cursor-pointer"
              onClick={() => setSelectedPost(post)}
            >
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <div className="flex items-center gap-4 mb-4">
                  <span className="flex items-center text-sm text-gray-500 dark:text-gray-400">
                    <Calendar size={16} className="mr-1" />
                    {new Date(post.date).toLocaleDateString()}
                  </span>
                  <span className="flex items-center text-sm text-gray-500 dark:text-gray-400">
                    <Clock size={16} className="mr-1" />
                    {post.readTime}
                  </span>
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                  {post.title}
                </h3>
                
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  {post.excerpt}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {post.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="inline-flex items-center px-3 py-1 text-sm bg-indigo-100 dark:bg-indigo-900 text-indigo-600 dark:text-indigo-300 rounded-full"
                    >
                      <Tag size={14} className="mr-1" />
                      {tag}
                    </span>
                  ))}
                </div>
                
                <button className="flex items-center text-indigo-600 dark:text-indigo-400 hover:text-indigo-700 dark:hover:text-indigo-300 transition">
                  Lire la suite
                  <ChevronRight size={16} className="ml-1" />
                </button>
              </div>
            </motion.article>
          ))}
        </div>

      {/*   <div className="text-center mt-12">
          <button className="px-8 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition">
            Voir tous les articles
          </button>
        </div> */}

        <AnimatePresence>
          {selectedPost && (
            <PostModal
              post={selectedPost}
              onClose={() => setSelectedPost(null)}
            />
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default BlogSection;