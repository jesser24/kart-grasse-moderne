import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageSquare, Users, Clock, CheckCircle2, ChevronLeft, ChevronRight, MessageSquareText } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';

const LiveChat = () => {
  const [onlineUsers, setOnlineUsers] = useState(0);
  const [recentBookings, setRecentBookings] = useState([]);
  const [notifications, setNotifications] = useState([]);
  const [isOpen, setIsOpen] = useState(true); // État pour contrôler la visibilité du widget

  // Simulation d'activité en temps réel
  useEffect(() => {
    // Simuler le nombre d'utilisateurs en ligne
    const updateOnlineUsers = () => {
      setOnlineUsers(Math.floor(Math.random() * 15) + 5);
    };

    // Simuler des réservations récentes
    const addRecentBooking = () => {
      const names = ['Marie D.', 'Pierre L.', 'Sophie M.', 'Thomas R.', 'Julie B.', 'Antoine C.'];
      const experiences = ['Aventure Solo', 'Escapade Romantique', 'Aventure Familiale', 'Expérience Groupe'];
      const cities = ['Paris', 'Lyon', 'Marseille', 'Nice', 'Cannes', 'Monaco', 'Antibes'];
      
      const newBooking = {
        id: Date.now(),
        name: names[Math.floor(Math.random() * names.length)],
        experience: experiences[Math.floor(Math.random() * experiences.length)],
        city: cities[Math.floor(Math.random() * cities.length)],
        timestamp: new Date()
      };

      setRecentBookings(prev => [newBooking, ...prev.slice(0, 4)]);
      
      // Ajouter une notification
      setNotifications(prev => [{
        id: Date.now(),
        message: `${newBooking.name} de ${newBooking.city} vient de réserver "${newBooking.experience}"`,
        timestamp: new Date()
      }, ...prev.slice(0, 2)]);
    };

    // Intervalles pour les mises à jour
    const userInterval = setInterval(updateOnlineUsers, 8000);
    const bookingInterval = setInterval(addRecentBooking, 12000);

    // Initialisation
    updateOnlineUsers();
    addRecentBooking();

    return () => {
      clearInterval(userInterval);
      clearInterval(bookingInterval);
    };
  }, []);

  // Supprimer les notifications après 8 secondes
  useEffect(() => {
    notifications.forEach(notification => {
      setTimeout(() => {
        setNotifications(prev => prev.filter(n => n.id !== notification.id));
      }, 8000);
    });
  }, [notifications]);

  const formatTimeAgo = (date) => {
    const now = new Date();
    const diffInMinutes = Math.floor((now - date) / (1000 * 60));
    
    if (diffInMinutes < 1) return 'À l\'instant';
    if (diffInMinutes < 60) return `Il y a ${diffInMinutes} min`;
    const diffInHours = Math.floor(diffInMinutes / 60);
    if (diffInHours < 24) return `Il y a ${diffInHours}h`;
    return 'Hier';
  };

  return (
    <div className="fixed bottom-4 left-4 z-50 flex flex-col items-start space-y-2">
      {/* Notifications flottantes */}
      <AnimatePresence>
        {notifications.map((notification) => (
          <motion.div
            key={notification.id}
            initial={{ opacity: 0, x: 100, scale: 0.8 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            exit={{ opacity: 0, x: 100, scale: 0.8 }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className="bg-green-500 text-white p-1.5 rounded-lg shadow-lg max-w-[180px] text-xs"
          >
            <div className="flex items-start space-x-1.5">
              <CheckCircle2 className="w-3 h-3 mt-0.5 flex-shrink-0" />
              <div>
                <p className="font-medium leading-tight">{notification.message}</p>
                <p className="opacity-90 leading-tight">{formatTimeAgo(notification.timestamp)}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </AnimatePresence>

      {/* Bouton pour ouvrir/fermer le widget */}
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        className="bg-primary text-primary-foreground p-3 rounded-full shadow-lg hover:bg-primary/90 transition-colors"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        {isOpen ? <ChevronRight className="w-5 h-5" /> : <ChevronLeft className="w-5 h-5" />}
      </motion.button>

      {/* Widget d'activité */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, x: 300 }} // Start off-screen to the right
            animate={{ opacity: 1, x: 0 }} // Slide in
            exit={{ opacity: 0, x: 300 }} // Slide out to the right
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
          >
            <Card className="w-72 border-0 shadow-lg bg-card/95 backdrop-blur-sm">
              <CardHeader className="pb-3">
                <CardTitle className="flex items-center justify-between text-lg">
                  <span className="flex items-center space-x-2">
                    <MessageSquare className="w-5 h-5 text-primary" />
                    <span>Activité en direct</span>
                  </span>
                  <Badge variant="secondary" className="flex items-center space-x-1">
                    <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                    <span>{onlineUsers} en ligne</span>
                  </Badge>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {/* Utilisateurs en ligne */}
                <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                  <Users className="w-4 h-4" />
                  <span>{onlineUsers} personnes consultent actuellement nos parcours</span>
                </div>

                {/* Réservations récentes */}
                <div>
                  <h4 className="text-sm font-semibold mb-2 flex items-center space-x-2">
                    <Clock className="w-4 h-4" />
                    <span>Réservations récentes</span>
                  </h4>
                  <div className="space-y-2">
                    {recentBookings.map((booking) => (
                      <motion.div
                        key={booking.id}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="bg-secondary/50 rounded-lg p-2 text-sm"
                      >
                        <div className="flex justify-between items-start">
                          <div>
                            <p className="font-medium">{booking.name}</p>
                            <p className="text-xs text-muted-foreground">{booking.experience}</p>
                          </div>
                          <div className="text-right">
                            <p className="text-xs text-muted-foreground">{booking.city}</p>
                            <p className="text-xs text-muted-foreground">{formatTimeAgo(booking.timestamp)}</p>
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Statistiques du jour */}
                <div className="bg-primary/10 rounded-lg p-3">
                  <h4 className="text-sm font-semibold mb-2">Aujourd'hui</h4>
                  <div className="grid grid-cols-2 gap-2 text-sm">
                    <div>
                      <p className="text-2xl font-bold text-primary">12</p>
                      <p className="text-xs text-muted-foreground">Réservations</p>
                    </div>
                    <div>
                      <p className="text-2xl font-bold text-green-600">98%</p>
                      <p className="text-xs text-muted-foreground">Satisfaction</p>
                    </div>
                  </div>
                </div>

                {/* Call to action */}
                <div className="text-center">
                  <p className="text-xs text-muted-foreground mb-2">
                    Rejoignez les {onlineUsers} personnes qui découvrent Grasse !
                  </p>
                  <motion.button
                    className="w-full bg-primary text-primary-foreground py-2 px-4 rounded-lg text-sm font-medium hover:bg-primary/90 transition-colors"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => window.location.href = '/reservation'}
                  >
                    Réserver maintenant
                  </motion.button>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default LiveChat;


