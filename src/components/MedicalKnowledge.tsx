import React, { useState } from 'react';
import { BookOpen, Search, Filter, Heart, Brain, Settings as Lungs, Shield, Activity, AlertTriangle, CheckCircle, Clock, Users } from 'lucide-react';

const MedicalKnowledge: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { id: 'all', label: 'All Topics', icon: BookOpen },
    { id: 'cardiology', label: 'Heart Health', icon: Heart },
    { id: 'neurology', label: 'Brain & Nervous System', icon: Brain },
    { id: 'respiratory', label: 'Respiratory', icon: Lungs },
    { id: 'preventive', label: 'Preventive Care', icon: Shield },
    { id: 'emergency', label: 'Emergency Care', icon: AlertTriangle },
  ];

  const articles = [
    {
      id: 1,
      title: 'Understanding Heart Disease: Prevention and Early Detection',
      category: 'cardiology',
      readTime: '8 min read',
      difficulty: 'Beginner',
      summary: 'Learn about the most common heart conditions, risk factors, and how to maintain cardiovascular health.',
      tags: ['heart disease', 'prevention', 'cardiovascular health'],
      lastUpdated: '2024-01-15',
      views: 1250,
      image: 'https://images.pexels.com/photos/40568/medical-appointment-doctor-healthcare-40568.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      id: 2,
      title: 'Migraine vs. Regular Headaches: When to Seek Medical Help',
      category: 'neurology',
      readTime: '6 min read',
      difficulty: 'Intermediate',
      summary: 'Distinguish between different types of headaches and understand when professional medical attention is needed.',
      tags: ['headache', 'migraine', 'neurology'],
      lastUpdated: '2024-01-12',
      views: 890,
      image: 'https://images.pexels.com/photos/3845457/pexels-photo-3845457.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      id: 3,
      title: 'Respiratory Health: Common Conditions and Treatment Options',
      category: 'respiratory',
      readTime: '10 min read',
      difficulty: 'Advanced',
      summary: 'Comprehensive guide to respiratory conditions including asthma, COPD, and pneumonia.',
      tags: ['respiratory', 'asthma', 'COPD', 'pneumonia'],
      lastUpdated: '2024-01-10',
      views: 2100,
      image: 'https://images.pexels.com/photos/4386431/pexels-photo-4386431.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      id: 4,
      title: 'Mental Health First Aid: Recognizing Signs and Providing Support',
      category: 'neurology',
      readTime: '12 min read',
      difficulty: 'Intermediate',
      summary: 'Essential guide to understanding mental health conditions and how to provide appropriate support.',
      tags: ['mental health', 'anxiety', 'depression', 'support'],
      lastUpdated: '2024-01-08',
      views: 1680,
      image: 'https://images.pexels.com/photos/6801648/pexels-photo-6801648.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      id: 5,
      title: 'Emergency Situations: When Every Second Counts',
      category: 'emergency',
      readTime: '5 min read',
      difficulty: 'Beginner',
      summary: 'Critical information about medical emergencies and immediate response actions.',
      tags: ['emergency', 'first aid', 'CPR', 'stroke'],
      lastUpdated: '2024-01-05',
      views: 3200,
      image: 'https://images.pexels.com/photos/263402/pexels-photo-263402.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      id: 6,
      title: 'Preventive Healthcare: Building Healthy Habits for Life',
      category: 'preventive',
      readTime: '7 min read',
      difficulty: 'Beginner',
      summary: 'Evidence-based strategies for maintaining good health and preventing common diseases.',
      tags: ['prevention', 'lifestyle', 'nutrition', 'exercise'],
      lastUpdated: '2024-01-03',
      views: 950,
      image: 'https://images.pexels.com/photos/4386370/pexels-photo-4386370.jpeg?auto=compress&cs=tinysrgb&w=400'
    }
  ];

  const featuredTopics = [
    {
      title: 'AI in Healthcare',
      description: 'How artificial intelligence is revolutionizing medical diagnosis and treatment',
      icon: Brain,
      color: 'bg-purple-100 text-purple-700'
    },
    {
      title: 'Telemedicine',
      description: 'The future of remote healthcare and virtual consultations',
      icon: Activity,
      color: 'bg-blue-100 text-blue-700'
    },
    {
      title: 'Personalized Medicine',
      description: 'Tailoring medical treatment to individual patient characteristics',
      icon: Heart,
      color: 'bg-pink-100 text-pink-700'
    },
    {
      title: 'Health Data Privacy',
      description: 'Understanding your rights and protecting your medical information',
      icon: Shield,
      color: 'bg-green-100 text-green-700'
    }
  ];

  const filteredArticles = articles.filter(article => {
    const matchesSearch = article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         article.summary.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         article.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    const matchesCategory = selectedCategory === 'all' || article.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'Beginner': return 'bg-green-100 text-green-700';
      case 'Intermediate': return 'bg-yellow-100 text-yellow-700';
      case 'Advanced': return 'bg-red-100 text-red-700';
      default: return 'bg-gray-100 text-gray-700';
    }
  };

  return (
    <div className="py-8 px-4 min-h-screen">
      <div className="container mx-auto max-w-7xl">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent">
              Medical Knowledge Base
            </span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Access comprehensive medical information, treatment guidelines, and health education resources.
          </p>
        </div>

        {/* Search and Filter */}
        <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0 md:space-x-4 mb-8">
          <div className="relative flex-1 max-w-md">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search medical topics..."
              className="w-full pl-10 pr-4 py-3 bg-white border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-300"
            />
          </div>
          
          <div className="flex items-center space-x-4">
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="bg-white border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-300"
            >
              {categories.map(category => (
                <option key={category.id} value={category.id}>
                  {category.label}
                </option>
              ))}
            </select>
            
            <button className="flex items-center space-x-2 bg-white border border-gray-200 rounded-xl px-4 py-3 hover:bg-gray-50 transition-colors">
              <Filter className="w-4 h-4" />
              <span>More Filters</span>
            </button>
          </div>
        </div>

        {/* Featured Topics */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Featured Topics</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredTopics.map((topic, index) => {
              const Icon = topic.icon;
              return (
                <div key={index} className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 border border-blue-100 hover:shadow-lg transition-all duration-300 cursor-pointer">
                  <div className={`${topic.color} p-3 rounded-xl inline-block mb-4`}>
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="font-bold text-gray-800 mb-2">{topic.title}</h3>
                  <p className="text-gray-600 text-sm">{topic.description}</p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Articles Grid */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold text-gray-800">
              Medical Articles ({filteredArticles.length})
            </h2>
            <div className="flex items-center space-x-2 text-sm text-gray-600">
              <span>Sort by:</span>
              <select className="bg-white border border-gray-200 rounded-lg px-3 py-1 focus:outline-none focus:ring-2 focus:ring-blue-300">
                <option>Most Recent</option>
                <option>Most Popular</option>
                <option>Alphabetical</option>
              </select>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredArticles.map((article) => (
              <div key={article.id} className="bg-white/60 backdrop-blur-sm rounded-2xl overflow-hidden border border-blue-100 hover:shadow-xl transition-all duration-300 group cursor-pointer">
                <img
                  src={article.image}
                  alt={article.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${getDifficultyColor(article.difficulty)}`}>
                      {article.difficulty}
                    </span>
                    <div className="flex items-center space-x-1 text-gray-500">
                      <Users className="w-4 h-4" />
                      <span className="text-sm">{article.views}</span>
                    </div>
                  </div>
                  
                  <h3 className="text-lg font-bold text-gray-800 mb-2 line-clamp-2">{article.title}</h3>
                  <p className="text-gray-600 mb-4 text-sm line-clamp-3">{article.summary}</p>
                  
                  <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                    <div className="flex items-center space-x-1">
                      <Clock className="w-4 h-4" />
                      <span>{article.readTime}</span>
                    </div>
                    <span>Updated {article.lastUpdated}</span>
                  </div>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {article.tags.slice(0, 3).map((tag, index) => (
                      <span key={index} className="bg-blue-100 text-blue-700 px-2 py-1 rounded-lg text-xs">
                        {tag}
                      </span>
                    ))}
                  </div>

                  <button className="w-full bg-gradient-to-r from-blue-600 to-green-600 text-white py-2 rounded-xl font-medium hover:shadow-lg transition-all duration-200">
                    Read Article
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Medical Disclaimer */}
        <div className="bg-yellow-50 border border-yellow-200 rounded-2xl p-6">
          <div className="flex items-start space-x-3">
            <AlertTriangle className="w-6 h-6 text-yellow-600 mt-0.5" />
            <div>
              <h4 className="font-medium text-yellow-800 mb-2">Medical Information Disclaimer</h4>
              <p className="text-yellow-700 text-sm">
                The information provided in this knowledge base is for educational purposes only and should not be used as a substitute for professional medical advice, diagnosis, or treatment. Always seek the advice of your physician or other qualified health provider with any questions you may have regarding a medical condition. Never disregard professional medical advice or delay in seeking it because of something you have read here.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MedicalKnowledge;