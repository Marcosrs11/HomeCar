document.addEventListener('DOMContentLoaded', () => {
  const menuToggle = document.getElementById('mobile-menu');
  const navLinks = document.querySelector('.nav-links');
  const overlay = document.createElement('div');
  overlay.classList.add('overlay');
  document.body.appendChild(overlay);

  // Abre/fecha menu
  menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    overlay.classList.toggle('active');
  });

  // Fecha menu ao clicar fora
  overlay.addEventListener('click', () => {
    navLinks.classList.remove('active');
    overlay.classList.remove('active');
  });

  // Fecha menu ao clicar no link e rola suavemente para a seção
  document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', e => {
      e.preventDefault();
      const href = link.getAttribute('href');
      const target = document.querySelector(href);

      // Fecha o menu antes de rolar
      navLinks.classList.remove('active');
      overlay.classList.remove('active');

      // Pequeno atraso para garantir fechamento do menu antes do scroll
      setTimeout(() => {
        if (target) {
          target.scrollIntoView({ behavior: 'smooth' });
        }
      }, 300);
    });
  });
});
