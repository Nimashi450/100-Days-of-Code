// intialize the count as 0
// listen for clicks on the increment button
// increment the count variable when the button is clicked
// change the count-el in the HTML to reflect the new count
let count = 0
let countEl = document.getElementById("count-el")
function increment() {
    count = count + 1
    countEl.innerText = count
    console.log("the button was clicked")
}

function remove() {
    count = count - 1
    countEl.innerText = count
}

let saveEl = document.getElementById("save-el")
function save() {
    let countStr = count + " - "
    saveEl.textContent += countStr
    countEl.textContent = 0
    count = 0 
    console.log(count)
}