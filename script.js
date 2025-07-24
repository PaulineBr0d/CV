/* ================= BULLES D'INFO (CONTAINERS) ================= */
function toggleInfoBubble(entry) {
  const bubbles = document.querySelectorAll('.info-bubble');
  
  bubbles.forEach(b => {
    b.style.display = 'none';
  });

  const bubble = entry.querySelector('.info-bubble');
  bubble.style.display = 'block';
}

document.addEventListener('click', function(e) {
  const clickedInsideEntry = e.target.closest('.entry');
  if (!clickedInsideEntry) {
    document.querySelectorAll('.info-bubble').forEach(b => b.style.display = 'none');
  }
});
/* ================= BULLES D'INFO (SKILLS) ================= */


function toggleSkillBubble(clickedElement) {
  const softBubbles = document.querySelectorAll('.soft-info-bubble');
  const hardContents = document.querySelectorAll('.hard-content');

  // Fermer toutes les bulles
  softBubbles.forEach(b => b.style.display = 'none');
  hardContents.forEach(c => c.style.display = 'none');

  // Trouver si c'est soft ou hard
  const softBubble = clickedElement.querySelector('.soft-info-bubble');
  if (softBubble) {
    softBubble.style.display = 'block';
    return;
  }

  const nextHard = clickedElement.nextElementSibling;
  if (nextHard && nextHard.classList.contains('hard-content')) {
    nextHard.style.display = 'block';
  }
}

document.addEventListener('click', function (e) {
  if (!e.target.closest('.badge') && !e.target.closest('.hard-title')) {
    document.querySelectorAll('.soft-info-bubble, .hard-content').forEach(el => {
      el.style.display = 'none';
    });
  }
});

function showAllSoftSkills() {
  document.querySelectorAll('.soft-info-bubble').forEach(bubble => {
    bubble.classList.add('visible');
  });
}

function showAllHardSkills() {
  document.querySelectorAll('.hard-content').forEach(content => {
    content.classList.add('visible');
  });
}


document.addEventListener('click', function (e) {
  const isInsideHard = e.target.closest('.hard-title');
  const isInsideSoft = e.target.closest('.badge');
  const isRevealTitle = e.target.closest('.reveal-hard, .reveal-soft');

  if (!isInsideHard && !isInsideSoft && !isRevealTitle) {
    document.querySelectorAll('.soft-info-bubble, .hard-content').forEach(el => {
      el.classList.remove('visible');
    });
  }
});