import React, { useState } from 'react';
import { 
  MapPin, 
  Mail, 
  Phone, 
  Send, 
  CheckCircle2,
  ArrowRight
} from 'lucide-react';
import emailjs from '@emailjs/browser';

const ContactSection = () => {
  const [formStatus, setFormStatus] = useState('idle');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Validate form data
    if (!formData.name || !formData.email || !formData.message) {
      alert('Please fill in all fields');
      return;
    }

    try {
      setFormStatus('sending');

      // Replace these with your actual EmailJS details
      const result = await emailjs.send(
        'service_1mjyoy5',     // EmailJS Service ID
        'template_2dfgw3r',    // EmailJS Template ID
        {
          to_name: 'Bonaventure TOYI', // The recipient's name
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message
        },
        'yB715hEZcvtCqlm7B'      // EmailJS Public Key
      );

      console.log('Email sent successfully:', result);
      setFormStatus('success');
      
      // Reset form after successful submission
      setFormData({
        name: '',
        email: '',
        message: ''
      });
    } catch (error) {
      console.error('Failed to send email:', error);
      alert('Failed to send message. Please try again.');
      setFormStatus('idle');
    }
  };

  return (
    <section className="relative py-20 bg-gradient-to-br from-gray-50 via-white to-gray-100 dark:from-secondary-dark dark:via-background-dark dark:to-secondary-dark">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-96 h-96 bg-indigo-100/50 dark:bg-indigo-900/10 rounded-full blur-3xl animate-blob"></div>
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-purple-100/50 dark:bg-purple-900/10 rounded-full blur-3xl animate-blob animation-delay-2000"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10 max-w-7xl">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Contact Information */}
          <div className="space-y-8">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Contactez-moi maintenant
              </h2>
              <p className="text-gray-600 dark:text-gray-300 max-w-md mx-auto">
                Nous sommes à votre écoute. Contactez-nous pour toute question ou projet.
              </p>
            </div>

            <div className="space-y-6">
              {[
                {
                  icon: MapPin,
                  title: 'Adresse',
                  content: 'Abomey-Calavi, Bénin',
                  color: 'text-indigo-600 dark:text-indigo-400',
                  bgColor: 'bg-indigo-100 dark:bg-indigo-900/30'
                },
                {
                  icon: Mail,
                  title: 'Email',
                  content: 'toybonadev@gmail.com',
                  color: 'text-green-600 dark:text-green-400',
                  bgColor: 'bg-green-100 dark:bg-green-900/30'
                },
                {
                  icon: Phone,
                  title: 'Téléphone',
                  content: '+229  01 66 47 67 60 /  01 48 44 44 08',
                  color: 'text-purple-600 dark:text-purple-400',
                  bgColor: 'bg-purple-100 dark:bg-purple-900/30'
                }
              ].map(({icon: Icon, title, content, color, bgColor}) => (
                <div 
                  key={title}
                  className="bg-white dark:bg-secondary-light rounded-2xl p-6 shadow-medium hover:shadow-hard transition-all duration-300 group"
                >
                  <div className="flex items-center space-x-6">
                    <div className={`${bgColor} ${color} p-4 rounded-full`}>
                      <Icon size={32} strokeWidth={1.5} />
                    </div>
                    <div>
                      <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-1">
                        {title}
                      </h4>
                      <p className="text-gray-600 dark:text-gray-300 transition-all duration-300 group-hover:text-indigo-600 dark:group-hover:text-indigo-400">
                        {content}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white dark:bg-secondary-light rounded-3xl shadow-hard p-10 border border-gray-100 dark:border-gray-800">
      {formStatus === 'success' ? (
        <div className="text-center py-16 space-y-6">
          <CheckCircle2 
            size={80} 
            className="mx-auto text-green-500 animate-pulse" 
            strokeWidth={1.5}
          />
          <div>
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">
              Message Envoyé
            </h3>
            <p className="text-gray-600 dark:text-gray-300">
              Nous vous répondrons très prochainement.
            </p>
          </div>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label 
              htmlFor="name" 
              className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
            >
              Nom Complet
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 rounded-lg bg-gray-50 dark:bg-secondary-dark border border-gray-200 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all duration-300"
            />
          </div>
          
          <div>
            <label 
              htmlFor="email" 
              className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
            >
              Adresse Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 rounded-lg bg-gray-50 dark:bg-secondary-dark border border-gray-200 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all duration-300"
            />
          </div>
          
          <div>
            <label 
              htmlFor="message" 
              className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
            >
              Votre Message
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows={4}
              className="w-full px-4 py-3 rounded-lg bg-gray-50 dark:bg-secondary-dark border border-gray-200 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all duration-300"
            ></textarea>
          </div>
          
          <button
            type="submit"
            disabled={formStatus === 'sending'}
            className={`
              w-full py-4 rounded-lg text-white font-semibold flex items-center justify-center space-x-3 transition-all duration-300
              ${formStatus === 'sending' 
                ? 'bg-gray-400 cursor-not-allowed' 
                : 'bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 hover:shadow-lg'
              }
            `}
          >
            {formStatus === 'sending' ? (
              <span>Envoi en cours...</span>
            ) : (
              <>
                <span>Envoyer le Message</span>
                <ArrowRight size={20} />
              </>
            )}
          </button>
        </form>
      )}
    </div>

        </div>
      </div>
    </section>
  );
};

export default ContactSection;