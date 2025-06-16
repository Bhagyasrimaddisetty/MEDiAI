import React from 'react';
import { Stethoscope, Home, Brain, Activity, BookOpen, AlertTriangle } from 'lucide-react';

interface HeaderProps {
  activeSection: string;
  onSectionChange: (section: 'home' | 'analyzer' | 'dashboard' | 'knowledge' | 'emergency') => void;
}

const Header: React.FC<HeaderProps> = ({ activeSection, onSectionChange }) => {
  const navItems = [
    { id: 'home', label: 'Home', icon: Home },
    { id: 'analyzer', label: 'Symptom Analyzer', icon: Brain },
    { id: 'dashboard', label: 'Health Dashboard', icon: Activity },
    { id: 'knowledge', label: 'Medical Knowledge', icon: BookOpen },
    { id: 'emergency', label: 'Emergency Guide', icon: AlertTriangle },
  ];

  return (
    <header className="bg-white/80 backdrop-blur-md border-b border-blue-100 sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="bg-gradient-to-r from-blue-600 to-green-600 p-2 rounded-xl">
              <Stethoscope className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="text-xl font-bold bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent">
                MediAI
              </h1>
              <p className="text-xs text-gray-600">AI Healthcare Assistant</p>
            </div>
          </div>

          <nav className="hidden md:flex items-center space-x-1">
            {navItems.map((item) => {
              const Icon = item.icon;
              return (
                <button
                  key={item.id}
                  onClick={() => onSectionChange(item.id as any)}
                  className={`flex items-center space-x-2 px-4 py-2 rounded-xl transition-all duration-200 ${
                    activeSection === item.id
                      ? 'bg-blue-100 text-blue-700'
                      : 'text-gray-600 hover:bg-blue-50 hover:text-blue-600'
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  <span className="font-medium">{item.label}</span>
                </button>
              );
            })}
          </nav>

          <div className="flex items-center space-x-3">
            <button className="bg-gradient-to-r from-blue-600 to-green-600 text-white px-6 py-2 rounded-xl font-medium hover:shadow-lg transition-all duration-200">
              Get Started
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <nav className="md:hidden mt-4 flex items-center justify-around bg-white/50 rounded-2xl p-2">
          {navItems.map((item) => {
            const Icon = item.icon;
            return (
              <button
                key={item.id}
                onClick={() => onSectionChange(item.id as any)}
                className={`flex flex-col items-center space-y-1 p-2 rounded-xl transition-all duration-200 ${
                  activeSection === item.id
                    ? 'bg-blue-100 text-blue-700'
                    : 'text-gray-600'
                }`}
              >
                <Icon className="w-4 h-4" />
                <span className="text-xs font-medium">{item.label}</span>
              </button>
            );
          })}
        </nav>
      </div>
    </header>
  );
};

export default Header;