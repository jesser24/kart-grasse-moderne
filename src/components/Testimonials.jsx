import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, Quote, ChevronLeft, ChevronRight, Users } from 'lucide-react';
import { Button } from './ui/button';
import { Card, CardContent } from './ui/card';

// Import des images de l'équipe
import ethanImage from '../assets/ethan.png';
import jesserImage from '../assets/jesser.png';
import mohamedImage from '../assets/mohamed.png';
import sohanImage from '../assets/sohan.png';
import thomasImage from '../assets/thomas.png';

const Testimonials = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const testimonials = [
    {
      name: "Marie Dubois",
      role: "Touriste",
      rating: 5,
      comment: "Une expérience absolument fantastique ! Le kart électrique est silencieux et respectueux de l'environnement. J'ai découvert des coins de Grasse que je n'aurais jamais vus autrement. Les guides sont passionnés et très professionnels.",
      location: "Paris"
    },
    {
      name: "Jean-Pierre Martin",
      role: "Résident local",
      rating: 5,
      comment: "Même en habitant Grasse depuis 20 ans, j'ai appris des choses sur ma ville ! L'approche écologique avec les karts électriques est parfaite pour préserver notre patrimoine. Une initiative brillante de ces jeunes étudiants.",
      location: "Grasse"
    },
    {
      name: "Sophie et Michel",
      role: "Couple en vacances",
      rating: 5,
      comment: "Notre escapade romantique en kart était magique ! Le parcours nous a menés aux plus beaux points de vue de Grasse. Le service est impeccable et l'expérience inoubliable. Nous recommandons vivement !",
      location: "Lyon"
    },
    {
      name: "Famille Rodriguez",
      role: "Famille avec enfants",
      rating: 5,
      comment: "Nos enfants ont adoré l'aventure ! Le parcours familial est parfaitement adapté avec des activités ludiques. Les karts sont sécurisés et l'équipe très attentionnée. Un moment de bonheur partagé !",
      location: "Marseille"
    }
  ];

  const team = [
    {
      name: "Ethan",
      role: "Co-fondateur & Développement",
      image: ethanImage,
      description: "Passionné de technologie et d'innovation, Ethan s'occupe du développement technique du projet."
    },
    {
      name: "Jesser",
      role: "Co-fondateur & Marketing",
      image: jesserImage,
      description: "Expert en communication, Jesser développe la stratégie marketing et les partenariats."
    },
    {
      name: "Mohamed",
      role: "Co-fondateur & Operations",
      image: mohamedImage,
      description: "Responsable des opérations, Mohamed coordonne les parcours et la logistique."
    },
    {
      name: "Sohan",
      role: "Co-fondateur & Design",
      image: sohanImage,
      description: "Créatif de l'équipe, Sohan conçoit l'expérience utilisateur et le design des parcours."
    },
    {
      name: "Thomas",
      role: "Co-fondateur & Business",
      image: thomasImage,
      description: "Stratège business, Thomas développe le modèle économique et les relations institutionnelles."
    }
  ];

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="py-20 bg-gradient-to-br from-secondary/10 via-background to-secondary/10">
      <div className="container mx-auto px-4">
        {/* Témoignages clients */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gradient">
            Ils Nous Font Confiance
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Découvrez les témoignages de nos clients qui ont vécu l'expérience Kart Touristique Grasse
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto mb-20">
          <Card className="relative overflow-hidden bg-card/80 backdrop-blur-sm border-0 shadow-2xl">
            <CardContent className="p-8 md:p-12">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentTestimonial}
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -50 }}
                  transition={{ duration: 0.5 }}
                  className="text-center"
                >
                  <Quote className="w-12 h-12 text-primary mx-auto mb-6 opacity-50" />
                  
                  <blockquote className="text-xl md:text-2xl font-light text-muted-foreground italic mb-8 leading-relaxed">
                    "{testimonials[currentTestimonial].comment}"
                  </blockquote>
                  
                  <div className="flex justify-center mb-4">
                    {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  
                  <div className="text-center">
                    <div className="font-semibold text-lg">
                      {testimonials[currentTestimonial].name}
                    </div>
                    <div className="text-sm text-muted-foreground">
                      {testimonials[currentTestimonial].role} • {testimonials[currentTestimonial].location}
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
              
              <div className="flex justify-center items-center mt-8 space-x-4">
                <Button
                  variant="outline"
                  size="icon"
                  onClick={prevTestimonial}
                  className="rounded-full"
                >
                  <ChevronLeft className="w-4 h-4" />
                </Button>
                
                <div className="flex space-x-2">
                  {testimonials.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentTestimonial(index)}
                      className={`w-3 h-3 rounded-full transition-all duration-300 ${
                        index === currentTestimonial 
                          ? 'bg-primary scale-125' 
                          : 'bg-muted hover:bg-muted-foreground/50'
                      }`}
                    />
                  ))}
                </div>
                
                <Button
                  variant="outline"
                  size="icon"
                  onClick={nextTestimonial}
                  className="rounded-full"
                >
                  <ChevronRight className="w-4 h-4" />
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Équipe */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="flex items-center justify-center mb-4">
            <Users className="w-8 h-8 text-primary mr-3" />
            <h3 className="text-3xl md:text-4xl font-bold text-gradient">
              Notre Équipe
            </h3>
          </div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Cinq étudiants ingénieurs passionnés unis par l'amour de Grasse et l'innovation
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, staggerChildren: 0.1 }}
        >
          {team.map((member, index) => (
            <motion.div
              key={index}
              className="text-center group"
              whileHover={{ scale: 1.05, y: -10 }}
              transition={{ duration: 0.3 }}
            >
              <Card className="overflow-hidden card-hover border-0 shadow-lg bg-card/80 backdrop-blur-sm">
                <CardContent className="p-6">
                  <div className="relative mb-4">
                    <div className="w-24 h-24 mx-auto rounded-full overflow-hidden border-4 border-primary/20 group-hover:border-primary/50 transition-colors">
                      <img
                        src={member.image}
                        alt={member.name}
                        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                      />
                    </div>
                  </div>
                  <h4 className="font-semibold text-lg mb-1">{member.name}</h4>
                  <p className="text-sm text-primary font-medium mb-3">{member.role}</p>
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    {member.description}
                  </p>
                </CardContent>
              </Card>
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
            Rejoignez nos clients satisfaits
          </h3>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            Vivez vous aussi une expérience unique et découvrez pourquoi nos clients nous recommandent
          </p>
          <Button size="lg" className="px-8" asChild>
            <a href="/reservation">
              Réserver votre expérience
            </a>
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;

