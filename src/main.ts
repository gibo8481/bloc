import '../src/style.css'

import { renderNavbar } from "../src/components/navbar.ts";
import { renderFooter } from "../src/components/footer.ts";
// import { setupAboutPage } from '../src/pages/about.ts';// Harri this seems to be deprecated :)
import { setupModelPage } from '../src/pages/model.ts';
import { setupInnovationPage } from '../src/pages/innovation.ts';

// inject reusable header + footer on every page that includes main.ts // which should be all of them 
const headerMount = document.getElementById('navbar');
const footerMount = document.getElementById('footer');

if (headerMount) headerMount.appendChild(renderNavbar());
if (footerMount) footerMount.appendChild(renderFooter());



setupModelPage();

if (window.location.pathname.endsWith("model.html")) {
  setupModelPage();
}

if (window.location.pathname.endsWith("about.html")) {
  // setupAboutPage(); Harri this seems to be deprecated :)
}

//why ? is this running on every page ? 
document.addEventListener('DOMContentLoaded', () => {
  setupInnovationPage();
});

