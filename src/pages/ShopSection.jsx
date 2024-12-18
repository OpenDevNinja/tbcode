import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ShoppingCart, Star, Download, Eye, Filter } from 'lucide-react';

const ShopSection = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [sortBy, setSortBy] = useState('popular');

  const categories = [
    { id: 'all', label: 'Tous les modèles' },
    { id: 'web', label: 'Modèles de sites web' },
    { id: 'mobile', label: 'Modèles d\'applications mobiles' },
  ];

  const products = [
    {
      id: 1,
      title: "Kit de démarrage e-commerce",
      category: "web",
      image: "/api/placeholder/800/600",
      price: 49.99,
      rating: 4.8,
      reviews: 124,
      description: "Solution e-commerce complète avec panier d'achat et intégration de paiement",
      features: [
        "Design responsive",
        "Panier d'achat",
        "Intégration de paiement",
        "Tableau de bord admin",
        "Gestion des produits",
        "Commentaires des clients"
      ],
      technologies: ["React", "Node.js", "MongoDB", "Stripe"]
    },
    {
      id: 2,
      title: "Modèle d'application de livraison de nourriture",
      category: "mobile",
      image: "/api/placeholder/800/600",
      price: 79.99,
      rating: 4.9,
      reviews: 89,
      description: "Modèle d'application de livraison de nourriture prêt à l'emploi avec suivi des livreurs",
      features: [
        "Suivi en temps réel",
        "Gestion des commandes",
        "Passerelle de paiement",
        "Notifications push",
        "Système de notation",
        "Tableau de bord des restaurants"
      ],
      technologies: ["React Native", "Firebase", "Google Maps", "Stripe"]
    }
    // Ajoutez d'autres produits...
  ];

  const filteredProducts = activeCategory === 'all'
    ? products
    : products.filter(product => product.category === activeCategory);

  const sortedProducts = [...filteredProducts].sort((a, b) => {
    switch (sortBy) {
      case 'price-low':
        return a.price - b.price;
      case 'price-high':
        return b.price - a.price;
      case 'rating':
        return b.rating - a.rating;
      default:
        return b.reviews - a.reviews;
    }
  });

  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Modèles et kits d'interface premium
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Des modèles et kits d'interface professionnels pour accélérer votre prochain projet
          </p>
        </motion.div>

        <div className="flex flex-col md:flex-row justify-between items-center mb-8 gap-4">
          <div className="flex flex-wrap gap-4">
            {categories.map(category => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-6 py-2 rounded-full transition ${
                  activeCategory === category.id
                    ? 'bg-indigo-600 text-white'
                    : 'bg-white dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
                }`}
              >
                {category.label}
              </button>
            ))}
          </div>

          <div className="flex items-center gap-2">
            <Filter size={20} className="text-gray-400" />
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="px-4 py-2 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-indigo-500"
            >
              <option value="popular">Les plus populaires</option>
              <option value="rating">Les mieux notés</option>
              <option value="price-low">Prix: du plus bas au plus élevé</option>
              <option value="price-high">Prix: du plus élevé au plus bas</option>
            </select>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {sortedProducts.map(product => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg"
            >
              <div className="relative group">
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-full h-56 object-cover"
                />
                <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-4">
                  <button className="p-2 bg-white rounded-full hover:bg-gray-100 transition">
                    <Eye size={20} className="text-gray-900" />
                  </button>
                  <button className="p-2 bg-white rounded-full hover:bg-gray-100 transition">
                    <Download size={20} className="text-gray-900" />
                  </button>
                </div>
              </div>

              <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                    {product.title}
                  </h3>
                  <div className="flex items-center">
                    <Star className="text-yellow-400 h-5 w-5 fill-current" />
                    <span className="ml-1 text-gray-600 dark:text-gray-300">
                      {product.rating}
                    </span>
                  </div>
                </div>

                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  {product.description}
                </p>

                <div className="border-t dark:border-gray-700 pt-4 mt-4">
                  <div className="flex justify-between items-center">
                    <span className="text-2xl font-bold text-gray-900 dark:text-white">
                      ${product.price}
                    </span>
                    <button className="flex items-center gap-2 px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition">
                      <ShoppingCart size={18} />
                      Ajouter au panier
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ShopSection;