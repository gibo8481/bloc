// Import global styles
import '../style.css';
// Import page-specific styles if they exist
import '../styles/about.css';

// Your page-specific JavaScript/TypeScript code here
export function setupAboutPage() {
    const teamMembers = document.querySelectorAll(".team-member");
  
    teamMembers.forEach(member => {
      member.addEventListener("click", () => {
        const name = member.getAttribute("data-name");
        alert(`You clicked on ${name}'s bio!`);
      });
    });
  }