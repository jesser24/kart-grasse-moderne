import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, ChevronUp, HelpCircle, Clock, Users, MapPin, Shield, Zap, CreditCard } from 'lucide-react';
import { Card, CardContent } from './ui/card';

// Import des images d'icônes
import ageIcon from '../assets/age.png';
import calendrierIcon from '../assets/calendrier.png';
import montreIcon from '../assets/montre.png';
import safeIcon from '../assets/safe.png';

const FAQ = () => {
  const [openItems, setOpenItems] = useState(new Set([0])); // Premier item ouvert par défaut

  const toggleItem = (index) => {
    const newOpenItems = new Set(openItems);
    if (newOpenItems.has(index)) {
      newOpenItems.delete(index);
    } else {
      newOpenItems.add(index);
    }
    setOpenItems(newOpenItems);
  };

  const faqCategories = [
    {
      title: 'Informations Générales',
      icon: HelpCircle,
      color: 'text-blue-500',
      questions: [
        {
          question: 'Quel est l\'âge minimum pour conduire un kart ?',
          answer: 'Vous devez avoir au moins 16 ans pour conduire un kart de manière autonome. Les jeunes de moins de 16 ans peuvent participer en tant que passagers avec un adulte responsable.',
          icon: ageIcon
        },
        {
          question: 'Où commence le parcours ?',
          answer: 'Le parcours commence à la Place aux Aires, en plein centre de Grasse, près des principales attractions touristiques. C\'est un point de rendez-vous facilement accessible.',
          icon: null
        },
        {
          question: 'Combien de temps dure une session ?',
          answer: 'La durée varie selon l\'expérience choisie : 45 minutes pour l\'aventure solo, 60 minutes pour l\'escapade romantique, 75 minutes pour l\'aventure familiale, et 90 minutes pour l\'expérience groupe.',
          icon: montreIcon
        }
      ]
    },
    {
      title: 'Réservations',
      icon: Calendar,
      color: 'text-green-500',
      questions: [
        {
          question: 'Comment puis-je réserver ?',
          answer: 'Vous pouvez réserver directement sur notre site web via le formulaire de réservation, par téléphone au +33 4 93 36 66 66, ou par email à reservation@karttouristiquegrasse.fr.',
          icon: calendrierIcon
        },
        {
          question: 'Puis-je annuler ma réservation ?',
          answer: 'Oui, vous pouvez annuler votre réservation jusqu\'à 24h avant la date prévue sans frais. Pour les annulations de dernière minute, des frais peuvent s\'appliquer.',
          icon: null
        },
        {
          question: 'Y a-t-il des créneaux disponibles tous les jours ?',
          answer: 'Nous sommes ouverts du lundi au dimanche de 9h à 18h. Les créneaux sont disponibles toute l\'année, sauf les jours fériés. Il est recommandé de réserver à l\'avance.',
          icon: null
        }
      ]
    },
    {
      title: 'Sécurité',
      icon: Shield,
      color: 'text-red-500',
      questions: [
        {
          question: 'Les karts sont-ils sécurisés ?',
          answer: 'Absolument ! Nos karts électriques sont équipés de systèmes de sécurité avancés, de ceintures de sécurité, et nous fournissons tous les équipements de protection nécessaires (casques, gants).',
          icon: safeIcon
        },
        {
          question: 'Y a-t-il une formation avant de partir ?',
          answer: 'Oui, chaque session commence par une formation de sécurité de 10 minutes où nous expliquons le fonctionnement du kart, les règles de circulation et les consignes de sécurité.',
          icon: null
        },
        {
          question: 'Que se passe-t-il en cas de mauvais temps ?',
          answer: 'En cas de conditions météorologiques dangereuses, nous reportons la session à une date ultérieure sans frais supplémentaires. Pour une pluie légère, les karts sont équipés de protections.',
          icon: null
        }
      ]
    },
    {
      title: 'Technique',
      icon: Zap,
      color: 'text-yellow-500',
      questions: [
        {
          question: 'Quelle est l\'autonomie des karts électriques ?',
          answer: 'Nos karts électriques ont une autonomie de 4 à 6 heures en utilisation continue, largement suffisante pour toutes nos expériences. Ils sont rechargés entre chaque session.',
          icon: null
        },
        {
          question: 'Les karts font-ils du bruit ?',
          answer: 'Non, c\'est l\'un des grands avantages ! Les karts électriques sont silencieux, ce qui permet de profiter pleinement des explications du guide et de l\'ambiance de Grasse.',
          icon: null
        },
        {
          question: 'Quelle est la vitesse maximale ?',
          answer: 'Pour des raisons de sécurité et pour profiter du paysage, la vitesse est limitée à 25 km/h. C\'est parfait pour découvrir la ville en toute sécurité.',
          icon: null
        }
      ]
    },
    {
      title: 'Tarifs',
      icon: CreditCard,
      color: 'text-purple-500',
      questions: [
        {
          question: 'Quels sont les moyens de paiement acceptés ?',
          answer: 'Nous acceptons les cartes bancaires (Visa, Mastercard), les espèces, les chèques, et les paiements en ligne sécurisés. Des facilités de paiement sont possibles pour les groupes.',
          icon: null
        },
        {
          question: 'Y a-t-il des réductions pour les groupes ?',
          answer: 'Oui ! Nous proposons des tarifs dégressifs à partir de 5 personnes. Contactez-nous pour obtenir un devis personnalisé pour votre groupe ou événement d\'entreprise.',
          icon: null
        },
        {
          question: 'Le prix inclut-il tout ?',
          answer: 'Oui, le prix inclut le kart, l\'équipement de sécurité, le guide, et toutes les activités mentionnées dans l\'expérience choisie. Aucun frais caché !',
          icon: null
        }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-secondary/10 to-background">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-accent/20" />
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            className="text-center max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <HelpCircle className="w-16 h-16 text-primary mx-auto mb-6" />
            <h1 className="text-5xl md:text-7xl font-bold mb-6 text-gradient font-['Dancing_Script']">
              Questions Fréquentes
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed">
              Trouvez toutes les réponses à vos questions sur nos expériences de kart touristique
            </p>
          </motion.div>
        </div>
      </section>

      {/* FAQ Content */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {faqCategories.map((category, categoryIndex) => (
              <motion.div
                key={categoryIndex}
                className="mb-12"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: categoryIndex * 0.1 }}
              >
                {/* Category Header */}
                <div className="flex items-center mb-8">
                  <div className={`p-3 rounded-full bg-background border-2 border-current ${category.color} mr-4`}>
                    <category.icon className="w-6 h-6" />
                  </div>
                  <h2 className="text-3xl font-bold text-gradient">
                    {category.title}
                  </h2>
                </div>

                {/* Questions */}
                <div className="space-y-4">
                  {category.questions.map((item, questionIndex) => {
                    const globalIndex = categoryIndex * 10 + questionIndex; // Index unique global
                    const isOpen = openItems.has(globalIndex);
                    
                    return (
                      <Card key={questionIndex} className="overflow-hidden border-0 shadow-lg bg-card/80 backdrop-blur-sm">
                        <CardContent className="p-0">
                          <button
                            onClick={() => toggleItem(globalIndex)}
                            className="w-full p-6 text-left hover:bg-muted/50 transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-inset"
                          >
                            <div className="flex items-center justify-between">
                              <div className="flex items-center space-x-4">
                                {item.icon && (
                                  <img
                                    src={item.icon}
                                    alt="Icon"
                                    className="w-8 h-8 object-contain"
                                  />
                                )}
                                <h3 className="text-lg font-semibold text-left">
                                  {item.question}
                                </h3>
                              </div>
                              <motion.div
                                animate={{ rotate: isOpen ? 180 : 0 }}
                                transition={{ duration: 0.3 }}
                              >
                                <ChevronDown className="w-5 h-5 text-muted-foreground" />
                              </motion.div>
                            </div>
                          </button>
                          
                          <AnimatePresence>
                            {isOpen && (
                              <motion.div
                                initial={{ height: 0, opacity: 0 }}
                                animate={{ height: 'auto', opacity: 1 }}
                                exit={{ height: 0, opacity: 0 }}
                                transition={{ duration: 0.3 }}
                                className="overflow-hidden"
                              >
                                <div className="px-6 pb-6">
                                  <div className="border-t border-border pt-4">
                                    <p className="text-muted-foreground leading-relaxed">
                                      {item.answer}
                                    </p>
                                  </div>
                                </div>
                              </motion.div>
                            )}
                          </AnimatePresence>
                        </CardContent>
                      </Card>
                    );
                  })}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-20 bg-gradient-to-r from-primary/10 to-accent/10">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl font-bold mb-6">
              Vous ne trouvez pas votre réponse ?
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Notre équipe est là pour répondre à toutes vos questions spécifiques
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+33493366666"
                className="inline-flex items-center justify-center px-8 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors font-semibold"
              >
                <Clock className="w-5 h-5 mr-2" />
                +33 4 93 36 66 66
              </a>
              <a
                href="mailto:info@karttouristiquegrasse.fr"
                className="inline-flex items-center justify-center px-8 py-3 border border-primary text-primary rounded-lg hover:bg-primary hover:text-primary-foreground transition-colors font-semibold"
              >
                <MapPin className="w-5 h-5 mr-2" />
                Nous contacter
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default FAQ;

