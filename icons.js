// === SVG ICONS - Italian Inspired ===
// Inject icons into placeholder elements

const icons = {
  // Oven icons
  homeOvenIcon: `<svg viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="10" y="20" width="60" height="50" rx="6" stroke="#c75d3a" stroke-width="2.5" fill="none"/>
    <rect x="16" y="35" width="48" height="28" rx="3" stroke="#c75d3a" stroke-width="2" fill="none"/>
    <circle cx="25" cy="27" r="3.5" fill="#c75d3a"/>
    <circle cx="40" cy="27" r="3.5" fill="#d4a853"/>
    <circle cx="55" cy="27" r="3.5" fill="#7a8c5a"/>
    <line x1="20" y1="48" x2="60" y2="48" stroke="#e07b5a" stroke-width="1.5" stroke-dasharray="3 3"/>
    <path d="M28 56 L40 44 L52 56" stroke="#d4a853" stroke-width="2.5" fill="none" stroke-linecap="round"/>
  </svg>`,
  
  outdoorOvenIcon: `<svg viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
    <ellipse cx="40" cy="58" rx="30" ry="12" stroke="#c75d3a" stroke-width="2.5" fill="none"/>
    <path d="M10 58 Q10 24 40 18 Q70 24 70 58" stroke="#c75d3a" stroke-width="2.5" fill="none"/>
    <ellipse cx="40" cy="50" rx="18" ry="7" stroke="#e07b5a" stroke-width="2" fill="none"/>
    <path d="M30 40 Q35 32 40 40 Q45 32 50 40" stroke="#d4a853" stroke-width="2.5" fill="none" stroke-linecap="round"/>
    <path d="M34 44 Q37 38 40 44 Q43 38 46 44" stroke="#d4a853" stroke-width="2" fill="none" stroke-linecap="round"/>
  </svg>`,

  // Tool icons
  peelIcon: `<svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="6" y="26" width="22" height="16" rx="3" stroke="#c75d3a" stroke-width="2.5"/>
    <line x1="28" y1="34" x2="44" y2="34" stroke="#c75d3a" stroke-width="3" stroke-linecap="round"/>
    <ellipse cx="17" cy="34" rx="6" ry="4" stroke="#d4a853" stroke-width="2"/>
  </svg>`,
  
  stoneIcon: `<svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="4" y="16" width="40" height="24" rx="4" stroke="#c75d3a" stroke-width="2.5"/>
    <line x1="12" y1="24" x2="36" y2="24" stroke="#e07b5a" stroke-width="1.5" stroke-dasharray="4 3"/>
    <line x1="12" y1="32" x2="36" y2="32" stroke="#e07b5a" stroke-width="1.5" stroke-dasharray="4 3"/>
  </svg>`,
  
  boardIcon: `<svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="4" y="12" width="36" height="28" rx="3" stroke="#c75d3a" stroke-width="2.5"/>
    <line x1="40" y1="24" x2="46" y2="24" stroke="#c75d3a" stroke-width="4" stroke-linecap="round"/>
    <circle cx="22" cy="26" r="8" stroke="#d4a853" stroke-width="2" stroke-dasharray="3 3"/>
  </svg>`,
  
  scaleIcon: `<svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="6" y="18" width="36" height="22" rx="4" stroke="#c75d3a" stroke-width="2.5"/>
    <rect x="10" y="10" width="28" height="8" rx="2" stroke="#c75d3a" stroke-width="2"/>
    <circle cx="24" cy="29" r="7" stroke="#d4a853" stroke-width="2"/>
    <text x="24" y="32" text-anchor="middle" font-size="8" fill="#d4a853" font-weight="600">g</text>
  </svg>`,

  // Ingredient icons
  flourIcon: `<svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M10 44 L14 12 L34 12 L38 44 Z" stroke="#c75d3a" stroke-width="2.5" fill="none" stroke-linejoin="round"/>
    <path d="M14 12 Q24 6 34 12" stroke="#c75d3a" stroke-width="2.5" fill="none"/>
    <text x="24" y="32" text-anchor="middle" font-size="10" font-weight="bold" fill="#d4a853">00</text>
  </svg>`,
  
  semolinaIcon: `<svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="24" cy="26" r="16" stroke="#c75d3a" stroke-width="2.5"/>
    <circle cx="17" cy="22" r="2.5" fill="#d4a853"/>
    <circle cx="27" cy="20" r="2" fill="#d4a853"/>
    <circle cx="21" cy="30" r="2.5" fill="#d4a853"/>
    <circle cx="31" cy="28" r="2" fill="#d4a853"/>
    <circle cx="28" cy="34" r="1.5" fill="#d4a853"/>
    <circle cx="15" cy="32" r="1.5" fill="#d4a853"/>
  </svg>`,
  
  yeastIcon: `<svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="10" y="14" width="28" height="28" rx="3" stroke="#c75d3a" stroke-width="2.5"/>
    <path d="M16 24 Q24 18 32 24" stroke="#d4a853" stroke-width="2" stroke-linecap="round"/>
    <path d="M16 32 Q24 26 32 32" stroke="#d4a853" stroke-width="2" stroke-linecap="round"/>
    <circle cx="24" cy="10" r="5" stroke="#7a8c5a" stroke-width="2"/>
  </svg>`,
  
  saltIcon: `<svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M14 10 L14 40 Q14 44 24 44 Q34 44 34 40 L34 10" stroke="#c75d3a" stroke-width="2.5" stroke-linecap="round"/>
    <line x1="14" y1="18" x2="34" y2="18" stroke="#c75d3a" stroke-width="2.5"/>
    <circle cx="19" cy="30" r="1.5" fill="#d4a853"/>
    <circle cx="24" cy="26" r="1.5" fill="#d4a853"/>
    <circle cx="29" cy="32" r="1.5" fill="#d4a853"/>
    <circle cx="22" cy="36" r="1.5" fill="#d4a853"/>
    <circle cx="27" cy="28" r="1.5" fill="#d4a853"/>
  </svg>`,

  // Category icons
  toolsIcon: `<svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M6 26 L10 6 L22 6 L26 26" stroke="#c75d3a" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
    <ellipse cx="16" cy="20" rx="5" ry="3" stroke="#d4a853" stroke-width="2"/>
  </svg>`,
  
  ingredientsIcon: `<svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="16" cy="16" r="12" stroke="#c75d3a" stroke-width="2.5"/>
    <circle cx="11" cy="13" r="2.5" fill="#d4a853"/>
    <circle cx="19" cy="11" r="2" fill="#7a8c5a"/>
    <circle cx="21" cy="19" r="2.5" fill="#d4a853"/>
    <circle cx="13" cy="21" r="2" fill="#7a8c5a"/>
  </svg>`
};

// Floating Italian ingredients SVGs
const floatingIngredients = [
  // Basil leaf
  `<svg class="floating-ingredient float-1" width="60" height="60" viewBox="0 0 60 60" fill="none">
    <path d="M30 10 Q45 20 40 35 Q35 50 25 45 Q15 40 20 25 Q25 10 30 10" fill="#7a8c5a" opacity="0.6"/>
    <path d="M30 15 L30 40" stroke="#5a6c4a" stroke-width="1.5"/>
  </svg>`,
  // Tomato
  `<svg class="floating-ingredient float-2" width="50" height="50" viewBox="0 0 50 50" fill="none">
    <circle cx="25" cy="28" r="18" fill="#c75d3a" opacity="0.5"/>
    <path d="M18 12 Q25 8 32 12" stroke="#7a8c5a" stroke-width="3" stroke-linecap="round"/>
  </svg>`,
  // Olive
  `<svg class="floating-ingredient float-3" width="40" height="40" viewBox="0 0 40 40" fill="none">
    <ellipse cx="20" cy="22" rx="12" ry="15" fill="#7a8c5a" opacity="0.4"/>
    <circle cx="20" cy="18" r="3" fill="#5a6c4a" opacity="0.5"/>
  </svg>`,
  // Garlic
  `<svg class="floating-ingredient float-4" width="45" height="45" viewBox="0 0 45 45" fill="none">
    <path d="M22.5 8 Q35 15 32 30 Q28 42 22.5 40 Q17 42 13 30 Q10 15 22.5 8" fill="#f5efe6" stroke="#d4a853" stroke-width="1.5" opacity="0.5"/>
  </svg>`,
  // Pepper
  `<svg class="floating-ingredient float-5" width="35" height="55" viewBox="0 0 35 55" fill="none">
    <path d="M17.5 5 Q25 10 25 25 Q25 45 17.5 50 Q10 45 10 25 Q10 10 17.5 5" fill="#c75d3a" opacity="0.4"/>
    <path d="M15 5 Q17.5 0 20 5" stroke="#7a8c5a" stroke-width="2" stroke-linecap="round"/>
  </svg>`
];

// Inject all icons
document.addEventListener('DOMContentLoaded', () => {
  // Inject icons
  Object.entries(icons).forEach(([id, svg]) => {
    const el = document.getElementById(id);
    if (el) {
      el.innerHTML = svg;
    }
  });
  
  // Add floating ingredients to body
  const container = document.createElement('div');
  container.className = 'floating-elements';
  container.innerHTML = floatingIngredients.join('');
  document.body.appendChild(container);
});
