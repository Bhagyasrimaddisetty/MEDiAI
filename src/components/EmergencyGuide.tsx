import React, { useState } from 'react';
import { 
  AlertTriangle, 
  Phone, 
  MapPin, 
  Clock,
  Heart,
  Brain,
  Zap,
  Activity,
  Shield,
  Users,
  ChevronRight,
  CheckCircle
} from 'lucide-react';

const EmergencyGuide: React.FC = () => {
  const [selectedEmergency, setSelectedEmergency] = useState<string | null>(null);

  const emergencyTypes = [
    {
      id: 'heart-attack',
      title: 'Heart Attack',
      icon: Heart,
      color: 'bg-red-100 text-red-700 border-red-200',
      urgency: 'CRITICAL',
      symptoms: ['Chest pain or pressure', 'Shortness of breath', 'Nausea', 'Sweating', 'Pain in arm, jaw, or back'],
      actions: [
        'Call 911 immediately',
        'Chew aspirin if not allergic (325mg)',
        'Sit upright and stay calm',
        'Loosen tight clothing',
        'Do not drive yourself to hospital'
      ]
    },
    {
      id: 'stroke',
      title: 'Stroke',
      icon: Brain,
      color: 'bg-purple-100 text-purple-700 border-purple-200',
      urgency: 'CRITICAL',
      symptoms: ['Face drooping', 'Arm weakness', 'Speech difficulty', 'Sudden confusion', 'Severe headache'],
      actions: [
        'Call 911 immediately',
        'Note the time symptoms started',
        'Keep person calm and lying down',
        'Do not give food or water',
        'Monitor breathing and pulse'
      ]
    },
    {
      id: 'seizure',
      title: 'Seizure',
      icon: Zap,
      color: 'bg-yellow-100 text-yellow-700 border-yellow-200',
      urgency: 'HIGH',
      symptoms: ['Uncontrolled shaking', 'Loss of consciousness', 'Confusion', 'Staring spells', 'Muscle stiffness'],
      actions: [
        'Keep person safe from injury',
        'Time the seizure',
        'Turn person on their side',
        'Do not put anything in mouth',
        'Call 911 if seizure lasts >5 minutes'
      ]
    },
    {
      id: 'allergic-reaction',
      title: 'Severe Allergic Reaction',
      icon: Shield,
      color: 'bg-orange-100 text-orange-700 border-orange-200',
      urgency: 'CRITICAL',
      symptoms: ['Difficulty breathing', 'Swelling of face/throat', 'Rapid pulse', 'Dizziness', 'Widespread rash'],
      actions: [
        'Call 911 immediately',
        'Use EpiPen if available',
        'Remove or avoid allergen',
        'Keep person lying down',
        'Monitor breathing closely'
      ]
    },
    {
      id: 'choking',
      title: 'Choking',
      icon: Activity,
      color: 'bg-blue-100 text-blue-700 border-blue-200',
      urgency: 'CRITICAL',
      symptoms: ['Cannot speak or breathe', 'Clutching throat', 'Blue lips/face', 'Panic expression', 'Weak cough'],
      actions: [
        'Perform Heimlich maneuver',
        'Call 911 if unsuccessful',
        'Back blows between shoulder blades',
        'Continue until object dislodged',
        'Check mouth for visible objects'
      ]
    },
    {
      id: 'bleeding',
      title: 'Severe Bleeding',
      icon: Users,
      color: 'bg-red-100 text-red-700 border-red-200',
      urgency: 'HIGH',
      symptoms: ['Heavy blood loss', 'Deep wound', 'Spurting blood', 'Weakness', 'Pale skin'],
      actions: [
        'Apply direct pressure to wound',
        'Elevate injured area if possible',
        'Use clean cloth or bandage',
        'Call 911 for severe bleeding',
        'Do not remove embedded objects'
      ]
    }
  ];

  const emergencyContacts = [
    { service: 'Emergency Services', number: '911', description: 'Police, Fire, Medical Emergency' },
    { service: 'Poison Control', number: '1-800-222-1222', description: '24/7 Poison Emergency Hotline' },
    { service: 'Crisis Text Line', number: 'Text HOME to 741741', description: 'Mental Health Crisis Support' },
    { service: 'National Suicide Prevention', number: '988', description: '24/7 Suicide & Crisis Lifeline' }
  ];

  const firstAidBasics = [
    {
      title: 'CPR Steps',
      steps: [
        'Check responsiveness and breathing',
        'Call 911 and get AED if available',
        'Place hands on center of chest',
        'Push hard and fast at least 2 inches deep',
        'Give 30 compressions, then 2 rescue breaths',
        'Continue until help arrives'
      ]
    },
    {
      title: 'Recovery Position',
      steps: [
        'Kneel beside the person',
        'Place arm nearest you at right angle',
        'Bring far arm across chest',
        'Bend far leg at knee',
        'Roll person toward you onto their side',
        'Tilt head back to open airway'
      ]
    }
  ];

  const getUrgencyColor = (urgency: string) => {
    switch (urgency) {
      case 'CRITICAL': return 'bg-red-500 text-white';
      case 'HIGH': return 'bg-orange-500 text-white';
      case 'MEDIUM': return 'bg-yellow-500 text-white';
      default: return 'bg-gray-500 text-white';
    }
  };

  return (
    <div className="py-8 px-4 min-h-screen">
      <div className="container mx-auto max-w-7xl">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="bg-red-500 p-4 rounded-2xl inline-block mb-4">
            <AlertTriangle className="w-8 h-8 text-white" />
          </div>
          <h1 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="bg-gradient-to-r from-red-600 to-orange-600 bg-clip-text text-transparent">
              Emergency Medical Guide
            </span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Critical information for medical emergencies. In any emergency, call 911 first.
          </p>
        </div>

        {/* Emergency Alert */}
        <div className="bg-red-50 border-2 border-red-200 rounded-2xl p-6 mb-8">
          <div className="flex items-center space-x-4">
            <div className="bg-red-500 p-3 rounded-xl">
              <Phone className="w-6 h-6 text-white" />
            </div>
            <div className="flex-1">
              <h3 className="text-xl font-bold text-red-800 mb-2">Emergency? Call 911 Now!</h3>
              <p className="text-red-700">
                If someone is in immediate danger or needs urgent medical attention, call emergency services immediately. 
                This guide is for educational purposes and should not delay emergency care.
              </p>
            </div>
            <button className="bg-red-500 text-white px-6 py-3 rounded-xl font-bold text-lg hover:bg-red-600 transition-colors">
              CALL 911
            </button>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Emergency Types */}
          <div className="lg:col-span-2">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">Common Medical Emergencies</h2>
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              {emergencyTypes.map((emergency) => {
                const Icon = emergency.icon;
                return (
                  <div
                    key={emergency.id}
                    onClick={() => setSelectedEmergency(emergency.id)}
                    className={`${emergency.color} border-2 rounded-2xl p-6 cursor-pointer hover:shadow-lg transition-all duration-300 ${
                      selectedEmergency === emergency.id ? 'ring-4 ring-blue-200' : ''
                    }`}
                  >
                    <div className="flex items-center justify-between mb-4">
                      <Icon className="w-8 h-8" />
                      <span className={`px-3 py-1 rounded-full text-xs font-bold ${getUrgencyColor(emergency.urgency)}`}>
                        {emergency.urgency}
                      </span>
                    </div>
                    <h3 className="text-xl font-bold mb-2">{emergency.title}</h3>
                    <p className="text-sm opacity-80 mb-4">
                      {emergency.symptoms.slice(0, 2).join(', ')}...
                    </p>
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium">View Details</span>
                      <ChevronRight className="w-4 h-4" />
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Selected Emergency Details */}
            {selectedEmergency && (
              <div className="bg-white/60 backdrop-blur-sm rounded-2xl border border-blue-100 p-6 mb-8">
                {(() => {
                  const emergency = emergencyTypes.find(e => e.id === selectedEmergency);
                  if (!emergency) return null;
                  const Icon = emergency.icon;
                  
                  return (
                    <>
                      <div className="flex items-center space-x-4 mb-6">
                        <div className={`${emergency.color} p-3 rounded-xl border-2`}>
                          <Icon className="w-6 h-6" />
                        </div>
                        <div>
                          <h3 className="text-2xl font-bold text-gray-800">{emergency.title}</h3>
                          <span className={`px-3 py-1 rounded-full text-xs font-bold ${getUrgencyColor(emergency.urgency)}`}>
                            {emergency.urgency} PRIORITY
                          </span>
                        </div>
                      </div>

                      <div className="grid md:grid-cols-2 gap-6">
                        <div>
                          <h4 className="text-lg font-bold text-gray-800 mb-4 flex items-center">
                            <AlertTriangle className="w-5 h-5 mr-2 text-orange-500" />
                            Warning Signs
                          </h4>
                          <ul className="space-y-2">
                            {emergency.symptoms.map((symptom, index) => (
                              <li key={index} className="flex items-start space-x-2">
                                <div className="w-2 h-2 bg-red-500 rounded-full mt-2"></div>
                                <span className="text-gray-700">{symptom}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        <div>
                          <h4 className="text-lg font-bold text-gray-800 mb-4 flex items-center">
                            <CheckCircle className="w-5 h-5 mr-2 text-green-500" />
                            Immediate Actions
                          </h4>
                          <ol className="space-y-2">
                            {emergency.actions.map((action, index) => (
                              <li key={index} className="flex items-start space-x-3">
                                <span className="bg-blue-500 text-white text-xs font-bold rounded-full w-6 h-6 flex items-center justify-center mt-0.5">
                                  {index + 1}
                                </span>
                                <span className="text-gray-700">{action}</span>
                              </li>
                            ))}
                          </ol>
                        </div>
                      </div>
                    </>
                  );
                })()}
              </div>
            )}

            {/* First Aid Basics */}
            <div className="bg-white/60 backdrop-blur-sm rounded-2xl border border-blue-100 p-6">
              <h3 className="text-xl font-bold text-gray-800 mb-6">Essential First Aid Techniques</h3>
              <div className="grid md:grid-cols-2 gap-6">
                {firstAidBasics.map((technique, index) => (
                  <div key={index} className="border border-gray-200 rounded-xl p-4">
                    <h4 className="font-bold text-gray-800 mb-3">{technique.title}</h4>
                    <ol className="space-y-2">
                      {technique.steps.map((step, stepIndex) => (
                        <li key={stepIndex} className="flex items-start space-x-3 text-sm">
                          <span className="bg-green-500 text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center mt-0.5">
                            {stepIndex + 1}
                          </span>
                          <span className="text-gray-700">{step}</span>
                        </li>
                      ))}
                    </ol>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Emergency Contacts */}
            <div className="bg-white/60 backdrop-blur-sm rounded-2xl border border-blue-100 p-6">
              <h3 className="text-xl font-bold text-gray-800 mb-6 flex items-center">
                <Phone className="w-5 h-5 mr-2" />
                Emergency Contacts
              </h3>
              <div className="space-y-4">
                {emergencyContacts.map((contact, index) => (
                  <div key={index} className="border border-gray-200 rounded-xl p-4">
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="font-bold text-gray-800">{contact.service}</h4>
                      <a 
                        href={`tel:${contact.number}`}
                        className="bg-red-500 text-white px-3 py-1 rounded-lg text-sm font-bold hover:bg-red-600 transition-colors"
                      >
                        {contact.number}
                      </a>
                    </div>
                    <p className="text-gray-600 text-sm">{contact.description}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Quick Actions */}
            <div className="bg-white/60 backdrop-blur-sm rounded-2xl border border-blue-100 p-6">
              <h3 className="text-xl font-bold text-gray-800 mb-6">Quick Actions</h3>
              <div className="space-y-3">
                <button className="w-full bg-red-500 text-white py-3 rounded-xl font-bold hover:bg-red-600 transition-colors flex items-center justify-center space-x-2">
                  <Phone className="w-4 h-4" />
                  <span>Call 911</span>
                </button>
                <button className="w-full bg-blue-500 text-white py-3 rounded-xl font-bold hover:bg-blue-600 transition-colors flex items-center justify-center space-x-2">
                  <MapPin className="w-4 h-4" />
                  <span>Find Nearest Hospital</span>
                </button>
                <button className="w-full bg-green-500 text-white py-3 rounded-xl font-bold hover:bg-green-600 transition-colors flex items-center justify-center space-x-2">
                  <Activity className="w-4 h-4" />
                  <span>First Aid Guide</span>
                </button>
              </div>
            </div>

            {/* Important Reminders */}
            <div className="bg-yellow-50 border border-yellow-200 rounded-2xl p-6">
              <h3 className="text-lg font-bold text-yellow-800 mb-4 flex items-center">
                <Clock className="w-5 h-5 mr-2" />
                Remember
              </h3>
              <ul className="space-y-2 text-yellow-700 text-sm">
                <li>• Stay calm and act quickly</li>
                <li>• Call 911 before attempting first aid</li>
                <li>• Don't move injured person unless necessary</li>
                <li>• Keep emergency contacts easily accessible</li>
                <li>• Take first aid training courses</li>
              </ul>
            </div>

            {/* Disclaimer */}
            <div className="bg-red-50 border border-red-200 rounded-2xl p-6">
              <div className="flex items-start space-x-3">
                <AlertTriangle className="w-6 h-6 text-red-600 mt-0.5" />
                <div>
                  <h4 className="font-medium text-red-800 mb-2">Emergency Disclaimer</h4>
                  <p className="text-red-700 text-sm">
                    This guide provides general information only. In any emergency, call 911 immediately. 
                    This information should not replace professional medical training or emergency services.
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

export default EmergencyGuide;