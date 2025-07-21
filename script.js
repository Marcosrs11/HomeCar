docdocument.addEventListener('DOMContentLoaded', () => {
  const menuToggle = document.getElementById('mobile-menu');
  const navLinks = document.querySelector('.nav-links');
  const body = document.body;

  // Criar overlay para menu e modal
  const overlay = document.createElement('div');
  overlay.classList.add('overlay');
  document.body.appendChild(overlay);

  // --- MENU MOBILE ---
  function toggleMenu() {
    const isActive = navLinks.classList.toggle('active');
    overlay.classList.toggle('active', isActive);
    body.style.overflow = isActive ? 'hidden' : '';
  }

  menuToggle.addEventListener('click', toggleMenu);

  overlay.addEventListener('click', () => {
    // Fecha menu e modal se abertos
    if (navLinks.classList.contains('active')) {
      navLinks.classList.remove('active');
      overlay.classList.remove('active');
      body.style.overflow = '';
    }
    if (modal.classList.contains('show')) {
      fecharModal();
    }
  });

  // Fecha menu ao clicar em link e navega suavemente
  document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', e => {
      e.preventDefault();
      const href = link.getAttribute('href');
      const target = document.querySelector(href);

      navLinks.classList.remove('active');
      overlay.classList.remove('active');
      body.style.overflow = '';

      // Delay para animação de fechamento do menu antes do scroll
      setTimeout(() => {
        if (target) {
          target.scrollIntoView({ behavior: 'smooth' });
        }
      }, 300);
    });
  });

  // --- MODAL DE DETALHES ---
  const modal = document.getElementById('carModal');
  const modalTitle = document.getElementById('modalTitle');
  const modalDesc = document.getElementById('modalDescription');
  const modalPrice = document.getElementById('modalPrice');
  const closeBtn = document.querySelector('.close-btn');

  function abrirModal(card) {
    const nome = card.querySelector('h3').textContent;
    const preco = card.querySelector('.preco-oferta').textContent;

    modalTitle.textContent = nome;
    modalDesc.textContent = `O ${nome} oferece desempenho excepcional, conforto e segurança. Ideal para quem busca qualidade e estilo.`;
    modalPrice.textContent = `Preço: ${preco}`;

    modal.classList.add('show');
    overlay.classList.add('active');
    body.style.overflow = 'hidden';
  }

  function fecharModal() {
    modal.classList.remove('show');
    overlay.classList.remove('active');
    body.style.overflow = '';
  }

  document.querySelectorAll('.ver-detalhes').forEach(btn => {
    btn.addEventListener('click', () => {
      const card = btn.closest('.car-card');
      abrirModal(card);
    });
  });

  closeBtn.addEventListener('click', fecharModal);

  // --- GARANTIR QUE AO RECARREGAR FIQUE NO TOPO ---
  window.history.scrollRestoration = 'manual';
  window.scrollTo(0, 0);
});
