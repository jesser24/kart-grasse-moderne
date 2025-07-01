import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MapPin, Clock, Camera, Star, Info } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';

const InteractiveMap = () => {
  const [selectedPoint, setSelectedPoint] = useState(null);

  const tourPoints = [
    {
      id: 1,
      name: 'Place aux Aires',
      description: 'Point de départ de votre aventure. Briefing sécurité et remise des équipements.',
      x: 15,
      y: 25,
      type: 'start',
      duration: '5 min',
      highlights: ['Briefing sécurité', 'Remise des équipements']
    },
    {
      id: 2,
      name: 'Musée International de la Parfumerie',
      description: 'Découverte de l\'histoire du parfum. Visite guidée et dégustation olfactive.',
      x: 40,
      y: 50,
      type: 'museum',
      duration: '15 min',
      highlights: ['Visite guidée', 'Dégustation olfactive']
    },
    {
      id: 3,
      name: 'Cathédrale Notre-Dame-du-Puy',
      description: 'Monument historique emblématique. Architecture gothique et vue panoramique.',
      x: 60,
      y: 20,
      type: 'monument',
      duration: '10 min',
      highlights: ['Architecture gothique', 'Vue panoramique']
    },
    {
      id: 4,
      name: 'Jardins du Musée Fragonard',
      description: 'Oasis de verdure et de senteurs. Plantes aromatiques et photo souvenir.',
      x: 75,
      y: 65,
      type: 'garden',
      duration: '12 min',
      highlights: ['Plantes aromatiques', 'Photo souvenir']
    },
    {
      id: 5,
      name: 'Vieille Ville',
      description: 'Ruelles pittoresques et authentiques. Architecture provençale et boutiques artisanales.',
      x: 85,
      y: 40,
      type: 'historic',
      duration: '20 min',
      highlights: ['Architecture provençale', 'Boutiques artisanales']
    }
  ];

  const getPointColor = (type) => {
    const colors = {
      start: 'bg-green-500',
      museum: 'bg-purple-500',
      monument: 'bg-blue-500',
      garden: 'bg-emerald-500',
      historic: 'bg-orange-500'
    };
    return colors[type] || 'bg-gray-500';
  };

  const getPointIcon = (type) => {
    const icons = {
      start: MapPin,
      museum: Star,
      monument: Camera,
      garden: Star,
      historic: Info
    };
    return icons[type] || MapPin;
  };

  return (
    <section className="py-20 bg-gradient-to-br from-background to-secondary/20">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gradient">
            Parcours Interactif
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Explorez les points d'intérêt de votre parcours et découvrez ce qui vous attend 
            à chaque étape de votre aventure grassoise
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Carte interactive */}
          <div className="lg:col-span-2">
            <Card className="border-0 shadow-2xl bg-card/80 backdrop-blur-sm overflow-hidden">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <MapPin className="w-6 h-6 mr-2 text-primary" />
                  Carte du Parcours
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="relative aspect-video bg-gray-200 rounded-lg overflow-hidden">
                  {/* Fond de carte stylisé */}
                  {/* Removed SVG paths for simplicity and to avoid visual conflicts. 
                      A proper map library (like Leaflet or Google Maps) would be ideal here. */}

                  {/* Points d'intérêt */}
                  {tourPoints.map((point, index) => {
                    const Icon = getPointIcon(point.type);
                    return (
                      <motion.button
                        key={point.id}
                        className={`absolute w-12 h-12 rounded-full ${getPointColor(point.type)} 
                          flex items-center justify-center text-white shadow-lg cursor-pointer
                          hover:scale-110 transition-transform z-20`} // Increased size and z-index
                        style={{
                          left: `${point.x}%`,
                          top: `${point.y}%`,
                          transform: 'translate(-50%, -50%)'
                        }}
                        onClick={() => setSelectedPoint(point)}
                        whileHover={{ scale: 1.2 }}
                        whileTap={{ scale: 0.9 }}
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ delay: index * 0.2 }}
                      >
                        <Icon className="w-6 h-6" /> {/* Increased icon size */}
                      </motion.button>
                    );
                  })}

                  {/* Numérotation des étapes */}
                  {tourPoints.map((point, index) => (
                    <motion.div
                      key={`number-${point.id}`}
                      className="absolute w-8 h-8 bg-white rounded-full flex items-center justify-center 
                        text-sm font-bold text-gray-700 shadow-md z-30" // Increased size and z-index
                      style={{
                        left: `${point.x}%`, // Keep same X as point
                        top: `${point.y - 10}%`, // Adjusted to be above the point, considering its own height
                        transform: 'translate(-50%, -50%)' // Center based on its own dimensions
                      }}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: index * 0.2 + 0.5 }}
                    >
                      {index + 1}
                    </motion.div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Détails du point sélectionné */}
          <div className="lg:col-span-1">
            <AnimatePresence mode="wait">
              {selectedPoint ? (
                <motion.div
                  key={selectedPoint.id}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3 }}
                >
                  <Card className="border-0 shadow-2xl bg-card/80 backdrop-blur-sm">
                    <CardHeader>
                      <div className="flex items-center space-x-3">
                        <div className={`w-10 h-10 rounded-full ${getPointColor(selectedPoint.type)} 
                          flex items-center justify-center text-white`}>
                          {React.createElement(getPointIcon(selectedPoint.type), { className: "w-5 h-5" })}
                        </div>
                        <div>
                          <CardTitle className="text-lg">{selectedPoint.name}</CardTitle>
                          <div className="flex items-center text-sm text-muted-foreground">
                            <Clock className="w-4 h-4 mr-1" />
                            {selectedPoint.duration}
                          </div>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground mb-4 leading-relaxed">
                        {selectedPoint.description}
                      </p>
                      
                      <h4 className="font-semibold mb-3">Points forts :</h4>
                      <ul className="space-y-2">
                        {selectedPoint.highlights.map((highlight, index) => (
                          <li key={index} className="flex items-center text-sm">
                            <div className="w-2 h-2 bg-primary rounded-full mr-3" />
                            {highlight}
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                </motion.div>
              ) : (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="text-center p-8"
                >
                  <MapPin className="w-16 h-16 text-muted-foreground mx-auto mb-4 opacity-50" />
                  <h3 className="text-xl font-semibold mb-2">Explorez le parcours</h3>
                  <p className="text-muted-foreground">
                    Cliquez sur un point d'intérêt pour découvrir les détails de cette étape
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>

        {/* Légende */}
        <motion.div
          className="mt-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <Card className="border-0 shadow-lg bg-card/80 backdrop-blur-sm">
            <CardContent className="p-6">
              <h3 className="text-lg font-semibold mb-4">Légende du parcours</h3>
              <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
                {[
                  { type: 'start', label: 'Départ', color: 'bg-green-500' },
                  { type: 'museum', label: 'Musée', color: 'bg-purple-500' },
                  { type: 'monument', label: 'Monument', color: 'bg-blue-500' },
                  { type: 'garden', label: 'Jardin', color: 'bg-emerald-500' },
                  { type: 'historic', label: 'Site historique', color: 'bg-orange-500' }
                ].map((item) => (
                  <div key={item.type} className="flex items-center space-x-2">
                    <div className={`w-4 h-4 rounded-full ${item.color}`} />
                    <span className="text-sm text-muted-foreground">{item.label}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* CTA */}
        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <h3 className="text-2xl font-bold mb-4">
            Prêt à vivre cette aventure ?
          </h3>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            Réservez dès maintenant et découvrez tous ces lieux magiques lors de votre parcours en kart électrique
          </p>
          <Button size="lg" className="px-8" asChild>
            <a href="/reservation">
              Réserver mon parcours
            </a>
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default InteractiveMap;


