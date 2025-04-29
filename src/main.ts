import '../src/style.css'

import { loadNavbar } from "../src/components/navbar.ts";
import { loadFooter } from "../src/components/footer.ts";
import { setupAboutPage } from '../src/pages/about.ts';
import { setupModelPage } from '../src/pages/model.ts';
import { setupInnovationPage } from '../src/pages/innovation.ts';



loadNavbar();
loadFooter();

setupModelPage();

if (window.location.pathname.endsWith("model.html")) {
  setupModelPage();
}

if (window.location.pathname.endsWith("about.html")) {
  setupAboutPage();
}
document.addEventListener('DOMContentLoaded', () => {
  setupInnovationPage();
});

