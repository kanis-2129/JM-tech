document.addEventListener('DOMContentLoaded', function () {
  const container = document.getElementById('site-nav');
  if (!container) return;

  fetch('components/nav.html')
    .then((r) => r.text())
    .then((html) => {
      container.innerHTML = html;
      // mark active link based on filename
      const links = container.querySelectorAll('.nav-links a');
      const path = location.pathname.split('/').pop() || 'index.html';
      links.forEach((a) => {
        if (a.getAttribute('href') === path) a.classList.add('active');
      });
    })
    .catch((err) => {
      console.error('Failed to load nav:', err);
    });
});
