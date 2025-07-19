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

  // Fecha menu ao clicar no link e faz scroll
  document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', e => {
      e.preventDefault();
      const targetId = link.getAttribute('href');

      // Fecha o menu com delay e depois rola
      navLinks.classList.remove('active');
      overlay.classList.remove('active');

      setTimeout(() => {
        const target = document.querySelector(targetId);
        if (target) {
          target.scrollIntoView({ behavior: 'smooth' });
        }
      }, 300); // tempo para o menu "fechar" visualmente
    });
  });
});
