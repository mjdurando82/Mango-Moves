const button = document.querySelector('button')
const home = document.querySelector('.main-menu')

button.addEventListener('click', () => {
  window.location.href = 'game.html'
})

home.addEventListener('click', () => {
  window.location.href = 'index.html'
})
