/* scripts.js
   Mobile navigation toggle, hamburger animation, simple form handling, and small UI helpers.
   Save as js/scripts.js
*/

document.addEventListener('DOMContentLoaded', function () {
  // Toggle navigation for multiple toggles across pages
  const toggles = document.querySelectorAll('.nav-toggle');
  toggles.forEach(toggle => {
    const navId = toggle.getAttribute('aria-controls');
    const nav = document.getElementById(navId);
    toggle.addEventListener('click', () => {
      const expanded = toggle.getAttribute('aria-expanded') === 'true';
      toggle.setAttribute('aria-expanded', String(!expanded));
      if (nav) {
        const isHidden = nav.getAttribute('aria-hidden') === 'true';
        nav.setAttribute('aria-hidden', String(!isHidden));
      }
      // Animate hamburger to X
      toggle.classList.toggle('open');
      animateHamburger(toggle);
    });
  });

  // Hamburger animation function
  function animateHamburger(button) {
    const top = button.querySelector('.bar-top');
    const mid = button.querySelector('.bar-mid');
    const bot = button.querySelector('.bar-bot');
    if (!top || !mid || !bot) return;

    if (button.classList.contains('open')) {
      top.style.transform = 'translateY(9px) rotate(45deg)';
      mid.style.opacity = '0';
      bot.style.transform = 'translateY(-9px) rotate(-45deg)';
    } else {
      top.style.transform = '';
      mid.style.opacity = '';
      bot.style.transform = '';
    }
  }

  // Close nav when clicking outside on mobile
  document.addEventListener('click', (e) => {
    const openToggle = document.querySelector('.nav-toggle.open');
    if (!openToggle) return;
    const navId = openToggle.getAttribute('aria-controls');
    const nav = document.getElementById(navId);
    const withinNav = nav && nav.contains(e.target);
    const withinToggle = openToggle.contains(e.target);
    if (!withinNav && !withinToggle) {
      openToggle.click();
    }
  });

  // Set current year in footers
  const year = new Date().getFullYear();
  const yearEls = document.querySelectorAll('#year, #year-2, #year-3, #year-4');
  yearEls.forEach(el => el.textContent = year);

  // Simple contact form handling (no backend)
  const contactForm = document.getElementById('contactForm');
  if (contactForm) {
    contactForm.addEventListener('submit', function (e) {
      e.preventDefault();
      const status = document.getElementById('formStatus');
      status.textContent = 'Sending message...';
      // Simulate network delay
      setTimeout(() => {
        status.textContent = 'Thanks! Your message has been received. We will reply within 24 hours.';
        contactForm.reset();
      }, 900);
    });
  }

  // Accessibility: close nav with Escape
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      const openToggle = document.querySelector('.nav-toggle.open');
      if (openToggle) openToggle.click();
    }
  });
});
