document.addEventListener('DOMContentLoaded', () => {
  const menuToggle = document.getElementById('mobile-menu');
  const navLinks = document.querySelector('.nav-links');
  const overlay = document.createElement('div');
  overlay.classList.add('overlay');
  document.body.appendChild(overlay);

  const body = document.body;
  const modal = document.getElementById('carModal');
  const modalTitle = document.getElementById('modalTitle');
  const modalDesc = document.getElementById('modalDescription');
  const modalPrice = document.getElementById('modalPrice');
  const closeBtn = document.querySelector('.close-btn');

  // --- MENU MOBILE ---
  menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    overlay.classList.toggle('active');
    body.style.overflow = navLinks.classList.contains('active') ? 'hidden' : '';
    console.log('Menu toggled. Active?', navLinks.classList.contains('active'));
  });

  overlay.addEventListener('click', () => {
    if (navLinks.classList.contains('active')) {
      navLinks.classList.remove('active');
      overlay.classList.remove('active');
      body.style.overflow = '';
      console.log('Overlay clicked: menu closed');
    }
    if (modal.classList.contains('show')) {
      fecharModal();
      console.log('Overlay clicked: modal closed');
    }
  });

  // Fecha menu e faz scroll suave
  document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', e => {
      e.preventDefault();
      const href = link.getAttribute('href');
      console.log('Menu link clicked:', href);

      if (!href || href === '#') return;

      const target = document.querySelector(href);

      if (target) {
        navLinks.classList.remove('active');
        overlay.classList.remove('active');
        body.style.overflow = '';
        console.log('Scrolling to:', href);
        target.scrollIntoView({ behavior: 'smooth' });
      } else {
        console.warn('Target not found for href:', href);
      }
    });
  });

  // --- MODAL DE DETALHES ---
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

      console.log('Modal aberto para:', nome);
    });
  });

  closeBtn.addEventListener('click', fecharModal);

  function fecharModal() {
    modal.classList.remove('show');
    overlay.classList.remove('active');
    body.style.overflow = '';
    console.log('Modal fechado');
  }

  // --- VOLTAR PARA O TOPO AO ATUALIZAR ---
  window.history.scrollRestoration = 'manual';
  window.scrollTo(0, 0);
});
