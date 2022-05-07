

const ItemTask=(object)=>{
    const itemtask=document.createElement("div");
    itemtask.id = object.RandomNumber;
    itemtask.classList.add("row", "p-1", "bg-white", "br-sm", "mb-2");
    itemtask.innerHTML=`
        <div class="col-12 col-md-10" style="display:flex; justify-content: space-between; align-items: center;">
            <div class="row">
                <div class="col-12 p-1" style="display:flex; justify-content: start; align-items: center;">
                    <p>${object.OriginalLink}</p>
                </div>
                <div class="col-12 p-1" style="display:flex; justify-content: start; align-items: center;">
                    <p class="text-primary">${object.shortLink}</p>
                </div>
            </div>
        </div>
        <div class="col-12 col-md-2 p-1">
            <button class="btn btn-primary" style="width: 100%;" id="copy">Copy</button>
            <button class="btn btn-error" style="width: 100%; margin-top: 1.5rem;" id="delete">Delete</button>
        </div>
    `;
    return itemtask;
}
export default ItemTask;