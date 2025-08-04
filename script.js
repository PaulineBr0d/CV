/* ================= BULLES D'INFO ================= */
document.addEventListener('click', function (e) {
  const isInside = e.target.closest('.reveal-pro, .reveal-learning, .cv-entry');
  if (!isInside) {
    document.querySelectorAll('.entry-details').forEach(b => b.style.display = 'none');
  }
});

function toggleInfoBubble(clickedElement, type) {
  const bubble = clickedElement.querySelector('.entry-details');
  if (!bubble) return;

  const isVisible = bubble.style.display === 'flex';

  document.querySelectorAll('.entry-details').forEach(b => {
    const parent = b.closest('.reveal-pro, .reveal-learning, .cv-entry');
    const isSameType = type === 'pro'
      ? parent.closest('.cv-section')?.id === 'pro-section'
      : parent.closest('.cv-section')?.id === 'learning-section';

    if (isSameType) b.style.display = 'none';
  });

  if (!isVisible) {
    bubble.style.display = 'flex';
  }
}

function toggleAllInfoBubbles(type) {
  const sectionId = type === 'pro' ? '#pro-section' : '#learning-section';
  const bubbles = document.querySelectorAll(`${sectionId} .entry-details`);
  const allVisible = Array.from(bubbles).every(b => b.style.display === 'flex');

  bubbles.forEach(b => b.style.display = allVisible ? 'none' : 'flex');
}

document.addEventListener('click', function (e) {
  const isInsideBadge = e.target.closest('.softskill-badge');
  const isRevealTitle = e.target.closest('.reveal-soft');

  if (!isInsideBadge && !isRevealTitle) {
    document.querySelectorAll('.softskill-badge').forEach(b => b.classList.remove('show-info'));
  }
});


function toggleSoftInfoBubble(el) {
  const badge = el.closest('.softskill-badge');
  const isActive = badge.classList.contains('show-info');

  document.querySelectorAll('.softskill-badge').forEach(b => b.classList.remove('show-info'));
 
  if (!isActive) {
    badge.classList.add('show-info');
  }
}

function toggleAllSoftInfoBubbles() {
  const badges = document.querySelectorAll('.softskill-badge');
  const allOpen = Array.from(badges).every(badge => badge.classList.contains('show-info'));

  if (allOpen) {
    badges.forEach(badge => badge.classList.remove('show-info'));
  } else {
    badges.forEach(badge => badge.classList.add('show-info'));
  }
}