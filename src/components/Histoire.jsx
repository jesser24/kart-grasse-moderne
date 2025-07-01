import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, Users, Lightbulb, Target, Award, Rocket } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';

// Import des images
import grasseCampusImage from '../assets/grassecampus.png';
import ecamImage from '../assets/ecam.png';

const Histoire = () => {
  const timeline = [
    {
      year: '2023',
      title: 'Les Racines',
      icon: Lightbulb,
      description: 'Tout a commencé sur les bancs de notre école d\'ingénieur, à Grasse, ville emblématique du parfum. Passionnés par l\'innovation, l\'écologie et l\'envie de dynamiser notre territoire, nous avons eu l\'idée de repenser le tourisme local.',
      details: 'En découvrant les rues pittoresques et les trésors cachés de Grasse, nous nous sommes demandé : et si on proposait une manière fun, verte et accessible de les explorer ? C\'est ainsi qu\'est née l\'idée du kart touristique électrique.',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      year: '2023',
      title: 'Le Lancement',
      icon: Rocket,
      description: 'À cinq étudiants de première année de prépa ingénieur, nous avons uni nos forces pour concrétiser ce projet.',
      details: 'Étude de faisabilité, réflexion sur les trajets, contact avec les institutions locales, maquette du site web, communication... Tout a été pensé et développé par nous, de A à Z, dans le cadre de notre projet annuel.',
      color: 'from-green-500 to-emerald-500'
    },
    {
      year: '2024',
      title: 'Le Développement',
      icon: Target,
      description: 'Ce n\'était pas juste un devoir : c\'était un vrai défi entrepreneurial.',
      details: 'Aujourd\'hui, nous sommes fiers de présenter Kart Touristique Grasse comme un concept prêt à rouler ! Notre vision s\'est concrétisée en une expérience touristique unique.',
      color: 'from-purple-500 to-violet-500'
    },
    {
      year: '2025',
      title: 'L\'Évolution',
      icon: Award,
      description: 'Continuité et amélioration du projet pour une présentation encore plus aboutie.',
      details: 'Avec une année d\'expérience supplémentaire, nous perfectionnons notre concept avec de nouvelles fonctionnalités, un design moderne et une approche encore plus professionnelle.',
      color: 'from-orange-500 to-red-500'
    }
  ];

  const values = [
    {
      title: 'Innovation',
      description: 'Repenser le tourisme avec des solutions modernes et écologiques'
    },
    {
      title: 'Écologie',
      description: 'Respecter l\'environnement avec des karts 100% électriques'
    },
    {
      title: 'Patrimoine',
      description: 'Valoriser les trésors cachés de Grasse'
    },
    {
      title: 'Passion',
      description: 'L\'amour de notre ville et l\'envie de la partager'
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
            <h1 className="text-5xl md:text-7xl font-bold mb-6 text-gradient font-['Dancing_Script']">
              Notre Histoire
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed">
              De l'idée étudiante à la réalité entrepreneuriale : 
              découvrez comment est né Kart Touristique Grasse
            </p>
          </motion.div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl font-bold mb-6 text-gradient">
              Chronologie du Projet
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Retracez avec nous les étapes clés de cette aventure entrepreneuriale
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            {timeline.map((item, index) => (
              <motion.div
                key={index}
                className="relative flex items-center mb-12 last:mb-0"
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
              >
                {/* Timeline line */}
                <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-border -z-10" />
                
                {/* Content */}
                <div className={`w-full ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
                  <Card className="card-hover border-0 shadow-xl bg-card/80 backdrop-blur-sm">
                    <CardHeader>
                      <div className={`flex items-center ${index % 2 === 0 ? 'justify-end' : 'justify-start'} mb-4`}>
                        <div className={`p-3 rounded-full bg-gradient-to-r ${item.color} text-white mr-3`}>
                          <item.icon className="w-6 h-6" />
                        </div>
                        <div className="text-2xl font-bold text-primary">{item.year}</div>
                      </div>
                      <CardTitle className="text-2xl">{item.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground mb-4 leading-relaxed">
                        {item.description}
                      </p>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {item.details}
                      </p>
                    </CardContent>
                  </Card>
                </div>

                {/* Timeline dot */}
                <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-primary rounded-full border-4 border-background z-10" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-gradient-to-r from-secondary/20 to-background">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl font-bold mb-6 text-gradient">
              Nos Valeurs
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Les principes qui guident notre projet depuis le premier jour
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                whileHover={{ scale: 1.05, y: -10 }}
              >
                <Card className="h-full text-center card-hover border-0 shadow-lg bg-card/80 backdrop-blur-sm">
                  <CardContent className="p-8">
                    <h3 className="text-xl font-bold mb-4 text-primary">
                      {value.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {value.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Vision */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl font-bold mb-6 text-gradient">
                Une Vision Étudiante
              </h2>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                Notre projet est né de la passion de cinq étudiants ingénieurs pour leur ville natale. 
                Nous avons voulu allier nos compétences techniques à notre amour pour Grasse pour créer 
                quelque chose d'unique.
              </p>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Aujourd'hui, nous continuons à faire évoluer ce projet avec la même passion et 
                l'ambition de créer une expérience touristique d'exception.
              </p>
              <div className="flex items-center space-x-4">
                <Users className="w-8 h-8 text-primary" />
                <div>
                  <div className="font-semibold">5 Étudiants Passionnés</div>
                  <div className="text-sm text-muted-foreground">Unis par l'innovation et l'amour de Grasse</div>
                </div>
              </div>
            </motion.div>

            <motion.div
              className="grid grid-cols-1 gap-6"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <Card className="overflow-hidden card-hover border-0 shadow-xl">
                <CardContent className="p-0">
                  <img
                    src={grasseCampusImage}
                    alt="Campus de Grasse"
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-6">
                    <h3 className="font-semibold text-lg mb-2">Notre Campus</h3>
                    <p className="text-sm text-muted-foreground">
                      C'est ici, dans notre école d'ingénieur à Grasse, que tout a commencé.
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card className="overflow-hidden card-hover border-0 shadow-xl">
                <CardContent className="p-0">
                  <img
                    src={ecamImage}
                    alt="ECAM"
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-6">
                    <h3 className="font-semibold text-lg mb-2">Notre Formation</h3>
                    <p className="text-sm text-muted-foreground">
                      Une formation d'ingénieur qui nous donne les outils pour innover.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Histoire;

