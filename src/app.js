console.log('Hello world');

function qs(selector) {
  return document.querySelector(selector);
}

const plant = qs('#plant');
const leftEye = qs('#left-eye');
const leftCheek = qs('#left-cheek');

qs('.button-wink').addEventListener('click', () => {
  wink();
  setTimeout(wink, 300);
});

function wink() {
  plant.classList.toggle('rotate');
  leftEye.classList.toggle('wink');
  leftCheek.classList.toggle('wink');
}
