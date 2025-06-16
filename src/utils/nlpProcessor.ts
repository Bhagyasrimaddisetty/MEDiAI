// Natural Language Processing for Medical Symptoms
// This module processes natural language input to extract medical symptoms

import nlp from 'compromise';

// Medical terminology and synonyms
const medicalTerms = {
  pain: ['ache', 'hurt', 'sore', 'painful', 'discomfort', 'throbbing', 'sharp', 'dull'],
  fever: ['temperature', 'hot', 'burning up', 'feverish', 'chills'],
  headache: ['head pain', 'migraine', 'head hurt', 'head ache'],
  nausea: ['sick', 'queasy', 'upset stomach', 'feel like vomiting'],
  fatigue: ['tired', 'exhausted', 'weak', 'drained', 'low energy'],
  cough: ['coughing', 'hacking', 'dry cough', 'wet cough'],
  'difficulty breathing': ['shortness of breath', 'hard to breathe', 'can\'t breathe', 'breathless'],
  dizziness: ['dizzy', 'lightheaded', 'vertigo', 'spinning'],
  'chest pain': ['chest hurt', 'chest ache', 'heart pain'],
  'sore throat': ['throat pain', 'throat hurt', 'scratchy throat'],
  vomiting: ['throwing up', 'puking', 'being sick'],
  diarrhea: ['loose stools', 'runny stomach', 'stomach upset'],
  constipation: ['can\'t go', 'blocked up', 'hard stools'],
  'muscle aches': ['body aches', 'muscle pain', 'joint pain'],
  'runny nose': ['stuffy nose', 'congestion', 'blocked nose'],
  sneezing: ['sneezy', 'achoo'],
  'blurred vision': ['can\'t see clearly', 'vision problems', 'fuzzy vision'],
  'increased thirst': ['very thirsty', 'always thirsty', 'dry mouth'],
  'frequent urination': ['peeing a lot', 'urinating often', 'bathroom frequently']
};

// Severity indicators
const severityIndicators = {
  mild: ['slight', 'little', 'minor', 'mild'],
  moderate: ['moderate', 'medium', 'noticeable'],
  severe: ['severe', 'intense', 'extreme', 'terrible', 'unbearable', 'excruciating']
};

// Duration indicators
const durationIndicators = {
  acute: ['sudden', 'suddenly', 'just started', 'came on quickly'],
  chronic: ['for weeks', 'for months', 'long time', 'ongoing', 'persistent']
};

// Body parts mapping
const bodyParts = {
  head: ['head', 'skull', 'temple'],
  chest: ['chest', 'breast', 'ribcage'],
  abdomen: ['stomach', 'belly', 'abdomen', 'gut'],
  back: ['back', 'spine', 'lower back', 'upper back'],
  throat: ['throat', 'neck'],
  eyes: ['eyes', 'eye'],
  nose: ['nose', 'nostril'],
  mouth: ['mouth', 'lips'],
  arms: ['arm', 'arms', 'shoulder', 'elbow', 'wrist', 'hand'],
  legs: ['leg', 'legs', 'thigh', 'knee', 'ankle', 'foot', 'feet']
};

export async function processNaturalLanguage(input: string): Promise<string[]> {
  const symptoms: string[] = [];
  const doc = nlp(input.toLowerCase());
  
  // Extract sentences for better processing
  const sentences = doc.sentences().out('array');
  
  for (const sentence of sentences) {
    const processedSymptoms = await processSentence(sentence);
    symptoms.push(...processedSymptoms);
  }
  
  // Remove duplicates and return
  return [...new Set(symptoms)];
}

async function processSentence(sentence: string): Promise<string[]> {
  const symptoms: string[] = [];
  const doc = nlp(sentence);
  
  // Extract medical terms directly mentioned
  for (const [symptom, synonyms] of Object.entries(medicalTerms)) {
    if (sentence.includes(symptom) || synonyms.some(syn => sentence.includes(syn))) {
      symptoms.push(symptom);
    }
  }
  
  // Extract pain-related symptoms with body parts
  const painWords = ['pain', 'ache', 'hurt', 'sore', 'painful'];
  for (const [bodyPart, parts] of Object.entries(bodyParts)) {
    for (const part of parts) {
      if (sentence.includes(part)) {
        for (const painWord of painWords) {
          if (sentence.includes(painWord)) {
            symptoms.push(`${bodyPart} pain`);
            break;
          }
        }
      }
    }
  }
  
  // Extract fever-related terms
  if (sentence.includes('fever') || sentence.includes('temperature') || 
      sentence.includes('hot') || sentence.includes('chills')) {
    symptoms.push('fever');
  }
  
  // Extract respiratory symptoms
  if (sentence.includes('cough') || sentence.includes('coughing')) {
    symptoms.push('cough');
  }
  
  if (sentence.includes('breath') || sentence.includes('breathing')) {
    symptoms.push('difficulty breathing');
  }
  
  // Extract gastrointestinal symptoms
  if (sentence.includes('nausea') || sentence.includes('sick') || 
      sentence.includes('queasy')) {
    symptoms.push('nausea');
  }
  
  if (sentence.includes('vomit') || sentence.includes('throwing up') || 
      sentence.includes('puking')) {
    symptoms.push('vomiting');
  }
  
  if (sentence.includes('diarrhea') || sentence.includes('loose stools')) {
    symptoms.push('diarrhea');
  }
  
  // Extract neurological symptoms
  if (sentence.includes('headache') || sentence.includes('head pain') || 
      sentence.includes('migraine')) {
    symptoms.push('headache');
  }
  
  if (sentence.includes('dizzy') || sentence.includes('dizziness') || 
      sentence.includes('lightheaded')) {
    symptoms.push('dizziness');
  }
  
  // Extract fatigue-related symptoms
  if (sentence.includes('tired') || sentence.includes('fatigue') || 
      sentence.includes('exhausted') || sentence.includes('weak')) {
    symptoms.push('fatigue');
  }
  
  // Extract skin-related symptoms
  if (sentence.includes('rash') || sentence.includes('itchy') || 
      sentence.includes('red skin')) {
    symptoms.push('skin rash');
  }
  
  // Extract sleep-related symptoms
  if (sentence.includes('insomnia') || sentence.includes('can\'t sleep') || 
      sentence.includes('trouble sleeping')) {
    symptoms.push('insomnia');
  }
  
  // Extract mood-related symptoms
  if (sentence.includes('anxious') || sentence.includes('anxiety') || 
      sentence.includes('worried')) {
    symptoms.push('anxiety');
  }
  
  if (sentence.includes('depressed') || sentence.includes('sad') || 
      sentence.includes('down')) {
    symptoms.push('depression');
  }
  
  return symptoms;
}

// Enhanced symptom extraction with context
export function extractSymptomsWithContext(input: string): {
  symptoms: string[];
  severity: string[];
  duration: string[];
  bodyParts: string[];
} {
  const doc = nlp(input.toLowerCase());
  const result = {
    symptoms: [] as string[],
    severity: [] as string[],
    duration: [] as string[],
    bodyParts: [] as string[]
  };
  
  // Extract severity
  for (const [level, indicators] of Object.entries(severityIndicators)) {
    if (indicators.some(indicator => input.includes(indicator))) {
      result.severity.push(level);
    }
  }
  
  // Extract duration
  for (const [type, indicators] of Object.entries(durationIndicators)) {
    if (indicators.some(indicator => input.includes(indicator))) {
      result.duration.push(type);
    }
  }
  
  // Extract body parts
  for (const [part, synonyms] of Object.entries(bodyParts)) {
    if (synonyms.some(synonym => input.includes(synonym))) {
      result.bodyParts.push(part);
    }
  }
  
  return result;
}

// Symptom normalization
export function normalizeSymptom(symptom: string): string {
  const normalized = symptom.toLowerCase().trim();
  
  // Check if it matches any known medical terms
  for (const [term, synonyms] of Object.entries(medicalTerms)) {
    if (normalized === term || synonyms.includes(normalized)) {
      return term;
    }
  }
  
  return normalized;
}

// Confidence scoring for extracted symptoms
export function calculateExtractionConfidence(
  originalText: string, 
  extractedSymptoms: string[]
): number {
  if (extractedSymptoms.length === 0) return 0;
  
  let totalConfidence = 0;
  const textLength = originalText.length;
  
  extractedSymptoms.forEach(symptom => {
    // Higher confidence for exact matches
    if (originalText.toLowerCase().includes(symptom)) {
      totalConfidence += 0.9;
    } else {
      // Check for synonym matches
      const synonyms = medicalTerms[symptom] || [];
      const hasMatch = synonyms.some(syn => originalText.toLowerCase().includes(syn));
      totalConfidence += hasMatch ? 0.7 : 0.3;
    }
  });
  
  return Math.min(totalConfidence / extractedSymptoms.length, 1.0);
}