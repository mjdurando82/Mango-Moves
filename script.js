///GLOBAL VARIABLES
let score = document.querySelector('.score')
let mango = document.querySelector('.game-piece')
let rock = document.querySelector('.rock')
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
  mango = document.querySelector('.game-piece')
}
const rockMotion = () => {
  let right = 0
  let leftTimer = setInterval(() => {
    if (right > 690) {
      right = 0
    } else right += 50
    rock.style.right = right + 'px'
    rock = document.querySelector('.rock')
    console.log(rock.style.right)
    console.log(mango.style.bottom)
    if (rock.style.right === '550px' && mango.style.bottom === '-10px') {
      gameOver = true
      clearInterval(leftTimer)
      console.log('game over')
    }
  }, 100)
}
if (gameOver === false) {
  rockMotion()
}
///EVENT LISTENERS

document.addEventListener('keydown', () => {
  if (event.code === 'Space') {
    jump()
  }
})
