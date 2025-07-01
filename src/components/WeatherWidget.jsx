import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Cloud, Sun, CloudRain, Wind, Thermometer, Droplets, Eye, Gauge } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';

const WeatherWidget = () => {
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(true);

  // Simulation de données météo (en production, utiliser une vraie API)
  useEffect(() => {
    const simulateWeatherData = () => {
      const conditions = ['sunny', 'cloudy', 'rainy'];
      const randomCondition = conditions[Math.floor(Math.random() * conditions.length)];
      
      const weatherData = {
        location: 'Grasse, France',
        condition: randomCondition,
        temperature: Math.floor(Math.random() * 15) + 15, // 15-30°C
        humidity: Math.floor(Math.random() * 40) + 40, // 40-80%
        windSpeed: Math.floor(Math.random() * 20) + 5, // 5-25 km/h
        visibility: Math.floor(Math.random() * 5) + 10, // 10-15 km
        pressure: Math.floor(Math.random() * 50) + 1000, // 1000-1050 hPa
        uvIndex: Math.floor(Math.random() * 8) + 1, // 1-8
        forecast: [
          { day: 'Aujourd\'hui', temp: 22, condition: 'sunny' },
          { day: 'Demain', temp: 24, condition: 'cloudy' },
          { day: 'Après-demain', temp: 20, condition: 'rainy' }
        ]
      };

      setTimeout(() => {
        setWeather(weatherData);
        setLoading(false);
      }, 1000);
    };

    simulateWeatherData();
  }, []);

  const getWeatherIcon = (condition) => {
    switch (condition) {
      case 'sunny':
        return <Sun className="w-8 h-8 text-yellow-500" />;
      case 'cloudy':
        return <Cloud className="w-8 h-8 text-gray-500" />;
      case 'rainy':
        return <CloudRain className="w-8 h-8 text-blue-500" />;
      default:
        return <Sun className="w-8 h-8 text-yellow-500" />;
    }
  };

  const getWeatherDescription = (condition) => {
    switch (condition) {
      case 'sunny':
        return 'Ensoleillé';
      case 'cloudy':
        return 'Nuageux';
      case 'rainy':
        return 'Pluvieux';
      default:
        return 'Ensoleillé';
    }
  };

  const getWeatherRecommendation = (condition, temp) => {
    if (condition === 'rainy') {
      return 'Conditions parfaites pour découvrir Grasse en kart couvert ! 🌧️';
    } else if (condition === 'sunny' && temp > 25) {
      return 'Temps idéal pour une balade en kart électrique ! ☀️';
    } else if (condition === 'cloudy') {
      return 'Parfait pour explorer sans la chaleur du soleil ! ⛅';
    } else {
      return 'Excellentes conditions pour votre aventure grassoise ! 🌤️';
    }
  };

  if (loading) {
    return (
      <Card className="border-0 shadow-lg bg-card/80 backdrop-blur-sm">
        <CardContent className="p-6">
          <div className="animate-pulse">
            <div className="h-4 bg-muted rounded w-3/4 mb-4"></div>
            <div className="h-8 bg-muted rounded w-1/2 mb-2"></div>
            <div className="h-4 bg-muted rounded w-full"></div>
          </div>
        </CardContent>
      </Card>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <Card className="border-0 shadow-lg bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-950/20 dark:to-cyan-950/20 backdrop-blur-sm">
        <CardHeader className="pb-3">
          <CardTitle className="flex items-center justify-between">
            <span className="text-lg">Météo à Grasse</span>
            {getWeatherIcon(weather.condition)}
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          {/* Temperature principale */}
          <div className="text-center">
            <div className="text-4xl font-bold text-primary mb-1">
              {weather.temperature}°C
            </div>
            <div className="text-muted-foreground">
              {getWeatherDescription(weather.condition)}
            </div>
          </div>

          {/* Recommandation */}
          <div className="bg-primary/10 rounded-lg p-3 text-center">
            <p className="text-sm font-medium text-primary">
              {getWeatherRecommendation(weather.condition, weather.temperature)}
            </p>
          </div>

          {/* Détails météo */}
          <div className="grid grid-cols-2 gap-3 text-sm">
            <div className="flex items-center space-x-2">
              <Droplets className="w-4 h-4 text-blue-500" />
              <span>Humidité: {weather.humidity}%</span>
            </div>
            <div className="flex items-center space-x-2">
              <Wind className="w-4 h-4 text-gray-500" />
              <span>Vent: {weather.windSpeed} km/h</span>
            </div>
            <div className="flex items-center space-x-2">
              <Eye className="w-4 h-4 text-green-500" />
              <span>Visibilité: {weather.visibility} km</span>
            </div>
            <div className="flex items-center space-x-2">
              <Gauge className="w-4 h-4 text-purple-500" />
              <span>Pression: {weather.pressure} hPa</span>
            </div>
          </div>

          {/* Prévisions courtes */}
          <div className="border-t pt-3">
            <h4 className="text-sm font-semibold mb-2">Prévisions</h4>
            <div className="space-y-2">
              {weather.forecast.map((day, index) => (
                <div key={index} className="flex items-center justify-between text-sm">
                  <span className="text-muted-foreground">{day.day}</span>
                  <div className="flex items-center space-x-2">
                    <span className="font-medium">{day.temp}°C</span>
                    <div className="w-5 h-5">
                      {getWeatherIcon(day.condition)}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Conseil du jour */}
          <div className="bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-950/20 dark:to-emerald-950/20 rounded-lg p-3">
            <div className="flex items-start space-x-2">
              <Thermometer className="w-4 h-4 text-green-600 mt-0.5" />
              <div className="text-xs text-green-700 dark:text-green-300">
                <strong>Conseil :</strong> Nos karts électriques sont parfaits par tous les temps ! 
                Équipements de protection fournis selon les conditions.
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default WeatherWidget;

