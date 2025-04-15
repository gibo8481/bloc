export async function loadNavbar() {
    console.log("Trying to load navbar..."); 
  
    const header = document.getElementById("navbar");
    if (!header) {
      console.error("No #navbar element found");
      return;
    }
  
    try {
      const res = await fetch("navbar.html");
      if (!res.ok) throw new Error("Failed to fetch navbar");
      const html = await res.text();
      header.innerHTML = html;
      console.log("Navbar loaded successfully"); 
    } catch (err) {
      console.error("Navbar load failed:", err);
    }
  }
  