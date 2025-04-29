import './style.css'

import { loadNavbar } from "./components/navbar";
import { loadFooter } from "./components/footer";
import { setupAboutPage } from './pages/about';
import { setupModelPage } from './pages/model';
import { setupInnovationPage } from './pages/innovation';

loadNavbar();
loadFooter();

if (window.location.pathname.endsWith("model.html")) {
  setupModelPage();
}

if (window.location.pathname.endsWith("about.html")) {
  setupAboutPage();
}

document.addEventListener('DOMContentLoaded', () => {
  setupInnovationPage();
});
