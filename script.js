document.addEventListener('DOMContentLoaded', () => {
  const menuToggle = document.getElementById('mobile-menu');
  const navLinks = document.querySelector('.nav-links');
  const overlay = document.createElement('div');
  overlay.classList.add('overlay');
  document.body.appendChild(overlay);

  const body = document.body;

  // --- MENU MOBILE ---
  menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    overlay.classList.toggle('active');
    body.style.overflow = navLinks.classList.contains('active') ? 'hidden' : '';
  });

  // Fecha menu clicando na área escura (overlay)
  overlay.addEventListener('click', () => {
    if (navLinks.classList.contains('active')) {
      navLinks.classList.remove('active');
      overlay.classList.remove('active');
      body.style.overflow = '';
    }
    if (modal.classList.contains('show')) {
      fecharModal();
    }
  });

  // Fecha menu e rola para a seção ao clicar em um link
  document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', e => {
      e.preventDefault();

      const href = link.getAttribute('href');
      if (!href || href === '#') return;

      const target = document.querySelector(href);

      if (target) {
        navLinks.classList.remove('active');
        overlay.classList.remove('active');
        body.style.overflow = '';

        target.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });

  // --- MODAL DE DETALHES ---
  const modal = document.getElementById('carModal');
  const modalTitle = document.getElementById('modalTitle');
  const modalDesc = document.getElementById('modalDescription');
  const modalPrice = document.getElementById('modalPrice');
  const closeBtn = document.querySelector('.close-btn');

  document.querySelectorAll('.ver-detalhes').forEach(btn => {
    btn.addEventListener('click', () => {
      const card = btn.closest('.car-card');
      const nome = card.querySelector('h3').textContent;
      const preco = card.querySelector('.preco-oferta').textContent;

      modalTitle.textContent = nome;
      modalDesc.textContent = `O ${nome} oferece desempenho excepcional, conforto e segurança. Ideal para quem busca qualidade e estilo.`;
      modalPrice.textContent = `Preço: ${preco}`;

      modal.classList.add('show');
      overlay.classList.add('active');
      body.style.overflow = 'hidden';
    });
  });

  closeBtn.addEventListener('click', fecharModal);

  function fecharModal() {
    modal.classList.remove('show');
    overlay.classList.remove('active');
    body.style.overflow = '';
  }

  // --- VOLTAR PARA O TOPO AO ATUALIZAR ---
  window.history.scrollRestoration = 'manual';
  window.scrollTo(0, 0);
});
