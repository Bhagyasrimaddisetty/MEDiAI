export const getWeatherGradient = (condition: string, isDay: boolean = true): string => {
  const conditionLower = condition.toLowerCase();
  
  if (conditionLower.includes('clear') || conditionLower.includes('sunny')) {
    return isDay 
      ? 'from-blue-400 via-blue-500 to-blue-600'
      : 'from-indigo-900 via-purple-900 to-blue-900';
  }
  
  if (conditionLower.includes('partly cloudy')) {
    return isDay
      ? 'from-blue-300 via-blue-400 to-gray-500'
      : 'from-gray-800 via-gray-900 to-black';
  }
  
  if (conditionLower.includes('cloudy') || conditionLower.includes('overcast')) {
    return 'from-gray-400 via-gray-500 to-gray-600';
  }
  
  if (conditionLower.includes('rain') || conditionLower.includes('drizzle')) {
    return 'from-gray-500 via-blue-600 to-indigo-700';
  }
  
  if (conditionLower.includes('thunderstorm') || conditionLower.includes('storm')) {
    return 'from-gray-800 via-gray-900 to-black';
  }
  
  if (conditionLower.includes('snow') || conditionLower.includes('blizzard')) {
    return 'from-blue-200 via-blue-300 to-gray-400';
  }
  
  if (conditionLower.includes('fog') || conditionLower.includes('mist')) {
    return 'from-gray-300 via-gray-400 to-gray-500';
  }
  
  // Default gradient
  return isDay
    ? 'from-blue-400 via-blue-500 to-blue-600'
    : 'from-indigo-900 via-purple-900 to-blue-900';
};

export const formatTime = (timeString: string): string => {
  const date = new Date(timeString);
  return date.toLocaleTimeString('en-US', {
    hour: 'numeric',
    minute: '2-digit',
    hour12: true
  });
};

export const formatDate = (dateString: string): string => {
  const date = new Date(dateString);
  return date.toLocaleDateString('en-US', {
    weekday: 'short',
    month: 'short',
    day: 'numeric'
  });
};

export const getWindDirection = (degrees: number): string => {
  const directions = ['N', 'NNE', 'NE', 'ENE', 'E', 'ESE', 'SE', 'SSE', 'S', 'SSW', 'SW', 'WSW', 'W', 'WNW', 'NW', 'NNW'];
  return directions[Math.round(degrees / 22.5) % 16];
};