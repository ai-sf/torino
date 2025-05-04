
// Funzione per aprire/chiudere l'accordion
document.querySelectorAll('.accordion-header').forEach(button => {
    button.addEventListener('click', function() {
      const currentBody = this.nextElementSibling;
      
      // Chiudere tutte le altre accordion body
      document.querySelectorAll('.accordion-body').forEach(body => {
        if (body !== currentBody) {
          body.style.display = 'none';
        }
      });
      
      // Mostra o nascondi l'accordion body cliccato
      if (currentBody.style.display === 'block') {
        currentBody.style.display = 'none';
      } else {
        currentBody.style.display = 'block';
      }
    });
  });





  
  
