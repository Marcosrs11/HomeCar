document.addEventListener('DOMContentLoaded', () => {
  const menuToggle = document.getElementById('mobile-menu');
  const navLinks = document.querySelector('.nav-links');
  
  // Cria overlay
  const overlay = document.createElement('div');
  overlay.classList.add('overlay');
  document.body.appendChild(overlay);

  // Abrir menu
  menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    overlay.classList.toggle('active');
  });

  // Fechar menu clicando fora
  overlay.addEventListener('click', () => {
    navLinks.classList.remove('active');
    overlay.classList.remove('active');
  });

  // Fechar menu ao clicar nos links E rolar suavemente
  document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', e => {
      e.preventDefault();

      const href = link.getAttribute('href');
      const destino = document.querySelector(href);

      if (destino) {
        // Fecha o menu com leve atraso antes do scroll
        navLinks.classList.remove('active');
        overlay.classList.remove('active');

        setTimeout(() => {
          destino.scrollIntoView({ behavior: 'smooth' });
        }, 300);
      }
    });
  });
});
