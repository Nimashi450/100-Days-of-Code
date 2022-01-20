// Create four functions: add(), subtract(), divide(), multiply()
// Call the correct function when the user clicks on one of the buttons
// Perform the given calculation using num1 and num2
// Render the result of the calculation in the paragraph with id="sum-el"

// E.g. if the user clicks on the "Plus" button, you should render
// "Sum: 10" (since 8 + 2 = 10) inside the paragraph with id="sum-el"

let num1 = 8
let num2 = 10
let output = document.getElementById("sum-el")
let result

document.getElementById("num1-el").innerText = num1
document.getElementById("num2-el").innerText = num2

function add() {
    result = num1 + num2
    output.innerText = "Sum: " + result
}
function subtract() {
    result = num1 - num2
    output.innerText = "Sum: " + result
}
function multiply() {
    result = num1 * num2
    output.innerText = "Sum: " + result
}
function divide() {
    result = num1 / num2
    output.innerText = "Sum: " + result
}
