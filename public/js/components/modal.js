const overlay = document.getElementById('modal-overlay');
const titleEl = document.getElementById('modal-title');
const descEl  = document.getElementById('modal-desc');
const metaEl  = document.getElementById('modal-meta');

export function openModal({ title, desc, meta }) {
  titleEl.textContent = title;
  descEl.textContent  = desc  || 'Aucune description disponible.';
  metaEl.textContent  = meta  || '';
  overlay.classList.add('open');
  overlay.setAttribute('aria-hidden', 'false');
  document.getElementById('modal-close').focus();
}

export function closeModal() {
  overlay.classList.remove('open');
  overlay.setAttribute('aria-hidden', 'true');
}

// Wire close button and backdrop click
document.getElementById('modal-close').addEventListener('click', closeModal);
overlay.addEventListener('click', e => { if (e.target === overlay) closeModal(); });
document.addEventListener('keydown', e => { if (e.key === 'Escape') closeModal(); });
