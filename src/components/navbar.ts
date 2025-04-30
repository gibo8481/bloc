export function renderNavbar(): HTMLElement {
  console.log('Rendering navbar...');
  const nav = document.createElement('nav');
  nav.className = 'navbar';

  nav.innerHTML = `
    <nav class="nav-container">
      <a href="/index.html" class="brand-logo">bloc</a>

      <div class="hamburger" id="hamburger">
        <span></span>
        <span></span>
        <span></span>
      </div>

      <div class="nav-links" id="navLinks">
        <a href="/about.html" class="nav-link">ABOUT</a>
        <a href="/projects.html" class="nav-link">PROJECTS</a>
        <a href="/innovation-guide.html" class="nav-link">INNOVATION GUIDE</a>
      </div>
    </nav>

  `;

  return nav;
}
