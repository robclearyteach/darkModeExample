
document.addEventListener("DOMContentLoaded", init);
function init(){
    console.log("js loaded now: init() happens each time page loaded");
    let darkModeStore = localStorage.getItem('dark-mode');
    console.log("dark-mode stored type: "+typeof  darkModeStore );          //for test only
    console.log("dark-mode stored as: "+darkModeStore);                     //for test only

    //DarkMode: If null create it(false), if true set it
    if( darkModeStore === null ){                                           //if doesn't exist (e.g. first time)
        localStorage.setItem("dark-mode", false);                           //create dark-mode false
    }
    if( darkModeStore === "true"){
        setDarkMode();
    }else{
        ; //do nothing
    }

    let navButton = document.getElementById("dark-mode-btn");
    navButton.addEventListener("click", clickedDarkModeButton );
}

function clickedDarkModeButton(){
    console.log("clicked nav button");
    toggleDarkMode();
    setDarkMode();
}

function setDarkMode(){
    styleDarkModeButton();
    styleNavButtonsDarkMode();
}

function styleDarkModeButton(){
    document.getElementById("dark-mode-btn").classList.toggle("btn-active");
}

function styleNavButtonsDarkMode(){
    let allButtons = document.getElementsByClassName("nav-btn");
    for(let i =0; i<allButtons.length; i++){
        let button = allButtons[i];

        button.classList.toggle("dark-mode");   
    }
}

function toggleDarkMode(){
    if( localStorage.getItem("dark-mode")==="true" ){
        console.log("localStorage.getItem('dark-mode'): was true: setting to false");
        localStorage.setItem("dark-mode", false );
        
    }else{
        console.log("localStorage.getItem('dark-mode'): was false: setting to true");
        localStorage.setItem("dark-mode", true);
    }
}