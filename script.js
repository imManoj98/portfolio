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

  // Support browser back/forward and direct hash links
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

  // Handle contact form submission via Formspree
  const emailForm = document.getElementById('email-form');
  const formSuccess = document.getElementById('form-success');
  const formError = document.getElementById('form-error');

  if (emailForm) {
    const submitBtn = emailForm.querySelector('button[type="submit"]');
    
    emailForm.addEventListener('submit', async (e) => {
      e.preventDefault();
      
      const originalBtnText = submitBtn.textContent;
      submitBtn.textContent = 'Sending...';
      submitBtn.disabled = true;
      if (formError) formError.hidden = true;

      const formData = new FormData(emailForm);

      try {
        const response = await fetch('https://formspree.io/f/mjywbojz', {
          method: 'POST',
          body: formData,
          headers: {
            'Accept': 'application/json'
          }
        });

        if (response.ok) {
          emailForm.hidden = true;
          if (formSuccess) formSuccess.hidden = false;
          emailForm.reset();
        } else {
          if (formError) formError.hidden = false;
        }
      } catch (error) {
        if (formError) formError.hidden = false;
      } finally {
        submitBtn.textContent = originalBtnText;
        submitBtn.disabled = false;
      }
    });
  }
});
