import React, { useState, useEffect } from 'react';
import { 
  Brain, 
  Send, 
  Mic, 
  AlertCircle, 
  CheckCircle, 
  Clock,
  TrendingUp,
  Activity,
  Heart,
  Thermometer,
  Eye,
  Zap,
  User,
  Calendar
} from 'lucide-react';
import { analyzeSymptoms, SymptomAnalysis } from '../utils/aiEngine';
import { processNaturalLanguage } from '../utils/nlpProcessor';

const SymptomAnalyzer: React.FC = () => {
  const [symptoms, setSymptoms] = useState('');
  const [analysis, setAnalysis] = useState<SymptomAnalysis | null>(null);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [patientInfo, setPatientInfo] = useState({
    age: '',
    gender: '',
    duration: ''
  });

  const commonSymptoms = [
    { icon: Thermometer, label: 'Fever', color: 'bg-red-100 text-red-700' },
    { icon: Activity, label: 'Headache', color: 'bg-orange-100 text-orange-700' },
    { icon: Heart, label: 'Chest Pain', color: 'bg-pink-100 text-pink-700' },
    { icon: Eye, label: 'Fatigue', color: 'bg-blue-100 text-blue-700' },
    { icon: Zap, label: 'Nausea', color: 'bg-green-100 text-green-700' },
    { icon: Clock, label: 'Dizziness', color: 'bg-purple-100 text-purple-700' },
  ];

  const handleAnalyze = async () => {
    if (!symptoms.trim()) return;

    setIsAnalyzing(true);
    
    try {
      // Process natural language
      const processedSymptoms = await processNaturalLanguage(symptoms);
      
      // Analyze symptoms with AI
      const result = await analyzeSymptoms(processedSymptoms, patientInfo);
      
      setAnalysis(result);
    } catch (error) {
      console.error('Analysis failed:', error);
    } finally {
      setIsAnalyzing(false);
    }
  };

  const addSymptom = (symptom: string) => {
    if (symptoms) {
      setSymptoms(prev => prev + ', ' + symptom.toLowerCase());
    } else {
      setSymptoms(symptom.toLowerCase());
    }
  };

  const getSeverityColor = (severity: string) => {
    switch (severity.toLowerCase()) {
      case 'high': return 'text-red-600 bg-red-50';
      case 'medium': return 'text-orange-600 bg-orange-50';
      case 'low': return 'text-green-600 bg-green-50';
      default: return 'text-gray-600 bg-gray-50';
    }
  };

  return (
    <div className="py-8 px-4 min-h-screen">
      <div className="container mx-auto max-w-6xl">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="bg-gradient-to-r from-blue-600 to-green-600 p-4 rounded-2xl inline-block mb-4">
            <Brain className="w-8 h-8 text-white" />
          </div>
          <h1 className="text-3xl md:text-4xl font-bold mb-2">
            <span className="bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent">
              AI Symptom Analyzer
            </span>
          </h1>
          <p className="text-xl text-gray-600">
            Describe your symptoms in natural language and get AI-powered health insights
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Input Section */}
          <div className="lg:col-span-2">
            {/* Patient Information */}
            <div className="bg-white/60 backdrop-blur-sm rounded-3xl border border-blue-100 p-6 mb-6">
              <h3 className="text-lg font-bold text-gray-800 mb-4 flex items-center">
                <User className="w-5 h-5 mr-2" />
                Patient Information
              </h3>
              <div className="grid md:grid-cols-3 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Age</label>
                  <input
                    type="number"
                    value={patientInfo.age}
                    onChange={(e) => setPatientInfo(prev => ({ ...prev, age: e.target.value }))}
                    placeholder="Enter age"
                    className="w-full px-4 py-2 bg-white border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-300"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Gender</label>
                  <select
                    value={patientInfo.gender}
                    onChange={(e) => setPatientInfo(prev => ({ ...prev, gender: e.target.value }))}
                    className="w-full px-4 py-2 bg-white border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-300"
                  >
                    <option value="">Select gender</option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Duration</label>
                  <input
                    type="text"
                    value={patientInfo.duration}
                    onChange={(e) => setPatientInfo(prev => ({ ...prev, duration: e.target.value }))}
                    placeholder="e.g., 2 days"
                    className="w-full px-4 py-2 bg-white border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-300"
                  />
                </div>
              </div>
            </div>

            {/* Symptom Input */}
            <div className="bg-white/60 backdrop-blur-sm rounded-3xl border border-blue-100 overflow-hidden">
              <div className="p-6">
                <h3 className="text-lg font-bold text-gray-800 mb-4">Describe Your Symptoms</h3>
                <textarea
                  value={symptoms}
                  onChange={(e) => setSymptoms(e.target.value)}
                  placeholder="Describe your symptoms in detail... For example: 'I have been experiencing severe headaches for the past 3 days, along with fever and nausea. The headache gets worse in bright light.'"
                  className="w-full h-32 px-4 py-3 bg-white border border-gray-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-300 resize-none"
                />
                
                <div className="flex items-center justify-between mt-4">
                  <div className="flex items-center space-x-2">
                    <button className="text-gray-400 hover:text-gray-600 transition-colors">
                      <Mic className="w-5 h-5" />
                    </button>
                    <span className="text-sm text-gray-500">Voice input available</span>
                  </div>
                  <button
                    onClick={handleAnalyze}
                    disabled={!symptoms.trim() || isAnalyzing}
                    className="bg-gradient-to-r from-blue-600 to-green-600 text-white px-6 py-2 rounded-xl font-medium hover:shadow-lg transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed flex items-center space-x-2"
                  >
                    {isAnalyzing ? (
                      <>
                        <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                        <span>Analyzing...</span>
                      </>
                    ) : (
                      <>
                        <Brain className="w-4 h-4" />
                        <span>Analyze Symptoms</span>
                      </>
                    )}
                  </button>
                </div>
              </div>
            </div>

            {/* Analysis Results */}
            {analysis && (
              <div className="mt-6 space-y-6">
                {/* Possible Conditions */}
                <div className="bg-white/60 backdrop-blur-sm rounded-3xl border border-blue-100 p-6">
                  <h3 className="text-lg font-bold text-gray-800 mb-4 flex items-center">
                    <TrendingUp className="w-5 h-5 mr-2" />
                    Possible Conditions
                  </h3>
                  <div className="space-y-4">
                    {analysis.possibleConditions.map((condition, index) => (
                      <div key={index} className="border border-gray-200 rounded-2xl p-4">
                        <div className="flex items-center justify-between mb-2">
                          <h4 className="font-semibold text-gray-800">{condition.name}</h4>
                          <div className="flex items-center space-x-2">
                            <span className={`px-3 py-1 rounded-full text-sm font-medium ${getSeverityColor(condition.severity)}`}>
                              {condition.severity} Risk
                            </span>
                            <span className="text-sm text-gray-600">{condition.confidence}% match</span>
                          </div>
                        </div>
                        <p className="text-gray-600 text-sm mb-3">{condition.description}</p>
                        <div className="w-full bg-gray-200 rounded-full h-2">
                          <div 
                            className="bg-gradient-to-r from-blue-500 to-green-500 h-2 rounded-full"
                            style={{ width: `${condition.confidence}%` }}
                          ></div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Recommendations */}
                <div className="bg-white/60 backdrop-blur-sm rounded-3xl border border-blue-100 p-6">
                  <h3 className="text-lg font-bold text-gray-800 mb-4 flex items-center">
                    <CheckCircle className="w-5 h-5 mr-2" />
                    Recommendations
                  </h3>
                  <div className="space-y-3">
                    {analysis.recommendations.map((rec, index) => (
                      <div key={index} className="flex items-start space-x-3 p-3 bg-blue-50 rounded-xl">
                        <CheckCircle className="w-5 h-5 text-blue-600 mt-0.5" />
                        <span className="text-gray-700">{rec}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Warning */}
                {analysis.urgency === 'high' && (
                  <div className="bg-red-50 border border-red-200 rounded-2xl p-6">
                    <div className="flex items-start space-x-3">
                      <AlertCircle className="w-6 h-6 text-red-600 mt-0.5" />
                      <div>
                        <h4 className="font-medium text-red-800 mb-2">Urgent Medical Attention Required</h4>
                        <p className="text-red-700 text-sm">
                          Based on your symptoms, we recommend seeking immediate medical attention. 
                          Please contact your healthcare provider or visit the nearest emergency room.
                        </p>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            )}
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Quick Symptoms */}
            <div className="bg-white/60 backdrop-blur-sm rounded-2xl border border-blue-100 p-6">
              <h3 className="text-lg font-bold text-gray-800 mb-4">Common Symptoms</h3>
              <div className="grid grid-cols-2 gap-3">
                {commonSymptoms.map((symptom, index) => {
                  const Icon = symptom.icon;
                  return (
                    <button
                      key={index}
                      onClick={() => addSymptom(symptom.label)}
                      className={`${symptom.color} p-3 rounded-xl hover:scale-105 transition-all duration-200 text-center`}
                    >
                      <Icon className="w-5 h-5 mx-auto mb-1" />
                      <span className="text-sm font-medium">{symptom.label}</span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* AI Process Info */}
            <div className="bg-white/60 backdrop-blur-sm rounded-2xl border border-blue-100 p-6">
              <h3 className="text-lg font-bold text-gray-800 mb-4">How AI Analysis Works</h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="bg-blue-100 p-2 rounded-lg">
                    <Brain className="w-4 h-4 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-800">NLP Processing</h4>
                    <p className="text-sm text-gray-600">Natural language understanding of symptoms</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="bg-green-100 p-2 rounded-lg">
                    <Activity className="w-4 h-4 text-green-600" />
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-800">Neural Network</h4>
                    <p className="text-sm text-gray-600">Deep learning pattern recognition</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="bg-purple-100 p-2 rounded-lg">
                    <TrendingUp className="w-4 h-4 text-purple-600" />
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-800">Optimization</h4>
                    <p className="text-sm text-gray-600">Continuous learning and improvement</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Disclaimer */}
            <div className="bg-yellow-50 border border-yellow-200 rounded-2xl p-6">
              <div className="flex items-start space-x-3">
                <AlertCircle className="w-6 h-6 text-yellow-600 mt-0.5" />
                <div>
                  <h4 className="font-medium text-yellow-800 mb-2">Medical Disclaimer</h4>
                  <p className="text-yellow-700 text-sm">
                    This AI assistant provides informational guidance only and should not replace 
                    professional medical advice. Always consult with healthcare professionals for 
                    accurate diagnosis and treatment.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SymptomAnalyzer;