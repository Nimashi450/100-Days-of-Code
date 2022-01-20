// 1. Create two variables, firstCard and secondCard. 
// Set their values to a random number between 2-11

// 2. Create a variable, sum, and set it to the sum of the two cards

let firstCard = Math.floor(Math.random() * 11) + 2;
let secondCard = Math.floor(Math.random() * 11) + 2;
let sum 
let hasBlackJack = false
let isAlive = true

sum = firstCard + secondCard
console.log(firstCard)
console.log(secondCard)
console.log(sum)

if (sum <= 20) {
    console.log("Do you want to draw a new card? 🙂")
} else if (sum === 21) {
    hasBlackJack = true
    console.log("Wohoo! You've got Blackjack! 🥳")
} else {
    isAlive = false
    console.log("You're out of the game! 😭")
}

console.log(hasBlackJack)
console.log(isAlive)