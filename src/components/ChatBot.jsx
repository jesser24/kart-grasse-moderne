import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, X, Send, Bot, User, Clock, MapPin, Calendar, Phone } from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';

const ChatBot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      id: 1,
      type: 'bot',
      content: 'Bonjour ! Je suis votre assistant virtuel pour Kart Touristique Grasse. Comment puis-je vous aider aujourd\'hui ?',
      timestamp: new Date()
    }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef(null);

  const quickReplies = [
    { text: 'Réserver un parcours', icon: Calendar },
    { text: 'Voir les tarifs', icon: Clock },
    { text: 'Localisation', icon: MapPin },
    { text: 'Nous contacter', icon: Phone }
  ];

  const botResponses = {
    'réserver': 'Parfait ! Vous pouvez réserver directement en cliquant sur le bouton "Réserver maintenant" ou en visitant notre page de réservation. Quel type d\'expérience vous intéresse ?',
    'tarif': 'Nos tarifs varient selon l\'expérience :\n• Aventure Solo : 25€\n• Escapade Romantique : 45€\n• Aventure Familiale : 35€\n• Expérience Groupe : 20€\n\nTous nos parcours incluent le kart électrique, le casque et un guide audio !',
    'prix': 'Nos tarifs varient selon l\'expérience :\n• Aventure Solo : 25€\n• Escapade Romantique : 45€\n• Aventure Familiale : 35€\n• Expérience Groupe : 20€\n\nTous nos parcours incluent le kart électrique, le casque et un guide audio !',
    'localisation': 'Nous sommes situés au cœur de Grasse, capitale mondiale du parfum. Le point de départ est Place aux Aires. Nous vous enverrons l\'adresse exacte lors de votre réservation !',
    'contact': 'Vous pouvez nous contacter :\n📧 Email : contact@kart-grasse.fr\n📞 Téléphone : +33 4 93 XX XX XX\n📍 Adresse : Place aux Aires, 06130 Grasse\n\nNous sommes ouverts tous les jours de 9h à 18h !',
    'horaire': 'Nos horaires d\'ouverture :\n🕘 Lundi - Dimanche : 9h00 - 18h00\n\nDerniers départs à 17h00. Nous recommandons de réserver à l\'avance !',
    'durée': 'La durée varie selon l\'expérience choisie :\n• Solo : 45 minutes\n• Romantique : 60 minutes\n• Familiale : 75 minutes\n• Groupe : 90 minutes\n\nChaque parcours inclut des arrêts photos et découvertes !',
    'électrique': 'Nos karts sont 100% électriques ! 🌱\n• Zéro émission\n• Silencieux\n• Respectueux du patrimoine\n• Autonomie de 3h\n• Recharge rapide\n\nUne expérience écologique et moderne !',
    'sécurité': 'Votre sécurité est notre priorité :\n🛡️ Casques fournis et désinfectés\n🛡️ Formation avant départ\n🛡️ Karts bridés à 25 km/h\n🛡️ Accompagnement par guide\n🛡️ Assurance incluse\n\nTout est prévu pour votre sécurité !',
    'default': 'Je ne suis pas sûr de comprendre votre question. Pouvez-vous me demander des informations sur :\n• Les réservations\n• Les tarifs\n• La localisation\n• Nos horaires\n• La sécurité\n• Nos karts électriques\n\nOu utilisez les suggestions rapides ci-dessous !'
  };

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSendMessage = async (content) => {
    if (!content.trim()) return;

    const userMessage = {
      id: Date.now(),
      type: 'user',
      content: content,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputValue('');
    setIsTyping(true);

    // Simuler un délai de réponse
    setTimeout(() => {
      const botResponse = getBotResponse(content.toLowerCase());
      const botMessage = {
        id: Date.now() + 1,
        type: 'bot',
        content: botResponse,
        timestamp: new Date()
      };

      setMessages(prev => [...prev, botMessage]);
      setIsTyping(false);
    }, 1000 + Math.random() * 1000);
  };

  const getBotResponse = (input) => {
    for (const [key, response] of Object.entries(botResponses)) {
      if (key !== 'default' && input.includes(key)) {
        return response;
      }
    }
    return botResponses.default;
  };

  const handleQuickReply = (text) => {
    handleSendMessage(text);
  };

  const formatTime = (date) => {
    return date.toLocaleTimeString('fr-FR', { 
      hour: '2-digit', 
      minute: '2-digit' 
    });
  };

  return (
    <>
      {/* Chat Button */}
      <motion.button
        className={`fixed bottom-6 right-6 z-50 w-16 h-16 rounded-full shadow-2xl flex items-center justify-center transition-all duration-300 ${
          isOpen 
            ? 'bg-red-500 hover:bg-red-600' 
            : 'bg-primary hover:bg-primary/90'
        }`}
        onClick={() => setIsOpen(!isOpen)}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 2, type: "spring", stiffness: 260, damping: 20 }}
      >
        <AnimatePresence mode="wait">
          {isOpen ? (
            <motion.div
              key="close"
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <X className="w-6 h-6 text-white" />
            </motion.div>
          ) : (
            <motion.div
              key="chat"
              initial={{ rotate: 90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: -90, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <MessageCircle className="w-6 h-6 text-white" />
            </motion.div>
          )}
        </AnimatePresence>
      </motion.button>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed bottom-24 right-6 z-40 w-96 h-[500px] bg-card/95 backdrop-blur-lg rounded-2xl shadow-2xl border border-border/50 flex flex-col overflow-hidden"
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
          >
            {/* Header */}
            <div className="bg-primary text-primary-foreground p-4 flex items-center space-x-3">
              <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                <Bot className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-semibold">Assistant Kart Grasse</h3>
                <p className="text-xs opacity-90">En ligne • Répond en quelques secondes</p>
              </div>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4">
              {messages.map((message) => (
                <motion.div
                  key={message.id}
                  className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className={`flex items-start space-x-2 max-w-[80%] ${
                    message.type === 'user' ? 'flex-row-reverse space-x-reverse' : ''
                  }`}>
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                      message.type === 'user' 
                        ? 'bg-primary text-primary-foreground' 
                        : 'bg-secondary text-secondary-foreground'
                    }`}>
                      {message.type === 'user' ? (
                        <User className="w-4 h-4" />
                      ) : (
                        <Bot className="w-4 h-4" />
                      )}
                    </div>
                    <div className={`rounded-2xl px-4 py-2 ${
                      message.type === 'user'
                        ? 'bg-primary text-primary-foreground'
                        : 'bg-secondary text-secondary-foreground'
                    }`}>
                      <p className="text-sm whitespace-pre-line">{message.content}</p>
                      <p className="text-xs opacity-70 mt-1">
                        {formatTime(message.timestamp)}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}

              {/* Typing Indicator */}
              {isTyping && (
                <motion.div
                  className="flex justify-start"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                >
                  <div className="flex items-start space-x-2">
                    <div className="w-8 h-8 bg-secondary rounded-full flex items-center justify-center">
                      <Bot className="w-4 h-4" />
                    </div>
                    <div className="bg-secondary rounded-2xl px-4 py-2">
                      <div className="flex space-x-1">
                        <div className="w-2 h-2 bg-muted-foreground rounded-full animate-bounce" />
                        <div className="w-2 h-2 bg-muted-foreground rounded-full animate-bounce" style={{ animationDelay: '0.1s' }} />
                        <div className="w-2 h-2 bg-muted-foreground rounded-full animate-bounce" style={{ animationDelay: '0.2s' }} />
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}

              <div ref={messagesEndRef} />
            </div>

            {/* Quick Replies */}
            {messages.length <= 2 && (
              <div className="p-4 border-t border-border/50">
                <p className="text-xs text-muted-foreground mb-2">Suggestions rapides :</p>
                <div className="grid grid-cols-2 gap-2">
                  {quickReplies.map((reply, index) => (
                    <motion.button
                      key={index}
                      className="flex items-center space-x-2 p-2 rounded-lg bg-secondary/50 hover:bg-secondary text-xs transition-colors"
                      onClick={() => handleQuickReply(reply.text)}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <reply.icon className="w-3 h-3" />
                      <span>{reply.text}</span>
                    </motion.button>
                  ))}
                </div>
              </div>
            )}

            {/* Input */}
            <div className="p-4 border-t border-border/50">
              <div className="flex space-x-2">
                <Input
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  placeholder="Tapez votre message..."
                  onKeyPress={(e) => {
                    if (e.key === 'Enter') {
                      handleSendMessage(inputValue);
                    }
                  }}
                  className="flex-1"
                />
                <Button
                  size="sm"
                  onClick={() => handleSendMessage(inputValue)}
                  disabled={!inputValue.trim() || isTyping}
                >
                  <Send className="w-4 h-4" />
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default ChatBot;

