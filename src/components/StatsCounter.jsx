import React, { useState, useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { TrendingUp, Users, MapPin, Zap, Award, Clock } from 'lucide-react';

const StatsCounter = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const stats = [
    {
      icon: Users,
      value: 1250,
      suffix: '+',
      label: 'Clients satisfaits',
      description: 'Depuis notre lancement',
      color: 'text-blue-500',
      bgColor: 'bg-blue-500/10'
    },
    {
      icon: MapPin,
      value: 18,
      suffix: '',
      label: 'Sites touristiques',
      description: 'Points d\'intérêt visités',
      color: 'text-green-500',
      bgColor: 'bg-green-500/10'
    },
    {
      icon: Clock,
      value: 2500,
      suffix: '+',
      label: 'Heures de parcours',
      description: 'Temps total d\'exploration',
      color: 'text-purple-500',
      bgColor: 'bg-purple-500/10'
    },
    {
      icon: Zap,
      value: 100,
      suffix: '%',
      label: 'Électrique',
      description: 'Zéro émission carbone',
      color: 'text-yellow-500',
      bgColor: 'bg-yellow-500/10'
    },
    {
      icon: Award,
      value: 98,
      suffix: '%',
      label: 'Satisfaction',
      description: 'Taux de recommandation',
      color: 'text-red-500',
      bgColor: 'bg-red-500/10'
    },
    {
      icon: TrendingUp,
      value: 45,
      suffix: '%',
      label: 'Croissance',
      description: 'Augmentation annuelle',
      color: 'text-indigo-500',
      bgColor: 'bg-indigo-500/10'
    }
  ];

  const AnimatedCounter = ({ value, suffix, duration = 2000 }) => {
    const [count, setCount] = useState(0);
    const [hasAnimated, setHasAnimated] = useState(false);

    useEffect(() => {
      if (isInView && !hasAnimated) {
        setHasAnimated(true);
        let startTime;
        const animate = (currentTime) => {
          if (!startTime) startTime = currentTime;
          const progress = Math.min((currentTime - startTime) / duration, 1);
          
          // Fonction d'easing pour une animation plus naturelle
          const easeOutQuart = 1 - Math.pow(1 - progress, 4);
          setCount(Math.floor(easeOutQuart * value));

          if (progress < 1) {
            requestAnimationFrame(animate);
          }
        };
        requestAnimationFrame(animate);
      }
    }, [isInView, value, duration, hasAnimated]);

    return (
      <span className="text-4xl md:text-5xl font-bold">
        {count.toLocaleString()}{suffix}
      </span>
    );
  };

  return (
    <section ref={ref} className="py-20 bg-gradient-to-br from-secondary/20 via-background to-secondary/20">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gradient">
            Nos Chiffres Clés
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Découvrez l'impact de notre projet et la confiance que nous accordent nos clients
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              className="relative group"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              whileHover={{ scale: 1.05, y: -10 }}
            >
              <div className="relative p-8 rounded-2xl bg-card/80 backdrop-blur-sm border border-border/50 shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden">
                {/* Background decoration */}
                <div className={`absolute top-0 right-0 w-32 h-32 ${stat.bgColor} rounded-full opacity-20 transform translate-x-16 -translate-y-16`} />
                
                {/* Icon */}
                <div className={`w-16 h-16 ${stat.bgColor} rounded-2xl flex items-center justify-center mb-6 relative z-10`}>
                  <stat.icon className={`w-8 h-8 ${stat.color}`} />
                </div>

                {/* Counter */}
                <div className={`${stat.color} mb-2 relative z-10`}>
                  <AnimatedCounter 
                    value={stat.value} 
                    suffix={stat.suffix}
                    duration={2000 + index * 200}
                  />
                </div>

                {/* Label */}
                <h3 className="text-xl font-semibold mb-2 relative z-10">
                  {stat.label}
                </h3>

                {/* Description */}
                <p className="text-sm text-muted-foreground relative z-10">
                  {stat.description}
                </p>

                {/* Hover effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional info */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <div className="max-w-4xl mx-auto p-8 rounded-2xl bg-gradient-to-r from-primary/10 to-accent/10 backdrop-blur-sm border border-border/50">
            <h3 className="text-2xl font-bold mb-4">
              Une Croissance Constante
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              Depuis notre lancement, nous n'avons cessé de grandir grâce à la confiance de nos clients 
              et à notre engagement pour l'innovation et la qualité. Ces chiffres témoignent de notre 
              réussite et de notre impact positif sur le tourisme grassois.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default StatsCounter;

