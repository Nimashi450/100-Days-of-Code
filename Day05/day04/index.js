
let myLead = []
const inputBtn = document.getElementById("input-btn")
const inputEl = document.getElementById("input-el")
const ulEl = document.getElementById("ul-el")
let listLtem

inputBtn.addEventListener("click", function(){
    myLead.push(inputEl.value)
    inputEl.value = ""
    renderLead()
})

function renderLead() {
    let listItems = ""
    for (let i = 0; i < myLead.length; i++) {
        listItems += `
            <li>
                <a href =${myLead[i]} target = '_blank' rel='noopener noreferrer'> 
                    ${myLead[i]} 
                </a>
            </li>
            `
    }
    ulEl.innerHTML = listItems
}