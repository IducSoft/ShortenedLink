const navbar=()=>{

    const navbar=document.createElement("navbar");

    navbar.classList.add("navbar", "text-black", "mb-4", "bg-white");

    navbar.innerHTML=`
    
    
    <div class="container">
    <div class="display-f" style="justify-content: space-between; align-items: center; width: 100%;">
      <div class="mt-1">
        <img src="./images/logo.svg" alt="logo">
      </div>

      <div class="mobile-view">
        
        <img src="./images/Hamburger-Menu.svg" alt="hamburguer-menu"id="open-svg">
      </div>

      <div class="desktop-view">
        <span>
          <a href="#" class="mr-2 text-black">Features</a>
          <a href="#" class="mr-2 text-black">Pricing</a>
          <a href="#" class="mr-2 btn-primary text-white">Resources</a>
        </span>
      </div>
      
    </div>

    <div class="side-bar-expasive bg-secondary">

      
      <img src="./images/x-square.svg" alt="x-square" id="close-svg" class="bg-white" style="width: 2rem; position: fixed; top: 1.5rem; right: 1.5rem; cursor: pointer;" >

      <ul class="display-f" style="justify-content: center; align-items: center; flex-direction: column;">
          <li class="ml-1 mb-2">
              <a href="#" class="btn-secondary text-white">Features</a>
          </li>
          
          <li class="ml-1 mb-2">
              <a href="#" class="btn-secondary text-white">Pricing</a>
          </li> 

          <li class="ml-1 mb-2">
              <a href="#" class="btn-primary text-white pl-3 pr-3 br-lg">Resources</a>
          </li> 
      </ul>
    </div>
    `;

    return navbar;
}

export default navbar;