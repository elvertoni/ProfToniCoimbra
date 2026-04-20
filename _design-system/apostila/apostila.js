(function () {
  var root = document.documentElement;
  var btn = document.getElementById('theme-toggle');
  var label = document.getElementById('theme-label');
  var year = document.getElementById('year');
  if (year) year.textContent = new Date().getFullYear();

  var stored = null;
  try { stored = localStorage.getItem('apostila-theme'); } catch (e) {}
  var initial = stored || root.getAttribute('data-theme') || 'dark';
  root.setAttribute('data-theme', initial);
  syncLabel();

  if (btn) {
    btn.addEventListener('click', function () {
      var next = root.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
      root.setAttribute('data-theme', next);
      try { localStorage.setItem('apostila-theme', next); } catch (e) {}
      syncLabel();
    });
  }

  function syncLabel() {
    if (!label) return;
    label.textContent = root.getAttribute('data-theme') === 'dark' ? 'Tema claro' : 'Tema escuro';
  }
})();
