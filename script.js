/* ================= BULLES D'INFO ================= */
document.addEventListener('click', function (e) {
  const isInsideEntry = e.target.closest('.cv-entry');
  const isRevealPro = e.target.closest('.reveal-pro');
  const isRevealLearning = e.target.closest('.reveal-learning');

  if (!isInsideEntry && !isRevealPro && !isRevealLearning) {
    document.querySelectorAll('.entry-details').forEach(b => b.style.display = 'none');
  }
});
function toggleInfoBubble(clickedElement) {
  const detail = document.querySelectorAll('.entry-details');
  detail.forEach(b => b.style.display = 'none');
 
  const bubble = clickedElement.querySelector('.entry-details');
  bubble.style.display = 'flex';
  
}

function toggleAllInfoBubbles() {
  const bubbles = document.querySelectorAll('.entry-details');
  const allVisible = Array.from(bubbles).every(b => b.style.display === 'flex');

  if (allVisible) {
    bubbles.forEach(b => b.style.display = 'none');
  } else {
    bubbles.forEach(b => b.style.display = 'flex');
  }
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