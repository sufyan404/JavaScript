let randomNumber = parseInt((Math.random()*10 + 1)) 
 
const submit = document.querySelector('#subt')
const userInput = document.querySelector('#guessField')
const guessSlot = document.querySelector('.guesses')
const remaining = document.querySelector('.lastResult')
const lowOrHigh = document.querySelector('.lowOrHi')
const startOver = document.querySelector('.resultParas')

const p = document.querySelector('p')

let prevGuess = []
let numGuess = 1
let playGame = true

if (playGame) {
    submit.addEventListener('click', (event)=> {
      event.preventDefault()
      const guess = parseInt(userInput.value)
    //   console.log(guess);
      validateGuess(guess)
    })
}

function validateGuess(guess) {
    if (isNaN(guess)) {
        alert("Please enter a velid number")
        userInput.value = ''
    } else if (guess < 1 ){
        alert('Please enter a number bigger than one')
        userInput.value = ''
    } else if (guess > 100 ){
        alert('Please enter a number less than 100')
        userInput.value = ''
    } else {
        prevGuess.push(guess)
        if (numGuess === 10) {
            displayGuess(guess)
            displayMessage(`Game over: Random number is ${randomNumber}`)
            endGame()
        } else {
              displayGuess(guess)
              checkGuess(guess)
        }
    }
}

function checkGuess(guess) {
    if (guess === randomNumber) {
        displayMessage(`You gussed it right`)
        endGame()
    } else if (guess < randomNumber){
       displayMessage(`Number is low`)
    } else if (guess > randomNumber){
       displayMessage(`Number is high`)
    }
}

function displayGuess(guess) {
    userInput.value = ''
    guessSlot.innerHTML += `${guess} `
    numGuess++
    remaining.innerHTML = `${11 - numGuess} `
}

function displayMessage(message) {
    lowOrHigh.innerHTML = `<h2>${message}</h2>`
}

function endGame() {
    userInput.value = ""
    userInput.setAttribute('disabled', '')
    p.classList.add('button')
    p.innerHTML = `<h2 id="newGame">Start Again</h2>`
    startOver.appendChild(p)
    playGame = false
    newGame()
}

function newGame() {
   const newGameButton = document.querySelector('#newGame')
   newGameButton.addEventListener("click", (e)=>{
         e.preventDefault()
         userInput.value = ''
         randomNumber = parseInt((Math.random()*10 + 1)) 
         prevGuess = []
         numGuess = 1
         guessSlot.innerHTML = ''
         remaining.innerHTML = `${11 - numGuess} `
         userInput.removeAttribute('disabled')
         startOver.removeChild(p)
         playGame = true
   })
}


