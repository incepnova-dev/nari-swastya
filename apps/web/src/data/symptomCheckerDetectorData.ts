/**
 * Data for Symptom Checker AI-Powered Symptom Detector section
 */

export const DETECTOR_SECTION = {
  title: 'AI-Powered',
  titleHighlight: 'Symptom Detector',
  subtitle:
    'Answer a few questions to get personalized insights about your symptoms. Our intelligent system analyzes disease type, age group, and comorbidities to provide accurate results',
} as const;

export const DETECTOR_FORM = {
  formCardIcon: 'fa-clipboard-list',
  formCardTitle: 'Tell Us About Your Symptoms',
  formCardSubtitle: 'Select options in each category for personalized detection',
} as const;

export const DETECTOR_CONDITION_CATEGORY = {
  label: '1. Primary Condition Category',
  labelIcon: 'fa-list-check',
  placeholder: 'Select condition category...',
} as const;

export const DETECTOR_SPECIFIC_DISEASE = {
  label: '2. Specific Disease/Condition',
  placeholder: 'First select a category...',
} as const;

export const DETECTOR_AGE_GROUP = {
  label: '3. Your Age Group',
  labelIcon: 'fa-calendar-days',
  placeholder: 'Select age group...',
  options: [
    { value: '0-17', label: '0-17 years (Pediatric/Adolescent)' },
    { value: '18-35', label: '18-35 years (Reproductive age)' },
    { value: '36-50', label: '36-50 years (Perimenopause)' },
    { value: '51-65', label: '51-65 years (Menopause/Post-menopause)' },
    { value: '65+', label: '65+ years (Senior)' },
  ] as const,
} as const;

export const DETECTOR_SEVERITY = {
  label: '4. Symptom Severity Level',
  labelIcon: 'fa-gauge-high',
  placeholder: 'Select severity level...',
  options: [
    { value: 'mild', label: 'Mild - Manageable symptoms' },
    { value: 'moderate', label: 'Moderate - Noticeable impact' },
    { value: 'severe', label: 'Severe - Significant disruption' },
    { value: 'critical', label: 'Critical - Emergency attention needed' },
  ] as const,
} as const;

export const DETECTOR_COMORBIDITIES = {
  label: '5. Existing Health Conditions (Comorbidities)',
  labelIcon: 'fa-notes-medical',
  buttons: [
    { value: 'diabetes', icon: 'fa-syringe', label: 'Diabetes' },
    { value: 'hypertension', icon: 'fa-heart-pulse', label: 'Hypertension' },
    { value: 'obesity', icon: 'fa-weight-scale', label: 'Obesity' },
    { value: 'thyroid', icon: 'fa-disease', label: 'Thyroid Issues' },
    { value: 'depression', icon: 'fa-brain', label: 'Depression/Anxiety' },
    { value: 'autoimmune', icon: 'fa-shield-virus', label: 'Autoimmune Disease' },
    { value: 'heart', icon: 'fa-heartbeat', label: 'Heart Disease' },
    { value: 'none', icon: 'fa-check', label: 'None' },
  ] as const,
} as const;

export const DETECTOR_ACTIONS = {
  analyzeLabel: 'Analyze My Symptoms',
  analyzeIcon: 'fa-microscope',
  analyzeIconEnd: 'fa-arrow-right',
  resetLabel: 'Reset Form',
  resetIcon: 'fa-rotate-right',
} as const;

export const DETECTOR_RESULTS_EMPTY = {
  icon: 'fa-clipboard-question',
  title: 'No Analysis Yet',
  description:
    'Fill out the form and click "Analyze My Symptoms" to see personalized results',
} as const;
