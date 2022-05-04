

const ItemTask=(object)=>{


    const itemtask=document.createElement("div");

    itemtask.classList.add("row", "p-1", "bg-white", "br-sm", "mb-2");


    itemtask.innerHTML=`
    
    
        <div class="col-12 col-md-10" style="display:flex; justify-content: space-between; align-items: center;">
        <div class="row">
        <div class="col-12 col-md-10 p-1" style="display:flex; justify-content: start; align-items: center;">
            <p>https://www.youtube.com/watch?v=nhnoExvTwvk</p>
        </div>
        <div class="col-12 col-md-2 p-1" style="display:flex; justify-content: start; align-items: center;">
            <p class="text-primary">URL shortening</p>
        </div>
        </div>
        </div>
        <div class="col-12 col-md-2 p-1">
            <button class="btn btn-primary" style="width: 100%;">Copy</button>
        </div>
    `;


    return itemtask
}


export default ItemTask;