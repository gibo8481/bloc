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
  } catch (err) {
    console.error("Navbar load failed:", err);
  }
}
