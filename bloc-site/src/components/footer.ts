export async function loadFooter() {
  console.log("Trying to load footer...");

  const footer = document.querySelector("footer");
  if (!footer) {
    console.error("No <footer> element found");
    return;
  }

  try {
    const res = await fetch("footer.html");
    if (!res.ok) throw new Error("Failed to fetch footer");
    const html = await res.text();
    footer.innerHTML = html;
    console.log("Footer loaded successfully");
  } catch (err) {
    console.error("Footer load failed:", err);
  }
}