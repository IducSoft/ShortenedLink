import App from "./App.js"


document.addEventListener("DOMContentLoaded", (e)=>{

    App();
});



document.addEventListener("click", (e)=>{

    // Estos eventos actuan sobre el navbar

    if(e.target.id === "open-svg"){
        document.querySelector(".side-bar-expasive").classList.add("side-bar-noExpansive")
    }
    if(e.target.id === "close-svg"){
        // document.querySelector(".nav.slide").classList.add("eva") 
        document.querySelector(".side-bar-expasive").classList.remove("side-bar-noExpansive")
    }
});


