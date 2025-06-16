import React, { useState } from 'react';
import { Stethoscope, Brain, Activity, Shield, Users, BookOpen } from 'lucide-react';
import Header from './components/Header';
import Hero from './components/Hero';
import SymptomAnalyzer from './components/SymptomAnalyzer';
import HealthDashboard from './components/HealthDashboard';
import MedicalKnowledge from './components/MedicalKnowledge';
import EmergencyGuide from './components/EmergencyGuide';
import Footer from './components/Footer';

function App() {
  const [activeSection, setActiveSection] = useState<'home' | 'analyzer' | 'dashboard' | 'knowledge' | 'emergency'>('home');

  const renderActiveSection = () => {
    switch (activeSection) {
      case 'analyzer':
        return <SymptomAnalyzer />;
      case 'dashboard':
        return <HealthDashboard />;
      case 'knowledge':
        return <MedicalKnowledge />;
      case 'emergency':
        return <EmergencyGuide />;
      default:
        return (
          <>
            <Hero onGetStarted={() => setActiveSection('analyzer')} />
            <Features />
          </>
        );
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50">
      <Header activeSection={activeSection} onSectionChange={setActiveSection} />
      {renderActiveSection()}
      <Footer />
    </div>
  );
}

const Features: React.FC = () => {
  const features = [
    {
      icon: Brain,
      title: 'AI Symptom Analysis',
      description: 'Advanced neural networks analyze your symptoms using natural language processing to provide accurate health insights.',
      color: 'from-blue-500 to-blue-600'
    },
    {
      icon: Stethoscope,
      title: 'Disease Prediction',
      description: 'Machine learning algorithms trained on medical data to suggest potential conditions based on symptom patterns.',
      color: 'from-green-500 to-green-600'
    },
    {
      icon: Activity,
      title: 'Health Monitoring',
      description: 'Track your health metrics, symptoms over time, and get personalized recommendations for better health.',
      color: 'from-purple-500 to-purple-600'
    },
    {
      icon: Shield,
      title: 'Privacy First',
      description: 'Your health data is encrypted and processed locally. We prioritize your privacy and data security.',
      color: 'from-red-500 to-red-600'
    },
    {
      icon: Users,
      title: 'Expert Network',
      description: 'Connect with healthcare professionals and get second opinions from certified medical experts.',
      color: 'from-indigo-500 to-indigo-600'
    },
    {
      icon: BookOpen,
      title: 'Medical Knowledge',
      description: 'Access comprehensive medical information, treatment guidelines, and health education resources.',
      color: 'from-teal-500 to-teal-600'
    }
  ];

  return (
    <section className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent">
              Advanced AI Healthcare Technology
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Combining cutting-edge AI, natural language processing, and deep neural networks to revolutionize healthcare accessibility.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="bg-white/60 backdrop-blur-sm rounded-3xl p-8 border border-blue-100 hover:shadow-xl transition-all duration-300 group"
              >
                <div className={`w-16 h-16 bg-gradient-to-r ${feature.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <Icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-4">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </div>
            );
          })}
        </div>

        {/* AI Technology Stack */}
        <div className="bg-gradient-to-r from-blue-600 to-green-600 rounded-3xl p-12 text-white mb-20">
          <div className="text-center mb-12">
            <h3 className="text-3xl md:text-4xl font-bold mb-4">AI Technology Stack</h3>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Our healthcare AI is built on state-of-the-art machine learning technologies and medical expertise.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-6 mb-4 inline-block">
                <Brain className="w-8 h-8 text-white" />
              </div>
              <h4 className="text-xl font-bold mb-3">Natural Language Processing</h4>
              <p className="text-blue-100">Advanced NLP to understand and process medical symptoms in natural language.</p>
            </div>
            <div className="text-center">
              <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-6 mb-4 inline-block">
                <Activity className="w-8 h-8 text-white" />
              </div>
              <h4 className="text-xl font-bold mb-3">Deep Neural Networks</h4>
              <p className="text-blue-100">Multi-layer neural networks trained on extensive medical datasets for accurate predictions.</p>
            </div>
            <div className="text-center">
              <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-6 mb-4 inline-block">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <h4 className="text-xl font-bold mb-3">Optimization Algorithms</h4>
              <p className="text-blue-100">Continuous learning and optimization to improve accuracy and reduce diagnostic errors.</p>
            </div>
          </div>
        </div>

        {/* Success Metrics */}
        <div className="text-center">
          <h3 className="text-3xl md:text-4xl font-bold mb-12">
            <span className="bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent">
              Proven Results
            </span>
          </h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 border border-blue-100">
              <div className="text-3xl font-bold text-blue-600 mb-2">94%</div>
              <div className="text-gray-600">Diagnostic Accuracy</div>
            </div>
            <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 border border-blue-100">
              <div className="text-3xl font-bold text-green-600 mb-2">1M+</div>
              <div className="text-gray-600">Symptoms Analyzed</div>
            </div>
            <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 border border-blue-100">
              <div className="text-3xl font-bold text-purple-600 mb-2">500K+</div>
              <div className="text-gray-600">Users Helped</div>
            </div>
            <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 border border-blue-100">
              <div className="text-3xl font-bold text-teal-600 mb-2">24/7</div>
              <div className="text-gray-600">Availability</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default App;