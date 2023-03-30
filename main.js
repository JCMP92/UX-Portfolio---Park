// selector
const menu = document.querySelector('.hamburger');
const hamBtn = document.getElementsByClassName('hamBtn');

// method
function toggleMenu(event) {
  this.classList.toggle('is-active');
  document.querySelector('.menuppal').classList.toggle('is_active');
  event.preventDefault();
}

// event
menu.addEventListener('click', toggleMenu, false);

for (const btn of hamBtn) {
  btn.addEventListener('click', function onClick() {
    menu.classList.remove('is-active');
    document.querySelector('.menuppal').classList.remove('is_active');
  });
}
