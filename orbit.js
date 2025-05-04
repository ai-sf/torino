
/*
document.addEventListener("DOMContentLoaded", () => {
    const cards = document.querySelectorAll('.member-card');
    const radius = 220;
    const centerX = 300;
    const centerY = 300;
    let angleOffset = 0;
  
    function animate() {
      const total = cards.length;
      for (let i = 0; i < total; i++) {
        const angle = (2 * Math.PI / total) * i + angleOffset;
        const x = centerX + radius * Math.cos(angle);
        const y = centerY + radius * Math.sin(angle);
  
        cards[i].style.left = `${x}px`;
        cards[i].style.top = `${y}px`;
      }
  
      angleOffset += 0.001;
      requestAnimationFrame(animate);
    }
  
    animate();
  });
*/

document.addEventListener("DOMContentLoaded", () => {
    const cards = document.querySelectorAll(".member-card");
    const center = document.querySelector(".orbit-center");
  
    let angle = 0;
  
    function rotateCards() {
      const radius = 250; // Distanza dal centro
      const centerX = center.offsetLeft + center.offsetWidth / 2;
      const centerY = center.offsetTop + center.offsetHeight / 2;
  
      const total = cards.length;
      cards.forEach((card, index) => {
        const cardAngle = angle + (index * (2 * Math.PI / total));
        const x = centerX + radius * Math.cos(cardAngle) - card.offsetWidth / 2;
        const y = centerY + radius * Math.sin(cardAngle) - card.offsetHeight / 2;
  
        card.style.position = "absolute";
        card.style.left = `${x}px`;
        card.style.top = `${y}px`;
  
        // Mantieni dritte le card (senza rotazione)
        card.style.transform = "rotate(0deg)";
      });
  
      angle += 0.002; // Rotazione più lenta
      requestAnimationFrame(rotateCards);
    }
  
    rotateCards();
  });
  
