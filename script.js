/*document.querySelectorAll('.point').forEach(point => {
  point.addEventListener('click', (e) => {
    e.stopPropagation(); // évite la fermeture instantanée

    // Masquer toutes les autres bulles
    document.querySelectorAll('.info-bubble').forEach(b => b.style.display = 'none');

    // Afficher la bulle du bloc cliqué
    const entry = point.closest('.entry');
    const bubble = entry.querySelector('.info-bubble');
    bubble.innerHTML = point.dataset.info;
    bubble.style.display = 'block';
  });
});

// Fermer la bulle si clic en dehors
document.addEventListener('click', () => {
  document.querySelectorAll('.info-bubble').forEach(b => b.style.display = 'none');
});

//soft-skills
document.querySelectorAll('.soft-trigger').forEach(trigger => {
  trigger.addEventListener('click', (e) => {
    e.stopPropagation(); // évite fermeture immédiate

    // Fermer toutes les autres bulles soft
    document.querySelectorAll('.soft-info-bubble').forEach(b => b.style.display = 'none');

    const badge = trigger.closest('.badge');
    const bubble = badge.querySelector('.soft-info-bubble');
    bubble.innerHTML = badge.dataset.info;
    bubble.style.display = 'block';
  });
});

document.addEventListener('click', (e) => {
  if (!e.target.closest('.badge')) {
    document.querySelectorAll('.soft-info-bubble').forEach(b => b.style.display = 'none');
  }
});*/