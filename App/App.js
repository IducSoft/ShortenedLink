import Boost from "./Components/Boost.js";
import footer from "./Components/Footer.js";
import mockups from "./Components/Mockups.js";
import navbar from "./Components/Navbar.js";
import Shorting from "./Components/Shorting.js";
import LocalStorage from "./LocalStorage.js";



const App=()=>{
    const $root = document.getElementById("root");
    $root.innerHTML = null;
    $root.appendChild(navbar());
    $root.appendChild(mockups());
    $root.appendChild(Shorting());
    $root.appendChild(Boost());
    $root.appendChild(footer());
    LocalStorage();
}

export default App;