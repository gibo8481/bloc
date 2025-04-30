// Import CSS - this is correct
import './style.css'

// Fix 1: Use relative imports without "../src/"
import { loadNavbar } from "./components/navbar";
import { loadFooter } from "./components/footer";
import { setupAboutPage } from './pages/about';
import { setupModelPage } from './pages/model';
import { setupInnovationPage } from './pages/innovation';

// Fix 2: Add a function to check current page with base path awareness
function isCurrentPage(pageName: string): boolean {
  const path = window.location.pathname;
  const baseUrl = import.meta.env.BASE_URL || '/bloc/';
  
  // Check if path ends with pageName or baseUrl + pageName
  return path.endsWith(pageName) || 
         path.endsWith(`${baseUrl}${pageName}`) || 
         path === `${baseUrl}${pageName}`;
}

// Load components that should be on every page
loadNavbar();
loadFooter();

// Fix 3: Update page detection logic
if (isCurrentPage('model.html')) {
  setupModelPage();
}

if (isCurrentPage('about.html')) {
  setupAboutPage();
}

// Keep the innovation page setup
document.addEventListener('DOMContentLoaded', () => {
  setupInnovationPage();
});