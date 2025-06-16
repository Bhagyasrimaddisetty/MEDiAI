import React from 'react';
import { Stethoscope, Shield, Brain, Mail, Phone, MapPin } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-white/80 backdrop-blur-md border-t border-blue-100 mt-20">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-1">
            <div className="flex items-center space-x-3 mb-4">
              <div className="bg-gradient-to-r from-blue-600 to-green-600 p-2 rounded-xl">
                <Stethoscope className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent">
                  MediAI
                </h3>
                <p className="text-xs text-gray-600">AI Healthcare Assistant</p>
              </div>
            </div>
            <p className="text-gray-600 text-sm mb-4">
              Advanced AI-powered healthcare assistant providing accurate symptom analysis and medical guidance using cutting-edge technology.
            </p>
            <div className="flex items-center space-x-4 text-gray-500">
              <Shield className="w-5 h-5" />
              <Brain className="w-5 h-5" />
              <Stethoscope className="w-5 h-5" />
            </div>
          </div>

          {/* Features */}
          <div>
            <h4 className="font-bold text-gray-800 mb-4">Features</h4>
            <ul className="space-y-2 text-sm text-gray-600">
              <li><a href="#" className="hover:text-blue-600 transition-colors">AI Symptom Analysis</a></li>
              <li><a href="#" className="hover:text-blue-600 transition-colors">Disease Prediction</a></li>
              <li><a href="#" className="hover:text-blue-600 transition-colors">Health Dashboard</a></li>
              <li><a href="#" className="hover:text-blue-600 transition-colors">Medical Knowledge</a></li>
              <li><a href="#" className="hover:text-blue-600 transition-colors">Emergency Guide</a></li>
            </ul>
          </div>

          {/* Technology */}
          <div>
            <h4 className="font-bold text-gray-800 mb-4">Technology</h4>
            <ul className="space-y-2 text-sm text-gray-600">
              <li><a href="#" className="hover:text-blue-600 transition-colors">Natural Language Processing</a></li>
              <li><a href="#" className="hover:text-blue-600 transition-colors">Deep Neural Networks</a></li>
              <li><a href="#" className="hover:text-blue-600 transition-colors">Machine Learning</a></li>
              <li><a href="#" className="hover:text-blue-600 transition-colors">Optimization Algorithms</a></li>
              <li><a href="#" className="hover:text-blue-600 transition-colors">Medical AI Research</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold text-gray-800 mb-4">Contact</h4>
            <div className="space-y-3 text-sm text-gray-600">
              <div className="flex items-center space-x-2">
                <Mail className="w-4 h-4" />
                <span>support@mediai.health</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="w-4 h-4" />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="w-4 h-4" />
                <span>Healthcare Innovation Center</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-blue-100 mt-8 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
            <div className="text-sm text-gray-600">
              © 2024 MediAI Healthcare Assistant. All rights reserved.
            </div>
            <div className="flex items-center space-x-6 text-sm text-gray-600">
              <a href="#" className="hover:text-blue-600 transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-blue-600 transition-colors">Terms of Service</a>
              <a href="#" className="hover:text-blue-600 transition-colors">Medical Disclaimer</a>
              <a href="#" className="hover:text-blue-600 transition-colors">HIPAA Compliance</a>
            </div>
          </div>
          
          <div className="mt-4 text-center">
            <p className="text-xs text-gray-500">
              <strong>Medical Disclaimer:</strong> This AI assistant provides informational guidance only and should not replace professional medical advice. 
              Always consult with healthcare professionals for accurate diagnosis and treatment. In case of emergency, call 911 immediately.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;