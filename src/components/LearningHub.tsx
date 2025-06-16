import React, { useState } from 'react';
import { 
  BookOpen, 
  Play, 
  Clock, 
  Users, 
  Award, 
  TrendingUp,
  DollarSign,
  CreditCard,
  PiggyBank,
  Briefcase,
  CheckCircle,
  Star
} from 'lucide-react';

const LearningHub: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [completedCourses, setCompletedCourses] = useState<number[]>([1, 3]);

  const categories = [
    { id: 'all', label: 'All Courses', icon: BookOpen },
    { id: 'basics', label: 'Financial Basics', icon: DollarSign },
    { id: 'credit', label: 'Credit Building', icon: CreditCard },
    { id: 'saving', label: 'Saving & Investing', icon: PiggyBank },
    { id: 'business', label: 'Entrepreneurship', icon: Briefcase },
  ];

  const courses = [
    {
      id: 1,
      title: 'Financial Literacy Fundamentals',
      description: 'Master the basics of personal finance, budgeting, and money management.',
      category: 'basics',
      duration: '2 hours',
      lessons: 8,
      level: 'Beginner',
      rating: 4.8,
      students: 12500,
      image: 'https://images.pexels.com/photos/6801648/pexels-photo-6801648.jpeg?auto=compress&cs=tinysrgb&w=400',
      progress: 100
    },
    {
      id: 2,
      title: 'Building Credit from Scratch',
      description: 'Learn how to establish and build a strong credit history without traditional banking.',
      category: 'credit',
      duration: '1.5 hours',
      lessons: 6,
      level: 'Beginner',
      rating: 4.9,
      students: 8900,
      image: 'https://images.pexels.com/photos/4386431/pexels-photo-4386431.jpeg?auto=compress&cs=tinysrgb&w=400',
      progress: 0
    },
    {
      id: 3,
      title: 'Smart Saving Strategies',
      description: 'Discover effective saving techniques and emergency fund building strategies.',
      category: 'saving',
      duration: '2.5 hours',
      lessons: 10,
      level: 'Intermediate',
      rating: 4.7,
      students: 15600,
      image: 'https://images.pexels.com/photos/3943716/pexels-photo-3943716.jpeg?auto=compress&cs=tinysrgb&w=400',
      progress: 100
    },
    {
      id: 4,
      title: 'Microfinance & Small Business',
      description: 'Navigate microfinance options and start your own small business.',
      category: 'business',
      duration: '3 hours',
      lessons: 12,
      level: 'Advanced',
      rating: 4.6,
      students: 7200,
      image: 'https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=400',
      progress: 25
    },
    {
      id: 5,
      title: 'Digital Banking & Mobile Money',
      description: 'Master digital financial services and mobile payment platforms.',
      category: 'basics',
      duration: '1 hour',
      lessons: 5,
      level: 'Beginner',
      rating: 4.8,
      students: 11300,
      image: 'https://images.pexels.com/photos/4386370/pexels-photo-4386370.jpeg?auto=compress&cs=tinysrgb&w=400',
      progress: 60
    },
    {
      id: 6,
      title: 'Investment Basics for Women',
      description: 'Start your investment journey with confidence and knowledge.',
      category: 'saving',
      duration: '2 hours',
      lessons: 8,
      level: 'Intermediate',
      rating: 4.9,
      students: 9800,
      image: 'https://images.pexels.com/photos/6801874/pexels-photo-6801874.jpeg?auto=compress&cs=tinysrgb&w=400',
      progress: 0
    }
  ];

  const achievements = [
    { title: 'First Course Completed', icon: Award, earned: true },
    { title: 'Financial Basics Master', icon: Star, earned: true },
    { title: 'Savings Champion', icon: PiggyBank, earned: false },
    { title: 'Credit Builder', icon: CreditCard, earned: false },
  ];

  const filteredCourses = selectedCategory === 'all' 
    ? courses 
    : courses.filter(course => course.category === selectedCategory);

  const toggleCourseCompletion = (courseId: number) => {
    setCompletedCourses(prev => 
      prev.includes(courseId) 
        ? prev.filter(id => id !== courseId)
        : [...prev, courseId]
    );
  };

  return (
    <div className="py-8 px-4 min-h-screen">
      <div className="container mx-auto max-w-7xl">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              Financial Learning Hub
            </span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Empower yourself with financial knowledge through our comprehensive, culturally-sensitive learning modules.
          </p>
        </div>

        {/* Progress Overview */}
        <div className="grid md:grid-cols-4 gap-6 mb-12">
          <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 border border-purple-100 text-center">
            <div className="bg-purple-100 p-3 rounded-xl inline-block mb-4">
              <BookOpen className="w-6 h-6 text-purple-600" />
            </div>
            <div className="text-2xl font-bold text-gray-800 mb-1">12</div>
            <div className="text-gray-600 text-sm">Courses Available</div>
          </div>

          <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 border border-purple-100 text-center">
            <div className="bg-green-100 p-3 rounded-xl inline-block mb-4">
              <CheckCircle className="w-6 h-6 text-green-600" />
            </div>
            <div className="text-2xl font-bold text-gray-800 mb-1">3</div>
            <div className="text-gray-600 text-sm">Completed</div>
          </div>

          <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 border border-purple-100 text-center">
            <div className="bg-blue-100 p-3 rounded-xl inline-block mb-4">
              <Clock className="w-6 h-6 text-blue-600" />
            </div>
            <div className="text-2xl font-bold text-gray-800 mb-1">24h</div>
            <div className="text-gray-600 text-sm">Learning Time</div>
          </div>

          <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 border border-purple-100 text-center">
            <div className="bg-yellow-100 p-3 rounded-xl inline-block mb-4">
              <Award className="w-6 h-6 text-yellow-600" />
            </div>
            <div className="text-2xl font-bold text-gray-800 mb-1">2</div>
            <div className="text-gray-600 text-sm">Achievements</div>
          </div>
        </div>

        <div className="grid lg:grid-cols-4 gap-8">
          {/* Sidebar */}
          <div className="lg:col-span-1">
            {/* Categories */}
            <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 border border-purple-100 mb-8">
              <h3 className="text-lg font-bold text-gray-800 mb-4">Categories</h3>
              <div className="space-y-2">
                {categories.map((category) => {
                  const Icon = category.icon;
                  return (
                    <button
                      key={category.id}
                      onClick={() => setSelectedCategory(category.id)}
                      className={`w-full flex items-center space-x-3 p-3 rounded-xl transition-all duration-200 ${
                        selectedCategory === category.id
                          ? 'bg-purple-100 text-purple-700'
                          : 'text-gray-600 hover:bg-purple-50'
                      }`}
                    >
                      <Icon className="w-5 h-5" />
                      <span className="font-medium">{category.label}</span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Achievements */}
            <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 border border-purple-100">
              <h3 className="text-lg font-bold text-gray-800 mb-4">Achievements</h3>
              <div className="space-y-3">
                {achievements.map((achievement, index) => {
                  const Icon = achievement.icon;
                  return (
                    <div
                      key={index}
                      className={`flex items-center space-x-3 p-3 rounded-xl ${
                        achievement.earned
                          ? 'bg-yellow-50 text-yellow-700'
                          : 'bg-gray-50 text-gray-400'
                      }`}
                    >
                      <Icon className="w-5 h-5" />
                      <span className="text-sm font-medium">{achievement.title}</span>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3">
            <div className="grid md:grid-cols-2 gap-6">
              {filteredCourses.map((course) => (
                <div
                  key={course.id}
                  className="bg-white/60 backdrop-blur-sm rounded-2xl overflow-hidden border border-purple-100 hover:shadow-xl transition-all duration-300 group"
                >
                  <div className="relative">
                    <img
                      src={course.image}
                      alt={course.title}
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute top-4 left-4">
                      <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                        course.level === 'Beginner' ? 'bg-green-100 text-green-700' :
                        course.level === 'Intermediate' ? 'bg-yellow-100 text-yellow-700' :
                        'bg-red-100 text-red-700'
                      }`}>
                        {course.level}
                      </span>
                    </div>
                    {course.progress > 0 && (
                      <div className="absolute bottom-4 left-4 right-4">
                        <div className="bg-white/90 backdrop-blur-sm rounded-full p-2">
                          <div className="flex items-center justify-between text-xs text-gray-600 mb-1">
                            <span>Progress</span>
                            <span>{course.progress}%</span>
                          </div>
                          <div className="w-full bg-gray-200 rounded-full h-2">
                            <div 
                              className="bg-purple-500 h-2 rounded-full transition-all duration-300"
                              style={{ width: `${course.progress}%` }}
                            ></div>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>

                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-800 mb-2">{course.title}</h3>
                    <p className="text-gray-600 mb-4 line-clamp-2">{course.description}</p>

                    <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                      <div className="flex items-center space-x-4">
                        <div className="flex items-center space-x-1">
                          <Clock className="w-4 h-4" />
                          <span>{course.duration}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <BookOpen className="w-4 h-4" />
                          <span>{course.lessons} lessons</span>
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center space-x-2">
                        <div className="flex items-center space-x-1">
                          <Star className="w-4 h-4 text-yellow-500 fill-current" />
                          <span className="text-sm font-medium">{course.rating}</span>
                        </div>
                        <div className="flex items-center space-x-1 text-gray-500">
                          <Users className="w-4 h-4" />
                          <span className="text-sm">{course.students.toLocaleString()}</span>
                        </div>
                      </div>
                    </div>

                    <button
                      onClick={() => toggleCourseCompletion(course.id)}
                      className={`w-full flex items-center justify-center space-x-2 py-3 rounded-xl font-medium transition-all duration-200 ${
                        completedCourses.includes(course.id)
                          ? 'bg-green-100 text-green-700 hover:bg-green-200'
                          : course.progress > 0
                          ? 'bg-purple-100 text-purple-700 hover:bg-purple-200'
                          : 'bg-gradient-to-r from-purple-600 to-pink-600 text-white hover:shadow-lg'
                      }`}
                    >
                      {completedCourses.includes(course.id) ? (
                        <>
                          <CheckCircle className="w-5 h-5" />
                          <span>Completed</span>
                        </>
                      ) : course.progress > 0 ? (
                        <>
                          <Play className="w-5 h-5" />
                          <span>Continue Learning</span>
                        </>
                      ) : (
                        <>
                          <Play className="w-5 h-5" />
                          <span>Start Course</span>
                        </>
                      )}
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LearningHub;