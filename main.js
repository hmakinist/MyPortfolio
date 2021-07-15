const navButtons = document.querySelectorAll('.nav-wrapper > ul > li');
const anchors = document.querySelectorAll('.nav-wrapper > ul > li > a')
const sections = document.querySelectorAll('section');
const typing = document.querySelector('.typing');
const text = 'Hello. My name is Harry.';
let count = 0;

navButtons.forEach((navButton, i) => {
  navButton.addEventListener('click', () => {
    sections[i].scrollIntoView({ behavior: 'smooth' });
  });
});

const typeWriter = () => {
  if (count < text.length) {
    typing.textContent += text.charAt(count);
    count++;
    setTimeout(typeWriter, 150);
  }
}
window.onload = function () {
  typing.textContent = '';
  setTimeout(() => {
    typeWriter();
  }, 500);
}

window.addEventListener('scroll', () => {
  let current = '';
  sections.forEach(section => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;
    if (pageYOffset > (sectionTop - sectionTop / 5)) {
      current = section.getAttribute('id');
    } else if (pageYOffset < 10) {
      current = 'home';
    }
  });
  // console.log(current);
  navButtons.forEach(navButton => {
    navButton.classList.remove('active');
    if (navButton.classList.contains(current)) {
      navButton.classList.add('active');
    }
  })
});