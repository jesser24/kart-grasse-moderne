import React from 'react';
import { motion } from 'framer-motion';
import { User, Users, Heart, Clock, MapPin, Star, Zap, Shield } from 'lucide-react';
import { Button } from './ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { Link } from 'react-router-dom';

// Import des images
import kartSoloImage from '../assets/KartSOLO.png';
import kartCoupleImage from '../assets/kartcouple.png';
import kartGroupeImage from '../assets/kartgroupe.png';
import kartFamilleImage from '../assets/kartfamille.jpg';

const Services = () => {
  const services = [
    {
      id: 'solo',
      title: 'Aventure Solo',
      description: 'Explorez Grasse à votre rythme dans une expérience personnalisée',
      image: kartSoloImage,
      icon: User,
      price: '25€',
      duration: '45 min',
      capacity: '1 personne',
      features: [
        'Parcours personnalisé',
        'Guide audio inclus',
        'Arrêts photos libres',
        'Kart électrique premium'
      ],
      popular: false,
      color: 'from-blue-500 to-cyan-500'
    },
    {
      id: 'couple',
      title: 'Escapade Romantique',
      description: 'Partagez un moment unique à deux dans les rues de Grasse',
      image: kartCoupleImage,
      icon: Heart,
      price: '45€',
      duration: '60 min',
      capacity: '2 personnes',
      features: [
        'Parcours romantique',
        'Arrêt au jardin des parfums',
        'Photo souvenir offerte',
        'Dégustation de parfums'
      ],
      popular: true,
      color: 'from-pink-500 to-rose-500'
    },
    {
      id: 'famille',
      title: 'Aventure Familiale',
      description: 'Une expérience parfaite pour toute la famille avec des activités adaptées',
      image: kartFamilleImage,
      icon: Users,
      price: '35€',
      duration: '75 min',
      capacity: '2-4 personnes',
      features: [
        'Parcours adapté aux enfants',
        'Jeu de piste inclus',
        'Visite du musée du parfum',
        'Goûter traditionnel'
      ],
      popular: false,
      color: 'from-green-500 to-emerald-500'
    },
    {
      id: 'groupe',
      title: 'Expérience Groupe',
      description: 'Parfait pour les sorties entre amis ou les événements d\'entreprise',
      image: kartGroupeImage,
      icon: Users,
      price: '20€',
      duration: '90 min',
      capacity: '5-8 personnes',
      features: [
        'Tarif dégressif',
        'Animation de groupe',
        'Challenge inter-équipes',
        'Apéritif de fin inclus'
      ],
      popular: false,
      color: 'from-purple-500 to-violet-500'
    }
  ];

  const advantages = [
    {
      icon: Zap,
      title: '100% Électrique',
      description: 'Respect de l\'environnement et silence de fonctionnement'
    },
    {
      icon: Shield,
      title: 'Sécurité Maximale',
      description: 'Équipements de protection et formation incluse'
    },
    {
      icon: MapPin,
      title: 'Parcours Uniques',
      description: 'Découverte des sites cachés de Grasse'
    },
    {
      icon: Star,
      title: 'Expérience Premium',
      description: 'Service personnalisé et guides expérimentés'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <section id="services" className="py-20 bg-gradient-to-br from-background to-secondary/20">
      <div className="container mx-auto px-4">
        {/* En-tête */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gradient">
            Nos Expériences
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Choisissez l'aventure qui vous correspond et découvrez Grasse comme jamais auparavant. 
            Chaque parcours est soigneusement conçu pour vous offrir une expérience mémorable.
          </p>
        </motion.div>

        {/* Services */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 mb-20"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              variants={itemVariants}
              whileHover={{ y: -10 }}
              className="relative"
            >
              <Card className="h-full overflow-hidden card-hover border-0 shadow-2xl bg-card/80 backdrop-blur-sm">
                {service.popular && (
                  <div className="absolute top-4 right-4 z-10">
                    <Badge className="bg-accent text-accent-foreground">
                      <Star className="w-3 h-3 mr-1" />
                      Populaire
                    </Badge>
                  </div>
                )}
                
                <div className="relative h-48 overflow-hidden">
                  <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-20`} />
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                  />
                  <div className="absolute top-4 left-4">
                    <div className="p-3 bg-white/90 rounded-full">
                      <service.icon className="w-6 h-6 text-primary" />
                    </div>
                  </div>
                </div>

                <CardHeader>
                  <div className="flex justify-between items-start">
                    <div>
                      <CardTitle className="text-2xl mb-2">{service.title}</CardTitle>
                      <CardDescription className="text-base">
                        {service.description}
                      </CardDescription>
                    </div>
                    <div className="text-right">
                      <div className="text-3xl font-bold text-primary">{service.price}</div>
                      <div className="text-sm text-muted-foreground">par personne</div>
                    </div>
                  </div>
                </CardHeader>

                <CardContent>
                  <div className="flex items-center gap-4 mb-4 text-sm text-muted-foreground">
                    <div className="flex items-center">
                      <Clock className="w-4 h-4 mr-1" />
                      {service.duration}
                    </div>
                    <div className="flex items-center">
                      <Users className="w-4 h-4 mr-1" />
                      {service.capacity}
                    </div>
                  </div>

                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm">
                        <div className="w-2 h-2 bg-primary rounded-full mr-3" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>

                <CardFooter>
                  <Button asChild className="w-full" size="lg">
                    <Link to="/reservation">
                      Réserver cette expérience
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* Avantages */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {advantages.map((advantage, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
              className="text-center p-6 rounded-2xl bg-card/50 backdrop-blur-sm border border-border/50"
            >
              <div className="w-16 h-16 mx-auto mb-4 bg-primary/10 rounded-full flex items-center justify-center">
                <advantage.icon className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-lg font-semibold mb-2">{advantage.title}</h3>
              <p className="text-sm text-muted-foreground">{advantage.description}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h3 className="text-2xl font-bold mb-4">
            Prêt pour l'aventure ?
          </h3>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            Réservez dès maintenant votre expérience et découvrez pourquoi nos clients nous font confiance 
            pour explorer les merveilles de Grasse.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="px-8">
              <Link to="/reservation">
                Réserver maintenant
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="px-8">
              <Link to="/faq">
                Questions fréquentes
              </Link>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;

