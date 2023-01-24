///GLOBAL VARIABLES
let score = document.querySelector('.score')
const mango = document.querySelector('.game-piece')
const rock = document.querySelector('.rock')
const ball = document.querySelector('.ball')
let gameOver = false
///GAME LOGIC & FUNCTIONS

const jump = () => {
  let bottom = 0
  let jumpUpTimer = setInterval(() => {
    if (bottom > 125) {
      clearInterval(jumpUpTimer)
      let jumpDownTimer = setInterval(() => {
        if (bottom <= 0) {
          clearInterval(jumpDownTimer)
        }
        bottom -= 15
        mango.style.bottom = bottom + 'px'
      }, 40)
    }
    bottom += 40
    mango.style.bottom = bottom + 'px'
  }, 40)
}
const rockMotion = () => {
  let right = 0
  right += 675
  rock.style.right = right + 'px'
}
// const endGame = () => {
//   if(rock pos === mango pos){
//     gameOver = true
//   }
// }

///EVENT LISTENERS

document.addEventListener('keydown', () => {
  if (event.code === 'Space') {
    jump()
    rockMotion()
  }
})
