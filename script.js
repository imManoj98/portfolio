document.addEventListener('DOMContentLoaded', () => {
  const screens = {
    landing: document.getElementById('screen-landing'),
    works: document.getElementById('screen-works'),
    about: document.getElementById('screen-about'),
    contact: document.getElementById('screen-contact')
  };

  const backBtn = document.getElementById('back-btn');
  const navButtons = document.querySelectorAll('[data-target]');

  function showScreen(screenKey, updateHash = true) {
    const validKey = screens[screenKey] ? screenKey : 'landing';

    Object.keys(screens).forEach((key) => {
      if (key === validKey) {
        screens[key].classList.add('active');
      } else {
        screens[key].classList.remove('active');
      }
    });

    if (validKey === 'landing') {
      backBtn.classList.remove('visible');
      if (updateHash && window.location.hash) {
        history.pushState('', document.title, window.location.pathname + window.location.search);
      }
    } else {
      backBtn.classList.add('visible');
      if (updateHash && window.location.hash !== `#${validKey}`) {
        history.pushState(null, '', `#${validKey}`);
      }
    }
  }

  // Handle navigation button clicks
  navButtons.forEach((btn) => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const target = btn.getAttribute('data-target');
      showScreen(target, true);
    });
  });

  // Handle Back button click
  backBtn.addEventListener('click', () => {
    showScreen('landing', true);
  });

  // Support browser back/forward and direct hash links (#works, #about, #contact)
  function handleHashChange() {
    const hash = window.location.hash.replace('#', '').toLowerCase();
    if (hash && screens[hash]) {
      showScreen(hash, false);
    } else {
      showScreen('landing', false);
    }
  }

  window.addEventListener('popstate', handleHashChange);
  handleHashChange();

  // Handle contact form submission via mailto fallback (or Formspree if configured)
  const emailForm = document.getElementById('email-form');
  const formSuccess = document.getElementById('form-success');

  if (emailForm) {
    emailForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const name = document.getElementById('name-2').value.trim();
      const email = document.getElementById('email-2').value.trim();
      const message = document.getElementById('Message-2').value.trim();

      const subject = encodeURIComponent(`Portfolio Inquiry from ${name}`);
      const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`);
      window.location.href = `mailto:manojsalunke98@gmail.com?subject=${subject}&body=${body}`;

      emailForm.hidden = true;
      formSuccess.hidden = false;
    });
  }
});
