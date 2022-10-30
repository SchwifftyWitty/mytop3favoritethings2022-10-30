const tabSection = document.querySelector(".tabs")
const tabs = document.getElementsByClassName("tab")
const buttons = document.getElementsByTagName("button")

function showTab(event, id){
    for(var x of tabs){
        x.classList.remove("block")
    }
    document.getElementById(id).classList.add("block")
    showTabs()
    for(var x of buttons){
        x.classList.remove("active")
    }
    event.currentTarget.classList.add("active")
}

function showTabs(){
    tabSection.classList.remove("tabAnimation")
    setTimeout(function(){
        tabSection.classList.add("tabAnimation")
    }, 500)
}
window.addEventListener("load", showTabs)