const contactForm = document.querySelector('.contact-form');

    window.addEventListener('load', () => {
      contactForm.classList.add('active');
    });

    // JavaScript for smooth scroll effect
    function scrollToContactForm() {
      const contactFormSection = document.getElementById('contact-form');
      contactFormSection.scrollIntoView({ behavior: 'smooth' });
    }