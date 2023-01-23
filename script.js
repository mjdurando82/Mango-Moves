///GLOBAL VARIABLES
let score = document.querySelector('.score')
const mango = document.querySelector('.game-piece')
const rock = document.querySelector('.rock')
let gameOver = false
///GAME LOGIC & FUNCTIONS

let bottom = 0

const jump = () => {
  let jumpUpTimer = setInterval(() => {
    if (bottom > 125) {
      clearInterval(jumpUpTimer)
      let jumpDownTimer = setInterval(() => {
        if (bottom <= 0) {
          clearInterval(jumpDownTimer)
        }
        bottom -= 10
        mango.style.bottom = bottom + 'px'
      }, 40)
    }
    bottom += 30
    mango.style.bottom = bottom + 'px'
  }, 40)
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
