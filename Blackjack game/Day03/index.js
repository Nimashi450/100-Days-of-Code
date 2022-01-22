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
let cardarry = [firstCard, secondCard]

function startGame() {
    renderGame()
}

function renderGame() {
    

    //let cards = "Cards: " + cardarry[0] + " " + cardarry[1] + " " + cardarry[2]


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

    cardEl.textContent = "Cards: "

    for (let i = 0; i < cardarry.length; i++){
        cardEl.textContent += cardarry[i] + " " 
    }
}

function newCard() {
    let newcard = Math.floor(Math.random() * 11) + 2;
    cardarry.push(newcard)
    sum += newcard
    renderGame()
}


