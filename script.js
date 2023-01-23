///GLOBAL VARIABLES
let score = document.querySelector('.score')
const mango = document.querySelector('.game-piece')
const rock = document.querySelector('.rock')
let gameOver = false
///GAME LOGIC & FUNCTIONS

let bottom = 0

const jump = () => {
  bottom += 40
  mango.style.bottom = bottom + 'px'

  console.log('jump')
}

const motion = () => {}

// const endGame = () => {
//   if(rock pos === mango pos){
//     gameOver = true
//   }
// }

///EVENT LISTENERS

document.addEventListener('keydown', () => {
  if (event.code === 'Space') {
    jump()
  }
})
