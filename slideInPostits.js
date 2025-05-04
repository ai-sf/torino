document.addEventListener("DOMContentLoaded", () => {
    const slides = document.querySelectorAll(".animated-slide");
  
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("show");
          }
        });
      },
      {
        threshold: 0.3,
      }
    );
  
    slides.forEach((el) => observer.observe(el));
  });
  