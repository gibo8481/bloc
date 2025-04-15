export function setupAboutPage() {
    const teamMembers = document.querySelectorAll(".team-member");
  
    teamMembers.forEach(member => {
      member.addEventListener("click", () => {
        const name = member.getAttribute("data-name");
        alert(`You clicked on ${name}'s bio!`);
      });
    });
  }
  