///GLOBAL VARIABLES
let score = 0
const mango = document.querySelector('.game-piece')
const rock = document.querySelector('.rock')
let playing = true
///GAME LOGIC/// FUNCTIONS

const jump = () => {
  console.log('jump')
}
const motion = () => {}

///EVENT LISTENERS

document.addEventListener('keyup', () => {
  if (event.code === 'Space') {
    jump()
    motion()
  }
})
