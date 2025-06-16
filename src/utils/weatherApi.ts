const API_KEY = import.meta.env.VITE_WEATHER_API_KEY;
const BASE_URL = 'https://api.weatherapi.com/v1';

if (!API_KEY) {
  console.error('Weather API key is not configured. Please set VITE_WEATHER_API_KEY in your .env file.');
}

export const searchLocations = async (query: string): Promise<any[]> => {
  try {
    if (!API_KEY) {
      throw new Error('Weather API key is not configured');
    }
    
    const response = await fetch(
      `${BASE_URL}/search.json?key=${API_KEY}&q=${encodeURIComponent(query)}`
    );
    
    if (!response.ok) {
      const errorText = await response.text();
      console.error('Search API error:', response.status, errorText);
      throw new Error(`Search failed: ${response.status}`);
    }
    
    return await response.json();
  } catch (error) {
    console.error('Error searching locations:', error);
    return [];
  }
};

export const getCurrentWeather = async (location: string): Promise<any> => {
  try {
    if (!API_KEY) {
      throw new Error('Weather API key is not configured');
    }
    
    const response = await fetch(
      `${BASE_URL}/forecast.json?key=${API_KEY}&q=${encodeURIComponent(location)}&days=5&aqi=yes&alerts=yes`
    );
    
    if (!response.ok) {
      const errorText = await response.text();
      console.error('Weather API error:', response.status, errorText);
      throw new Error(`Weather fetch failed: ${response.status}`);
    }
    
    return await response.json();
  } catch (error) {
    console.error('Error fetching weather:', error);
    throw error;
  }
};

export const getWeatherByCoords = async (lat: number, lon: number): Promise<any> => {
  try {
    if (!API_KEY) {
      throw new Error('Weather API key is not configured');
    }
    
    const response = await fetch(
      `${BASE_URL}/forecast.json?key=${API_KEY}&q=${lat},${lon}&days=5&aqi=yes&alerts=yes`
    );
    
    if (!response.ok) {
      const errorText = await response.text();
      console.error('Weather API error:', response.status, errorText);
      throw new Error(`Weather fetch failed: ${response.status}`);
    }
    
    return await response.json();
  } catch (error) {
    console.error('Error fetching weather by coordinates:', error);
    throw error;
  }
};