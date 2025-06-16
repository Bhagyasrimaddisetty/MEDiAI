import React, { useState } from 'react';
import { 
  Users, 
  MessageCircle, 
  Heart, 
  TrendingUp, 
  Calendar,
  MapPin,
  Star,
  Plus,
  Search,
  Filter
} from 'lucide-react';

const CommunitySupport: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'groups' | 'mentorship' | 'events'>('groups');

  const savingsGroups = [
    {
      id: 1,
      name: 'Women Entrepreneurs Circle',
      description: 'Supporting women starting their own businesses with micro-savings and peer support.',
      members: 156,
      monthlyGoal: 500,
      currentSavings: 12400,
      location: 'Lagos, Nigeria',
      category: 'Business',
      image: 'https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      id: 2,
      name: 'Education Fund Collective',
      description: 'Pooling resources to support children\'s education and women\'s skill development.',
      members: 89,
      monthlyGoal: 300,
      currentSavings: 8900,
      location: 'Nairobi, Kenya',
      category: 'Education',
      image: 'https://images.pexels.com/photos/5212345/pexels-photo-5212345.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      id: 3,
      name: 'Healthcare Security Group',
      description: 'Building emergency funds for healthcare expenses and medical insurance.',
      members: 234,
      monthlyGoal: 400,
      currentSavings: 18600,
      location: 'Mumbai, India',
      category: 'Healthcare',
      image: 'https://images.pexels.com/photos/6801648/pexels-photo-6801648.jpeg?auto=compress&cs=tinysrgb&w=400'
    }
  ];

  const mentors = [
    {
      id: 1,
      name: 'Dr. Amara Okafor',
      title: 'Microfinance Expert & Entrepreneur',
      experience: '15+ years',
      specialties: ['Business Development', 'Microfinance', 'Financial Planning'],
      rating: 4.9,
      sessions: 127,
      image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=400',
      available: true
    },
    {
      id: 2,
      name: 'Sarah Chen',
      title: 'Digital Banking Specialist',
      experience: '8+ years',
      specialties: ['Digital Payments', 'Credit Building', 'Investment Basics'],
      rating: 4.8,
      sessions: 89,
      image: 'https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg?auto=compress&cs=tinysrgb&w=400',
      available: false
    },
    {
      id: 3,
      name: 'Maria Rodriguez',
      title: 'Community Finance Advocate',
      experience: '12+ years',
      specialties: ['Savings Groups', 'Financial Literacy', 'Women Empowerment'],
      rating: 4.9,
      sessions: 203,
      image: 'https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=400',
      available: true
    }
  ];

  const events = [
    {
      id: 1,
      title: 'Financial Literacy Workshop',
      description: 'Interactive session on budgeting and saving strategies for beginners.',
      date: '2024-02-15',
      time: '2:00 PM - 4:00 PM',
      location: 'Online',
      attendees: 45,
      maxAttendees: 100,
      type: 'Workshop',
      image: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      id: 2,
      title: 'Women in Business Networking',
      description: 'Connect with fellow women entrepreneurs and share business experiences.',
      date: '2024-02-20',
      time: '6:00 PM - 8:00 PM',
      location: 'Community Center, Lagos',
      attendees: 23,
      maxAttendees: 50,
      type: 'Networking',
      image: 'https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      id: 3,
      title: 'Digital Banking Masterclass',
      description: 'Learn to navigate mobile banking and digital payment platforms safely.',
      date: '2024-02-25',
      time: '10:00 AM - 12:00 PM',
      location: 'Online',
      attendees: 67,
      maxAttendees: 150,
      type: 'Masterclass',
      image: 'https://images.pexels.com/photos/4386370/pexels-photo-4386370.jpeg?auto=compress&cs=tinysrgb&w=400'
    }
  ];

  const renderGroups = () => (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row items-center justify-between space-y-4 sm:space-y-0">
        <div className="flex items-center space-x-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Search savings groups..."
              className="pl-10 pr-4 py-2 bg-white/60 border border-purple-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-300"
            />
          </div>
          <button className="flex items-center space-x-2 bg-white/60 border border-purple-200 rounded-xl px-4 py-2 hover:bg-white/80 transition-colors">
            <Filter className="w-4 h-4" />
            <span>Filter</span>
          </button>
        </div>
        <button className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-2 rounded-xl font-medium hover:shadow-lg transition-all duration-200 flex items-center space-x-2">
          <Plus className="w-4 h-4" />
          <span>Create Group</span>
        </button>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {savingsGroups.map((group) => (
          <div key={group.id} className="bg-white/60 backdrop-blur-sm rounded-2xl overflow-hidden border border-purple-100 hover:shadow-xl transition-all duration-300">
            <img
              src={group.image}
              alt={group.name}
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <div className="flex items-center justify-between mb-3">
                <span className="bg-purple-100 text-purple-700 px-3 py-1 rounded-full text-sm font-medium">
                  {group.category}
                </span>
                <div className="flex items-center space-x-1 text-gray-500">
                  <Users className="w-4 h-4" />
                  <span className="text-sm">{group.members}</span>
                </div>
              </div>
              
              <h3 className="text-xl font-bold text-gray-800 mb-2">{group.name}</h3>
              <p className="text-gray-600 mb-4 text-sm">{group.description}</p>
              
              <div className="flex items-center space-x-2 text-gray-500 mb-4">
                <MapPin className="w-4 h-4" />
                <span className="text-sm">{group.location}</span>
              </div>

              <div className="mb-4">
                <div className="flex items-center justify-between text-sm text-gray-600 mb-2">
                  <span>Monthly Goal Progress</span>
                  <span>${group.currentSavings.toLocaleString()}</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div 
                    className="bg-gradient-to-r from-purple-500 to-pink-500 h-2 rounded-full"
                    style={{ width: `${Math.min((group.currentSavings / (group.monthlyGoal * group.members)) * 100, 100)}%` }}
                  ></div>
                </div>
              </div>

              <button className="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white py-3 rounded-xl font-medium hover:shadow-lg transition-all duration-200">
                Join Group
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  const renderMentorship = () => (
    <div className="space-y-6">
      <div className="text-center mb-8">
        <h3 className="text-2xl font-bold text-gray-800 mb-2">Connect with Expert Mentors</h3>
        <p className="text-gray-600">Get personalized guidance from experienced financial professionals</p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {mentors.map((mentor) => (
          <div key={mentor.id} className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 border border-purple-100 hover:shadow-xl transition-all duration-300">
            <div className="text-center mb-6">
              <img
                src={mentor.image}
                alt={mentor.name}
                className="w-20 h-20 rounded-full mx-auto mb-4 object-cover"
              />
              <h3 className="text-xl font-bold text-gray-800 mb-1">{mentor.name}</h3>
              <p className="text-gray-600 text-sm mb-2">{mentor.title}</p>
              <div className="flex items-center justify-center space-x-4 text-sm text-gray-500">
                <span>{mentor.experience}</span>
                <div className="flex items-center space-x-1">
                  <Star className="w-4 h-4 text-yellow-500 fill-current" />
                  <span>{mentor.rating}</span>
                </div>
              </div>
            </div>

            <div className="mb-6">
              <h4 className="font-medium text-gray-800 mb-2">Specialties</h4>
              <div className="flex flex-wrap gap-2">
                {mentor.specialties.map((specialty, index) => (
                  <span
                    key={index}
                    className="bg-purple-100 text-purple-700 px-2 py-1 rounded-lg text-xs"
                  >
                    {specialty}
                  </span>
                ))}
              </div>
            </div>

            <div className="text-center text-sm text-gray-600 mb-4">
              {mentor.sessions} successful mentoring sessions
            </div>

            <button
              disabled={!mentor.available}
              className={`w-full py-3 rounded-xl font-medium transition-all duration-200 ${
                mentor.available
                  ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white hover:shadow-lg'
                  : 'bg-gray-200 text-gray-500 cursor-not-allowed'
              }`}
            >
              {mentor.available ? 'Book Session' : 'Currently Unavailable'}
            </button>
          </div>
        ))}
      </div>
    </div>
  );

  const renderEvents = () => (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row items-center justify-between space-y-4 sm:space-y-0">
        <div>
          <h3 className="text-2xl font-bold text-gray-800 mb-2">Upcoming Events</h3>
          <p className="text-gray-600">Join workshops, networking events, and masterclasses</p>
        </div>
        <button className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-2 rounded-xl font-medium hover:shadow-lg transition-all duration-200 flex items-center space-x-2">
          <Plus className="w-4 h-4" />
          <span>Create Event</span>
        </button>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {events.map((event) => (
          <div key={event.id} className="bg-white/60 backdrop-blur-sm rounded-2xl overflow-hidden border border-purple-100 hover:shadow-xl transition-all duration-300">
            <img
              src={event.image}
              alt={event.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <div className="flex items-center justify-between mb-3">
                <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm font-medium">
                  {event.type}
                </span>
                <div className="flex items-center space-x-1 text-gray-500">
                  <Users className="w-4 h-4" />
                  <span className="text-sm">{event.attendees}/{event.maxAttendees}</span>
                </div>
              </div>
              
              <h3 className="text-xl font-bold text-gray-800 mb-2">{event.title}</h3>
              <p className="text-gray-600 mb-4 text-sm">{event.description}</p>
              
              <div className="space-y-2 mb-4">
                <div className="flex items-center space-x-2 text-gray-500">
                  <Calendar className="w-4 h-4" />
                  <span className="text-sm">{new Date(event.date).toLocaleDateString()}</span>
                </div>
                <div className="flex items-center space-x-2 text-gray-500">
                  <MapPin className="w-4 h-4" />
                  <span className="text-sm">{event.location}</span>
                </div>
              </div>

              <div className="mb-4">
                <div className="flex items-center justify-between text-sm text-gray-600 mb-2">
                  <span>Attendance</span>
                  <span>{Math.round((event.attendees / event.maxAttendees) * 100)}% full</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div 
                    className="bg-gradient-to-r from-blue-500 to-teal-500 h-2 rounded-full"
                    style={{ width: `${(event.attendees / event.maxAttendees) * 100}%` }}
                  ></div>
                </div>
              </div>

              <button className="w-full bg-gradient-to-r from-blue-600 to-teal-600 text-white py-3 rounded-xl font-medium hover:shadow-lg transition-all duration-200">
                Register Now
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <div className="py-8 px-4 min-h-screen">
      <div className="container mx-auto max-w-7xl">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              Community Support
            </span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Connect, learn, and grow together with a supportive community of women on their financial journey.
          </p>
        </div>

        {/* Stats */}
        <div className="grid md:grid-cols-4 gap-6 mb-12">
          <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 border border-purple-100 text-center">
            <div className="bg-purple-100 p-3 rounded-xl inline-block mb-4">
              <Users className="w-6 h-6 text-purple-600" />
            </div>
            <div className="text-2xl font-bold text-gray-800 mb-1">25,000+</div>
            <div className="text-gray-600 text-sm">Community Members</div>
          </div>

          <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 border border-purple-100 text-center">
            <div className="bg-pink-100 p-3 rounded-xl inline-block mb-4">
              <Heart className="w-6 h-6 text-pink-600" />
            </div>
            <div className="text-2xl font-bold text-gray-800 mb-1">150+</div>
            <div className="text-gray-600 text-sm">Savings Groups</div>
          </div>

          <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 border border-purple-100 text-center">
            <div className="bg-indigo-100 p-3 rounded-xl inline-block mb-4">
              <MessageCircle className="w-6 h-6 text-indigo-600" />
            </div>
            <div className="text-2xl font-bold text-gray-800 mb-1">50+</div>
            <div className="text-gray-600 text-sm">Expert Mentors</div>
          </div>

          <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 border border-purple-100 text-center">
            <div className="bg-teal-100 p-3 rounded-xl inline-block mb-4">
              <TrendingUp className="w-6 h-6 text-teal-600" />
            </div>
            <div className="text-2xl font-bold text-gray-800 mb-1">$5M+</div>
            <div className="text-gray-600 text-sm">Collective Savings</div>
          </div>
        </div>

        {/* Navigation Tabs */}
        <div className="flex items-center justify-center mb-8">
          <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-2 border border-purple-100">
            <div className="flex space-x-2">
              {[
                { id: 'groups', label: 'Savings Groups', icon: Users },
                { id: 'mentorship', label: 'Mentorship', icon: MessageCircle },
                { id: 'events', label: 'Events', icon: Calendar },
              ].map((tab) => {
                const Icon = tab.icon;
                return (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id as any)}
                    className={`flex items-center space-x-2 px-6 py-3 rounded-xl font-medium transition-all duration-200 ${
                      activeTab === tab.id
                        ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white'
                        : 'text-gray-600 hover:bg-purple-50'
                    }`}
                  >
                    <Icon className="w-4 h-4" />
                    <span>{tab.label}</span>
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* Tab Content */}
        <div>
          {activeTab === 'groups' && renderGroups()}
          {activeTab === 'mentorship' && renderMentorship()}
          {activeTab === 'events' && renderEvents()}
        </div>
      </div>
    </div>
  );
};

export default CommunitySupport;