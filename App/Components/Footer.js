
const Footer=()=>{

    const footer=document.createElement("footer");
    footer.classList.add("footer", "bg-black", "pt-3", "pb-3");

    footer.innerHTML=`
    
        <div class="container">

        <div class="row">

        <div class="col-12 col-md-4">
            <h2 class="text-white step-2 mb-4">Shortly</h2>
        </div>

        <div class="col-12 col-md-5">

            <div class="display-f" style="flex-wrap: wrap;">

            <div class="m-1">
                <h2 class="text-white mb-2">Features</h2>
                <p class="text-white"> Link Shortening</p>
                <p class="text-white"> Branded Links</p>
                <p class="text-white">Analytics</p>
            </div>

            <div class="m-1">
                <h2 class="text-white mb-2">Resources</h2>
                <p class="text-white">Blog</p>
                <p class="text-white">Developers</p>
                <p class="text-white">Support</p>
            </div>

            <div class="m-1">
                <h2 class="text-white mb-2">Company</h2>
                <p class="text-white"> About</p>
                <p class="text-white"> Our Team</p>
                <p class="text-white">Careers
                Contact</p>
            </div>

            </div>

        </div>

        <div class="col-12 col-md-3">

            <div class="display-f" style="">
            <span class="m-2">
                <img src="./images/icon-facebook.svg" alt="icon-facebook">
            </span>
            <span class="m-2">
                <img src="./images/icon-instagram.svg" alt="icon-instagram">
            </span>
            <span class="m-2">
                <img src="./images/icon-twitter.svg" alt="icon-twitter">
            </span>

            <span class="m-2">
                <img src="./images/icon-pinterest.svg" alt="icon-pinterest">
            </span>
            </div>
        </div>

        </div>

        </div>
    
    `;

    return footer;
}

export default Footer;