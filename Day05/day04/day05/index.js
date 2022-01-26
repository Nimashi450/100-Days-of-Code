
let myLead = []
const inputBtn = document.getElementById("input-btn")
const inputEl = document.getElementById("input-el")
const ulEl = document.getElementById("ul-el")
const deleteBtn = document.getElementById("delete-btn")
const leadsFromLocalStorage = JSON.parse(localStorage.getItem("myLeads") )
const tabBtn = document.getElementById("tab-btn")

const tabs = [
    {url: "https://www.linkedin.com/in/per-harald-borgen/"}
]

tabBtn.addEventListener("click", function(){

    // chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
    //     // since only one tab should be active and in the current window at once
    //     // the return variable should only have one entry
    //     var activeTab = tabs[0];
    //     var activeTabId = activeTab.id; // or do whatever you need

    // });
    chrome.tabs.query({active: true, currentWindow: true},function(){
        myLead.push(tabs[0].url)
        localStorage.setItem("myLead", JSON.stringify( myLead) )
        renderLead(myLead)

    })



})

if (leadsFromLocalStorage) {
    myLeads = leadsFromLocalStorage
    renderLead(myLeads)
}

inputBtn.addEventListener("click", function(){
    myLead.push(inputEl.value)
    inputEl.value = ""
   //localStorage.setItem("myLeads", JSON.stringify(myLeads) )
    renderLead(myLead)
})

function renderLead(lead) {
    let listItems = ""
    for (let i = 0; i < lead.length; i++) {
        listItems += `
            <li>
                <a href =${lead[i]} target = '_blank' rel='noopener noreferrer'> 
                    ${lead[i]} 
                </a>
            </li>
            `
    }
    ulEl.innerHTML = listItems
}

deleteBtn.addEventListener("dblclick", function() {
    localStorage.clear()
    myLeads = []
    renderLead(myLeads)
})