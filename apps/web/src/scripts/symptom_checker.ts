/**
 * Symptom Checker Page - Particle canvas animation for hero background
 * Neural-network style connecting particles (aligned with symptom_checker.html)
 */

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
}

/**
 * Initialize particle canvas animation for the symptom checker hero background.
 * Returns a cleanup function to stop the animation and remove resize listener.
 */
export function initSymptomCheckerParticleCanvas(
  canvas: HTMLCanvasElement | null
): (() => void) | null {
  if (!canvas) return null;

  const ctx = canvas.getContext('2d');
  if (!ctx) return null;

  const el = canvas;
  const context = ctx;

  let W: number;
  let H: number;
  let animationId: number;
  const particles: Particle[] = [];
  const particleCount = 80;

  function resize() {
    const w = el.offsetWidth || 300;
    const h = el.offsetHeight || 300;
    el.width = W = w;
    el.height = H = h;
  }

  function createParticle(): Particle {
    return {
      x: Math.random() * W,
      y: Math.random() * H,
      vx: (Math.random() - 0.5) * 0.5,
      vy: (Math.random() - 0.5) * 0.5,
      radius: Math.random() * 2 + 1,
    };
  }

  function update(p: Particle) {
    p.x += p.vx;
    p.y += p.vy;
    if (p.x < 0 || p.x > W) p.vx *= -1;
    if (p.y < 0 || p.y > H) p.vy *= -1;
  }

  function draw(p: Particle) {
    context.beginPath();
    context.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
    context.fillStyle = 'rgba(236, 64, 122, 0.6)';
    context.fill();
  }

  function connect() {
    for (let i = 0; i < particles.length; i++) {
      for (let j = i + 1; j < particles.length; j++) {
        const dx = particles[i].x - particles[j].x;
        const dy = particles[i].y - particles[j].y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        if (distance < 100) {
          context.beginPath();
          context.strokeStyle = `rgba(236, 64, 122, ${0.2 * (1 - distance / 100)})`;
          context.lineWidth = 1;
          context.moveTo(particles[i].x, particles[i].y);
          context.lineTo(particles[j].x, particles[j].y);
          context.stroke();
        }
      }
    }
  }

  function animate() {
    context.clearRect(0, 0, W, H);
    particles.forEach((p) => {
      update(p);
      draw(p);
    });
    connect();
    animationId = requestAnimationFrame(animate);
  }

  resize();
  for (let i = 0; i < particleCount; i++) {
    particles.push(createParticle());
  }
  animate();
  window.addEventListener('resize', resize);

  return () => {
    window.removeEventListener('resize', resize);
    cancelAnimationFrame(animationId);
  };
}

// =============================================================================
// Symptom Checker app init and DOM logic (from symptom_checker.html)
// Data (diseaseDatabase, etc.) must be provided via initSymptomCheckerApp(config)
// or set on window before calling init (e.g. window.diseaseDatabase, ...).
// =============================================================================

export interface DiseaseSeverityLevel {
  symptoms: string;
  action: string;
}

export interface Disease {
  name: string;
  category?: string;
  tags?: string[];
  severityLevels: Record<string, DiseaseSeverityLevel | null>;
  comorbidities?: string;
}

export interface Category {
  id: string;
  title: string;
  icon: string;
  color: string;
  image: string;
  description: string;
  preview?: string;
  exampleDiseases?: string[];
  diseases: Disease[];
}

export type DiseaseDatabase = Record<string, Category>;
export type CategoryFilters = Record<string, () => Category[]>;
export type DiseasesByCategory = Record<string, string[]>;
export type CategoryDisplayNames = Record<string, string>;

export interface SymptomCheckerAppConfig {
  diseaseDatabase: DiseaseDatabase;
  categoryFilters: CategoryFilters;
  categoryDisplayNames: CategoryDisplayNames;
  diseasesByCategory: DiseasesByCategory;
}

let diseaseDatabaseRef: DiseaseDatabase = {};
let categoryFiltersRef: CategoryFilters = {} as CategoryFilters;
let categoryDisplayNamesRef: CategoryDisplayNames = {};
let diseasesByCategoryRef: DiseasesByCategory = {};

function getDb(): DiseaseDatabase {
  return diseaseDatabaseRef;
}

function getCategoryFilters(): CategoryFilters {
  return categoryFiltersRef;
}

function getCategoryDisplayNames(): CategoryDisplayNames {
  return categoryDisplayNamesRef;
}

function getDiseasesByCategory(): DiseasesByCategory {
  return diseasesByCategoryRef;
}

function adjustColor(color: string, percent: number): string {
  const num = parseInt(color.replace('#', ''), 16);
  const amt = Math.round(2.55 * percent);
  const R = (num >> 16) + amt;
  const G = ((num >> 8) & 0x00ff) + amt;
  const B = (num & 0x0000ff) + amt;
  return (
    '#' +
    (0x1000000 +
      (R < 255 ? (R < 1 ? 0 : R) : 255) * 0x10000 +
      (G < 255 ? (G < 1 ? 0 : G) : 255) * 0x100 +
      (B < 255 ? (B < 1 ? 0 : B) : 255))
      .toString(16)
      .slice(1)
  );
}

export function renderCategories(filter: string = 'all'): void {
  const grid = document.getElementById('categoriesGrid');
  if (!grid) return;

  const db = getDb();
  const filters = getCategoryFilters();
  const categories =
    filter === 'all' ? Object.values(db) : (filters[filter]?.() ?? []);

  grid.innerHTML = '';

  categories.forEach((category, index) => {
    const card = document.createElement('div');
    card.className = 'stellar-category-card';
    card.setAttribute('data-category', category.id);
    card.style.setProperty('--card-color', category.color);
    card.style.setProperty('--card-delay', `${index * 0.1}s`);

    const exampleDiseasesHtml = category.exampleDiseases
      ? category.exampleDiseases
          .slice(0, 3)
          .map(
            (disease, i) => `
              <div class="disease-pill" style="--pill-delay: ${i * 0.05}s; --pill-color: ${category.color};">
                <span class="pill-dot" style="background: ${category.color};"></span>
                <span class="pill-text">${disease}</span>
              </div>
            `
          )
          .join('')
      : '';

    card.innerHTML = `
      <div class="card-aura" style="background: radial-gradient(circle at 50% 50%, ${category.color}40, transparent 70%);"></div>
      <div class="card-shimmer"></div>
      <div class="glass-card-wrapper">
        <div class="stellar-image-section">
          <div class="image-parallax-bg" style="background-image: url('${category.image}');"></div>
          <div class="image-overlay-gradient" style="background: linear-gradient(180deg, transparent 0%, ${category.color}15 50%, white 100%);"></div>
          <div class="icon-gem-container">
            <div class="gem-shine"></div>
            <div class="icon-gem" style="background: linear-gradient(135deg, ${category.color}, ${adjustColor(category.color, 30)});">
              <i class="${category.icon}"></i>
            </div>
          </div>
          <div class="condition-bubble" style="background: linear-gradient(135deg, ${category.color}, ${adjustColor(category.color, 20)});">
            <span class="bubble-number">${category.diseases.length}</span>
            <span class="bubble-label">Conditions</span>
          </div>
        </div>
        <div class="stellar-content-section">
          <div class="title-container">
            <h3 class="stellar-title" style="background: linear-gradient(135deg, ${category.color}, ${adjustColor(category.color, 40)}); -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text;">
              ${category.title}
            </h3>
            <div class="title-underline" style="background: linear-gradient(90deg, ${category.color}, transparent);"></div>
          </div>
          <p class="stellar-preview">
            <i class="fas fa-quote-left quote-icon" style="color: ${category.color};"></i>
            ${category.preview || category.description}
          </p>
          <div class="disease-pills-container">
            <div class="pills-label" style="color: ${category.color};">
              <i class="fas fa-heartbeat"></i>
              <span>Includes</span>
            </div>
            <div class="disease-pills-wrapper">${exampleDiseasesHtml}</div>
          </div>
          <div class="action-section">
            <button class="stellar-explore-btn" style="--btn-color: ${category.color};">
              <span class="btn-bg-effect"></span>
              <span class="btn-content">
                <span class="btn-text">Explore All Conditions</span>
                <span class="btn-icon-wrapper">
                  <i class="fas fa-arrow-right btn-icon"></i>
                </span>
              </span>
            </button>
            <div class="learn-more-hint" style="color: ${category.color};">
              <i class="fas fa-hand-pointer"></i>
              <span>Click anywhere to explore</span>
            </div>
          </div>
        </div>
      </div>
      <div class="corner-decoration top-left" style="border-color: ${category.color};"></div>
      <div class="corner-decoration top-right" style="border-color: ${category.color};"></div>
      <div class="corner-decoration bottom-left" style="border-color: ${category.color};"></div>
      <div class="corner-decoration bottom-right" style="border-color: ${category.color};"></div>
    `;

    card.addEventListener('click', () => showCategoryModal(category));
    grid.appendChild(card);
  });
}

function renderDiseaseContent(disease: Disease): string {
  const severityHTML = Object.keys(disease.severityLevels)
    .filter((severity) => disease.severityLevels[severity] !== null)
    .map((severity) => {
      const level = disease.severityLevels[severity]!;
      return `
        <div class="detail-block severity-block-${severity}">
          <div class="severity-header">
            <i class="fas fa-circle"></i>
            <h4>${severity.charAt(0).toUpperCase() + severity.slice(1)} Severity</h4>
          </div>
          <div class="severity-content">
            <div class="severity-item">
              <i class="fas fa-notes-medical"></i>
              <div>
                <strong>Symptoms:</strong>
                <p>${level.symptoms}</p>
              </div>
            </div>
            <div class="severity-item">
              <i class="fas fa-procedures"></i>
              <div>
                <strong>Recommended Action:</strong>
                <p>${level.action}</p>
              </div>
            </div>
          </div>
        </div>
      `;
    })
    .join('');

  const comorbiditiesHTML = disease.comorbidities
    ? `
    <div class="detail-block comorbidities-block">
      <div class="comorbidities-header">
        <i class="fas fa-link"></i>
        <h4>Impact of Comorbidities</h4>
      </div>
      <p>${disease.comorbidities}</p>
    </div>
  `
    : '';

  const tagsHTML = disease.tags
    ? `
    <div class="disease-tags">
      ${disease.tags.map((tag) => `<span class="disease-tag"><i class="fas fa-tag"></i> ${tag}</span>`).join('')}
    </div>
  `
    : '';

  return `
    <div class="disease-content">
      <div class="disease-title-section">
        <h3>${disease.name}</h3>
        ${tagsHTML}
      </div>
      <div class="severity-levels">${severityHTML}</div>
      ${comorbiditiesHTML}
      <div class="disease-disclaimer">
        <i class="fas fa-info-circle"></i>
        <p><strong>Medical Disclaimer:</strong> This information is for educational purposes only. Individual presentations vary significantly. Always consult qualified healthcare providers for diagnosis and treatment decisions.</p>
      </div>
    </div>
  `;
}

export function showCategoryModal(category: Category): void {
  const modal = document.getElementById('diseaseModal');
  const modalBody = document.getElementById('modalBody');

  if (!modal || !modalBody) return;

  const tabsHTML = category.diseases
    .map(
      (disease, index) => `
    <button class="disease-tab ${index === 0 ? 'active' : ''}" data-index="${index}">
      ${disease.name}
    </button>
  `
    )
    .join('');

  const panelsHTML = category.diseases
    .map(
      (disease, index) => `
    <div class="disease-panel ${index === 0 ? 'active' : ''}" data-index="${index}">
      ${renderDiseaseContent(disease)}
    </div>
  `
    )
    .join('');

  modalBody.innerHTML = `
    <div class="modal-header" style="border-bottom: 3px solid ${category.color};">
      <div class="modal-category-icon" style="background: ${category.color};">
        <i class="${category.icon}"></i>
      </div>
      <div>
        <h2>${category.title}</h2>
        <p style="color: var(--text-soft); margin: 0.5rem 0 0 0;">${category.diseases.length} conditions in this category</p>
      </div>
    </div>
    <div class="disease-tabs-container">
      <div class="disease-tabs">${tabsHTML}</div>
    </div>
    <div class="disease-panels">${panelsHTML}</div>
  `;

  const tabs = modalBody.querySelectorAll('.disease-tab');
  const panels = modalBody.querySelectorAll('.disease-panel');

  tabs.forEach((tab) => {
    tab.addEventListener('click', () => {
      const index = tab.getAttribute('data-index');
      if (index == null) return;
      tabs.forEach((t) => t.classList.remove('active'));
      panels.forEach((p) => p.classList.remove('active'));
      tab.classList.add('active');
      (panels as NodeListOf<HTMLElement>)[parseInt(index, 10)]?.classList.add('active');
    });
  });

  modal.classList.add('active');
}

export function setupCategoryPillsFiltering(): void {
  const pills = document.querySelectorAll('.category-pill-btn');

  pills.forEach((pill) => {
    pill.addEventListener('click', () => {
      pills.forEach((p) => p.classList.remove('active'));
      pill.classList.add('active');
      const filter = pill.getAttribute('data-filter');
      renderCategories(filter ?? 'all');
    });
  });
}

interface SearchResult {
  disease: Disease;
  category: string;
  matchType?: string;
  matchLocation?: string;
  severity?: string;
  matchedConditions?: string[];
}

function searchDiseases(query: string): SearchResult[] {
  const results: SearchResult[] = [];
  const seenDiseases = new Set<string>();
  const db = getDb();

  Object.keys(db).forEach((categoryKey) => {
    const category = db[categoryKey];

    category.diseases.forEach((disease) => {
      if (seenDiseases.has(disease.name)) return;

      let matchFound = false;
      let matchType = '';
      let matchLocation = '';

      if (disease.name.toLowerCase().includes(query)) {
        matchFound = true;
        matchType = 'disease_name';
        matchLocation = 'Disease Name';
      }
      if (!matchFound && category.title.toLowerCase().includes(query)) {
        matchFound = true;
        matchType = 'category';
        matchLocation = 'Category Match';
      }
      if (!matchFound && disease.tags) {
        if (disease.tags.some((tag) => tag.toLowerCase().includes(query))) {
          matchFound = true;
          matchType = 'tag';
          matchLocation = 'Related Tag';
        }
      }
      if (!matchFound) {
        Object.keys(disease.severityLevels).forEach((severityKey) => {
          const severity = disease.severityLevels[severityKey];
          if (severity?.symptoms?.toLowerCase().includes(query)) {
            matchFound = true;
            matchType = 'symptom';
            matchLocation = `${severityKey.charAt(0).toUpperCase() + severityKey.slice(1)} Symptoms`;
          }
        });
      }
      if (!matchFound) {
        Object.keys(disease.severityLevels).forEach((severityKey) => {
          const severity = disease.severityLevels[severityKey];
          if (severity?.action?.toLowerCase().includes(query)) {
            matchFound = true;
            matchType = 'action';
            matchLocation = 'Treatment/Action';
          }
        });
      }
      if (!matchFound && disease.comorbidities?.toLowerCase().includes(query)) {
        matchFound = true;
        matchType = 'comorbidity';
        matchLocation = 'Comorbidities';
      }

      if (matchFound) {
        results.push({ disease, category: category.title, matchType, matchLocation });
        seenDiseases.add(disease.name);
      }
    });
  });

  return results;
}

function searchBySeverity(severityLevel: string): SearchResult[] {
  const results: SearchResult[] = [];
  const seenDiseases = new Set<string>();
  const db = getDb();

  Object.keys(db).forEach((categoryKey) => {
    const category = db[categoryKey];
    category.diseases.forEach((disease) => {
      if (seenDiseases.has(disease.name)) return;
      if (disease.severityLevels?.[severityLevel]) {
        results.push({
          disease,
          category: category.title,
          severity: severityLevel,
          matchType: 'severity',
          matchLocation: `${severityLevel.charAt(0).toUpperCase() + severityLevel.slice(1)} Level Available`,
        });
        seenDiseases.add(disease.name);
      }
    });
  });
  return results;
}

function searchInSymptoms(query: string): SearchResult[] {
  const results: SearchResult[] = [];
  const seenDiseases = new Set<string>();
  const db = getDb();

  Object.keys(db).forEach((categoryKey) => {
    const category = db[categoryKey];
    category.diseases.forEach((disease) => {
      if (seenDiseases.has(disease.name)) return;

      let matchFound = false;
      let bestSeverity = '';
      let matchLocation = '';

      Object.keys(disease.severityLevels).forEach((severityKey) => {
        const severity = disease.severityLevels[severityKey];
        if (severity) {
          if (severity.symptoms?.toLowerCase().includes(query)) {
            matchFound = true;
            bestSeverity = severityKey;
            matchLocation = `Found in ${severityKey} symptoms`;
          }
          if (!matchFound && severity.action?.toLowerCase().includes(query)) {
            matchFound = true;
            bestSeverity = severityKey;
            matchLocation = `Found in ${severityKey} treatment`;
          }
        }
      });
      if (!matchFound && disease.comorbidities?.toLowerCase().includes(query)) {
        matchFound = true;
        bestSeverity = 'mild';
        matchLocation = 'Found in comorbidities';
      }
      if (matchFound) {
        results.push({ disease, category: category.title, severity: bestSeverity, matchType: 'symptom', matchLocation });
        seenDiseases.add(disease.name);
      }
    });
  });
  return results;
}

function searchByComorbidities(selectedComorbidities: string[]): SearchResult[] {
  if (!selectedComorbidities?.length) return [];

  const results: SearchResult[] = [];
  const seenDiseases = new Set<string>();
  const db = getDb();
  const searchTerms = selectedComorbidities.map((c) => c.toLowerCase());

  Object.keys(db).forEach((categoryKey) => {
    const category = db[categoryKey];
    category.diseases.forEach((disease) => {
      if (seenDiseases.has(disease.name)) return;
      if (!disease.comorbidities) return;

      const comorbText = disease.comorbidities.toLowerCase();
      const matchedConditions = searchTerms.filter((term) => {
        switch (term) {
          case 'diabetes':
            return comorbText.includes('diabetes') || comorbText.includes('diabetic');
          case 'hypertension':
            return comorbText.includes('hypertension') || comorbText.includes('blood pressure') || comorbText.includes('bp ');
          case 'obesity':
            return comorbText.includes('obesity') || comorbText.includes('obese') || comorbText.includes('bmi');
          case 'thyroid':
            return comorbText.includes('thyroid') || comorbText.includes('hypothyroidism') || comorbText.includes('hyperthyroidism');
          case 'depression':
            return comorbText.includes('depression') || comorbText.includes('anxiety') || comorbText.includes('mental health');
          case 'autoimmune':
            return comorbText.includes('autoimmune') || comorbText.includes('lupus') || comorbText.includes('rheumatoid');
          case 'heart':
            return comorbText.includes('heart') || comorbText.includes('cardiovascular') || comorbText.includes('cardiac');
          case 'pregnancy':
            return comorbText.includes('pregnancy') || comorbText.includes('pregnant') || comorbText.includes('gestation');
          case 'cancer':
            return comorbText.includes('cancer') || comorbText.includes('malignancy') || comorbText.includes('tumor');
          default:
            return comorbText.includes(term);
        }
      });

      if (matchedConditions.length > 0) {
        results.push({
          disease,
          category: category.title,
          matchType: 'comorbidity',
          matchLocation: `Affected by: ${matchedConditions.join(', ')}`,
          matchedConditions,
        } as SearchResult);
        seenDiseases.add(disease.name);
      }
    });
  });

  results.sort((a, b) => (b.matchedConditions?.length ?? 0) - (a.matchedConditions?.length ?? 0));
  return results;
}

function updateComorbidityBadge(selectedComorbidities: string[], container: Element | null): void {
  const existingBadge = document.querySelector('.selected-comorbidities-badge');
  if (existingBadge) existingBadge.remove();

  if (selectedComorbidities.length > 0 && container) {
    const badge = document.createElement('div');
    badge.className = 'selected-comorbidities-badge';
    badge.innerHTML = `
      <i class="fas fa-filter"></i>
      <span>Filtering by <span class="badge-count">${selectedComorbidities.length}</span> condition${selectedComorbidities.length > 1 ? 's' : ''}</span>
    `;
    container.insertAdjacentElement('beforebegin', badge);
  }
}

function displaySearchResults(results: SearchResult[], container: HTMLElement | null): void {
  if (!container) return;
  container.innerHTML = '';

  if (results.length === 0) {
    container.innerHTML = `
      <div class="search-result-card">
        <div style="text-align: center; padding: 2rem; color: var(--text-muted);">
          <i class="fas fa-search" style="font-size: 3rem; margin-bottom: 1rem; opacity: 0.3;"></i>
          <h4>No Results Found</h4>
          <p>Try different keywords like "pain", "bleeding", "fever" or browse categories below</p>
        </div>
      </div>
    `;
    container.classList.add('active');
    return;
  }

  const summaryDiv = document.createElement('div');
  summaryDiv.className = 'search-summary';
  summaryDiv.innerHTML = `
    <div class="search-summary-content">
      <i class="fas fa-check-circle"></i>
      <span>Found <strong>${results.length}</strong> ${results.length === 1 ? 'condition' : 'conditions'} matching your search</span>
    </div>
  `;
  container.appendChild(summaryDiv);

  const limitedResults = results.slice(0, 15);
  limitedResults.forEach((result, index) => {
    const disease = result.disease;
    const card = document.createElement('div');
    card.className = 'search-result-card';
    (card as HTMLElement).style.animationDelay = `${index * 0.05}s`;

    const availableSeverities = Object.keys(disease.severityLevels).filter(
      (key) => disease.severityLevels[key] !== null
    );
    let previewText = '';
    if (result.matchType === 'severity' || result.matchType === 'symptom') {
      previewText = (disease.severityLevels[result.severity!]?.symptoms ?? '').substring(0, 150) + '...';
    } else {
      const firstSeverity = availableSeverities[0];
      if (firstSeverity && disease.severityLevels[firstSeverity]) {
        previewText = (disease.severityLevels[firstSeverity]!.symptoms ?? '').substring(0, 150) + '...';
      }
    }

    card.innerHTML = `
      <div class="result-header">
        <div class="result-name">
          <i class="fas fa-file-medical"></i>
          ${disease.name}
        </div>
        <span class="result-category-badge">${result.category}</span>
      </div>
      ${result.matchLocation ? `<div class="match-indicator"><i class="fas fa-bullseye"></i><span>Match found in: ${result.matchLocation}</span></div>` : ''}
      <p class="result-description">${previewText || 'Click to view detailed information'}</p>
      <div class="result-severity-tags">
        ${availableSeverities.map((sev) => `<span class="severity-tag-small ${sev}"><i class="fas fa-circle"></i>${sev.charAt(0).toUpperCase() + sev.slice(1)}</span>`).join('')}
      </div>
    `;
    card.addEventListener('click', () => showDiseaseDetailModal(disease));
    container.appendChild(card);
  });

  if (results.length > 15) {
    const moreCard = document.createElement('div');
    moreCard.className = 'search-result-card more-results-card';
    moreCard.innerHTML = `
      <div style="text-align: center; padding: 1.5rem; color: var(--text-soft);">
        <i class="fas fa-ellipsis-h" style="font-size: 1.5rem; margin-bottom: 0.75rem; color: var(--primary);"></i>
        <h4 style="margin: 0 0 0.5rem 0; color: var(--text-main);">More Results Available</h4>
        <p style="margin: 0;">+${results.length - 15} additional conditions. Try refining your search for better results.</p>
      </div>
    `;
    container.appendChild(moreCard);
  }
  container.classList.add('active');
}

function displayComorbidityResults(
  results: SearchResult[],
  container: HTMLElement | null,
  _selectedConditions: string[]
): void {
  if (!container) return;
  container.innerHTML = '';

  if (results.length === 0) {
    container.innerHTML = `
      <div class="comorbidity-results-empty">
        <i class="fas fa-notes-medical"></i>
        <h4>No Conditions Found</h4>
        <p>No diseases found that are specifically affected by the selected health conditions.</p>
      </div>
    `;
    container.classList.add('active');
    return;
  }

  const summaryDiv = document.createElement('div');
  summaryDiv.className = 'search-summary';
  summaryDiv.innerHTML = `
    <div class="search-summary-content">
      <i class="fas fa-check-circle"></i>
      <span>Found <strong>${results.length}</strong> condition${results.length === 1 ? '' : 's'} affected by your selected health conditions</span>
    </div>
  `;
  container.appendChild(summaryDiv);

  const limitedResults = results.slice(0, 15);
  limitedResults.forEach((result, index) => {
    const disease = result.disease;
    const card = document.createElement('div');
    card.className = 'search-result-card';
    (card as HTMLElement).style.animationDelay = `${index * 0.05}s`;

    const availableSeverities = Object.keys(disease.severityLevels).filter(
      (key) => disease.severityLevels[key] !== null
    );
    const comorbidityPreview = disease.comorbidities ? disease.comorbidities.substring(0, 180) + '...' : '';

    card.innerHTML = `
      <div class="result-header">
        <div class="result-name">
          <i class="fas fa-file-medical"></i>
          ${disease.name}
        </div>
        <span class="result-category-badge">${result.category}</span>
      </div>
      <div class="match-indicator" style="background: linear-gradient(135deg, rgba(171, 71, 188, 0.08), rgba(156, 39, 176, 0.05)); border-radius: 8px; color: #8e24aa;">
        <i class="fas fa-link"></i>
        <span>${result.matchLocation ?? ''}</span>
      </div>
      <p class="result-description"><strong>Impact:</strong> ${comorbidityPreview}</p>
      <div class="result-severity-tags">
        ${availableSeverities.map((sev) => `<span class="severity-tag-small ${sev}"><i class="fas fa-circle"></i>${sev.charAt(0).toUpperCase() + sev.slice(1)}</span>`).join('')}
      </div>
    `;
    card.addEventListener('click', () => showDiseaseDetailModal(disease));
    container.appendChild(card);
  });

  if (results.length > 15) {
    const moreCard = document.createElement('div');
    moreCard.className = 'search-result-card more-results-card';
    moreCard.innerHTML = `
      <div style="text-align: center; padding: 1.5rem;">
        <i class="fas fa-ellipsis-h" style="font-size: 1.5rem; margin-bottom: 0.75rem; color: #ab47bc;"></i>
        <h4 style="margin: 0 0 0.5rem 0; color: var(--text-main);">More Results Available</h4>
        <p style="margin: 0; color: var(--text-soft);">+${results.length - 15} additional conditions. Try selecting different health conditions for more specific results.</p>
      </div>
    `;
    container.appendChild(moreCard);
  }
  container.classList.add('active');
}

export function showDiseaseDetailModal(disease: Disease): void {
  const modal = document.getElementById('diseaseModal');
  const modalBody = document.getElementById('modalBody');

  if (!modal || !modalBody) return;

  modalBody.innerHTML = `
    <div class="modal-header">
      <div>
        <h2>${disease.name}</h2>
        <p style="color: var(--text-soft); margin: 0.5rem 0 0 0;">${disease.category ?? ''}</p>
      </div>
    </div>
    <div class="disease-panels">
      <div class="disease-panel active">
        ${renderDiseaseContent(disease)}
      </div>
    </div>
  `;
  modal.classList.add('active');
}

export function setupSearchFunctionality(): void {
  const diseaseSearch = document.getElementById('diseaseSearch') as HTMLInputElement | null;
  const clearSearch = document.getElementById('clearSearch') as HTMLElement | null;
  const diseaseResults = document.getElementById('diseaseResults') as HTMLElement | null;

  const comorbidityButtons = document.querySelectorAll('.comorbidity-search-btn');
  const comorbidityResults = document.getElementById('comorbidityResults') as HTMLElement | null;
  const comorbidityGrid = document.getElementById('comorbiditySearchGrid');
  let selectedComorbidities: string[] = [];

  if (diseaseSearch) {
    diseaseSearch.addEventListener('input', () => {
      const query = diseaseSearch.value.trim().toLowerCase();
      if (query.length > 0) {
        if (clearSearch) clearSearch.style.display = 'block';
        const results = searchDiseases(query);
        displaySearchResults(results, diseaseResults);
      } else {
        if (clearSearch) clearSearch.style.display = 'none';
        diseaseResults?.classList.remove('active');
        if (diseaseResults) diseaseResults.innerHTML = '';
      }
    });
  }

  if (clearSearch && diseaseSearch) {
    clearSearch.addEventListener('click', () => {
      diseaseSearch.value = '';
      clearSearch.style.display = 'none';
      diseaseResults?.classList.remove('active');
      if (diseaseResults) diseaseResults.innerHTML = '';
      diseaseSearch.focus();
    });
  }

  const symptomSearch = document.getElementById('symptomSearch') as HTMLInputElement | null;
  const clearSymptomSearch = document.getElementById('clearSymptomSearch') as HTMLElement | null;
  const severityResults = document.getElementById('severityResults') as HTMLElement | null;
  const severityPills = document.querySelectorAll('.severity-pill');

  severityPills.forEach((pill) => {
    pill.addEventListener('click', () => {
      severityPills.forEach((p) => p.classList.remove('active'));
      pill.classList.add('active');
      const severity = pill.getAttribute('data-severity');
      const results = searchBySeverity(severity ?? '');
      displaySearchResults(results, severityResults);
    });
  });

  if (symptomSearch) {
    symptomSearch.addEventListener('input', () => {
      const query = symptomSearch.value.trim().toLowerCase();
      if (query.length > 0) {
        if (clearSymptomSearch) clearSymptomSearch.style.display = 'block';
        const results = searchInSymptoms(query);
        displaySearchResults(results, severityResults);
        severityPills.forEach((p) => p.classList.remove('active'));
      } else {
        if (clearSymptomSearch) clearSymptomSearch.style.display = 'none';
        severityResults?.classList.remove('active');
        if (severityResults) severityResults.innerHTML = '';
      }
    });
  }

  if (clearSymptomSearch && symptomSearch) {
    clearSymptomSearch.addEventListener('click', () => {
      symptomSearch.value = '';
      clearSymptomSearch.style.display = 'none';
      severityResults?.classList.remove('active');
      if (severityResults) severityResults.innerHTML = '';
      symptomSearch.focus();
    });
  }

  comorbidityButtons.forEach((btn) => {
    btn.addEventListener('click', () => {
      const comorbidity = btn.getAttribute('data-comorbidity');
      if (!comorbidity) return;

      if (comorbidity === 'clear') {
        selectedComorbidities = [];
        comorbidityButtons.forEach((b) => {
          if (b.getAttribute('data-comorbidity') !== 'clear') b.classList.remove('active');
        });
        comorbidityResults?.classList.remove('active');
        if (comorbidityResults) comorbidityResults.innerHTML = '';
        const existingBadge = document.querySelector('.selected-comorbidities-badge');
        if (existingBadge) existingBadge.remove();
        return;
      }

      if (selectedComorbidities.includes(comorbidity)) {
        selectedComorbidities = selectedComorbidities.filter((c) => c !== comorbidity);
        btn.classList.remove('active');
      } else {
        selectedComorbidities.push(comorbidity);
        btn.classList.add('active');
      }

      updateComorbidityBadge(selectedComorbidities, comorbidityGrid);

      if (selectedComorbidities.length > 0) {
        const results = searchByComorbidities(selectedComorbidities);
        displayComorbidityResults(results, comorbidityResults, selectedComorbidities);
      } else {
        comorbidityResults?.classList.remove('active');
        if (comorbidityResults) comorbidityResults.innerHTML = '';
      }
    });
  });
}

export function setupModalFunctionality(): void {
  const modal = document.getElementById('diseaseModal');
  const modalClose = document.getElementById('modalClose');
  const modalBackdrop = document.getElementById('modalBackdrop');

  if (modalClose && modal) {
    modalClose.addEventListener('click', () => modal.classList.remove('active'));
  }
  if (modalBackdrop && modal) {
    modalBackdrop.addEventListener('click', () => modal.classList.remove('active'));
  }
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal?.classList.contains('active')) {
      modal.classList.remove('active');
    }
  });
}

function findDiseaseInDatabase(diseaseName: string, categoryKey: string): Disease | null {
  const db = getDb();
  const category = db[categoryKey];
  if (!category) return null;
  return category.diseases.find((d) => d.name === diseaseName) ?? null;
}

function displayDetectorResults(
  disease: Disease,
  categoryKey: string,
  age: string,
  severity: string,
  comorbidities: string[]
): void {
  const resultsEmpty = document.getElementById('resultsEmpty');
  const resultsContent = document.getElementById('resultsContent');
  if (!resultsContent) return;

  const db = getDb();
  const category = db[categoryKey];
  const severityData = disease.severityLevels[severity];

  if (resultsEmpty) resultsEmpty.style.display = 'none';

  const comorbiditiesText = comorbidities.length > 0 ? comorbidities.join(', ') : 'None reported';

  resultsContent.innerHTML = `
    <div class="results-header">
      <div class="results-icon" style="background: linear-gradient(135deg, ${category.color}, ${adjustColor(category.color, 20)});">
        <i class="${category.icon}"></i>
      </div>
      <div>
        <h3>Analysis Complete</h3>
        <p style="color: var(--text-soft); margin: 0.25rem 0 0 0;">Based on your symptoms and profile</p>
      </div>
    </div>
    <div class="results-summary">
      <div class="summary-item">
        <span class="summary-label">Condition</span>
        <span class="summary-value" style="color: ${category.color};">${disease.name}</span>
      </div>
      <div class="summary-item">
        <span class="summary-label">Category</span>
        <span class="summary-value">${category.title}</span>
      </div>
      <div class="summary-item">
        <span class="summary-label">Age Group</span>
        <span class="summary-value">${age}</span>
      </div>
      <div class="summary-item">
        <span class="summary-label">Severity</span>
        <span class="summary-value severity-badge-${severity}">${severity.charAt(0).toUpperCase() + severity.slice(1)}</span>
      </div>
    </div>
    ${severityData ? `
      <div class="severity-analysis" style="border-left-color: var(--${severity});">
        <h4><i class="fas fa-stethoscope"></i> ${severity.charAt(0).toUpperCase() + severity.slice(1)} Severity Analysis</h4>
        <div class="analysis-section">
          <div class="analysis-icon"><i class="fas fa-notes-medical"></i></div>
          <div>
            <h5>Expected Symptoms:</h5>
            <p>${severityData.symptoms}</p>
          </div>
        </div>
        <div class="analysis-section">
          <div class="analysis-icon action-icon"><i class="fas fa-procedures"></i></div>
          <div>
            <h5>Recommended Action:</h5>
            <p>${severityData.action}</p>
          </div>
        </div>
      </div>
    ` : `
      <div class="no-severity-info">
        <i class="fas fa-info-circle"></i>
        <p>No specific ${severity} severity information available for this condition.</p>
      </div>
    `}
    ${comorbidities.length > 0 && disease.comorbidities ? `
      <div class="comorbidities-alert">
        <div class="alert-header">
          <i class="fas fa-exclamation-triangle"></i>
          <h4>Important: Comorbidities Impact</h4>
        </div>
        <div class="alert-content">
          <p><strong>Your reported conditions:</strong> ${comorbiditiesText}</p>
          <p><strong>Impact on ${disease.name}:</strong></p>
          <p>${disease.comorbidities}</p>
        </div>
      </div>
    ` : ''}
    <div class="results-disclaimer">
      <i class="fas fa-shield-alt"></i>
      <div>
        <h5>Medical Disclaimer</h5>
        <p>This analysis is for educational purposes only and should not replace professional medical advice. Please consult with a qualified healthcare provider for proper diagnosis and treatment.</p>
      </div>
    </div>
    <div class="results-actions">
      <button class="action-btn primary" onclick="window.print()">
        <i class="fas fa-print"></i> Print Results
      </button>
      <button class="action-btn secondary" onclick="document.getElementById('resetBtn')?.click()">
        <i class="fas fa-redo"></i> New Analysis
      </button>
    </div>
  `;
  resultsContent.style.display = 'block';
  (resultsContent as HTMLElement).style.animation = 'slideInRight 0.5s ease-out';
  resultsContent.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
}

export function setupDetectorFunctionality(): void {
  const categorySelect = document.getElementById('conditionCategory') as HTMLSelectElement | null;
  const diseaseSelect = document.getElementById('specificDisease') as HTMLSelectElement | null;
  const ageSelect = document.getElementById('ageGroup') as HTMLSelectElement | null;
  const severitySelect = document.getElementById('severityLevel') as HTMLSelectElement | null;
  const analyzeBtn = document.getElementById('analyzeBtn');
  const resetBtn = document.getElementById('resetBtn');
  const resultsEmpty = document.getElementById('resultsEmpty');
  const resultsContent = document.getElementById('resultsContent');
  const displayNames = getCategoryDisplayNames();
  const diseasesByCat = getDiseasesByCategory();

  if (categorySelect) {
    const categories = Object.keys(displayNames);
    categories.forEach((catKey) => {
      const option = document.createElement('option');
      option.value = catKey;
      option.textContent = displayNames[catKey];
      categorySelect.appendChild(option);
    });

    categorySelect.addEventListener('change', () => {
      const selectedCategory = categorySelect.value;
      if (diseaseSelect) {
        diseaseSelect.innerHTML = '<option value="">Select disease...</option>';
        if (selectedCategory && diseasesByCat[selectedCategory]) {
          diseaseSelect.disabled = false;
          diseasesByCat[selectedCategory].forEach((disease) => {
            const opt = document.createElement('option');
            opt.value = disease;
            opt.textContent = disease;
            diseaseSelect.appendChild(opt);
          });
        } else {
          diseaseSelect.disabled = true;
          diseaseSelect.innerHTML = '<option value="">First select a category...</option>';
        }
      }
    });
  }

  /* Comorbidity selection is driven by React (DetectorForm state); script only reads .comorbidity-btn.active on Analyze */

  if (analyzeBtn) {
    analyzeBtn.addEventListener('click', () => {
      const category = categorySelect?.value;
      const disease = diseaseSelect?.value;
      const age = ageSelect?.value;
      const severity = severitySelect?.value;
      const detectorEl = document.getElementById('symptom-detector');
      const activeButtons = detectorEl ? detectorEl.querySelectorAll('.comorbidity-btn.active') : [];
      const selectedComorbidities = Array.from(activeButtons)
        .map((btn) => btn.getAttribute('data-value'))
        .filter((v): v is string => v != null && v !== 'none');

      if (!category) {
        alert('Please select a condition category');
        return;
      }
      if (!disease) {
        alert('Please select a specific disease/condition');
        return;
      }
      if (!age) {
        alert('Please select your age group');
        return;
      }
      if (!severity) {
        alert('Please select symptom severity level');
        return;
      }

      const diseaseData = findDiseaseInDatabase(disease, category);
      if (diseaseData) {
        displayDetectorResults(diseaseData, category, age, severity, selectedComorbidities);
      } else {
        alert('Disease information not found in database');
      }
    });
  }

  if (resetBtn) {
    resetBtn.addEventListener('click', () => {
      if (categorySelect) categorySelect.value = '';
      if (diseaseSelect) {
        diseaseSelect.value = '';
        diseaseSelect.disabled = true;
        diseaseSelect.innerHTML = '<option value="">First select a category...</option>';
      }
      if (ageSelect) ageSelect.value = '';
      if (severitySelect) severitySelect.value = '';
      if (typeof window !== 'undefined') {
        window.dispatchEvent(new CustomEvent('symptom-checker-reset-comorbidities'));
      }
      if (resultsEmpty) (resultsEmpty as HTMLElement).style.display = 'block';
      if (resultsContent) (resultsContent as HTMLElement).style.display = 'none';
    });
  }
}

/**
 * Initialize the symptom checker application.
 * Call with config when you have diseaseDatabase, categoryFilters, categoryDisplayNames, diseasesByCategory.
 * If no config is provided, reads from (window as any).diseaseDatabase etc. (for static HTML).
 */
export function initSymptomCheckerApp(config?: SymptomCheckerAppConfig): void {
  const win = typeof window !== 'undefined' ? (window as unknown as Record<string, unknown>) : undefined;

  if (config) {
    diseaseDatabaseRef = config.diseaseDatabase;
    categoryFiltersRef = config.categoryFilters;
    categoryDisplayNamesRef = config.categoryDisplayNames;
    diseasesByCategoryRef = config.diseasesByCategory;
  } else if (win) {
    diseaseDatabaseRef = (win.diseaseDatabase as DiseaseDatabase) ?? {};
    categoryFiltersRef = (win.categoryFilters as CategoryFilters) ?? ({} as CategoryFilters);
    categoryDisplayNamesRef = (win.categoryDisplayNames as CategoryDisplayNames) ?? {};
    diseasesByCategoryRef = (win.diseasesByCategory as DiseasesByCategory) ?? {};
  }

  renderCategories('all');
  setupSearchFunctionality();
  setupDetectorFunctionality();
  setupModalFunctionality();
  setupCategoryPillsFiltering();
}

if (typeof document !== 'undefined') {
  document.addEventListener('DOMContentLoaded', () => {
    initSymptomCheckerApp();
  });
}
