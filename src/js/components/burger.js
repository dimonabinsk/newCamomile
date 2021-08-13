const burgerBtn = document.querySelector('.burger');

if (burgerBtn) {
  const body = document.querySelector('body');
  const nav = document.querySelector('.nav');

  function openMenu() {
    body.classList.add('site-container');
    nav.classList.add('nav--open');
    burgerBtn.classList.add('burger--active');
    setTimeout(() => {
      nav.style.opacity = '1';
    }, 100);
  }

  function closeMenu() {
    body.classList.remove('site-container');
    nav.style.opacity = '0';
    burgerBtn.classList.remove('burger--active');
    setTimeout(() => {
      nav.classList.remove('nav--open');
      nav.style = 'none';
    }, 400);
  }

  burgerBtn.addEventListener('click', () => {
    if (nav.classList.contains('nav--open')) {
      closeMenu();
    } else {
      openMenu();
    }
  });
}
