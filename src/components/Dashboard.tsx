import React, { useState } from 'react';
import { 
  TrendingUp, 
  DollarSign, 
  Target, 
  CreditCard, 
  PiggyBank,
  AlertCircle,
  CheckCircle,
  ArrowUp,
  ArrowDown
} from 'lucide-react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';

const Dashboard: React.FC = () => {
  const [selectedPeriod, setSelectedPeriod] = useState('month');

  const savingsData = [
    { month: 'Jan', amount: 120 },
    { month: 'Feb', amount: 180 },
    { month: 'Mar', amount: 240 },
    { month: 'Apr', amount: 320 },
    { month: 'May', amount: 280 },
    { month: 'Jun', amount: 380 },
  ];

  const expenseData = [
    { name: 'Housing', value: 40, color: '#8B5CF6' },
    { name: 'Food', value: 25, color: '#EC4899' },
    { name: 'Transportation', value: 15, color: '#06B6D4' },
    { name: 'Healthcare', value: 10, color: '#10B981' },
    { name: 'Education', value: 10, color: '#F59E0B' },
  ];

  const goals = [
    { title: 'Emergency Fund', current: 750, target: 1000, color: 'bg-purple-500' },
    { title: 'Business Startup', current: 2400, target: 5000, color: 'bg-pink-500' },
    { title: 'Education Fund', current: 1200, target: 2000, color: 'bg-indigo-500' },
  ];

  const aiInsights = [
    {
      type: 'success',
      title: 'Great Progress!',
      message: 'You\'re 15% ahead of your savings goal this month. Consider increasing your emergency fund target.',
      icon: CheckCircle
    },
    {
      type: 'warning',
      title: 'Budget Alert',
      message: 'Food expenses are 20% higher than usual. Check our meal planning tips in the Learning Hub.',
      icon: AlertCircle
    },
    {
      type: 'opportunity',
      title: 'Investment Opportunity',
      message: 'Based on your profile, you qualify for a low-risk microfinance investment with 8% returns.',
      icon: TrendingUp
    }
  ];

  return (
    <div className="py-8 px-4 min-h-screen">
      <div className="container mx-auto max-w-7xl">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl md:text-4xl font-bold mb-2">
            <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              Welcome back, Sarah!
            </span>
          </h1>
          <p className="text-gray-600">Here's your financial overview for today</p>
        </div>

        {/* Quick Stats */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 border border-purple-100">
            <div className="flex items-center justify-between mb-4">
              <div className="bg-purple-100 p-3 rounded-xl">
                <DollarSign className="w-6 h-6 text-purple-600" />
              </div>
              <div className="flex items-center text-green-600">
                <ArrowUp className="w-4 h-4" />
                <span className="text-sm font-medium">+12%</span>
              </div>
            </div>
            <div className="text-2xl font-bold text-gray-800 mb-1">$3,240</div>
            <div className="text-gray-600 text-sm">Total Savings</div>
          </div>

          <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 border border-purple-100">
            <div className="flex items-center justify-between mb-4">
              <div className="bg-pink-100 p-3 rounded-xl">
                <CreditCard className="w-6 h-6 text-pink-600" />
              </div>
              <div className="flex items-center text-red-600">
                <ArrowDown className="w-4 h-4" />
                <span className="text-sm font-medium">-5%</span>
              </div>
            </div>
            <div className="text-2xl font-bold text-gray-800 mb-1">$1,850</div>
            <div className="text-gray-600 text-sm">Monthly Expenses</div>
          </div>

          <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 border border-purple-100">
            <div className="flex items-center justify-between mb-4">
              <div className="bg-indigo-100 p-3 rounded-xl">
                <Target className="w-6 h-6 text-indigo-600" />
              </div>
              <div className="flex items-center text-green-600">
                <ArrowUp className="w-4 h-4" />
                <span className="text-sm font-medium">+8%</span>
              </div>
            </div>
            <div className="text-2xl font-bold text-gray-800 mb-1">72%</div>
            <div className="text-gray-600 text-sm">Goals Progress</div>
          </div>

          <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 border border-purple-100">
            <div className="flex items-center justify-between mb-4">
              <div className="bg-teal-100 p-3 rounded-xl">
                <PiggyBank className="w-6 h-6 text-teal-600" />
              </div>
              <div className="text-teal-600 text-sm font-medium">Good</div>
            </div>
            <div className="text-2xl font-bold text-gray-800 mb-1">720</div>
            <div className="text-gray-600 text-sm">Credit Score</div>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Left Column */}
          <div className="lg:col-span-2 space-y-8">
            {/* Savings Trend */}
            <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 border border-purple-100">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-xl font-bold text-gray-800">Savings Trend</h3>
                <select 
                  value={selectedPeriod}
                  onChange={(e) => setSelectedPeriod(e.target.value)}
                  className="bg-purple-50 border border-purple-200 rounded-xl px-4 py-2 text-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-300"
                >
                  <option value="week">This Week</option>
                  <option value="month">This Month</option>
                  <option value="year">This Year</option>
                </select>
              </div>
              <ResponsiveContainer width="100%" height={300}>
                <LineChart data={savingsData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#E5E7EB" />
                  <XAxis dataKey="month" stroke="#6B7280" />
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
                    dataKey="amount" 
                    stroke="#8B5CF6" 
                    strokeWidth={3}
                    dot={{ fill: '#8B5CF6', strokeWidth: 2, r: 6 }}
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>

            {/* Expense Breakdown */}
            <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 border border-purple-100">
              <h3 className="text-xl font-bold text-gray-800 mb-6">Expense Breakdown</h3>
              <div className="flex flex-col md:flex-row items-center">
                <div className="w-full md:w-1/2">
                  <ResponsiveContainer width="100%" height={250}>
                    <PieChart>
                      <Pie
                        data={expenseData}
                        cx="50%"
                        cy="50%"
                        innerRadius={60}
                        outerRadius={100}
                        paddingAngle={5}
                        dataKey="value"
                      >
                        {expenseData.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={entry.color} />
                        ))}
                      </Pie>
                      <Tooltip />
                    </PieChart>
                  </ResponsiveContainer>
                </div>
                <div className="w-full md:w-1/2 space-y-3">
                  {expenseData.map((item, index) => (
                    <div key={index} className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <div 
                          className="w-4 h-4 rounded-full"
                          style={{ backgroundColor: item.color }}
                        ></div>
                        <span className="text-gray-700">{item.name}</span>
                      </div>
                      <span className="font-medium text-gray-800">{item.value}%</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className="space-y-8">
            {/* Financial Goals */}
            <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 border border-purple-100">
              <h3 className="text-xl font-bold text-gray-800 mb-6">Financial Goals</h3>
              <div className="space-y-6">
                {goals.map((goal, index) => {
                  const progress = (goal.current / goal.target) * 100;
                  return (
                    <div key={index}>
                      <div className="flex items-center justify-between mb-2">
                        <span className="font-medium text-gray-700">{goal.title}</span>
                        <span className="text-sm text-gray-600">
                          ${goal.current} / ${goal.target}
                        </span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-3">
                        <div 
                          className={`h-3 rounded-full ${goal.color} transition-all duration-300`}
                          style={{ width: `${Math.min(progress, 100)}%` }}
                        ></div>
                      </div>
                      <div className="text-right text-sm text-gray-600 mt-1">
                        {Math.round(progress)}% complete
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* AI Insights */}
            <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 border border-purple-100">
              <h3 className="text-xl font-bold text-gray-800 mb-6">AI Insights</h3>
              <div className="space-y-4">
                {aiInsights.map((insight, index) => {
                  const Icon = insight.icon;
                  const bgColor = insight.type === 'success' ? 'bg-green-50' : 
                                 insight.type === 'warning' ? 'bg-yellow-50' : 'bg-blue-50';
                  const textColor = insight.type === 'success' ? 'text-green-700' : 
                                   insight.type === 'warning' ? 'text-yellow-700' : 'text-blue-700';
                  const iconColor = insight.type === 'success' ? 'text-green-600' : 
                                   insight.type === 'warning' ? 'text-yellow-600' : 'text-blue-600';
                  
                  return (
                    <div key={index} className={`${bgColor} rounded-xl p-4`}>
                      <div className="flex items-start space-x-3">
                        <Icon className={`w-5 h-5 ${iconColor} mt-0.5`} />
                        <div>
                          <h4 className={`font-medium ${textColor} mb-1`}>{insight.title}</h4>
                          <p className={`text-sm ${textColor.replace('700', '600')}`}>{insight.message}</p>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;