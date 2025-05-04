document.addEventListener("DOMContentLoaded", function() {
    // Inizializziamo l'osservatore
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          // Quando l'elemento entra nel viewport, aggiungiamo la classe 'visible'
          entry.target.classList.add("visible");
        }
      });
    }, {
      threshold: 0.5  // L'animazione si attiva quando il 50% dell'elemento è visibile
    });
  
    // Selezioniamo tutti gli elementi con la classe 'animated-item'
    const items = document.querySelectorAll('.animated-item');
    items.forEach(item => {
      observer.observe(item);  // Osserviamo ogni elemento
    });
  });
  