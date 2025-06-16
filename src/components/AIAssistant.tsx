import React, { useState } from 'react';
import { 
  Bot, 
  Send, 
  Mic, 
  Paperclip, 
  Sparkles,
  TrendingUp,
  DollarSign,
  CreditCard,
  PiggyBank,
  AlertCircle,
  CheckCircle,
  Lightbulb
} from 'lucide-react';

const AIAssistant: React.FC = () => {
  const [messages, setMessages] = useState([
    {
      id: 1,
      type: 'ai',
      content: "Hello! I'm your AI financial advisor. I'm here to help you with personalized financial guidance, budgeting tips, and answer any questions about your financial journey. How can I assist you today?",
      timestamp: new Date(Date.now() - 5 * 60 * 1000)
    }
  ]);
  const [inputMessage, setInputMessage] = useState('');
  const [isTyping, setIsTyping] = useState(false);

  const quickActions = [
    { icon: DollarSign, label: 'Budget Analysis', color: 'bg-green-100 text-green-700' },
    { icon: CreditCard, label: 'Credit Score Tips', color: 'bg-blue-100 text-blue-700' },
    { icon: PiggyBank, label: 'Savings Goals', color: 'bg-purple-100 text-purple-700' },
    { icon: TrendingUp, label: 'Investment Advice', color: 'bg-pink-100 text-pink-700' },
  ];

  const suggestedQuestions = [
    "How can I improve my credit score?",
    "What's the best way to start an emergency fund?",
    "How much should I save each month?",
    "What microfinance options are available for me?",
    "How can I budget better with irregular income?",
    "What are safe investment options for beginners?"
  ];

  const handleSendMessage = async (content: string) => {
    if (!content.trim()) return;

    const userMessage = {
      id: messages.length + 1,
      type: 'user' as const,
      content,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputMessage('');
    setIsTyping(true);

    // Simulate AI response
    setTimeout(() => {
      const aiResponse = generateAIResponse(content);
      const aiMessage = {
        id: messages.length + 2,
        type: 'ai' as const,
        content: aiResponse,
        timestamp: new Date()
      };
      setMessages(prev => [...prev, aiMessage]);
      setIsTyping(false);
    }, 1500);
  };

  const generateAIResponse = (userInput: string): string => {
    const input = userInput.toLowerCase();
    
    if (input.includes('credit') || input.includes('score')) {
      return "Great question about credit! Here are some personalized tips based on your profile:\n\n✅ Pay bills on time consistently\n✅ Keep credit utilization below 30%\n✅ Consider becoming an authorized user on a family member's account\n✅ Use our alternative credit scoring feature to build history through utility payments\n\nYour current score is 720, which is good! With these steps, you could reach 750+ in 6 months.";
    }
    
    if (input.includes('emergency') || input.includes('fund')) {
      return "Building an emergency fund is crucial! Based on your income and expenses, here's my recommendation:\n\n🎯 Target: $3,000 (3 months of expenses)\n💰 Monthly savings needed: $250\n📅 Timeline: 12 months\n\nStart with our automated savings feature that rounds up purchases and saves the difference. You're already saving $180/month - just $70 more to reach your goal!";
    }
    
    if (input.includes('budget') || input.includes('save')) {
      return "Let me analyze your spending patterns! Based on your recent transactions:\n\n📊 Current monthly income: $2,100\n💸 Essential expenses: $1,400 (67%)\n🎯 Recommended savings: $315 (15%)\n\nI notice you're spending 25% more on dining out than similar users. Try our meal planning feature to save $120/month. Would you like me to create a personalized budget plan?";
    }
    
    if (input.includes('investment') || input.includes('invest')) {
      return "Based on your risk profile and goals, here are suitable investment options:\n\n🌱 Beginner-friendly options:\n• Low-cost index funds (recommended)\n• Government bonds\n• Micro-investment apps\n\n💡 Start with $50/month in a diversified portfolio. Our AI suggests 70% stocks, 30% bonds for your age and goals.\n\nWould you like me to connect you with our partner investment platform?";
    }
    
    if (input.includes('microfinance') || input.includes('loan')) {
      return "I found several microfinance opportunities that match your profile:\n\n🏆 Top matches:\n• Women's Business Collective - 8% APR, $500-$2000\n• Community Development Fund - 6% APR, $1000-$5000\n• Digital Entrepreneurs Program - 10% APR, $200-$1500\n\nYour credit score qualifies you for the best rates. I can help you apply or connect you with a mentor who's used these services successfully.";
    }
    
    return "I understand you're looking for financial guidance. Based on your profile and goals, I'd recommend focusing on:\n\n1. Building your emergency fund (you're 60% there!)\n2. Improving your credit score from 720 to 750+\n3. Exploring investment options for long-term growth\n\nWould you like me to dive deeper into any of these areas? I can also connect you with our community of women who've faced similar challenges.";
  };

  const formatTimestamp = (timestamp: Date) => {
    return timestamp.toLocaleTimeString('en-US', { 
      hour: '2-digit', 
      minute: '2-digit' 
    });
  };

  return (
    <div className="py-8 px-4 min-h-screen">
      <div className="container mx-auto max-w-4xl">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="bg-gradient-to-r from-purple-600 to-pink-600 p-4 rounded-2xl inline-block mb-4">
            <Bot className="w-8 h-8 text-white" />
          </div>
          <h1 className="text-3xl md:text-4xl font-bold mb-2">
            <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              AI Financial Assistant
            </span>
          </h1>
          <p className="text-xl text-gray-600">
            Get personalized financial advice powered by ethical AI
          </p>
        </div>

        {/* Quick Actions */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          {quickActions.map((action, index) => {
            const Icon = action.icon;
            return (
              <button
                key={index}
                onClick={() => handleSendMessage(`Tell me about ${action.label.toLowerCase()}`)}
                className={`${action.color} p-4 rounded-2xl hover:scale-105 transition-all duration-200 text-center`}
              >
                <Icon className="w-6 h-6 mx-auto mb-2" />
                <span className="text-sm font-medium">{action.label}</span>
              </button>
            );
          })}
        </div>

        {/* Chat Interface */}
        <div className="bg-white/60 backdrop-blur-sm rounded-3xl border border-purple-100 overflow-hidden">
          {/* Chat Messages */}
          <div className="h-96 overflow-y-auto p-6 space-y-4">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div className={`max-w-xs lg:max-w-md ${
                  message.type === 'user' 
                    ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white' 
                    : 'bg-gray-100 text-gray-800'
                } rounded-2xl p-4`}>
                  {message.type === 'ai' && (
                    <div className="flex items-center space-x-2 mb-2">
                      <Bot className="w-4 h-4" />
                      <span className="text-sm font-medium">AI Assistant</span>
                    </div>
                  )}
                  <div className="whitespace-pre-line text-sm">{message.content}</div>
                  <div className={`text-xs mt-2 ${
                    message.type === 'user' ? 'text-purple-100' : 'text-gray-500'
                  }`}>
                    {formatTimestamp(message.timestamp)}
                  </div>
                </div>
              </div>
            ))}
            
            {isTyping && (
              <div className="flex justify-start">
                <div className="bg-gray-100 text-gray-800 rounded-2xl p-4 max-w-xs">
                  <div className="flex items-center space-x-2 mb-2">
                    <Bot className="w-4 h-4" />
                    <span className="text-sm font-medium">AI Assistant</span>
                  </div>
                  <div className="flex space-x-1">
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Input Area */}
          <div className="border-t border-purple-100 p-6">
            <div className="flex items-center space-x-4 mb-4">
              <input
                type="text"
                value={inputMessage}
                onChange={(e) => setInputMessage(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleSendMessage(inputMessage)}
                placeholder="Ask me anything about your finances..."
                className="flex-1 bg-gray-50 border border-gray-200 rounded-2xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-purple-300 focus:border-transparent"
              />
              <button
                onClick={() => handleSendMessage(inputMessage)}
                disabled={!inputMessage.trim()}
                className="bg-gradient-to-r from-purple-600 to-pink-600 text-white p-3 rounded-2xl hover:shadow-lg transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <Send className="w-5 h-5" />
              </button>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <button className="text-gray-400 hover:text-gray-600 transition-colors">
                  <Paperclip className="w-5 h-5" />
                </button>
                <button className="text-gray-400 hover:text-gray-600 transition-colors">
                  <Mic className="w-5 h-5" />
                </button>
              </div>
              <div className="flex items-center space-x-2 text-sm text-gray-500">
                <Sparkles className="w-4 h-4" />
                <span>Powered by Ethical AI</span>
              </div>
            </div>
          </div>
        </div>

        {/* Suggested Questions */}
        <div className="mt-8">
          <h3 className="text-lg font-bold text-gray-800 mb-4 flex items-center">
            <Lightbulb className="w-5 h-5 mr-2 text-yellow-500" />
            Suggested Questions
          </h3>
          <div className="grid md:grid-cols-2 gap-3">
            {suggestedQuestions.map((question, index) => (
              <button
                key={index}
                onClick={() => handleSendMessage(question)}
                className="text-left bg-white/60 backdrop-blur-sm border border-purple-100 rounded-2xl p-4 hover:bg-white/80 transition-all duration-200 text-gray-700 hover:text-purple-700"
              >
                {question}
              </button>
            ))}
          </div>
        </div>

        {/* AI Ethics Notice */}
        <div className="mt-8 bg-blue-50 border border-blue-200 rounded-2xl p-6">
          <div className="flex items-start space-x-3">
            <AlertCircle className="w-6 h-6 text-blue-600 mt-0.5" />
            <div>
              <h4 className="font-medium text-blue-800 mb-2">Ethical AI Commitment</h4>
              <p className="text-blue-700 text-sm">
                Our AI assistant is designed with fairness, transparency, and bias mitigation at its core. 
                All advice is personalized based on your financial profile while protecting your privacy. 
                Your data is encrypted and never shared without your explicit consent.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AIAssistant;