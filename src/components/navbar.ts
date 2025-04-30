export async function loadNavbar() {
  console.log("Trying to load navbar...");

  const header = document.getElementById("navbar");
  if (!header) {
    console.error("No #navbar element found");
    return;
  }

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

    // Hook up hamburger toggle AFTER navbar is injected
    const hamburger = document.getElementById("hamburger");
    const navLinks = document.getElementById("navLinks");

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