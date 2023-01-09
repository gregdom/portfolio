let buttonMenu = document.querySelector('header nav')
let btnScrollPortfolio = document.querySelector('.btnScrollPortfolio')
let toTop = document.querySelector('.toTop')

buttonMenu.addEventListener('click', (event) => {
  event.preventDefault()
  let currentTarget = event.target

  if (currentTarget.nodeName === 'A' && currentTarget.getAttribute('id') != 'home') {
    if (menu.classList.contains('active') && modal.classList.contains('active')) {
      menu.classList.remove('active')
      modal.classList.remove('active')
    }

    let element = currentTarget.getAttribute('id')
    scrollTo(element)
  }
})

btnScrollPortfolio.addEventListener('click', (event) => {
  event.preventDefault()
  let element = 'portfolio'
  scrollTo(element)
})

toTop.addEventListener('click', () => {
  console.log('aqui')
  let element = 'container'
  scrollTo(element)
})

function scrollTo(element) {
  document.querySelector(`.${element}`).scrollIntoView({ behavior: 'smooth' })
}