import React from 'react';
import { 
  Brain, 
  CreditCard, 
  GraduationCap, 
  Users, 
  TrendingUp, 
  Shield,
  Smartphone,
  Globe,
  Heart
} from 'lucide-react';

const Features: React.FC = () => {
  const features = [
    {
      icon: Brain,
      title: 'AI Financial Advisor',
      description: 'Personalized financial guidance powered by ethical AI that understands your unique circumstances and cultural context.',
      color: 'from-purple-500 to-purple-600'
    },
    {
      icon: CreditCard,
      title: 'Alternative Credit Scoring',
      description: 'Build creditworthiness through alternative data like mobile payments, utility bills, and community endorsements.',
      color: 'from-pink-500 to-pink-600'
    },
    {
      icon: GraduationCap,
      title: 'Financial Literacy Hub',
      description: 'Interactive learning modules covering budgeting, investing, entrepreneurship, and digital financial services.',
      color: 'from-indigo-500 to-indigo-600'
    },
    {
      icon: Users,
      title: 'Community Support',
      description: 'Connect with other women entrepreneurs, join savings circles, and access peer-to-peer mentorship.',
      color: 'from-teal-500 to-teal-600'
    },
    {
      icon: TrendingUp,
      title: 'Microfinance Matching',
      description: 'AI-powered matching with appropriate microfinance opportunities and business development resources.',
      color: 'from-orange-500 to-orange-600'
    },
    {
      icon: Shield,
      title: 'Privacy & Security',
      description: 'End-to-end encryption, bias-free algorithms, and transparent data usage with full user control.',
      color: 'from-green-500 to-green-600'
    }
  ];

  const impactMetrics = [
    {
      icon: Smartphone,
      title: 'Digital-First Approach',
      description: 'Mobile-optimized platform accessible via basic smartphones, supporting multiple languages and offline capabilities.'
    },
    {
      icon: Globe,
      title: 'Scalable Solution',
      description: 'Cloud-based architecture designed to serve millions of women across emerging markets with localized features.'
    },
    {
      icon: Heart,
      title: 'Ethical AI Framework',
      description: 'Built with fairness, transparency, and bias mitigation at its core, ensuring equitable outcomes for all users.'
    }
  ];

  return (
    <section className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        {/* Main Features */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              Comprehensive Financial Ecosystem
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our AI-powered platform addresses every aspect of financial inclusion, from basic literacy to advanced investment strategies.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="bg-white/60 backdrop-blur-sm rounded-3xl p-8 border border-purple-100 hover:shadow-xl transition-all duration-300 group"
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

        {/* Impact & Implementation */}
        <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-3xl p-12 text-white mb-20">
          <div className="text-center mb-12">
            <h3 className="text-3xl md:text-4xl font-bold mb-4">Built for Impact & Scale</h3>
            <p className="text-xl text-purple-100 max-w-3xl mx-auto">
              Our solution prioritizes ethical AI practices, user privacy, and measurable social impact.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {impactMetrics.map((metric, index) => {
              const Icon = metric.icon;
              return (
                <div key={index} className="text-center">
                  <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-6 mb-4 inline-block">
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <h4 className="text-xl font-bold mb-3">{metric.title}</h4>
                  <p className="text-purple-100">{metric.description}</p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Success Metrics */}
        <div className="text-center">
          <h3 className="text-3xl md:text-4xl font-bold mb-12">
            <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              Measuring Success
            </span>
          </h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 border border-purple-100">
              <div className="text-3xl font-bold text-purple-600 mb-2">10M+</div>
              <div className="text-gray-600">Women Reached</div>
            </div>
            <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 border border-purple-100">
              <div className="text-3xl font-bold text-pink-600 mb-2">85%</div>
              <div className="text-gray-600">Financial Literacy Improvement</div>
            </div>
            <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 border border-purple-100">
              <div className="text-3xl font-bold text-indigo-600 mb-2">$2.5B</div>
              <div className="text-gray-600">Credit Access Facilitated</div>
            </div>
            <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 border border-purple-100">
              <div className="text-3xl font-bold text-teal-600 mb-2">50K+</div>
              <div className="text-gray-600">Businesses Started</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;