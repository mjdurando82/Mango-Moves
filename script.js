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
    if (bottom > 115) {
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
}
const rockMotion = () => {
  let right = 0
  let leftTimer = setInterval(() => {
    if (right > 680) {
      right = 0
    } else right += 55
    rock.style.right = right + 'px'
  }, 100)
}
if (gameOver === false) {
  rockMotion()
}
if (mango.style.bottom < '85px' && rock.style.right > '545px') {
  gameOver = true
  clearInterval(leftTimer)
}
///EVENT LISTENERS

document.addEventListener('keydown', () => {
  if (event.code === 'Space') {
    jump()
  }
})
