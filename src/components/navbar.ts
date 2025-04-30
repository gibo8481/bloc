export function renderNavbar(): HTMLElement {
  console.log('Rendering navbar...');
  const nav = document.createElement('nav');
  nav.className = 'navbar';

  nav.innerHTML = `
    <nav class="nav-container">
      <a href="/index.html" class="brand-logo">bloc</a>

<<<<<<< HEAD
      <div class="hamburger" id="hamburger">
        <span></span>
        <span></span>
        <span></span>
      </div>
=======
  try {
    // Fix: Use base URL for GitHub Pages
    const baseUrl = import.meta.env.BASE_URL || '/bloc/';
    // Use the base URL for the fetch request
    const res = await fetch(`${baseUrl}navbar.html`);
    
    if (!res.ok) {
      console.error(`Failed to fetch navbar: ${res.status} ${res.statusText}`);
      throw new Error("Failed to fetch navbar");
    }
    
    const html = await res.text();
    header.innerHTML = html;
    console.log("Navbar loaded successfully");
>>>>>>> 4880cabbeace6ac5ef774b4b395b3469475f4b96

      <div class="nav-links" id="navLinks">
        <a href="/about.html" class="nav-link">ABOUT</a>
        <a href="/projects.html" class="nav-link">PROJECTS</a>
        <a href="/innovation-guide.html" class="nav-link">INNOVATION GUIDE</a>
      </div>
    </nav>

<<<<<<< HEAD
  `;

  return nav;
}
=======
    if (hamburger && navLinks) {
      hamburger.addEventListener("click", () => {
        hamburger.classList.toggle("active");
        navLinks.classList.toggle("active");
      });
    } else {
      console.warn("Hamburger or navLinks not found in loaded navbar");
    }
    
    // Fix: Update all links in the navbar to include the base path
    const links = header.querySelectorAll('a');
    links.forEach(link => {
      const href = link.getAttribute('href');
      if (href && !href.startsWith('http') && !href.startsWith(baseUrl) && !href.startsWith('/')) {
        link.setAttribute('href', `${baseUrl}${href}`);
      }
    });
  } catch (err) {
    console.error("Navbar load failed:", err);
  }
}
>>>>>>> 4880cabbeace6ac5ef774b4b395b3469475f4b96
