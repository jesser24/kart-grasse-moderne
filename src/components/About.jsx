import React from 'react';
import { motion } from 'framer-motion';
import { Leaf, Award, Users, Heart, MapPin, Clock } from 'lucide-react';
import { Card, CardContent } from './ui/card';

// Import des images
import grasseCampusImage from '../assets/grassecampus.png';
import museeImage from '../assets/musee.webp';
import vieuxGrasseImage from '../assets/vieuxgrasse.webp';

const About = () => {
  const values = [
    {
      icon: Leaf,
      title: 'Écologique',
      description: 'Des karts 100% électriques pour respecter l\'environnement et le patrimoine de Grasse'
    },
    {
      icon: Award,
      title: 'Qualité',
      description: 'Un service premium avec des guides expérimentés et des équipements de pointe'
    },
    {
      icon: Users,
      title: 'Accessible',
      description: 'Des expériences adaptées à tous les âges et tous les niveaux'
    },
    {
      icon: Heart,
      title: 'Passion',
      description: 'L\'amour de notre ville et l\'envie de partager ses trésors cachés'
    }
  ];

  const highlights = [
    {
      image: grasseCampusImage,
      title: 'Innovation Étudiante',
      description: 'Né de l\'imagination de 5 étudiants ingénieurs passionnés par leur ville'
    },
    {
      image: museeImage,
      title: 'Patrimoine Culturel',
      description: 'Découverte des musées et sites historiques emblématiques de Grasse'
    },
    {
      image: vieuxGrasseImage,
      title: 'Authenticité',
      description: 'Exploration des ruelles pittoresques et des secrets du vieux Grasse'
    }
  ];

  const stats = [
    { number: '2023', label: 'Année de création' },
    { number: '15+', label: 'Sites touristiques' },
    { number: '1000+', label: 'Visiteurs satisfaits' },
    { number: '100%', label: 'Électrique' }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-background via-secondary/10 to-background">
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
            Notre Histoire
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Découvrez comment une idée étudiante s'est transformée en une aventure touristique unique, 
            alliant innovation, écologie et passion pour le patrimoine grassois.
          </p>
        </motion.div>

        {/* Histoire principale */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <div className="space-y-4">
              <div className="flex items-center space-x-2 text-primary">
                <MapPin className="w-5 h-5" />
                <span className="font-semibold">Grasse, Capitale Mondiale du Parfum</span>
              </div>
              <h3 className="text-3xl font-bold">
                Une Vision Étudiante Devenue Réalité
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Tout a commencé sur les bancs de notre école d'ingénieur, à Grasse. Passionnés par l'innovation, 
                l'écologie et l'envie de dynamiser notre territoire, nous avons eu l'idée de repenser le tourisme local.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                En découvrant les rues pittoresques et les trésors cachés de Grasse, nous nous sommes demandé : 
                et si on proposait une manière fun, verte et accessible de les explorer ? C'est ainsi qu'est née 
                l'idée du kart touristique électrique.
              </p>
            </div>

            <div className="space-y-4">
              <div className="flex items-center space-x-2 text-primary">
                <Clock className="w-5 h-5" />
                <span className="font-semibold">Le Développement</span>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                À cinq étudiants de première année de prépa ingénieur, nous avons uni nos forces pour concrétiser 
                ce projet. Étude de faisabilité, réflexion sur les trajets, contact avec les institutions locales, 
                développement du site web... Tout a été pensé et développé par nous, de A à Z.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="grid grid-cols-1 gap-6"
          >
            {highlights.map((highlight, index) => (
              <Card key={index} className="overflow-hidden card-hover">
                <CardContent className="p-0">
                  <div className="flex">
                    <div className="w-1/3">
                      <img
                        src={highlight.image}
                        alt={highlight.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="w-2/3 p-4">
                      <h4 className="font-semibold mb-2">{highlight.title}</h4>
                      <p className="text-sm text-muted-foreground">
                        {highlight.description}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </motion.div>
        </div>

        {/* Statistiques */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              className="text-center"
              whileHover={{ scale: 1.05 }}
            >
              <div className="text-4xl md:text-5xl font-bold text-primary mb-2">
                {stat.number}
              </div>
              <div className="text-sm text-muted-foreground">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Valeurs */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {values.map((value, index) => (
            <motion.div
              key={index}
              className="text-center p-6 rounded-2xl bg-card/50 backdrop-blur-sm border border-border/50"
              whileHover={{ scale: 1.05, y: -5 }}
              transition={{ duration: 0.3 }}
            >
              <div className="w-16 h-16 mx-auto mb-4 bg-primary/10 rounded-full flex items-center justify-center">
                <value.icon className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-lg font-semibold mb-3">{value.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {value.description}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* Citation */}
        <motion.div
          className="text-center mt-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <blockquote className="text-2xl md:text-3xl font-light text-muted-foreground italic max-w-4xl mx-auto">
            "Ce n'était pas juste un devoir : c'était un vrai défi entrepreneurial. 
            Aujourd'hui, nous sommes fiers de présenter Kart Touristique Grasse comme 
            un concept prêt à rouler !"
          </blockquote>
          <cite className="block mt-6 text-primary font-semibold">
            — L'équipe fondatrice
          </cite>
        </motion.div>
      </div>
    </section>
  );
};

export default About;

