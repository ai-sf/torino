document.addEventListener("DOMContentLoaded", function () {
  const toggles = document.querySelectorAll(".toggle-button");

  toggles.forEach((toggle) => {
    toggle.addEventListener("click", function () {
      const content = this.nextElementSibling;
      const isOpen = content.classList.contains("open");

      // Aggiungi o rimuovi la classe 'open' per l'animazione
      content.classList.toggle("open", !isOpen);

      // Ruota la freccetta
      this.classList.toggle("open", !isOpen);
    });
  });
});

// Lightbox script
const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightbox-img");
const closeBtn = document.getElementsByClassName("close")[0];

document.querySelectorAll(".event-img img").forEach(img => {
  img.addEventListener("click", () => {
    lightbox.style.display = "block";
    lightboxImg.src = img.src;
    lightboxImg.alt = img.alt;
  });
});

closeBtn.onclick = () => {
  lightbox.style.display = "none";
};

lightbox.onclick = (e) => {
  if (e.target === lightbox) {
    lightbox.style.display = "none";
  }
};