import './style.css'

import { loadNavbar } from "./components/navbar.ts";
import { loadFooter } from "./components/footer.ts";
import { setupAboutPage } from './pages/about.ts';
import { setupModelPage } from './pages/model.ts';

loadNavbar();
loadFooter();

if (window.location.pathname.endsWith("model.html")) {
  setupModelPage();
}

if (window.location.pathname.endsWith("about.html")) {
  setupAboutPage();
}

