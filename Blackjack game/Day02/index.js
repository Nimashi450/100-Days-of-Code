// 1. Create two variables, firstCard and secondCard. 
// Set their values to a random number between 2-11

// 2. Create a variable, sum, and set it to the sum of the two cards

let sum 
let hasBlackJack = false
let isAlive = true



let sumEl = document.querySelector("#sum-el")
let messageEl = document.getElementById("message-el")

function startGame() {
    let firstCard = Math.floor(Math.random() * 11) + 2;
    let secondCard = Math.floor(Math.random() * 11) + 2;
    sum = firstCard + secondCard


    if (sum <= 20) {
        messageEl.innerText = "Do you want to draw a new card? 🙂"
        sumEl.innerText = "Sum: " + sum
        
    } else if (sum === 21) {
        hasBlackJack = true
        messageEl.innerText = "Wohoo! You've got Blackjack! 🥳"
        sumEl.innerText = "Sum: " + sum
    } else {
        isAlive = false
        messageEl.innerText = "You're out of the game! 😭"
        sumEl.innerText = "Sum: " + sum
    }
}



