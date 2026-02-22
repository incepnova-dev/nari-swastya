/**
 * Full Symptom Checker config built from disease database extracted from symptom_checker.html.
 * Use this in production so search and detector show all conditions.
 */
import type {
  DiseaseDatabase,
  CategoryFilters,
  CategoryDisplayNames,
  DiseasesByCategory,
  SymptomCheckerAppConfig,
} from '../scripts/symptom_checker';
import { diseaseDatabase } from './diseaseDatabaseFull';

const categoryDisplayNames: CategoryDisplayNames = Object.fromEntries(
  Object.entries(diseaseDatabase).map(([key, category]) => [key, category.title])
);

const diseasesByCategory: DiseasesByCategory = Object.fromEntries(
  Object.entries(diseaseDatabase).map(([key, category]) => [
    key,
    category.diseases.map((d) => d.name),
  ])
);

const categoryFilters: CategoryFilters = {
  all: () => Object.values(diseaseDatabase),
  ...Object.fromEntries(
    Object.keys(diseaseDatabase).map((key) => [key, () => [diseaseDatabase[key]]])
  ),
  // HTML uses "cancer" as filter key that maps to malignancies
  cancer: () => (diseaseDatabase.malignancies ? [diseaseDatabase.malignancies] : []),
};

export const symptomCheckerAppConfigFull: SymptomCheckerAppConfig = {
  diseaseDatabase,
  categoryFilters,
  categoryDisplayNames,
  diseasesByCategory,
};
