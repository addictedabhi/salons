// Unisex Salon By Nidhi — theme switcher + mobile menu + lightbox
(function () {
  'use strict';

  // ---------- Theme switcher ----------
  var KEY = 'nidhi-theme';
  var DEFAULT_THEME = 'midnight';

  var THEMES = [
    { id: 'midnight', name: 'Midnight Gold', gold: '#d4af37', bg: '#0d0b09' },
    { id: 'rose', name: 'Rose Noir', gold: '#c98a86', bg: '#12100f' },
    { id: 'emerald', name: 'Emerald', gold: '#c9a24a', bg: '#0a0f0c' },
    { id: 'aubergine', name: 'Aubergine', gold: '#d0a9c4', bg: '#120c14' },
    { id: 'champagne', name: 'Champagne', gold: '#b8873b', bg: '#f5f0e8' }
  ];

  var themeBar = document.querySelector('.theme-bar');
  var pills = [];

  function styleActivePills(activeId) {
    pills.forEach(function (pill) {
      var theme = pill._theme;
      var active = theme.id === activeId;
      pill.setAttribute('aria-pressed', active ? 'true' : 'false');
      pill.style.color = active ? theme.gold : '';
      pill.style.background = active ? theme.gold + '22' : 'transparent';
      pill.style.borderColor = active ? theme.gold : 'transparent';
    });
  }

  function applyTheme(id) {
    if (!THEMES.some(function (t) { return t.id === id; })) id = DEFAULT_THEME;
    document.documentElement.dataset.theme = id;
    try { localStorage.setItem(KEY, id); } catch (e) { /* storage unavailable */ }
    styleActivePills(id);
  }

  if (themeBar) {
    var label = document.createElement('span');
    label.className = 'theme-label';
    label.textContent = 'Theme';
    themeBar.appendChild(label);

    THEMES.forEach(function (theme) {
      var pill = document.createElement('button');
      pill.type = 'button';
      pill.className = 'theme-pill';
      pill.setAttribute('aria-pressed', 'false');
      pill._theme = theme;

      var dot = document.createElement('span');
      dot.className = 'dot';
      dot.setAttribute('aria-hidden', 'true');
      dot.style.background = 'linear-gradient(135deg, ' + theme.gold + ' 0 50%, ' + theme.bg + ' 50% 100%)';
      dot.style.border = '1px solid ' + theme.gold;

      pill.appendChild(dot);
      pill.appendChild(document.createTextNode(theme.name));
      pill.addEventListener('click', function () { applyTheme(theme.id); });
      themeBar.appendChild(pill);
      pills.push(pill);
    });
  }

  var stored = null;
  try { stored = localStorage.getItem(KEY); } catch (e) { /* storage unavailable */ }
  applyTheme(stored || DEFAULT_THEME);

  // ---------- Mobile menu ----------
  var hamburger = document.querySelector('.hamburger');
  var mobileMenu = document.querySelector('.mobile-menu');

  if (hamburger && mobileMenu) {
    hamburger.addEventListener('click', function () {
      var open = mobileMenu.classList.toggle('open');
      hamburger.setAttribute('aria-expanded', open ? 'true' : 'false');
      document.body.style.overflow = open ? 'hidden' : '';
    });

    mobileMenu.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', function () {
        mobileMenu.classList.remove('open');
        hamburger.setAttribute('aria-expanded', 'false');
        document.body.style.overflow = '';
      });
    });
  }

  // ---------- Lightbox (gallery page) ----------
  var lightbox = document.querySelector('.lightbox');
  if (lightbox) {
    var lightboxImg = lightbox.querySelector('img');
    var closeBtn = lightbox.querySelector('.lightbox-close');

    document.querySelectorAll('.masonry figure').forEach(function (fig) {
      fig.addEventListener('click', function () {
        var img = fig.querySelector('img');
        lightboxImg.src = img.src;
        lightboxImg.alt = img.alt;
        lightbox.classList.add('open');
        document.body.style.overflow = 'hidden';
        closeBtn.focus();
      });
    });

    function closeLightbox() {
      lightbox.classList.remove('open');
      lightboxImg.src = '';
      document.body.style.overflow = '';
    }

    closeBtn.addEventListener('click', closeLightbox);
    lightbox.addEventListener('click', function (e) {
      if (e.target === lightbox) closeLightbox();
    });
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && lightbox.classList.contains('open')) closeLightbox();
    });
  }
})();
