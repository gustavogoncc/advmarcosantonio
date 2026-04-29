import { renderHeader } from './header.js';
import { renderHero } from './hero.js';
import { renderAreas } from './areas.js';
import { renderSobre } from './sobre.js';
import { renderDiferenciais } from './diferenciais.js';
import { renderCta } from './cta.js';
import { renderFaq } from './faq.js';
import { renderFooter } from './footer.js';

document.addEventListener("DOMContentLoaded", () => {
  renderHeader();
  renderHero();
  renderAreas();
  renderSobre();
  renderDiferenciais();
  renderCta();
  renderFaq();
  renderFooter();
});