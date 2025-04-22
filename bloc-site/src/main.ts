import './style.css'

import { loadNavbar } from "./components/navbar.ts";
import { loadFooter } from "./components/footer.ts";
import { setupAboutPage } from './pages/about';

loadNavbar();
loadFooter();


if (window.location.pathname.endsWith("about.html")) {
  setupAboutPage();
}

