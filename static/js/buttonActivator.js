document.addEventListener('DOMContentLoaded', function () {
  const themeButtons = document.querySelectorAll('[data-bs-theme-value]');

  themeButtons.forEach(button => {
    button.addEventListener('click', () => {
      // Clear previous active states
      themeButtons.forEach(btn => {
        btn.classList.remove('active');
        btn.setAttribute('aria-pressed', 'false');
      });

      // Set current as active
      button.classList.add('active');
      button.setAttribute('aria-pressed', 'true');

      // Set theme on <html> element
      const selectedTheme = button.getAttribute('data-bs-theme-value');
      document.documentElement.setAttribute('data-bs-theme', selectedTheme);
    });
  });
});
