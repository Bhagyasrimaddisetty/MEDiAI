import React from 'react';
import { ArrowRight, Sparkles, Shield, Brain } from 'lucide-react';

interface HeroProps {
  onGetStarted: () => void;
}

const Hero: React.FC<HeroProps> = ({ onGetStarted }) => {
  return (
    <section className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-full mb-6">
            <Brain className="w-4 h-4" />
            <span className="text-sm font-medium">AI-Powered Medical Diagnosis</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            <span className="bg-gradient-to-r from-blue-600 via-green-600 to-teal-600 bg-clip-text text-transparent">
              Your AI Doctor
            </span>
            <br />
            <span className="text-gray-800">Always Available</span>
          </h1>
          
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
            Advanced AI healthcare assistant that analyzes your symptoms using natural language processing 
            and deep neural networks to provide accurate disease predictions and health recommendations.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <button
              onClick={onGetStarted}
              className="bg-gradient-to-r from-blue-600 to-green-600 text-white px-8 py-4 rounded-2xl font-semibold text-lg hover:shadow-xl transition-all duration-300 flex items-center space-x-2"
            >
              <span>Analyze Symptoms</span>
              <ArrowRight className="w-5 h-5" />
            </button>
            
            <button className="border-2 border-blue-200 text-blue-700 px-8 py-4 rounded-2xl font-semibold text-lg hover:bg-blue-50 transition-all duration-300">
              Learn More
            </button>
          </div>
        </div>

        {/* Stats */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="text-center">
            <div className="bg-white/60 backdrop-blur-sm rounded-3xl p-8 border border-blue-100">
              <div className="text-4xl font-bold text-blue-600 mb-2">94%</div>
              <div className="text-gray-600">Diagnostic Accuracy Rate</div>
            </div>
          </div>
          
          <div className="text-center">
            <div className="bg-white/60 backdrop-blur-sm rounded-3xl p-8 border border-blue-100">
              <div className="text-4xl font-bold text-green-600 mb-2">10K+</div>
              <div className="text-gray-600">Medical Conditions in Database</div>
            </div>
          </div>
          
          <div className="text-center">
            <div className="bg-white/60 backdrop-blur-sm rounded-3xl p-8 border border-blue-100">
              <div className="text-4xl font-bold text-purple-600 mb-2">24/7</div>
              <div className="text-gray-600">Always Available Support</div>
            </div>
          </div>
        </div>

        {/* Trust Indicators */}
        <div className="flex flex-wrap items-center justify-center space-x-8 text-gray-500">
          <div className="flex items-center space-x-2">
            <Shield className="w-5 h-5" />
            <span>HIPAA Compliant</span>
          </div>
          <div className="flex items-center space-x-2">
            <Brain className="w-5 h-5" />
            <span>AI-Powered</span>
          </div>
          <div className="flex items-center space-x-2">
            <Sparkles className="w-5 h-5" />
            <span>Clinically Validated</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;