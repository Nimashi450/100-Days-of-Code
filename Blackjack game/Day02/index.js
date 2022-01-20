// 1. Create two variables, firstCard and secondCard. 
// Set their values to a random number between 2-11

// 2. Create a variable, sum, and set it to the sum of the two cards

let sum 
let hasBlackJack = false
let isAlive = true


let cardEl = document.getElementById("card-el")
let sumEl = document.querySelector("#sum-el")
let messageEl = document.getElementById("message-el")

    let firstCard = Math.floor(Math.random() * 11) + 2;
    let secondCard = Math.floor(Math.random() * 11) + 2;
    sum = firstCard + secondCard

function startGame() {
    

    let cards = "Cards: " + firstCard + " " + secondCard


    if (sum <= 20) {
        messageEl.innerText = "Do you want to draw a new card? 🙂"
        
        
    } else if (sum === 21) {
        hasBlackJack = true
        messageEl.innerText = "Wohoo! You've got Blackjack! 🥳"
        
    } else {
        isAlive = false
        messageEl.innerText = "You're out of the game! 😭"
        
    }

    sumEl.innerText = "Sum: " + sum
    cardEl.innerText = cards
}

function newCard() {
    let newcard = Math.floor(Math.random() * 11) + 2;
    sum += newcard
    startGame()
}


