
const Boost=()=>{

    const boost=document.createElement("section");
    boost.classList.add("boost", "pt-2", "pb-2", "bg-secondary", "text-white");

    boost.innerHTML=`
    
    <h2 style="text-align: center;" class="step-2 mb-2">
        Boost your links today
    </h2>

    <div style="text-align: center;">
        <a href="#" class="btn btn-primary text-white">
        Get Started
        </a>
    </div>
    
    `;

    return boost;
}

export default Boost;