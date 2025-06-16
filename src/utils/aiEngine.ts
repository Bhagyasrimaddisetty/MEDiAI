// AI Engine for Medical Diagnosis
// This simulates a sophisticated AI system with NLP, DNN, and optimization

export interface SymptomAnalysis {
  possibleConditions: Array<{
    name: string;
    confidence: number;
    severity: 'low' | 'medium' | 'high';
    description: string;
    symptoms: string[];
  }>;
  recommendations: string[];
  urgency: 'low' | 'medium' | 'high';
  confidence: number;
}

export interface PatientInfo {
  age: string;
  gender: string;
  duration: string;
}

// Medical knowledge base (simplified for demo)
const medicalKnowledgeBase = {
  conditions: [
    {
      name: 'Common Cold',
      symptoms: ['runny nose', 'sneezing', 'cough', 'sore throat', 'mild fever', 'congestion'],
      severity: 'low',
      description: 'A viral infection of the upper respiratory tract that is usually harmless.',
      treatment: ['Rest', 'Fluids', 'Over-the-counter medications']
    },
    {
      name: 'Influenza (Flu)',
      symptoms: ['fever', 'chills', 'muscle aches', 'fatigue', 'headache', 'cough', 'sore throat'],
      severity: 'medium',
      description: 'A viral infection that attacks the respiratory system and can cause severe illness.',
      treatment: ['Rest', 'Antiviral medications', 'Symptom management']
    },
    {
      name: 'Migraine',
      symptoms: ['severe headache', 'nausea', 'vomiting', 'light sensitivity', 'sound sensitivity'],
      severity: 'medium',
      description: 'A neurological condition characterized by intense, debilitating headaches.',
      treatment: ['Pain medications', 'Rest in dark room', 'Preventive medications']
    },
    {
      name: 'Gastroenteritis',
      symptoms: ['nausea', 'vomiting', 'diarrhea', 'stomach pain', 'fever', 'dehydration'],
      severity: 'medium',
      description: 'Inflammation of the stomach and intestines, often caused by infection.',
      treatment: ['Hydration', 'Rest', 'Bland diet', 'Electrolyte replacement']
    },
    {
      name: 'Pneumonia',
      symptoms: ['chest pain', 'cough', 'fever', 'difficulty breathing', 'fatigue', 'chills'],
      severity: 'high',
      description: 'A serious infection that inflames air sacs in one or both lungs.',
      treatment: ['Antibiotics', 'Rest', 'Oxygen therapy', 'Hospitalization if severe']
    },
    {
      name: 'Anxiety Disorder',
      symptoms: ['excessive worry', 'restlessness', 'fatigue', 'difficulty concentrating', 'muscle tension'],
      severity: 'medium',
      description: 'A mental health condition characterized by excessive anxiety and worry.',
      treatment: ['Therapy', 'Medications', 'Lifestyle changes', 'Stress management']
    },
    {
      name: 'Hypertension',
      symptoms: ['headache', 'dizziness', 'chest pain', 'shortness of breath', 'nosebleeds'],
      severity: 'high',
      description: 'High blood pressure that can lead to serious health complications.',
      treatment: ['Lifestyle changes', 'Medications', 'Regular monitoring', 'Diet modification']
    },
    {
      name: 'Diabetes Type 2',
      symptoms: ['increased thirst', 'frequent urination', 'fatigue', 'blurred vision', 'slow healing'],
      severity: 'high',
      description: 'A chronic condition affecting how the body processes blood sugar.',
      treatment: ['Diet control', 'Exercise', 'Medications', 'Blood sugar monitoring']
    }
  ]
};

// Symptom severity weights
const symptomSeverityWeights: { [key: string]: number } = {
  'chest pain': 0.9,
  'difficulty breathing': 0.9,
  'severe headache': 0.8,
  'high fever': 0.8,
  'blood in stool': 0.9,
  'severe abdominal pain': 0.8,
  'confusion': 0.8,
  'loss of consciousness': 1.0,
  'severe allergic reaction': 1.0,
  'headache': 0.4,
  'fever': 0.5,
  'nausea': 0.3,
  'fatigue': 0.2,
  'cough': 0.3
};

// Neural Network Simulation
class MedicalNeuralNetwork {
  private weights: number[][];
  private biases: number[];

  constructor() {
    // Initialize with random weights (in real implementation, these would be trained)
    this.weights = this.initializeWeights();
    this.biases = this.initializeBiases();
  }

  private initializeWeights(): number[][] {
    // Simplified weight matrix for demo
    return Array(8).fill(0).map(() => 
      Array(20).fill(0).map(() => Math.random() * 2 - 1)
    );
  }

  private initializeBiases(): number[] {
    return Array(8).fill(0).map(() => Math.random() * 2 - 1);
  }

  predict(symptoms: string[]): number[] {
    // Simplified neural network forward pass
    const input = this.encodeSymptoms(symptoms);
    const output = this.weights.map((weights, i) => {
      const sum = weights.reduce((acc, weight, j) => acc + weight * (input[j] || 0), 0);
      return this.sigmoid(sum + this.biases[i]);
    });
    return output;
  }

  private encodeSymptoms(symptoms: string[]): number[] {
    // Convert symptoms to numerical representation
    const encoding = new Array(20).fill(0);
    symptoms.forEach((symptom, index) => {
      if (index < 20) {
        encoding[index] = symptomSeverityWeights[symptom] || 0.5;
      }
    });
    return encoding;
  }

  private sigmoid(x: number): number {
    return 1 / (1 + Math.exp(-x));
  }
}

// Initialize neural network
const neuralNetwork = new MedicalNeuralNetwork();

// Main analysis function
export async function analyzeSymptoms(
  symptoms: string[], 
  patientInfo: PatientInfo
): Promise<SymptomAnalysis> {
  
  // Simulate processing delay
  await new Promise(resolve => setTimeout(resolve, 2000));

  // Get neural network predictions
  const predictions = neuralNetwork.predict(symptoms);

  // Calculate condition matches
  const conditionMatches = medicalKnowledgeBase.conditions.map((condition, index) => {
    const matchScore = calculateMatchScore(symptoms, condition.symptoms);
    const ageAdjustment = calculateAgeAdjustment(patientInfo.age, condition.name);
    const genderAdjustment = calculateGenderAdjustment(patientInfo.gender, condition.name);
    const neuralScore = predictions[index] || 0;
    
    const finalScore = (matchScore * 0.4 + neuralScore * 0.4 + ageAdjustment * 0.1 + genderAdjustment * 0.1) * 100;
    
    return {
      ...condition,
      confidence: Math.min(Math.round(finalScore), 95), // Cap at 95% for safety
      symptoms: condition.symptoms
    };
  });

  // Sort by confidence and take top matches
  const topMatches = conditionMatches
    .filter(match => match.confidence > 20)
    .sort((a, b) => b.confidence - a.confidence)
    .slice(0, 4);

  // Determine urgency
  const urgency = determineUrgency(topMatches, symptoms);

  // Generate recommendations
  const recommendations = generateRecommendations(topMatches, urgency, patientInfo);

  return {
    possibleConditions: topMatches,
    recommendations,
    urgency,
    confidence: topMatches.length > 0 ? topMatches[0].confidence : 0
  };
}

function calculateMatchScore(userSymptoms: string[], conditionSymptoms: string[]): number {
  let matches = 0;
  let totalWeight = 0;

  userSymptoms.forEach(userSymptom => {
    conditionSymptoms.forEach(conditionSymptom => {
      const similarity = calculateSimilarity(userSymptom, conditionSymptom);
      if (similarity > 0.6) {
        const weight = symptomSeverityWeights[userSymptom] || 0.5;
        matches += similarity * weight;
        totalWeight += weight;
      }
    });
  });

  return totalWeight > 0 ? matches / totalWeight : 0;
}

function calculateSimilarity(symptom1: string, symptom2: string): number {
  // Simple similarity calculation (in real implementation, use more sophisticated NLP)
  const words1 = symptom1.toLowerCase().split(' ');
  const words2 = symptom2.toLowerCase().split(' ');
  
  let commonWords = 0;
  words1.forEach(word1 => {
    if (words2.some(word2 => word2.includes(word1) || word1.includes(word2))) {
      commonWords++;
    }
  });

  return commonWords / Math.max(words1.length, words2.length);
}

function calculateAgeAdjustment(age: string, conditionName: string): number {
  const ageNum = parseInt(age);
  if (isNaN(ageNum)) return 0.5;

  // Age-based condition likelihood adjustments
  const ageAdjustments: { [key: string]: (age: number) => number } = {
    'Common Cold': (age) => age < 18 ? 0.8 : 0.6,
    'Influenza (Flu)': (age) => age > 65 ? 0.8 : 0.6,
    'Migraine': (age) => age >= 20 && age <= 50 ? 0.8 : 0.5,
    'Hypertension': (age) => age > 40 ? 0.8 : 0.3,
    'Diabetes Type 2': (age) => age > 45 ? 0.8 : 0.4
  };

  return ageAdjustments[conditionName]?.(ageNum) || 0.5;
}

function calculateGenderAdjustment(gender: string, conditionName: string): number {
  // Gender-based condition likelihood adjustments
  const genderAdjustments: { [key: string]: { [key: string]: number } } = {
    'Migraine': { 'female': 0.7, 'male': 0.4 },
    'Anxiety Disorder': { 'female': 0.7, 'male': 0.5 }
  };

  return genderAdjustments[conditionName]?.[gender] || 0.5;
}

function determineUrgency(matches: any[], symptoms: string[]): 'low' | 'medium' | 'high' {
  // Check for high-severity symptoms
  const emergencySymptoms = [
    'chest pain', 'difficulty breathing', 'severe headache', 
    'loss of consciousness', 'severe allergic reaction', 'blood in stool'
  ];

  const hasEmergencySymptom = symptoms.some(symptom => 
    emergencySymptoms.some(emergency => symptom.toLowerCase().includes(emergency))
  );

  if (hasEmergencySymptom) return 'high';

  // Check condition severity
  const hasHighSeverityCondition = matches.some(match => 
    match.severity === 'high' && match.confidence > 60
  );

  if (hasHighSeverityCondition) return 'high';

  const hasMediumSeverityCondition = matches.some(match => 
    match.severity === 'medium' && match.confidence > 70
  );

  return hasMediumSeverityCondition ? 'medium' : 'low';
}

function generateRecommendations(
  matches: any[], 
  urgency: 'low' | 'medium' | 'high',
  patientInfo: PatientInfo
): string[] {
  const recommendations: string[] = [];

  if (urgency === 'high') {
    recommendations.push('Seek immediate medical attention or visit the emergency room');
    recommendations.push('Do not delay medical care for these symptoms');
  } else if (urgency === 'medium') {
    recommendations.push('Schedule an appointment with your healthcare provider within 24-48 hours');
    recommendations.push('Monitor symptoms and seek immediate care if they worsen');
  } else {
    recommendations.push('Consider scheduling a routine appointment with your healthcare provider');
    recommendations.push('Monitor symptoms and rest as needed');
  }

  // Add general recommendations
  recommendations.push('Stay hydrated and get adequate rest');
  recommendations.push('Keep a symptom diary to track changes');
  
  if (matches.length > 0) {
    recommendations.push(`Consider discussing ${matches[0].name} with your healthcare provider`);
  }

  return recommendations;
}