import React, { useState } from 'react';
import { 
  Activity, 
  Heart, 
  TrendingUp, 
  Calendar,
  Clock,
  AlertCircle,
  CheckCircle,
  Thermometer,
  Droplets,
  Zap
} from 'lucide-react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';

const HealthDashboard: React.FC = () => {
  const [selectedPeriod, setSelectedPeriod] = useState('week');

  const healthData = [
    { date: 'Mon', symptoms: 2, severity: 3 },
    { date: 'Tue', symptoms: 1, severity: 2 },
    { date: 'Wed', symptoms: 3, severity: 4 },
    { date: 'Thu', symptoms: 1, severity: 2 },
    { date: 'Fri', symptoms: 0, severity: 0 },
    { date: 'Sat', symptoms: 2, severity: 3 },
    { date: 'Sun', symptoms: 1, severity: 1 },
  ];

  const symptomCategories = [
    { name: 'Respiratory', value: 35, color: '#3B82F6' },
    { name: 'Gastrointestinal', value: 25, color: '#10B981' },
    { name: 'Neurological', value: 20, color: '#8B5CF6' },
    { name: 'Musculoskeletal', value: 15, color: '#F59E0B' },
    { name: 'Other', value: 5, color: '#EF4444' },
  ];

  const recentAnalyses = [
    {
      id: 1,
      date: '2024-01-15',
      symptoms: ['headache', 'nausea', 'fatigue'],
      topCondition: 'Migraine',
      confidence: 87,
      urgency: 'medium'
    },
    {
      id: 2,
      date: '2024-01-12',
      symptoms: ['cough', 'fever', 'sore throat'],
      topCondition: 'Common Cold',
      confidence: 92,
      urgency: 'low'
    },
    {
      id: 3,
      date: '2024-01-10',
      symptoms: ['chest pain', 'shortness of breath'],
      topCondition: 'Anxiety',
      confidence: 78,
      urgency: 'medium'
    }
  ];

  const healthMetrics = [
    { label: 'Total Analyses', value: 24, change: '+3', icon: Activity, color: 'text-blue-600' },
    { label: 'Avg Confidence', value: '89%', change: '+2%', icon: TrendingUp, color: 'text-green-600' },
    { label: 'High Priority', value: 2, change: '-1', icon: AlertCircle, color: 'text-red-600' },
    { label: 'Resolved', value: 18, change: '+5', icon: CheckCircle, color: 'text-purple-600' },
  ];

  const getUrgencyColor = (urgency: string) => {
    switch (urgency) {
      case 'high': return 'bg-red-100 text-red-700';
      case 'medium': return 'bg-yellow-100 text-yellow-700';
      case 'low': return 'bg-green-100 text-green-700';
      default: return 'bg-gray-100 text-gray-700';
    }
  };

  return (
    <div className="py-8 px-4 min-h-screen">
      <div className="container mx-auto max-w-7xl">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl md:text-4xl font-bold mb-2">
            <span className="bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent">
              Health Dashboard
            </span>
          </h1>
          <p className="text-gray-600">Track your health patterns and AI analysis history</p>
        </div>

        {/* Health Metrics */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {healthMetrics.map((metric, index) => {
            const Icon = metric.icon;
            return (
              <div key={index} className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 border border-blue-100">
                <div className="flex items-center justify-between mb-4">
                  <div className="bg-blue-100 p-3 rounded-xl">
                    <Icon className={`w-6 h-6 ${metric.color}`} />
                  </div>
                  <span className={`text-sm font-medium ${
                    metric.change.startsWith('+') ? 'text-green-600' : 'text-red-600'
                  }`}>
                    {metric.change}
                  </span>
                </div>
                <div className="text-2xl font-bold text-gray-800 mb-1">{metric.value}</div>
                <div className="text-gray-600 text-sm">{metric.label}</div>
              </div>
            );
          })}
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Left Column */}
          <div className="lg:col-span-2 space-y-8">
            {/* Health Trends */}
            <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 border border-blue-100">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-xl font-bold text-gray-800">Health Trends</h3>
                <select 
                  value={selectedPeriod}
                  onChange={(e) => setSelectedPeriod(e.target.value)}
                  className="bg-blue-50 border border-blue-200 rounded-xl px-4 py-2 text-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-300"
                >
                  <option value="week">This Week</option>
                  <option value="month">This Month</option>
                  <option value="year">This Year</option>
                </select>
              </div>
              <ResponsiveContainer width="100%" height={300}>
                <LineChart data={healthData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#E5E7EB" />
                  <XAxis dataKey="date" stroke="#6B7280" />
                  <YAxis stroke="#6B7280" />
                  <Tooltip 
                    contentStyle={{ 
                      backgroundColor: 'rgba(255, 255, 255, 0.9)', 
                      border: '1px solid #E5E7EB',
                      borderRadius: '12px'
                    }} 
                  />
                  <Line 
                    type="monotone" 
                    dataKey="symptoms" 
                    stroke="#3B82F6" 
                    strokeWidth={3}
                    dot={{ fill: '#3B82F6', strokeWidth: 2, r: 6 }}
                    name="Symptoms Count"
                  />
                  <Line 
                    type="monotone" 
                    dataKey="severity" 
                    stroke="#10B981" 
                    strokeWidth={3}
                    dot={{ fill: '#10B981', strokeWidth: 2, r: 6 }}
                    name="Avg Severity"
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>

            {/* Recent Analyses */}
            <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 border border-blue-100">
              <h3 className="text-xl font-bold text-gray-800 mb-6">Recent AI Analyses</h3>
              <div className="space-y-4">
                {recentAnalyses.map((analysis) => (
                  <div key={analysis.id} className="border border-gray-200 rounded-2xl p-4 hover:shadow-md transition-shadow">
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center space-x-3">
                        <Calendar className="w-5 h-5 text-gray-500" />
                        <span className="text-sm text-gray-600">{analysis.date}</span>
                      </div>
                      <span className={`px-3 py-1 rounded-full text-sm font-medium ${getUrgencyColor(analysis.urgency)}`}>
                        {analysis.urgency} priority
                      </span>
                    </div>
                    
                    <div className="mb-3">
                      <h4 className="font-semibold text-gray-800 mb-1">Top Condition: {analysis.topCondition}</h4>
                      <div className="flex items-center space-x-2">
                        <span className="text-sm text-gray-600">Confidence:</span>
                        <div className="flex-1 bg-gray-200 rounded-full h-2 max-w-32">
                          <div 
                            className="bg-gradient-to-r from-blue-500 to-green-500 h-2 rounded-full"
                            style={{ width: `${analysis.confidence}%` }}
                          ></div>
                        </div>
                        <span className="text-sm font-medium text-gray-800">{analysis.confidence}%</span>
                      </div>
                    </div>
                    
                    <div>
                      <span className="text-sm text-gray-600">Symptoms: </span>
                      <div className="flex flex-wrap gap-2 mt-1">
                        {analysis.symptoms.map((symptom, index) => (
                          <span key={index} className="bg-blue-100 text-blue-700 px-2 py-1 rounded-lg text-xs">
                            {symptom}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className="space-y-8">
            {/* Symptom Categories */}
            <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 border border-blue-100">
              <h3 className="text-xl font-bold text-gray-800 mb-6">Symptom Categories</h3>
              <div className="flex flex-col items-center">
                <ResponsiveContainer width="100%" height={200}>
                  <PieChart>
                    <Pie
                      data={symptomCategories}
                      cx="50%"
                      cy="50%"
                      innerRadius={40}
                      outerRadius={80}
                      paddingAngle={5}
                      dataKey="value"
                    >
                      {symptomCategories.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                      ))}
                    </Pie>
                    <Tooltip />
                  </PieChart>
                </ResponsiveContainer>
                <div className="space-y-2 mt-4 w-full">
                  {symptomCategories.map((item, index) => (
                    <div key={index} className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <div 
                          className="w-3 h-3 rounded-full"
                          style={{ backgroundColor: item.color }}
                        ></div>
                        <span className="text-sm text-gray-700">{item.name}</span>
                      </div>
                      <span className="text-sm font-medium text-gray-800">{item.value}%</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Health Insights */}
            <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 border border-blue-100">
              <h3 className="text-xl font-bold text-gray-800 mb-6">AI Health Insights</h3>
              <div className="space-y-4">
                <div className="bg-green-50 rounded-xl p-4">
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-600 mt-0.5" />
                    <div>
                      <h4 className="font-medium text-green-800 mb-1">Positive Trend</h4>
                      <p className="text-green-700 text-sm">
                        Your symptom severity has decreased by 30% this week. Keep up the good work!
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-blue-50 rounded-xl p-4">
                  <div className="flex items-start space-x-3">
                    <TrendingUp className="w-5 h-5 text-blue-600 mt-0.5" />
                    <div>
                      <h4 className="font-medium text-blue-800 mb-1">Pattern Detected</h4>
                      <p className="text-blue-700 text-sm">
                        Headaches tend to occur on weekdays. Consider stress management techniques.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-yellow-50 rounded-xl p-4">
                  <div className="flex items-start space-x-3">
                    <AlertCircle className="w-5 h-5 text-yellow-600 mt-0.5" />
                    <div>
                      <h4 className="font-medium text-yellow-800 mb-1">Recommendation</h4>
                      <p className="text-yellow-700 text-sm">
                        Schedule a check-up if respiratory symptoms persist beyond 7 days.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Actions */}
            <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 border border-blue-100">
              <h3 className="text-xl font-bold text-gray-800 mb-6">Quick Actions</h3>
              <div className="space-y-3">
                <button className="w-full bg-gradient-to-r from-blue-600 to-green-600 text-white py-3 rounded-xl font-medium hover:shadow-lg transition-all duration-200">
                  New Symptom Analysis
                </button>
                <button className="w-full bg-white border border-blue-200 text-blue-700 py-3 rounded-xl font-medium hover:bg-blue-50 transition-all duration-200">
                  Export Health Report
                </button>
                <button className="w-full bg-white border border-blue-200 text-blue-700 py-3 rounded-xl font-medium hover:bg-blue-50 transition-all duration-200">
                  Schedule Appointment
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HealthDashboard;