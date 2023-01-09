let modal = document.querySelector('.modal')
let header = document.querySelector('header')
let headerContent = document.querySelector('header .content')
let menu = document.querySelector('.menu')

headerContent.addEventListener('click', (e) => {
  if (e.target.nodeName === 'BUTTON' || e.target.nodeName === 'I') {
    if (e.target.classList.contains('openMenu') || e.target.classList.contains('fa-bars')) {
      if (menu.classList.contains('active') && modal.classList.contains('active')) {
        menu.classList.remove('active')
        modal.classList.remove('active')
      } else {
        menu.classList.add('active')
        modal.classList.add('active')
      }
    } else {
      menu.classList.remove('active')
      modal.classList.remove('active')
    }
  }
})

modal.addEventListener('click', () => {
  menu.classList.remove('active')
  modal.classList.remove('active')
})

window.addEventListener('resize', function () {
  if (window.innerWidth >= 768 && menu.classList.contains('active') && modal.classList.contains('active')) {
    menu.classList.remove('active')
    modal.classList.remove('active')
  }
});



// Mostra/esconde menu principal no scroll
let lastScrollTop = 0;

if (window.scrollY === 0) {
  header.classList.add('active')
}

window.addEventListener('scroll', function (e) {
  if (e.scrollY === lastScrollTop) return;

  if (this.scrollY < lastScrollTop) {
    header.classList.add('active')
  } else {
    header.classList.remove('active')
  }

  lastScrollTop = this.scrollY;

}, true)