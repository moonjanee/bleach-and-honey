document.addEventListener('DOMContentLoaded', () => {
  const modal = document.getElementById('contact-modal');
  const openBtn = document.getElementById('contact-modal-trigger');
  const closeBtn = document.getElementById('contact-modal-close');

  if (openBtn && modal) {
    openBtn.addEventListener('click', () => {
      modal.classList.add('active');
      modal.setAttribute('aria-hidden', 'false');
    });
  }

  if (closeBtn) {
    closeBtn.addEventListener('click', closeModal);
  }

  if (modal) {
    modal.addEventListener('click', (e) => {
      if (e.target === modal) {
        closeModal();
      }
    });
  }

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal && modal.classList.contains('active')) {
      closeModal();
    }
  });

  function closeModal() {
    modal.classList.remove('active');
    modal.setAttribute('aria-hidden', 'true');
  }
});