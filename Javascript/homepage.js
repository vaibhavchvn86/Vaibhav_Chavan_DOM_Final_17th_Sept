
const menuToggle = document.querySelector(".menu-toggle");
const sidebar = document.querySelector(".sidebar");
const menuLinks = document.querySelectorAll(".menu a");

menuToggle.addEventListener("click", () => {
  sidebar.classList.toggle("active");
});

// Close the sidebar when clicking outside of it
document.body.addEventListener("click", (event) => {
  if (
    !sidebar.contains(event.target) &&
    !menuToggle.contains(event.target)
  ) {
    sidebar.classList.remove("active");
  }
});

// Close the sidebar when navigating to a selected page
menuLinks.forEach((link) => {
  link.addEventListener("click", () => {
    sidebar.classList.remove("active");
  });
});