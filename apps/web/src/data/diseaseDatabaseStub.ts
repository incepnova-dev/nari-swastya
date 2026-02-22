/**
 * Minimal disease database stub for Symptom Checker.
 * Replace or extend with full data (e.g. from symptom_checker.html or a JSON file) for production.
 */
import type {
  DiseaseDatabase,
  CategoryFilters,
  CategoryDisplayNames,
  DiseasesByCategory,
  SymptomCheckerAppConfig,
} from '../scripts/symptom_checker';

const reproductiveCategory = {
  id: 'reproductive',
  title: 'Reproductive System Disorders',
  icon: 'fas fa-venus',
  color: '#ec407a',
  image: 'https://images.unsplash.com/photo-1559757175-0eb30cd8c063?w=800&q=80',
  description:
    'Conditions affecting the female reproductive organs including ovaries, uterus, and associated structures',
  preview:
    'From PCOS to endometriosis, explore hormonal and structural conditions affecting fertility and menstrual health',
  exampleDiseases: ['PCOS', 'Endometriosis', 'Fibroids', 'Ovarian Cysts'],
  diseases: [
    {
      name: 'Polycystic Ovary Syndrome (PCOS)',
      category: 'Reproductive',
      tags: ['Hormonal', 'Metabolic', 'Fertility'],
      severityLevels: {
        mild: {
          symptoms:
            'Irregular menstrual cycles (35+ days), mild hirsutism, slight weight gain, occasional acne. Normal glucose tolerance.',
          action: 'Lifestyle modifications, regular monitoring',
        },
        moderate: {
          symptoms:
            'Oligomenorrhea or amenorrhea >3 months, moderate hirsutism requiring treatment, acne resistant to topical therapy, insulin resistance without diabetes, difficulty conceiving.',
          action: 'Medical management with hormonal therapy, metformin',
        },
        severe: {
          symptoms:
            'Complete amenorrhea, significant metabolic syndrome, type 2 diabetes mellitus, severe hirsutism and virilization, obesity (BMI >35), depression and anxiety disorders.',
          action: 'Aggressive metabolic management, specialist referral',
        },
        critical: null,
      },
      comorbidities:
        'Concurrent diabetes accelerates cardiovascular disease risk; depression amplifies treatment non-adherence; obesity compounds insulin resistance requiring aggressive metabolic management.',
    },
    {
      name: 'Endometriosis',
      category: 'Reproductive',
      tags: ['Chronic Pain', 'Fertility'],
      severityLevels: {
        mild: {
          symptoms:
            'Mild dysmenorrhea controlled with NSAIDs, slight pelvic discomfort during menstruation, minimal impact on daily activities.',
          action: 'NSAIDs, hormonal contraceptives',
        },
        moderate: {
          symptoms:
            'Severe dysmenorrhea requiring prescription analgesics, chronic pelvic pain, dyspareunia, subfertility, fatigue affecting work productivity.',
          action: 'Hormonal therapy, pain management, fertility evaluation',
        },
        severe: {
          symptoms:
            'Debilitating chronic pain unresponsive to medical management, deep infiltrating endometriosis affecting bowel/bladder, infertility requiring assisted reproduction, significant quality of life impairment.',
          action: 'Surgical intervention, multidisciplinary care, fertility treatment',
        },
        critical: null,
      },
      comorbidities:
        'Concurrent adenomyosis intensifies symptoms; inflammatory bowel disease complicates bowel endometriosis diagnosis; chronic pain syndrome requires multidisciplinary pain management.',
    },
  ],
};

export const diseaseDatabaseStub: DiseaseDatabase = {
  reproductive: reproductiveCategory,
};

export const categoryFiltersStub: CategoryFilters = {
  all: () => Object.values(diseaseDatabaseStub),
  reproductive: () => [reproductiveCategory],
};

export const categoryDisplayNamesStub: CategoryDisplayNames = {
  reproductive: 'Reproductive System Disorders',
};

export const diseasesByCategoryStub: DiseasesByCategory = {
  reproductive: [
    'Polycystic Ovary Syndrome (PCOS)',
    'Endometriosis',
  ],
};

export const symptomCheckerAppConfigStub: SymptomCheckerAppConfig = {
  diseaseDatabase: diseaseDatabaseStub,
  categoryFilters: categoryFiltersStub,
  categoryDisplayNames: categoryDisplayNamesStub,
  diseasesByCategory: diseasesByCategoryStub,
};
