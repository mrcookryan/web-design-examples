
  // DYNAMIC YEAR IN FOOTER
  const yearSpan = document.getElementById('year');
  if (yearSpan) {
    yearSpan.textContent = new Date().getFullYear();
  }

  // CONTACT FORM (demo handler)
  const contactForm = document.getElementById('contactForm');
  const formStatus = document.getElementById('formStatus');

  if (contactForm && formStatus) {
    contactForm.addEventListener('submit', (event) => {
      event.preventDefault();
      const formData = new FormData(contactForm);
      const name = formData.get('name');

      formStatus.textContent =
        `Thanks${name ? `, ${name}` : ''}. This demo form doesn’t send yet—wire it up to your backend.`;
      formStatus.style.color = '#a5b4fc';

      setTimeout(() => {
        formStatus.textContent = '';
      }, 5000);
    });
  }
})();
