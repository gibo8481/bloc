/* ------------------------------------------------------------------ */
/*  src/pages/innovation.ts                                           */
/* ------------------------------------------------------------------ */

/* Your global + page-specific styles */
import '../style.css';
import '../styles/innovation.css';

/* St Page Flip core (JS only, no CSS import here) */
import { PageFlip } from 'page-flip';

/**
 * Builds the Innovation Guide flip-book
 * Called once from about.html via a <script type="module"> entry.
 */
export function setupInnovationPage(): void {
  /* ——— 1. find the container ——— */
  const flipRoot = document.getElementById('flipbook');
  if (!flipRoot) {
    console.error('No element with id="flipbook" found.');
    return;
  }

  /* ——— 2. helper to append a page ——— */
  const addPage = (src: string, alt: string): void => {
    const page = document.createElement('div');
    page.className = 'page';
    page.innerHTML = `<img src="${src}" alt="${alt}" />`;
    flipRoot.appendChild(page);
  };

  /* ——— 3. populate all 58 pages ——— */
  addPage('./img/innovation-pages/01.jpg', 'Front cover');
  for (let i = 2; i <= 57; i++) {
    const num = i.toString().padStart(2, '0');
    addPage(`./img/innovation-pages/${num}.jpg`, `Page ${i}`);
  }
  addPage('./img/innovation-pages/58.jpg', 'Back cover');

  /* ——— 4. responsive size helper ——— */
  const baseSize = () => {
    if (window.innerWidth <= 768) {
      const w = Math.min(window.innerWidth * 0.9, 528);
      return { width: w, height: (w * 816) / 528 };
    }
    return { width: 528, height: 816 };
  };
  const { width, height } = baseSize(); 
  /* ——— 5. initialise PageFlip ——— */
  const pageFlip = new PageFlip(flipRoot, {
    width,
    height,
    size: 'stretch' as any,        // ← cast to bypass TS enum check
    showCover: true,
    mobileScrollSupport: false,
    maxShadowOpacity: 0.5,
  });

  pageFlip.loadFromHTML(flipRoot.querySelectorAll('.page'));

  /* ——— 6. keep it responsive ——— */
  window.addEventListener('resize', () => {
    pageFlip.update();
  });
}
