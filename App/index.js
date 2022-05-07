import getUser from "./Ajax.js";
import App from "./App.js"
import RenderTodo from "./RenderTodo.js";


document.addEventListener("DOMContentLoaded", (e)=>{

    App();
});

document.addEventListener('copy', (event) => {
    event.preventDefault();
    // const selection = document.getSelection();
    // event.clipboardData.setData('text/plain', selection.toString().toUpperCase());
    console.log(event)
});



document.addEventListener("click", (e)=>{

    // Estos eventos actuan sobre el navbar

    if(e.target.id == "open-svg"){
        document.querySelector(".side-bar-expasive").classList.add("side-bar-noExpansive")
    }
    if(e.target.id == "close-svg"){
        // document.querySelector(".nav.slide").classList.add("eva") 
        document.querySelector(".side-bar-expasive").classList.remove("side-bar-noExpansive")
    }

    if(e.target.id == "submit"){

        e.preventDefault()
        let urlToshort= document.getElementById("url-shorting");
        let urlShortenSucces= getUser(urlToshort.value);
        console.log(urlShortenSucces);
        urlToshort.value="";
    }


    if(e.target.id == "delete"){

        
        let storage = JSON.parse(window.localStorage.getItem("todoTask"));
        let check = e.path[2].id;
        let ArrayCancel = storage.filter((e)=>{
            if(check == e.RandomNumber){
            }else{
                return e;
            }
        })
        window.localStorage.setItem("todoTask", JSON.stringify(ArrayCancel));
        RenderTodo();
    }

    if(e.target.id == "copy"){
        let elementToCopy= e.path[2].firstElementChild.children[0].children[1].children[0].textContent;
        console.log(elementToCopy);
        // console.log(e.path[2].firstElementChild.children[0].children[1].children[0].textContent);
    }
    
});





