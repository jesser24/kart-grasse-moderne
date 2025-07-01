import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Calendar, Clock, Users, User, Heart, Car, CreditCard, CheckCircle, MapPin, Phone } from 'lucide-react';
import { Button } from './ui/button';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';

const Reservation = () => {
  const [selectedExperience, setSelectedExperience] = useState('');
  const [formData, setFormData] = useState({
    experience: '',
    date: '',
    time: '',
    participants: 1,
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    specialRequests: ''
  });
  const [currentStep, setCurrentStep] = useState(1);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const experiences = [
    {
      id: 'solo',
      title: 'Aventure Solo',
      price: 25,
      duration: '45 min',
      capacity: '1 personne',
      icon: User,
      description: 'Explorez Grasse à votre rythme',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      id: 'couple',
      title: 'Escapade Romantique',
      price: 45,
      duration: '60 min',
      capacity: '2 personnes',
      icon: Heart,
      description: 'Un moment unique à deux',
      color: 'from-pink-500 to-rose-500',
      popular: true
    },
    {
      id: 'famille',
      title: 'Aventure Familiale',
      price: 35,
      duration: '75 min',
      capacity: '2-4 personnes',
      icon: Users,
      description: 'Parfait pour toute la famille',
      color: 'from-green-500 to-emerald-500'
    },
    {
      id: 'groupe',
      title: 'Expérience Groupe',
      price: 20,
      duration: '90 min',
      capacity: '5-8 personnes',
      icon: Car,
      description: 'Idéal pour les groupes',
      color: 'from-purple-500 to-violet-500'
    }
  ];

  const timeSlots = [
    '09:00', '10:30', '12:00', '13:30', '15:00', '16:30'
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleExperienceSelect = (experienceId) => {
    setSelectedExperience(experienceId);
    setFormData(prev => ({
      ...prev,
      experience: experienceId
    }));
  };

  const nextStep = () => {
    if (currentStep < 3) {
      setCurrentStep(currentStep + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simuler l'envoi de la réservation
    setTimeout(() => {
      setIsSubmitted(true);
    }, 1000);
  };

  const selectedExp = experiences.find(exp => exp.id === selectedExperience);
  const totalPrice = selectedExp ? selectedExp.price * formData.participants : 0;

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-background via-secondary/10 to-background flex items-center justify-center">
        <motion.div
          className="text-center max-w-2xl mx-auto px-4"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
        >
          <CheckCircle className="w-24 h-24 text-green-500 mx-auto mb-8" />
          <h1 className="text-4xl font-bold mb-6 text-gradient">
            Réservation Confirmée !
          </h1>
          <p className="text-xl text-muted-foreground mb-8">
            Merci pour votre réservation. Vous recevrez un email de confirmation avec tous les détails.
          </p>
          <div className="bg-card/80 backdrop-blur-sm rounded-2xl p-8 border border-border/50 mb-8">
            <h3 className="text-2xl font-semibold mb-4">Récapitulatif</h3>
            <div className="space-y-3 text-left">
              <div className="flex justify-between">
                <span>Expérience :</span>
                <span className="font-semibold">{selectedExp?.title}</span>
              </div>
              <div className="flex justify-between">
                <span>Date :</span>
                <span className="font-semibold">{formData.date}</span>
              </div>
              <div className="flex justify-between">
                <span>Heure :</span>
                <span className="font-semibold">{formData.time}</span>
              </div>
              <div className="flex justify-between">
                <span>Participants :</span>
                <span className="font-semibold">{formData.participants}</span>
              </div>
              <div className="flex justify-between border-t pt-3">
                <span className="text-lg font-bold">Total :</span>
                <span className="text-lg font-bold text-primary">{totalPrice}€</span>
              </div>
            </div>
          </div>
          <Button size="lg" onClick={() => window.location.href = '/'}>
            Retour à l'accueil
          </Button>
        </motion.div>
      </div>
    );
  }

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
            <Calendar className="w-16 h-16 text-primary mx-auto mb-6" />
            <h1 className="text-5xl md:text-7xl font-bold mb-6 text-gradient font-['Dancing_Script']">
              Réservation
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed">
              Réservez votre expérience de kart touristique à Grasse en quelques clics
            </p>
          </motion.div>
        </div>
      </section>

      {/* Reservation Form */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            {/* Progress Steps */}
            <div className="flex justify-center mb-12">
              <div className="flex items-center space-x-4">
                {[1, 2, 3].map((step) => (
                  <div key={step} className="flex items-center">
                    <div className={`w-10 h-10 rounded-full flex items-center justify-center font-semibold ${
                      currentStep >= step 
                        ? 'bg-primary text-primary-foreground' 
                        : 'bg-muted text-muted-foreground'
                    }`}>
                      {step}
                    </div>
                    {step < 3 && (
                      <div className={`w-16 h-1 mx-2 ${
                        currentStep > step ? 'bg-primary' : 'bg-muted'
                      }`} />
                    )}
                  </div>
                ))}
              </div>
            </div>

            <form onSubmit={handleSubmit}>
              {/* Step 1: Choose Experience */}
              {currentStep === 1 && (
                <motion.div
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <Card className="border-0 shadow-2xl bg-card/80 backdrop-blur-sm">
                    <CardHeader>
                      <CardTitle className="text-3xl text-center">
                        Choisissez votre expérience
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {experiences.map((exp) => (
                          <motion.div
                            key={exp.id}
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                          >
                            <Card 
                              className={`cursor-pointer transition-all duration-300 ${
                                selectedExperience === exp.id 
                                  ? 'ring-2 ring-primary shadow-xl' 
                                  : 'hover:shadow-lg'
                              }`}
                              onClick={() => handleExperienceSelect(exp.id)}
                            >
                              <CardContent className="p-6">
                                <div className="flex items-start justify-between mb-4">
                                  <div className={`p-3 rounded-full bg-gradient-to-r ${exp.color} text-white`}>
                                    <exp.icon className="w-6 h-6" />
                                  </div>
                                  <div className="text-right">
                                    <div className="text-2xl font-bold text-primary">{exp.price}€</div>
                                    <div className="text-sm text-muted-foreground">par personne</div>
                                  </div>
                                </div>
                                <h3 className="text-xl font-semibold mb-2">{exp.title}</h3>
                                <p className="text-muted-foreground mb-4">{exp.description}</p>
                                <div className="flex items-center gap-4 text-sm text-muted-foreground">
                                  <div className="flex items-center">
                                    <Clock className="w-4 h-4 mr-1" />
                                    {exp.duration}
                                  </div>
                                  <div className="flex items-center">
                                    <Users className="w-4 h-4 mr-1" />
                                    {exp.capacity}
                                  </div>
                                </div>
                              </CardContent>
                            </Card>
                          </motion.div>
                        ))}
                      </div>
                      <div className="flex justify-end mt-8">
                        <Button 
                          type="button" 
                          onClick={nextStep} 
                          disabled={!selectedExperience}
                          size="lg"
                        >
                          Continuer
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              )}

              {/* Step 2: Date & Time */}
              {currentStep === 2 && (
                <motion.div
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <Card className="border-0 shadow-2xl bg-card/80 backdrop-blur-sm">
                    <CardHeader>
                      <CardTitle className="text-3xl text-center">
                        Choisissez votre créneau
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                        <div>
                          <label className="block text-lg font-semibold mb-4">Date</label>
                          <input
                            type="date"
                            name="date"
                            value={formData.date}
                            onChange={handleInputChange}
                            min={new Date().toISOString().split('T')[0]}
                            required
                            className="w-full p-4 rounded-lg border border-border bg-background focus:ring-2 focus:ring-primary focus:border-transparent text-lg"
                          />
                        </div>
                        
                        <div>
                          <label className="block text-lg font-semibold mb-4">Nombre de participants</label>
                          <select
                            name="participants"
                            value={formData.participants}
                            onChange={handleInputChange}
                            required
                            className="w-full p-4 rounded-lg border border-border bg-background focus:ring-2 focus:ring-primary focus:border-transparent text-lg"
                          >
                            {[1,2,3,4,5,6,7,8].map(num => (
                              <option key={num} value={num}>{num} participant{num > 1 ? 's' : ''}</option>
                            ))}
                          </select>
                        </div>
                      </div>

                      <div className="mt-8">
                        <label className="block text-lg font-semibold mb-4">Heure</label>
                        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                          {timeSlots.map((time) => (
                            <button
                              key={time}
                              type="button"
                              onClick={() => setFormData(prev => ({ ...prev, time }))}
                              className={`p-4 rounded-lg border-2 transition-all ${
                                formData.time === time
                                  ? 'border-primary bg-primary text-primary-foreground'
                                  : 'border-border hover:border-primary'
                              }`}
                            >
                              {time}
                            </button>
                          ))}
                        </div>
                      </div>

                      <div className="flex justify-between mt-8">
                        <Button type="button" variant="outline" onClick={prevStep} size="lg">
                          Retour
                        </Button>
                        <Button 
                          type="button" 
                          onClick={nextStep} 
                          disabled={!formData.date || !formData.time}
                          size="lg"
                        >
                          Continuer
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              )}

              {/* Step 3: Personal Info */}
              {currentStep === 3 && (
                <motion.div
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    <div className="lg:col-span-2">
                      <Card className="border-0 shadow-2xl bg-card/80 backdrop-blur-sm">
                        <CardHeader>
                          <CardTitle className="text-3xl">Vos informations</CardTitle>
                        </CardHeader>
                        <CardContent>
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                              <label className="block text-sm font-medium mb-2">Prénom *</label>
                              <input
                                type="text"
                                name="firstName"
                                value={formData.firstName}
                                onChange={handleInputChange}
                                required
                                className="w-full p-3 rounded-lg border border-border bg-background focus:ring-2 focus:ring-primary focus:border-transparent"
                              />
                            </div>
                            <div>
                              <label className="block text-sm font-medium mb-2">Nom *</label>
                              <input
                                type="text"
                                name="lastName"
                                value={formData.lastName}
                                onChange={handleInputChange}
                                required
                                className="w-full p-3 rounded-lg border border-border bg-background focus:ring-2 focus:ring-primary focus:border-transparent"
                              />
                            </div>
                            <div>
                              <label className="block text-sm font-medium mb-2">Email *</label>
                              <input
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleInputChange}
                                required
                                className="w-full p-3 rounded-lg border border-border bg-background focus:ring-2 focus:ring-primary focus:border-transparent"
                              />
                            </div>
                            <div>
                              <label className="block text-sm font-medium mb-2">Téléphone *</label>
                              <input
                                type="tel"
                                name="phone"
                                value={formData.phone}
                                onChange={handleInputChange}
                                required
                                className="w-full p-3 rounded-lg border border-border bg-background focus:ring-2 focus:ring-primary focus:border-transparent"
                              />
                            </div>
                          </div>
                          
                          <div className="mt-6">
                            <label className="block text-sm font-medium mb-2">Demandes spéciales</label>
                            <textarea
                              name="specialRequests"
                              value={formData.specialRequests}
                              onChange={handleInputChange}
                              rows={4}
                              className="w-full p-3 rounded-lg border border-border bg-background focus:ring-2 focus:ring-primary focus:border-transparent resize-none"
                              placeholder="Allergies, besoins spéciaux, questions..."
                            />
                          </div>

                          <div className="flex justify-between mt-8">
                            <Button type="button" variant="outline" onClick={prevStep} size="lg">
                              Retour
                            </Button>
                            <Button type="submit" size="lg" className="px-8">
                              <CreditCard className="w-4 h-4 mr-2" />
                              Confirmer la réservation
                            </Button>
                          </div>
                        </CardContent>
                      </Card>
                    </div>

                    {/* Summary */}
                    <div>
                      <Card className="border-0 shadow-2xl bg-card/80 backdrop-blur-sm sticky top-8">
                        <CardHeader>
                          <CardTitle>Récapitulatif</CardTitle>
                        </CardHeader>
                        <CardContent>
                          {selectedExp && (
                            <div className="space-y-4">
                              <div>
                                <h4 className="font-semibold">{selectedExp.title}</h4>
                                <p className="text-sm text-muted-foreground">{selectedExp.description}</p>
                              </div>
                              
                              <div className="space-y-2 text-sm">
                                <div className="flex justify-between">
                                  <span>Date :</span>
                                  <span>{formData.date || 'Non sélectionnée'}</span>
                                </div>
                                <div className="flex justify-between">
                                  <span>Heure :</span>
                                  <span>{formData.time || 'Non sélectionnée'}</span>
                                </div>
                                <div className="flex justify-between">
                                  <span>Participants :</span>
                                  <span>{formData.participants}</span>
                                </div>
                                <div className="flex justify-between">
                                  <span>Prix unitaire :</span>
                                  <span>{selectedExp.price}€</span>
                                </div>
                              </div>
                              
                              <div className="border-t pt-4">
                                <div className="flex justify-between text-lg font-bold">
                                  <span>Total :</span>
                                  <span className="text-primary">{totalPrice}€</span>
                                </div>
                              </div>
                            </div>
                          )}
                        </CardContent>
                      </Card>
                    </div>
                  </div>
                </motion.div>
              )}
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Reservation;

