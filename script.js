// Анимация появления при прокрутке
document.querySelectorAll('[data-animate]').forEach(el => {
  const controller = new ScrollMagic.Controller();
  new ScrollMagic.Scene({
    triggerElement: el,
    triggerHook: 0.9,
    reverse: false,
  })
    .setClassToggle(el, 'visible')
    .addTo(controller);
});

// Логотип движения
gsap.from('.logo', {
  duration: 1.5,
  y: -50,
  opacity: 0,
  ease: 'bounce',
});
