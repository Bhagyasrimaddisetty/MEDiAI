import React from 'react';
import { 
  Sun, 
  CloudRain, 
  Snowflake, 
  Cloud, 
  Zap, 
  ChevronRight,
  Droplets,
  Wind
} from 'lucide-react';
import { ForecastDay, HourlyWeather } from '../types/weather';
import { formatDate, formatTime } from '../utils/weatherUtils';

interface ForecastCardProps {
  forecast: ForecastDay[];
  unit: 'C' | 'F';
}

const ForecastCard: React.FC<ForecastCardProps> = ({ forecast, unit }) => {
  const [selectedDay, setSelectedDay] = React.useState<number>(0);

  const getWeatherIcon = (condition: string, size: 'sm' | 'md' = 'md') => {
    const conditionLower = condition.toLowerCase();
    const iconSize = size === 'sm' ? 'w-4 h-4' : 'w-6 h-6';
    
    if (conditionLower.includes('clear') || conditionLower.includes('sunny')) {
      return <Sun className={`${iconSize} text-yellow-300`} />;
    }
    if (conditionLower.includes('rain') || conditionLower.includes('drizzle')) {
      return <CloudRain className={`${iconSize} text-blue-300`} />;
    }
    if (conditionLower.includes('snow')) {
      return <Snowflake className={`${iconSize} text-blue-200`} />;
    }
    if (conditionLower.includes('thunderstorm') || conditionLower.includes('storm')) {
      return <Zap className={`${iconSize} text-yellow-400`} />;
    }
    return <Cloud className={`${iconSize} text-gray-300`} />;
  };

  const getHourlyForecast = (hours: HourlyWeather[]) => {
    const now = new Date();
    const currentHour = now.getHours();
    
    // Get next 6 hours
    return hours.slice(currentHour, currentHour + 6);
  };

  return (
    <div className="bg-white/10 backdrop-blur-md rounded-3xl border border-white/20 overflow-hidden">
      <div className="p-6">
        <h3 className="text-xl font-bold text-white mb-4">5-Day Forecast</h3>
        
        {/* Daily Forecast */}
        <div className="space-y-2 mb-6">
          {forecast.map((day, index) => {
            const maxTemp = unit === 'C' ? day.day.maxtemp_c : day.day.maxtemp_f;
            const minTemp = unit === 'C' ? day.day.mintemp_c : day.day.mintemp_f;
            
            return (
              <button
                key={day.date}
                onClick={() => setSelectedDay(index)}
                className={`w-full p-4 rounded-2xl transition-all duration-200 ${
                  selectedDay === index 
                    ? 'bg-white/20 border border-white/30' 
                    : 'bg-white/5 hover:bg-white/10'
                }`}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <div className="text-white font-medium min-w-[4rem] text-left">
                      {index === 0 ? 'Today' : formatDate(day.date)}
                    </div>
                    <div className="flex items-center space-x-2">
                      {getWeatherIcon(day.day.condition.text)}
                      <span className="text-white/80 text-sm">
                        {day.day.condition.text}
                      </span>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <span className="text-white text-lg font-medium">
                      {Math.round(maxTemp)}°
                    </span>
                    <span className="text-white/60">
                      {Math.round(minTemp)}°
                    </span>
                    <ChevronRight className={`w-4 h-4 text-white/60 transition-transform duration-200 ${
                      selectedDay === index ? 'rotate-90' : ''
                    }`} />
                  </div>
                </div>
              </button>
            );
          })}
        </div>

        {/* Hourly Forecast for Selected Day */}
        {selectedDay === 0 && (
          <div>
            <h4 className="text-lg font-semibold text-white mb-3">Today's Hourly Forecast</h4>
            <div className="flex space-x-4 overflow-x-auto pb-2">
              {getHourlyForecast(forecast[0].hour).map((hour, index) => {
                const temp = unit === 'C' ? hour.temp_c : hour.temp_f;
                
                return (
                  <div
                    key={hour.time_epoch}
                    className="flex-shrink-0 bg-white/5 rounded-2xl p-4 min-w-[120px]"
                  >
                    <div className="text-center">
                      <div className="text-white/70 text-sm mb-2">
                        {formatTime(hour.time)}
                      </div>
                      <div className="flex justify-center mb-2">
                        {getWeatherIcon(hour.condition.text, 'sm')}
                      </div>
                      <div className="text-white font-medium mb-2">
                        {Math.round(temp)}°{unit}
                      </div>
                      <div className="flex items-center justify-center space-x-1 text-white/60 text-xs">
                        <Droplets className="w-3 h-3" />
                        <span>{hour.chance_of_rain}%</span>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* Selected Day Details */}
        {selectedDay > 0 && (
          <div className="bg-white/5 rounded-2xl p-4">
            <h4 className="text-lg font-semibold text-white mb-3">
              {formatDate(forecast[selectedDay].date)} Details
            </h4>
            <div className="grid grid-cols-2 gap-4">
              <div className="text-center">
                <div className="text-white/70 text-sm">Max Wind</div>
                <div className="text-white font-medium">
                  {Math.round(forecast[selectedDay].day.maxwind_kph)} km/h
                </div>
              </div>
              <div className="text-center">
                <div className="text-white/70 text-sm">Humidity</div>
                <div className="text-white font-medium">
                  {forecast[selectedDay].day.avghumidity}%
                </div>
              </div>
              <div className="text-center">
                <div className="text-white/70 text-sm">Rain Chance</div>
                <div className="text-white font-medium">
                  {forecast[selectedDay].day.daily_chance_of_rain}%
                </div>
              </div>
              <div className="text-center">
                <div className="text-white/70 text-sm">UV Index</div>
                <div className="text-white font-medium">
                  {forecast[selectedDay].day.uv}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ForecastCard;