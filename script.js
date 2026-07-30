document.addEventListener('DOMContentLoaded', () => {
  // --------------------------------------------------
  // 1. FILTER FUNCTIONALITY
  // --------------------------------------------------
  const filterButtons = document.querySelectorAll('.filter-btn');
  const artCards = document.querySelectorAll('.art-card');

  filterButtons.forEach(button => {
    button.addEventListener('click', () => {
      // 1. Remove active state from all buttons & set on clicked button
      filterButtons.forEach(btn => btn.classList.remove('active'));
      button.classList.add('active');

      // 2. Get chosen filter category
      const filterValue = button.getAttribute('data-filter');

      // 3. Show or hide art cards based on category
      artCards.forEach(card => {
        const cardCategory = card.getAttribute('data-category');

        if (filterValue === 'all' || cardCategory === filterValue) {
          card.style.display = 'flex';
        } else {
          card.style.display = 'none';
        }
      });
    });
  });

  // --------------------------------------------------
  // 2. LIGHTBOX MODAL FUNCTIONALITY
  // --------------------------------------------------
  const lightbox = document.getElementById('lightbox');
  const lightboxImg = document.getElementById('lightbox-img');
  const lightboxTitle = document.getElementById('lightbox-title');
  const lightboxMeta = document.getElementById('lightbox-meta');
  const lightboxClose = document.getElementById('lightbox-close');

  artCards.forEach(card => {
    card.addEventListener('click', () => {
      const img = card.querySelector('.card-image-wrap img');
      const title = card.querySelector('.art-title');
      const meta = card.querySelector('.pixel-meta');

      if (img) lightboxImg.src = img.src;
      if (title) lightboxTitle.textContent = title.textContent;
      if (meta) lightboxMeta.textContent = meta.textContent;

      lightbox.classList.add('active');
      lightbox.setAttribute('aria-hidden', 'false');
    });
  });

  // Close lightbox on clicking close button
  if (lightboxClose) {
    lightboxClose.addEventListener('click', closeLightbox);
  }

  // Close lightbox on clicking outside the content
  if (lightbox) {
    lightbox.addEventListener('click', (e) => {
      if (e.target === lightbox) {
        closeLightbox();
      }
    });
  }

  // Close lightbox on pressing 'Escape' key
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && lightbox && lightbox.classList.contains('active')) {
      closeLightbox();
    }
  });

  function closeLightbox() {
    if (lightbox) {
      lightbox.classList.remove('active');
      lightbox.setAttribute('aria-hidden', 'true');
    }
  }
});