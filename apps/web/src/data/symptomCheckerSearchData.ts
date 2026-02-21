/**
 * Data for Symptom Checker search conditions section
 */

export const SEARCH_SECTION_TITLE = 'Find Your';
export const SEARCH_SECTION_TITLE_HIGHLIGHT = 'Answers';
export const SEARCH_SECTION_SUBTITLE =
  'Search by disease category, individual conditions, or symptom severity to get accurate, evidence-based medical information';

export const DISEASE_SEARCH = {
  headerIcon: 'fa-search-medical',
  headerLabel: 'Search Conditions',
  inputPlaceholder: 'Search by condition name or category...',
  inputIcon: 'fa-search',
} as const;

export const SEVERITY_SEARCH = {
  headerIcon: 'fa-stethoscope',
  headerLabel: 'Search by Severity',
  inputPlaceholder: 'Search by symptom severity...',
  inputIcon: 'fa-heart-pulse',
} as const;

export const SEVERITY_PILLS = [
  { severity: 'mild' as const, icon: 'fa-check-circle', label: 'Mild' },
  { severity: 'moderate' as const, icon: 'fa-exclamation-circle', label: 'Moderate' },
  { severity: 'severe' as const, icon: 'fa-exclamation-triangle', label: 'Severe' },
  { severity: 'critical' as const, icon: 'fa-skull-crossbones', label: 'Critical' },
] as const;

export const COMORBIDITY_SEARCH = {
  headerIcon: 'fa-notes-medical',
  headerLabel: 'Search by Existing Conditions',
  helperText: 'Select existing health conditions to find diseases affected by them',
} as const;

export const COMORBIDITY_BUTTONS = [
  { id: 'diabetes', icon: 'fa-syringe', label: 'Diabetes' },
  { id: 'hypertension', icon: 'fa-heart-pulse', label: 'Hypertension' },
  { id: 'obesity', icon: 'fa-weight-scale', label: 'Obesity' },
  { id: 'thyroid', icon: 'fa-disease', label: 'Thyroid Issues' },
  { id: 'depression', icon: 'fa-brain', label: 'Depression/Anxiety' },
  { id: 'autoimmune', icon: 'fa-shield-virus', label: 'Autoimmune Disease' },
  { id: 'heart', icon: 'fa-heartbeat', label: 'Heart Disease' },
  { id: 'pregnancy', icon: 'fa-baby', label: 'Pregnancy' },
  { id: 'cancer', icon: 'fa-ribbon', label: 'Cancer History' },
] as const;
