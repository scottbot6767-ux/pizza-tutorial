// === SVG ICONS ===
// Inject icons into placeholder elements

const icons = {
  // Oven icons
  homeOvenIcon: `<svg viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="10" y="20" width="60" height="50" rx="4" stroke="#e85d04" stroke-width="2" fill="none"/>
    <rect x="16" y="35" width="48" height="28" rx="2" stroke="#e85d04" stroke-width="1.5" fill="none"/>
    <circle cx="25" cy="27" r="3" fill="#e85d04"/>
    <circle cx="40" cy="27" r="3" fill="#e85d04"/>
    <circle cx="55" cy="27" r="3" fill="#e85d04"/>
    <line x1="20" y1="48" x2="60" y2="48" stroke="#e85d04" stroke-width="1" stroke-dasharray="2 2"/>
    <path d="M28 55 L40 45 L52 55" stroke="#f48c06" stroke-width="2" fill="none"/>
  </svg>`,
  
  outdoorOvenIcon: `<svg viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
    <ellipse cx="40" cy="55" rx="28" ry="12" stroke="#e85d04" stroke-width="2" fill="none"/>
    <path d="M12 55 Q12 25 40 20 Q68 25 68 55" stroke="#e85d04" stroke-width="2" fill="none"/>
    <ellipse cx="40" cy="48" rx="18" ry="7" stroke="#e85d04" stroke-width="1.5" fill="none"/>
    <path d="M30 38 Q35 32 40 38 Q45 32 50 38" stroke="#f48c06" stroke-width="2" fill="none"/>
    <path d="M34 42 Q37 38 40 42 Q43 38 46 42" stroke="#f48c06" stroke-width="1.5" fill="none"/>
  </svg>`,

  // Tool icons
  peelIcon: `<svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="8" y="28" width="20" height="14" rx="2" stroke="#e85d04" stroke-width="2"/>
    <line x1="28" y1="35" x2="42" y2="35" stroke="#e85d04" stroke-width="2" stroke-linecap="round"/>
    <circle cx="18" cy="35" r="3" stroke="#f48c06" stroke-width="1.5"/>
  </svg>`,
  
  stoneIcon: `<svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="6" y="18" width="36" height="22" rx="3" stroke="#e85d04" stroke-width="2"/>
    <line x1="12" y1="24" x2="36" y2="24" stroke="#f48c06" stroke-width="1" stroke-dasharray="3 2"/>
    <line x1="12" y1="30" x2="36" y2="30" stroke="#f48c06" stroke-width="1" stroke-dasharray="3 2"/>
    <line x1="12" y1="36" x2="36" y2="36" stroke="#f48c06" stroke-width="1" stroke-dasharray="3 2"/>
  </svg>`,
  
  boardIcon: `<svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="4" y="14" width="36" height="26" rx="2" stroke="#e85d04" stroke-width="2"/>
    <line x1="40" y1="24" x2="46" y2="24" stroke="#e85d04" stroke-width="3" stroke-linecap="round"/>
    <circle cx="22" cy="27" r="8" stroke="#f48c06" stroke-width="1.5" stroke-dasharray="2 2"/>
  </svg>`,
  
  scaleIcon: `<svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="8" y="20" width="32" height="20" rx="3" stroke="#e85d04" stroke-width="2"/>
    <rect x="12" y="12" width="24" height="8" rx="1" stroke="#e85d04" stroke-width="1.5"/>
    <circle cx="24" cy="30" r="6" stroke="#f48c06" stroke-width="1.5"/>
    <text x="24" y="33" text-anchor="middle" font-size="6" fill="#f48c06">g</text>
  </svg>`,

  // Ingredient icons
  flourIcon: `<svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M10 42 L14 14 L34 14 L38 42 Z" stroke="#e85d04" stroke-width="2" fill="none"/>
    <path d="M14 14 Q24 8 34 14" stroke="#e85d04" stroke-width="2" fill="none"/>
    <text x="24" y="32" text-anchor="middle" font-size="8" font-weight="bold" fill="#f48c06">00</text>
  </svg>`,
  
  semolinaIcon: `<svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="24" cy="28" r="14" stroke="#e85d04" stroke-width="2"/>
    <circle cx="18" cy="24" r="2" fill="#f48c06"/>
    <circle cx="26" cy="22" r="1.5" fill="#f48c06"/>
    <circle cx="22" cy="30" r="2" fill="#f48c06"/>
    <circle cx="30" cy="28" r="1.5" fill="#f48c06"/>
    <circle cx="28" cy="34" r="1" fill="#f48c06"/>
    <circle cx="16" cy="32" r="1" fill="#f48c06"/>
  </svg>`,
  
  yeastIcon: `<svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="12" y="16" width="24" height="24" rx="2" stroke="#e85d04" stroke-width="2"/>
    <path d="M18 24 Q24 20 30 24" stroke="#f48c06" stroke-width="1.5"/>
    <path d="M18 30 Q24 26 30 30" stroke="#f48c06" stroke-width="1.5"/>
    <circle cx="24" cy="12" r="4" stroke="#e85d04" stroke-width="1.5"/>
  </svg>`,
  
  saltIcon: `<svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M16 12 L16 38 Q16 42 24 42 Q32 42 32 38 L32 12" stroke="#e85d04" stroke-width="2"/>
    <line x1="16" y1="20" x2="32" y2="20" stroke="#e85d04" stroke-width="2"/>
    <circle cx="20" cy="30" r="1" fill="#f48c06"/>
    <circle cx="24" cy="26" r="1" fill="#f48c06"/>
    <circle cx="28" cy="32" r="1" fill="#f48c06"/>
    <circle cx="22" cy="34" r="1" fill="#f48c06"/>
    <circle cx="26" cy="28" r="1" fill="#f48c06"/>
  </svg>`,

  // Category icons
  toolsIcon: `<svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M8 24 L12 8 L20 8 L24 24" stroke="#e85d04" stroke-width="2" stroke-linecap="round"/>
    <circle cx="16" cy="20" r="3" stroke="#f48c06" stroke-width="1.5"/>
  </svg>`,
  
  ingredientsIcon: `<svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="16" cy="16" r="10" stroke="#e85d04" stroke-width="2"/>
    <circle cx="12" cy="14" r="2" fill="#f48c06"/>
    <circle cx="18" cy="12" r="1.5" fill="#f48c06"/>
    <circle cx="20" cy="18" r="2" fill="#f48c06"/>
    <circle cx="14" cy="20" r="1.5" fill="#f48c06"/>
  </svg>`
};

// Inject all icons
document.addEventListener('DOMContentLoaded', () => {
  Object.entries(icons).forEach(([id, svg]) => {
    const el = document.getElementById(id);
    if (el) {
      el.innerHTML = svg;
    }
  });
});
