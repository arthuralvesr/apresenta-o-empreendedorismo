const slides = [...document.querySelectorAll('.slide')];
let current = 0;
function show(index) {
  current = (index + slides.length) % slides.length;
  slides.forEach((slide, i) => slide.classList.toggle('active', i === current));
}
document.addEventListener('keydown', event => {
  if (['ArrowRight', ' ', 'PageDown'].includes(event.key)) { event.preventDefault(); show(current + 1); }
  if (['ArrowLeft', 'PageUp'].includes(event.key)) { event.preventDefault(); show(current - 1); }
  if (event.key.toLowerCase() === 'f') document.documentElement.requestFullscreen?.();
  if (event.key === 'Home') show(0);
  if (event.key === 'End') show(slides.length - 1);
});
let startX = 0;
document.addEventListener('touchstart', e => startX = e.changedTouches[0].screenX, {passive:true});
document.addEventListener('touchend', e => { const delta = e.changedTouches[0].screenX - startX; if (Math.abs(delta) > 45) show(current + (delta < 0 ? 1 : -1)); }, {passive:true});
