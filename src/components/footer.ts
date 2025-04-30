export function renderFooter(): HTMLElement {
  console.log('Rendering navbar...');
  const nav = document.createElement('nav');
  nav.className = 'footer';

  nav.innerHTML = `
<footer class="footer-container">
    <!-- Background patterns -->
    <img src="../img/bg1.png" alt="Background 1" class="footer-pattern pattern-1">
    <img src="../img/bg2.png" alt="Background 2" class="footer-pattern pattern-2">
    <img src="../img/bg3.png" alt="Background 3" class="footer-pattern pattern-3">
    <img src="../img/bg4.png" alt="Background 4" class="footer-pattern pattern-4">
    <img src="../img/bg5.png" alt="Background 5" class="footer-pattern pattern-5">
    <img src="../img/bg6.png" alt="Background 6" class="footer-pattern pattern-6">
    <img src="../img/bg7.png" alt="Background 7" class="footer-pattern pattern-7">
    <img src="../img/bg8.png" alt="Background 8" class="footer-pattern pattern-8">
    <img src="../img/bg9.png" alt="Background 9" class="footer-pattern pattern-9">
    <img src="../img/bg10.png" alt="Background 10" class="footer-pattern pattern-10">

<<<<<<< HEAD
    <div class="footer-content">
        <!-- Logo on the far left -->
        <a href="/bloc/index.html" class="footer-logo">bloc</a>

        <!-- Footer columns -->
        <div class="footer-columns">
            <!-- Column 1: Socials -->
            <div class="footer-column">
                <h4 class="footer-header">Socials</h4>
                <p><a href="https://www.instagram.com/blocnc/" target="_blank" class="footer-link">Instagram</a></p>
                <p><a href="https://www.linkedin.com" target="_blank" class="footer-link">LinkedIn</a></p>
                <p><a href="https://www.youtube.com" target="_blank" class="footer-link">YouTube</a></p>
            </div>

            <!-- Column 2: Pages -->
            <div class="footer-column">
                <h4 class="footer-header">Pages</h4>
                <p><a href="/about.html" class="footer-link">About</a></p>
                <p><a href="/projects.html" class="footer-link">Projects</a></p>
                <p><a href="/innovation-guide.html" class="footer-link">Innovation Guide</a></p>
                <p><a href="/our-journey.html" class="footer-link">Our Journey</a></p>
            </div>

            <!-- Column 3: Contact -->
            <div class="footer-column">
                <h4 class="footer-header">Contact</h4>
                <p>Number: 201.546.2407</p>
                <p>Email: contact@blocnc.com</p>
                <p>80302, Boulder CO</p>
            </div>
        </div>
    </div>
</footer>

  `;

  return nav;
}
=======
  try {
    // Fix path handling using the base URL
    const baseUrl = import.meta.env.BASE_URL || '/';
    const res = await fetch(baseUrl + "footer.html");
    
    if (!res.ok) {
      console.error(`Failed to fetch footer: ${res.status} ${res.statusText}`);
      throw new Error("Failed to fetch footer");
    }
    
    let html = await res.text();
    
    // Process image paths in the HTML before inserting it
    // This regex finds img tags and updates their src attributes
    html = html.replace(
      /<img\s+src=["']([^"']+)["']/gi,
      function(match, src) {
        // Skip external URLs (those that start with http:// or https://)
        if (src.startsWith('http://') || src.startsWith('https://')) {
          return match;
        }
        
        // Skip paths that already have the base URL
        if (src.startsWith(baseUrl)) {
          return match;
        }
        
        // Remove leading ./ or / from the path
        const cleanSrc = src.replace(/^\.\/|^\//, '');
        
        // Prepend the base URL
        return `<img src="${baseUrl}${cleanSrc}"`;
      }
    );
    
    footer.innerHTML = html;
    console.log("Footer loaded successfully");
    
    // Update any other links in the footer
    const links = footer.querySelectorAll('a');
    links.forEach(link => {
      const href = link.getAttribute('href');
      if (href && !href.startsWith('http') && !href.startsWith(baseUrl) && !href.startsWith('/')) {
        link.setAttribute('href', `${baseUrl}${href}`);
      }
    });
  } catch (err) {
    console.error("Footer load failed:", err);
  }
}
>>>>>>> 4880cabbeace6ac5ef774b4b395b3469475f4b96
