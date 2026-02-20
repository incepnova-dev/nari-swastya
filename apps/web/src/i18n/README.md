# i18n Structure

This directory contains all internationalization (i18n) files for the web application.

## Structure

```
i18n/
├── index.ts              # i18n configuration and setup
├── locales/              # Translation files for each language
│   ├── en.json          # English
│   ├── hi.json          # Hindi (हिंदी)
│   ├── bn.json          # Bengali (বাংলা)
│   ├── kn.json          # Kannada (ಕನ್ನಡ)
│   ├── ta.json          # Tamil (தமிழ்)
│   ├── te.json          # Telugu (తెలుగు)
│   ├── ml.json          # Malayalam (മലയാളം)
│   ├── mr.json          # Marathi (मराठी)
│   └── gu.json          # Gujarati (ગુજરાતી)
└── README.md            # This file
```

## Supported Languages

- **EN** - English
- **HI** - Hindi (हिंदी)
- **BN** - Bengali (বাংলা)
- **KN** - Kannada (ಕನ್ನಡ)
- **TA** - Tamil (தமிழ்)
- **TE** - Telugu (తెలుగు)
- **ML** - Malayalam (മലയാളം)
- **MR** - Marathi (मराठी)
- **GU** - Gujarati (ગુજરાતી)

## Setup Instructions

1. Install an i18n library (recommended: `react-i18next`):
   ```bash
   npm install i18next react-i18next
   ```

2. Uncomment and configure the setup in `index.ts`

3. Import and initialize in `main.tsx`:
   ```typescript
   import './i18n';
   ```

4. Use translations in components:
   ```typescript
   import { useTranslation } from 'react-i18next';
   
   const { t } = useTranslation();
   return <h1>{t('common.appName')}</h1>;
   ```

## Translation File Structure

Each translation file follows a nested structure:
- `common` - Common translations (app name, buttons, etc.)
- `header` - Header navigation and labels
- `footer` - Footer content
- `services` - Services page content
- Additional sections can be added as needed

## Adding New Translations

1. Add the key-value pair to `en.json` first
2. Translate to all other languages
3. Use the translation key in your components

