import React, { useState, useEffect, useRef } from 'react';
import { Search, MapPin, Loader } from 'lucide-react';
import { searchLocations } from '../utils/weatherApi';
import { SearchLocation } from '../types/weather';

interface SearchBarProps {
  onLocationSelect: (location: string) => void;
  onCurrentLocation: () => void;
  isLoading: boolean;
}

const SearchBar: React.FC<SearchBarProps> = ({ onLocationSelect, onCurrentLocation, isLoading }) => {
  const [query, setQuery] = useState('');
  const [suggestions, setSuggestions] = useState<SearchLocation[]>([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [isSearching, setIsSearching] = useState(false);
  const searchRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
        setShowSuggestions(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  useEffect(() => {
    const searchTimer = setTimeout(async () => {
      if (query.length > 2) {
        setIsSearching(true);
        const results = await searchLocations(query);
        setSuggestions(results.slice(0, 5));
        setShowSuggestions(true);
        setIsSearching(false);
      } else {
        setSuggestions([]);
        setShowSuggestions(false);
      }
    }, 300);

    return () => clearTimeout(searchTimer);
  }, [query]);

  const handleLocationSelect = (location: SearchLocation) => {
    setQuery(`${location.name}, ${location.country}`);
    setShowSuggestions(false);
    onLocationSelect(`${location.lat},${location.lon}`);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (query.trim()) {
      setShowSuggestions(false);
      onLocationSelect(query.trim());
    }
  };

  return (
    <div className="relative w-full max-w-md mx-auto" ref={searchRef}>
      <form onSubmit={handleSubmit} className="relative">
        <div className="relative">
          <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white/70 w-5 h-5" />
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search for a city..."
            className="w-full pl-12 pr-16 py-4 bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-white/30 focus:border-transparent transition-all duration-200"
            disabled={isLoading}
          />
          <button
            type="button"
            onClick={onCurrentLocation}
            disabled={isLoading}
            className="absolute right-2 top-1/2 transform -translate-y-1/2 p-2 bg-white/20 hover:bg-white/30 rounded-xl transition-all duration-200 disabled:opacity-50"
          >
            {isLoading ? (
              <Loader className="w-4 h-4 text-white animate-spin" />
            ) : (
              <MapPin className="w-4 h-4 text-white" />
            )}
          </button>
        </div>
      </form>

      {showSuggestions && (suggestions.length > 0 || isSearching) && (
        <div className="absolute top-full left-0 right-0 mt-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl overflow-hidden z-50">
          {isSearching ? (
            <div className="p-4 text-center text-white/70">
              <Loader className="w-5 h-5 animate-spin mx-auto mb-2" />
              Searching...
            </div>
          ) : (
            suggestions.map((location) => (
              <button
                key={location.id}
                onClick={() => handleLocationSelect(location)}
                className="w-full text-left p-4 hover:bg-white/10 transition-colors duration-200 text-white border-b border-white/10 last:border-b-0"
              >
                <div className="font-medium">{location.name}</div>
                <div className="text-sm text-white/70">
                  {location.region && `${location.region}, `}{location.country}
                </div>
              </button>
            ))
          )}
        </div>
      )}
    </div>
  );
};

export default SearchBar;