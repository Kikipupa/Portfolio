const button = document.querySelector(".cv-button");
const navLinks = document.querySelectorAll(".nav-link-elem");
const hamburger = document.querySelector(".hamburger");
const links = document.querySelector(".links");

button.addEventListener("click", () => {
  button.classList.toggle("filled");
});

hamburger.addEventListener("click", () => {
  links.classList.toggle("active");
  hamburger.classList.toggle("active");
});

const sections = document.querySelectorAll("section");

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      const id = entry.target.getAttribute("id");
      const link = document.querySelector(`.nav-link-elem[href="#${id}"]`);

      if (entry.isIntersecting) {
        // Remove highlight from all links
        navLinks.forEach((l) => l.classList.remove("active"));
        // Highlight the current one
        if (link) link.classList.add("active");
      }
    });
  },
  { threshold: 0.6 } // 60% of section must be visible
);

// Observe each section
sections.forEach((section) => {
  observer.observe(section);
});
