///GLOBAL VARIABLES

const scoreDisplay = document.querySelector('.score-int')
let mango = document.querySelector('.game-piece')
let rock = document.querySelector('.rock')
let ball = document.querySelector('.ball')
let ballTwo = document.querySelector('.ball2')
let ballThree = document.querySelector('.ball3')
let candy = document.querySelector('.chocolate')
let gameOver = false
const gameIsOver = document.querySelector('.game-over')
let score = 0
const bonus = document.querySelector('.bonus')
const reset = document.querySelector('.reset')

///GAME LOGIC & FUNCTIONS

const jump = () => {
  let bottom = 0
  let jumpUpTimer = setInterval(() => {
    if (bottom > 16) {
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
    if (right > 99 && gameOver === false) {
      right = 0
      increaseScore()
    } else right += 6
    rock.style.right = right + 'vw'
    rock = document.querySelector('.rock')
    if (
      (rock.style.right >= '75vw' && mango.style.bottom <= '0vh') ||
      gameOver === true
    ) {
      gameOver = true
      clearInterval(leftTimer)
      gameIsOver.style.opacity = 1
    }
  }, 100)
}

const candyMotion = () => {
  candy.style.opacity = 1
  let right = 0
  let candyTimer = setInterval(() => {
    if (right > 99) {
      clearInterval(candyTimer)
    } else right += 7
    candy.style.right = right + 'vw'
    candy = document.querySelector('.chocolate')
    if (candy.style.right >= '80vw' && mango.style.bottom >= '15vh') {
      gameOver = true
      candy.style.opacity = 0
      clearInterval(candyTimer)
      gameIsOver.style.opacity = 1
    } else if (gameOver == true) {
      clearInterval(candyTimer)
      candy.style.opacity = 0
    }
  }, 100)
}

const ballOneMotion = () => {
  ball.style.opacity = 1
  let right = 0
  let ballTimer = setInterval(() => {
    if (right > 99) {
      clearInterval(ballTimer)
    } else right += 7
    ball.style.right = right + 'vw'
    ball = document.querySelector('.ball')
    if (ball.style.right >= '80vw' && mango.style.bottom >= '15vh') {
      score += 20
      bonus.innerText = 'Ball Bonus + 20!'
      setTimeout(() => {
        bonus.innerText = ' '
      }, 1500)
      clearInterval(ballTimer)
      ball.style.opacity = 0
    } else if (gameOver === true) {
      clearInterval(ballTimer)
      ball.style.opacity = 0
    }
  }, 85)
}

const ballTwoMotion = () => {
  ballTwo.style.opacity = 1
  let right = 0
  let ballTwoTimer = setInterval(() => {
    if (right > 99) {
      clearInterval(ballTwoTimer)
    } else right += 7
    ballTwo.style.right = right + 'vw'
    ballTwo = document.querySelector('.ball2')
    if (ballTwo.style.right >= '80vw' && mango.style.bottom >= '15vh') {
      score += 20
      bonus.innerText = 'Ball Bonus + 20!'
      setTimeout(() => {
        bonus.innerText = ' '
      }, 1000)
      clearInterval(ballTwoTimer)
      ballTwo.style.opacity = 0
    } else if (gameOver === true) {
      clearInterval(ballTwoTimer)
      ballTwo.style.opacity = 0
    }
  }, 85)
}

const ballThreeMotion = () => {
  ballThree.style.opacity = 1
  let right = 0
  let ballThreeTimer = setInterval(() => {
    if (right > 99) {
      clearInterval(ballThreeTimer)
    } else right += 7
    ballThree.style.right = right + 'vw'
    ballThree = document.querySelector('.ball3')
    if (ballThree.style.right >= '80vw' && mango.style.bottom >= '15vh') {
      score += 20
      bonus.innerText = 'Ball Bonus + 20!'
      setTimeout(() => {
        bonus.innerText = ' '
      }, 1000)
      clearInterval(ballThreeTimer)
      ballThree.style.opacity = 0
    } else if (gameOver === true) {
      clearInterval(ballThreeTimer)
      ballThree.style.opacity = 0
    }
  }, 85)
}

if (gameOver === false) {
  rockMotion()
  setTimeout(() => {
    ballOneMotion()
  }, 6500)
  setTimeout(() => {
    ballTwoMotion()
  }, 16000)
  setTimeout(() => {
    candyMotion()
  }, 21000)
  setTimeout(() => {
    ballThreeMotion()
  }, 24500)
}

const increaseScore = () => {
  checkWinner()
  score += 10
  scoreDisplay.innerText = score
}

const checkWinner = () => {
  if (score >= 240) {
    window.location.href = 'win-screen.html'
  }
}

///EVENT LISTENERS

document.addEventListener('keydown', () => {
  if (event.code === 'Space') {
    jump()
  }
})

reset.addEventListener('click', () => {
  window.location.reload()
})

document.addEventListener('touchstart', () => {
  jump()
})
