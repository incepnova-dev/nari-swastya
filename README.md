# Nari Swasthya (Women's Health Platform)

A comprehensive, interactive web platform focused on women's health, wellness, fertility education, and reproductive journeys.

The project is structured as a Node.js monorepo using npm workspaces, with the primary web client built using React, TypeScript, and Vite. The platform focuses on delivering educational, visual, and interactive experiences that help users better understand their bodies and reproductive health.

## Key Features

### Fertility & Conception Journeys
Interactive guides designed to help users understand:
- Pre-conception preparation timelines
- Fertility windows and cycle phases
- Ovulation awareness and reproductive health education

### Interactive Timelines & Scroll Experiences
Immersive storytelling through:
- Vertical scroll-based navigation
- Educational fertility timelines
- Guided wellness journeys with visual progression

### Health & Wellness Product Sections
Dedicated pages recommending curated products related to:
- Women's health
- Fertility support
- Hormonal balance
- Wellness supplements

### Dynamic 3D Visual Elements
The platform integrates Three.js to create interactive visual highlights such as:
- Animated hero sections
- Constellation-style visualizations
- Engaging visual storytelling elements

### Internationalization (i18n)
The application is designed for global accessibility using:
- `i18next`
- `react-i18next`

This allows seamless multi-language support and localization.

## Technology Stack

### Web Application (`apps/web`)
- **Framework:** React 18
- **Language:** TypeScript
- **Bundler:** Vite 6 (with SWC)
- **Routing:** React Router DOM v6
- **3D Graphics:** Three.js
- **Internationalization:** i18next + react-i18next

### Monorepo Architecture
The project follows a modular monorepo architecture using npm workspaces, enabling scalable development and shared functionality across packages.

```text
.
├── apps
│   └── web                # Main frontend React application
│
├── packages
│   ├── api-client        # Shared API request layer
│   ├── shared-i18        # Shared i18n configuration & translations
│   ├── shared-types      # Shared TypeScript types
│   ├── ui-components     # Reusable UI components
│   └── utils             # Shared utilities and helper functions
```

This structure enables:
- Code reuse across modules
- Easier scalability
- Separation of concerns
- Consistent architecture across future services

## Getting Started

### Prerequisites
Make sure you have the following installed:
- Node.js (v18 or higher recommended)
- npm (comes bundled with Node.js)

You can verify installation using:
```bash
node -v
npm -v
```

### Development
To start the development server for the web application:
```bash
cd apps/web
npm run dev
```

The application will start on:
`http://localhost:5173`
*(Port may vary depending on your Vite configuration.)*

### Production Build
To generate an optimized production build, run the following command from the root directory:
```bash
npm run build
```

Alternatively, you can build directly from the web app:
```bash
cd apps/web
npm run build
```

The compiled production build will be generated in:
`apps/web/dist`

## Project Vision

Nari Swasthya aims to create a modern digital health platform for women's reproductive education, combining:
- Medical awareness
- Interactive learning experiences
- Visual health simulations
- Accessible global health information

The goal is to empower users with knowledge, clarity, and confidence in understanding their bodies and fertility journeys.
