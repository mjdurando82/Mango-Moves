///GLOBAL VARIABLES

let scoreDisplay = document.querySelector('.score-int')
let mango = document.querySelector('.game-piece')
let rock = document.querySelector('.rock')
let ball = document.querySelector('.ball')
let gameOver = false
const gameIsOver = document.querySelector('.game-over')
let score = 0
let bonus = document.querySelector('.bonus')

///GAME LOGIC & FUNCTIONS

const jump = () => {
  let bottom = 0
  let jumpUpTimer = setInterval(() => {
    if (bottom > 15) {
      clearInterval(jumpUpTimer)
      let jumpDownTimer = setInterval(() => {
        if (bottom <= 0) {
          clearInterval(jumpDownTimer)
        }
        bottom -= 2
        mango.style.bottom = bottom + 'vh'
      }, 40)
    }
    bottom += 3
    mango.style.bottom = bottom + 'vh'
  }, 40)
  mango = document.querySelector('.game-piece')
}

const rockMotion = () => {
  let right = 0
  let leftTimer = setInterval(() => {
    if (right > 99) {
      right = 0
      increaseScore()
    } else right += 5
    rock.style.right = right + 'vw'
    rock = document.querySelector('.rock')
    if (rock.style.right >= '86vw' && mango.style.bottom <= '0vh') {
      gameOver = true
      clearInterval(leftTimer)
      gameIsOver.style.opacity = 1
    }
  }, 100)
}

const ballMotion = () => {
  ball.style.opacity = 1
  let right = 0
  let ballTimer = setInterval(() => {
    if (right > 99) {
      right = 0
    } else right += 7
    ball.style.right = right + 'vw'
    ball = document.querySelector('.ball')
    if (ball.style.right >= '86vw' && mango.style.bottom >= '15vw') {
      score += 20
      bonus.innerText = 'Ball Bonus + 20!'
      setTimeout(() => {
        bonus.innerText = ' '
      }, 1000)
      clearInterval(ballTimer)
      ball.style.opacity = 0
      console.log('ball')
    }
  }, 80)
}

if (gameOver === false) {
  rockMotion()
  setTimeout(() => {
    ballMotion()
  }, 10000)
}

const increaseScore = () => {
  score += 10
  scoreDisplay.innerText = score
  console.log(score)
}

///EVENT LISTENERS

document.addEventListener('keydown', () => {
  if (event.code === 'Space') {
    jump()
  }
})
