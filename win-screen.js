///GLOBAL VARIABLES

const button = document.querySelector('button')
const home = document.querySelector('.main-menu')

///EVENT LISTENERS

button.addEventListener('click', () => {
  window.location.href = 'game.html'
})

home.addEventListener('click', () => {
  window.location.href = 'index.html'
})
