const score = document.querySelector('.score')
const highscore = document.querySelector('.highscore')
const btnCheck = document.querySelector('.check')
const btnAgain = document.querySelector('.again')
const guess = document.querySelector('.guess')
const message = document.querySelector('.message')
const result = document.getElementById('result')


let allScore = 10
let gameOver = true


btnCheck.addEventListener('click', test)
btnAgain.addEventListener('click', again)



let number
number = Math.floor(Math.random() * 10)




// function
function test(e) {
    e.preventDefault()
    for (let i = 1; i <= 1; i++) {
        if (gameOver) {
            allScore--
            score.textContent = allScore
            console.log(number);
            if (number == guess.value) {
                message.textContent = `Correct Number`
                document.body.style.background = 'green'
                highscore.textContent = allScore
                result.textContent = number
                gameOver = false
            }
            if (guess.value < number) {
                message.textContent = `Too low`
            }
            if (guess.value > number) {
                message.textContent = `Very high`
            }
            if (score.value >= highscore.value) {
                highscore.textContent = score.textContent
            }
            if (allScore == 0) {
                alert('GAME OVER!!!')
                guess.value = ''
                allScore = 10
                score.textContent = 10
                document.body.style.background = '#222'
                result.textContent = `?`
                gameOver = true
            }
            if (guess.value == '') {
                alert('Iltimos son kiriting')
                gameOver = false
            }
        }
    }
}



// refresh

function again(e) {
    // e.preventDefault()
    number = Math.floor(Math.random() * 10)
    document.body.style.background = '#222'
    guess.value = ''
    allScore = 10
    score.textContent = 10
    gameOver = true
    result.textContent = `?`
    message.textContent = 'Start guessing...'
}