import React from 'react';
import { 
  Thermometer, 
  Droplets, 
  Wind, 
  Eye, 
  Gauge, 
  Sun, 
  CloudRain,
  Snowflake,
  Cloud,
  Zap
} from 'lucide-react';
import { WeatherData } from '../types/weather';

interface WeatherCardProps {
  weather: WeatherData;
  unit: 'C' | 'F';
}

const WeatherCard: React.FC<WeatherCardProps> = ({ weather, unit }) => {
  const temp = unit === 'C' ? weather.current.temp_c : weather.current.temp_f;
  const feelsLike = unit === 'C' ? weather.current.feelslike_c : weather.current.feelslike_f;
  const windSpeed = unit === 'C' ? weather.current.wind_kph : weather.current.wind_mph;
  const windUnit = unit === 'C' ? 'km/h' : 'mph';
  const visibility = unit === 'C' ? weather.current.vis_km : weather.current.vis_miles;
  const visUnit = unit === 'C' ? 'km' : 'miles';

  const getWeatherIcon = (condition: string) => {
    const conditionLower = condition.toLowerCase();
    
    if (conditionLower.includes('clear') || conditionLower.includes('sunny')) {
      return <Sun className="w-8 h-8 text-yellow-300" />;
    }
    if (conditionLower.includes('rain') || conditionLower.includes('drizzle')) {
      return <CloudRain className="w-8 h-8 text-blue-300" />;
    }
    if (conditionLower.includes('snow')) {
      return <Snowflake className="w-8 h-8 text-blue-200" />;
    }
    if (conditionLower.includes('thunderstorm') || conditionLower.includes('storm')) {
      return <Zap className="w-8 h-8 text-yellow-400" />;
    }
    return <Cloud className="w-8 h-8 text-gray-300" />;
  };

  return (
    <div className="bg-white/10 backdrop-blur-md rounded-3xl p-8 border border-white/20">
      <div className="text-center mb-8">
        <h2 className="text-2xl font-bold text-white mb-2">
          {weather.location.name}
        </h2>
        <p className="text-white/70">
          {weather.location.region}, {weather.location.country}
        </p>
        <p className="text-white/60 text-sm mt-1">
          {new Date(weather.location.localtime).toLocaleDateString('en-US', {
            weekday: 'long',
            year: 'numeric',
            month: 'long',
            day: 'numeric',
            hour: '2-digit',
            minute: '2-digit'
          })}
        </p>
      </div>

      <div className="text-center mb-8">
        <div className="flex items-center justify-center mb-4">
          {getWeatherIcon(weather.current.condition.text)}
        </div>
        <div className="text-6xl font-light text-white mb-2">
          {Math.round(temp)}°{unit}
        </div>
        <p className="text-xl text-white/90 mb-2">
          {weather.current.condition.text}
        </p>
        <p className="text-white/70">
          Feels like {Math.round(feelsLike)}°{unit}
        </p>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div className="bg-white/5 rounded-2xl p-4">
          <div className="flex items-center mb-2">
            <Wind className="w-5 h-5 text-white/70 mr-2" />
            <span className="text-white/70 text-sm">Wind</span>
          </div>
          <div className="text-white text-lg font-medium">
            {Math.round(windSpeed)} {windUnit}
          </div>
          <div className="text-white/60 text-sm">
            {weather.current.wind_dir}
          </div>
        </div>

        <div className="bg-white/5 rounded-2xl p-4">
          <div className="flex items-center mb-2">
            <Droplets className="w-5 h-5 text-white/70 mr-2" />
            <span className="text-white/70 text-sm">Humidity</span>
          </div>
          <div className="text-white text-lg font-medium">
            {weather.current.humidity}%
          </div>
        </div>

        <div className="bg-white/5 rounded-2xl p-4">
          <div className="flex items-center mb-2">
            <Eye className="w-5 h-5 text-white/70 mr-2" />
            <span className="text-white/70 text-sm">Visibility</span>
          </div>
          <div className="text-white text-lg font-medium">
            {visibility} {visUnit}
          </div>
        </div>

        <div className="bg-white/5 rounded-2xl p-4">
          <div className="flex items-center mb-2">
            <Gauge className="w-5 h-5 text-white/70 mr-2" />
            <span className="text-white/70 text-sm">Pressure</span>
          </div>
          <div className="text-white text-lg font-medium">
            {weather.current.pressure_mb} mb
          </div>
        </div>

        <div className="bg-white/5 rounded-2xl p-4">
          <div className="flex items-center mb-2">
            <Sun className="w-5 h-5 text-white/70 mr-2" />
            <span className="text-white/70 text-sm">UV Index</span>
          </div>
          <div className="text-white text-lg font-medium">
            {weather.current.uv}
          </div>
        </div>

        <div className="bg-white/5 rounded-2xl p-4">
          <div className="flex items-center mb-2">
            <CloudRain className="w-5 h-5 text-white/70 mr-2" />
            <span className="text-white/70 text-sm">Precipitation</span>
          </div>
          <div className="text-white text-lg font-medium">
            {weather.current.precip_mm} mm
          </div>
        </div>
      </div>
    </div>
  );
};

export default WeatherCard;