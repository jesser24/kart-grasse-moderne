import React from 'react';
import { motion } from 'framer-motion';
import { Car, MapPin, Phone, Mail, Facebook, Instagram, Twitter, Youtube, Heart } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    services: [
      { name: 'Aventure Solo', href: '/reservation' },
      { name: 'Escapade Romantique', href: '/reservation' },
      { name: 'Aventure Familiale', href: '/reservation' },
      { name: 'Expérience Groupe', href: '/reservation' }
    ],
    company: [
      { name: 'Notre Histoire', href: '/histoire' },
      { name: 'FAQ', href: '/faq' },
      { name: 'Contact', href: '/#contact' },
      { name: 'Réservation', href: '/reservation' }
    ],
    legal: [
      { name: 'Mentions Légales', href: '#' },
      { name: 'Politique de Confidentialité', href: '#' },
      { name: 'Conditions Générales', href: '#' },
      { name: 'Cookies', href: '#' }
    ]
  };

  const socialLinks = [
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: Instagram, href: '#', label: 'Instagram' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Youtube, href: '#', label: 'YouTube' }
  ];

  return (
    <footer className="bg-gradient-to-br from-secondary/20 to-background border-t border-border">
      <div className="container mx-auto px-4">
        {/* Section principale */}
        <div className="py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Logo et description */}
            <motion.div
              className="lg:col-span-1"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <Link to="/" className="flex items-center space-x-2 mb-6">
                <div className="p-2 bg-primary rounded-lg">
                  <Car className="w-6 h-6 text-primary-foreground" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gradient font-['Dancing_Script']">
                    Kart Touristique
                  </h3>
                  <p className="text-xs text-muted-foreground">Grasse</p>
                </div>
              </Link>
              
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Découvrez la capitale mondiale du parfum d'une manière unique et écologique. 
                Une aventure inoubliable vous attend dans les rues pittoresques de Grasse.
              </p>

              {/* Informations de contact */}
              <div className="space-y-3">
                <div className="flex items-center space-x-3 text-sm">
                  <MapPin className="w-4 h-4 text-primary flex-shrink-0" />
                  <span className="text-muted-foreground">Place aux Aires, 06130 Grasse</span>
                </div>
                <div className="flex items-center space-x-3 text-sm">
                  <Phone className="w-4 h-4 text-primary flex-shrink-0" />
                  <span className="text-muted-foreground">+33 4 93 36 66 66</span>
                </div>
                <div className="flex items-center space-x-3 text-sm">
                  <Mail className="w-4 h-4 text-primary flex-shrink-0" />
                  <span className="text-muted-foreground">info@karttouristiquegrasse.fr</span>
                </div>
              </div>
            </motion.div>

            {/* Services */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.1 }}
            >
              <h4 className="font-semibold text-lg mb-6">Nos Services</h4>
              <ul className="space-y-3">
                {footerLinks.services.map((link, index) => (
                  <li key={index}>
                    <Link
                      to={link.href}
                      className="text-muted-foreground hover:text-primary transition-colors text-sm"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Entreprise */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <h4 className="font-semibold text-lg mb-6">Entreprise</h4>
              <ul className="space-y-3">
                {footerLinks.company.map((link, index) => (
                  <li key={index}>
                    <Link
                      to={link.href}
                      className="text-muted-foreground hover:text-primary transition-colors text-sm"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Newsletter et réseaux sociaux */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <h4 className="font-semibold text-lg mb-6">Restez connectés</h4>
              
              {/* Newsletter */}
              <div className="mb-6">
                <p className="text-sm text-muted-foreground mb-4">
                  Recevez nos dernières nouvelles et offres spéciales
                </p>
                <div className="flex">
                  <input
                    type="email"
                    placeholder="Votre email"
                    className="flex-1 px-3 py-2 text-sm rounded-l-md border border-border bg-background focus:ring-2 focus:ring-primary focus:border-transparent"
                  />
                  <button className="px-4 py-2 bg-primary text-primary-foreground rounded-r-md hover:bg-primary/90 transition-colors text-sm">
                    OK
                  </button>
                </div>
              </div>

              {/* Réseaux sociaux */}
              <div>
                <p className="text-sm text-muted-foreground mb-4">Suivez-nous</p>
                <div className="flex space-x-3">
                  {socialLinks.map((social, index) => (
                    <a
                      key={index}
                      href={social.href}
                      aria-label={social.label}
                      className="p-2 bg-muted hover:bg-primary hover:text-primary-foreground rounded-lg transition-colors"
                    >
                      <social.icon className="w-4 h-4" />
                    </a>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Section bottom */}
        <motion.div
          className="py-8 border-t border-border"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            {/* Copyright */}
            <div className="text-sm text-muted-foreground">
              © {currentYear} Kart Touristique Grasse. Tous droits réservés.
            </div>

            {/* Liens légaux */}
            <div className="flex flex-wrap justify-center md:justify-end gap-6">
              {footerLinks.legal.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>

          {/* Message des créateurs */}
          <div className="text-center mt-6 pt-6 border-t border-border">
            <p className="text-sm text-muted-foreground flex items-center justify-center">
              Créé avec <Heart className="w-4 h-4 text-red-500 mx-1" /> par l'équipe étudiante de Kart Touristique Grasse
            </p>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;

