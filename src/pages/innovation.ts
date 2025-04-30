// Import global styles
import '../style.css';
// Import page-specific styles
import '../styles/innovation.css';

import $ from 'jquery';
import 'turn.js';

export function setupInnovationPage() {
  const flipbook = document.getElementById('flipbook');
  if (!flipbook) {
    console.error('No flipbook container with id "flipbook" found');
    return;
  }

  // Create navigation controls
  // const navControls = document.createElement('div');
  // navControls.className = 'book-navigation';
  // navControls.innerHTML = `
  //   <button id="prevPage">◀ Previous</button>
  //   <button id="nextPage">Next ▶</button>
  // `;
  // flipbook.parentElement?.insertBefore(navControls, flipbook);

  // Add front cover (page 1)
  const frontCoverDiv = document.createElement('div');
  frontCoverDiv.className = 'page';
  const frontCoverImg = document.createElement('img');
  frontCoverImg.src = './img/innovation-pages/01.jpg';
  frontCoverImg.alt = 'Front Cover';
  frontCoverDiv.appendChild(frontCoverImg);
  flipbook.appendChild(frontCoverDiv);

  // Dynamically add pages 2 to 57
  for (let i = 2; i <= 57; i++) {
    const pageDiv = document.createElement('div');
    pageDiv.className = 'page';

    const img = document.createElement('img');
    // For pages 2-9, use padded numbers (02-09), for 10+ use regular numbers
    const pageNumber = i < 10 ? String(i).padStart(2, '0') : i.toString();
    img.src = `./img/innovation-pages/${pageNumber}.jpg`;
    img.alt = `Page ${i}`;

    pageDiv.appendChild(img);
    flipbook.appendChild(pageDiv);
  }

  // Add the back cover (page 58)
  const backCoverDiv = document.createElement('div');
  backCoverDiv.className = 'page';

  const backCoverImg = document.createElement('img');
  backCoverImg.src = './img/innovation-pages/58.jpg';
  backCoverImg.alt = 'Back Cover';

  backCoverDiv.appendChild(backCoverImg);
  flipbook.appendChild(backCoverDiv);

  // Function to check if device is mobile
  const isMobile = () => window.innerWidth <= 768;

  // Function to get appropriate dimensions
  const getDimensions = () => {
    if (isMobile()) {
      const width = Math.min(window.innerWidth * 0.9, 528);
      const height = (width * 816) / 528;
      return { width, height };
    }
    return { width: 528, height: 816 };
  };

  // Initialize Turn.js
  const dimensions = getDimensions();
  ($('#flipbook') as any).turn({
    width: isMobile() ? dimensions.width : 1056,
    height: dimensions.height,
    autoCenter: true,
    display: 'single',
    when: {
      turning: function (_event: Event, page: number) {
        const totalPages = ($('#flipbook') as any).turn('pages');
        const dims = getDimensions();

        // Handle single pages (front and back covers)
        if (page === 1 || page === totalPages || isMobile()) {
          ($('#flipbook') as any).turn('display', 'single');
          ($('#flipbook') as any).turn('size', dims.width, dims.height);
        } else {
          ($('#flipbook') as any).turn('display', 'double');
          ($('#flipbook') as any).turn('size', dims.width * 2, dims.height);
        }
      },
      turned: function(_event: Event, page: number) {
        const totalPages = ($('#flipbook') as any).turn('pages');
        if (page === 1 || page === totalPages) {
          ($('#flipbook') as any).turn('display', 'single');
          ($('#flipbook') as any).turn('size', 528, 816);
        }
      },
      start: function() {
        const currentPage = ($('#flipbook') as any).turn('page');
        const totalPages = ($('#flipbook') as any).turn('pages');
        const dims = getDimensions();
        
        if (currentPage === 1 || currentPage === totalPages || isMobile()) {
          ($('#flipbook') as any).turn('display', 'single');
          ($('#flipbook') as any).turn('size', dims.width, dims.height);
        }
      }
    },
  });

  // Handle window resize
  window.addEventListener('resize', () => {
    const dims = getDimensions();
    const currentPage = ($('#flipbook') as any).turn('page');
    const totalPages = ($('#flipbook') as any).turn('pages');

    if (isMobile()) {
      ($('#flipbook') as any).turn('display', 'single');
      ($('#flipbook') as any).turn('size', dims.width, dims.height);
    } else {
      if (currentPage === 1 || currentPage === totalPages) {
        ($('#flipbook') as any).turn('size', dims.width, dims.height);
      } else {
        ($('#flipbook') as any).turn('display', 'double');
        ($('#flipbook') as any).turn('size', dims.width * 2, dims.height);
      }
    }
  });

  // // Navigation event handlers
  // document.getElementById('prevPage')?.addEventListener('click', () => {
  //   const currentPage = ($('#flipbook') as any).turn('page');
  //   if (currentPage === 2) {
  //     ($('#flipbook') as any).turn('display', 'single');
  //     ($('#flipbook') as any).turn('size', 528, 816);
  //   }
  //   ($('#flipbook') as any).turn('previous');
  // });

  // document.getElementById('nextPage')?.addEventListener('click', () => {
  //   ($('#flipbook') as any).turn('next');
  // });
}