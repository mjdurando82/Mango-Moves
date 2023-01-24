///GLOBAL VARIABLES

let scoreDisplay = document.querySelector('.score-int')
let mango = document.querySelector('.game-piece')
let rock = document.querySelector('.rock')
let ball = document.querySelector('.ball')
let gameOver = false
const gameIsOver = document.querySelector('.game-over')
let score = 0

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
    if (right > 99) {
      right = 0
    } else right += 5
    rock.style.right = right + 'vw'
    rock = document.querySelector('.rock')
    console.log(rock.style.right)
    console.log(mango.style.bottom)
    if (rock.style.right >= '90vw' && mango.style.bottom <= '0vh') {
      gameOver = true
      clearInterval(leftTimer)
      gameIsOver.style.opacity = 1
    }
  }, 100)
}
// const ballMotion = () => {
//   let right = 0
//   let ballTimer = setInterval(() => {
//     if (right > 690) {
//       right = 0
//     } else right += 75
//     ball.style.right = right + 'px'
//     ball = document.querySelector('.ball')
//     if (ball.style.right >= '550px' && mango.style.bottom >= '75px') {
//       score += 25
//       console.log('hit')
//       clearInterval(ballTimer)
//       ball.style.opacity = 0
//     }
//   }, 150)
// }
if (gameOver === false) {
  rockMotion()
  // ballMotion()
}

const increaseScore = () => {
  score += 10
  scoreDisplay.innerText = score
}

///EVENT LISTENERS

document.addEventListener('keydown', () => {
  if (event.code === 'Space') {
    jump()
    increaseScore()
  }
})
