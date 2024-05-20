let ElementContainer;
start();

function start(){
    let localItem=localStorage.getItem("ElementContainer");
    ElementContainer=localItem ?JSON.parse(localItem) : [] ;
    displayItems();
    bagCountElement();
}

function clickButton(itemId){
    ElementContainer.push(itemId);
    bagCountElement();
}

function bagCountElement(){
    let cartCount=document.querySelector(".item-count");
    if(ElementContainer.length > 0){
        cartCount.innerText=ElementContainer.length;
        localStorage.setItem("ElementContainer",JSON.stringify(ElementContainer));
    } else {
        cartCount.style.visibility= "hidden";
    }
}

function displayItems(){
    let itemsContainerElement = document.querySelector(".items-container");
    let innerEle="";
item.forEach(item => {
    innerEle+=` 
    <div class="item-container">
        <img src="${item.item_image}" alt="img1">
        <div class="rating">${item.rating.stars} ⭐| ${item.rating.noOfLikes}</div>
        <div class="company-name">${item.companyName}</div>
        <div class="item-name">${item.itemName}</div>
        <div class="price">
            <span class="curr-price">RS ${item.currPrice}</span>
            <span class="ori-price">RS ${item.orgPrice}</span>
            <span class="dis-price">(${item.discount}% OFF)</span>
        </div>
        <a href="http://127.0.0.1:5500/Myntra/indx2.html"><button class="btn-add-bag" onclick="clickButton(${item.id})">Add to Bag</button></a>
    </div>`
});
itemsContainerElement.innerHTML = innerEle;
}