import './style.css'

import { loadNavbar } from "./components/navbar.ts";
import { setupAboutPage } from './pages/about';

loadNavbar();


if (window.location.pathname.endsWith("about.html")) {
  setupAboutPage();
}

