// When the user clicks the purchase button, render out
// "Something went wrong, please try again" in the paragraph
// that has the id="error".

let errorMsg = document.getElementById("error")

function iferror() {
    errorMsg.textContent = "Something Wrong" 
}