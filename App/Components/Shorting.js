const Shorting=()=>{

    const Shorting=document.createElement("section");

    Shorting.classList.add("shorting", "pt-3", "pb-3", "mt-4", "bg-secondary-light-9");

    Shorting.innerHTML=`
    
        <div class="container">

        <form class="form-url-shorting bg-secondary p-1 br-sm mt-4">

            <div class="row">    
                <div class="col-12 col-md-10 p-1">
                    <input type="text" name="text" id="url-shorting" placeholder="Shorten a Link Here" style="width: 100%; height: 100%;" class="br-sm p-1">
                </div>
                <div class="col-12 col-md-2 p-1">
                    <input type="submit" value="Shorten it!" style="width: 100%; margin-top: 0.1rem;" class="btn-primary text-white br-sm" id="submit">
                </div>
            </div>
        

        </form>

        <!-- Listas de urls -->

        <div id="url-list-shorts" class="mt-4" style="margin-left: auto; margin-right: auto;">

        </div>



        <div style="text-align: center;" class="mt-4 mb-4">
            <h2 class="step-2 mb-1">Advanced Statistics</h2>
            <p class="step--0 mb-2">
                Track how your links are performing across the web with our 
                advanced statistics dashboard.
            </p>
        </div>


        <div class="row gap-1">

        <div class="col-12 col-md-4">
            <div class="card bg-white p-2 mb-3">

            <div style="margin-top: -3.5rem;">
                <img src="./images/icon-brand-recognition.svg" alt="Recognition" class="p-1 bg-secondary" style="border-radius: 25%;">
            </div>

            <h2 class="card-title">
                Brand Recognition
            </h2>

            <p class="card-body">
                Boost your brand recognition with each click. Generic links don’t 
                mean a thing. Branded links help instil confidence in your content.
            </p>

            </div>
        </div>

        <div class="col-12 col-md-4 mb-3">
            <div class="card bg-white p-2">

            <div style="margin-top: -3.5rem;">
                <img src="./images/icon-detailed-records.svg" alt="Recognition" class="p-1 bg-secondary" style="border-radius: 25%;">
            </div>

            <h2 class="card-title">
                Detailed Records
            </h2>

            <p class="card-body">
                Gain insights into who is clicking your links. Knowing when and where 
                people engage with your content helps inform better decisions.
            </p>

            </div>
        </div>

        <div class="col-12 col-md-4 mb-3">
            <div class="card bg-white p-2">

            <div style="margin-top: -3.5rem;">
                <img src="./images/icon-fully-customizable.svg" alt="Recognition" class="p-1 bg-secondary" style="border-radius: 25%;">
            </div>

            <h2 class="card-title">
                Fully Customizable
            </h2>

            <p class="card-body">
                Improve brand awareness and content discoverability through customizable 
                links, supercharging audience engagement.
            </p>

            </div>
        </div>

        </div>

    </div>
    
    `;

    return Shorting
}

export default Shorting;