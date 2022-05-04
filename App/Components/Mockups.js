

const mockups=()=>{

    const mockups=document.createElement("section");

    mockups.classList.add("mockups", "mb-5");
    mockups.innerHTML=`
    
        <div class="container">

            <div class="row">

                <div class="col-12 col-md-6 mb-3">
                    <h2 class="step-4 mb-1" style="font-weight: bolder;">
                    More than just shorter links
                    </h2>

                    <p class="step--0 mb-1">
                    Build your brand’s recognition and <br> get detailed insights 
                    on how your links are performing.
                    </p>

                    <a href="#" class=" btn-primary text-white text-hover-black">Get Started</a>
                </div>

                <div class="col-12 col-md-6">
                    <img src="./images/illustration-working.svg" alt="ilustration-working" style="width: 100%; height: auto;" class="effect-scale">
                </div>


            </div>

        </div>
    
    `;

    return mockups;
}

export default mockups;