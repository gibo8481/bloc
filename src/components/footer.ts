export async function loadFooter() {
  console.log("Trying to load footer...");

  const footer = document.querySelector("footer");
  if (!footer) {
    console.error("No <footer> element found");
    return;
  }

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