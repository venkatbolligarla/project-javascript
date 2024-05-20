let items ={
    data:[{
        itemName:"Tomato",
        category:"Vegetable",
        price: "30 / 1 Kg",
        image:"tomato.jpg"
    },
    {
        itemName:"Mango",
        category:"Fruit",
        price: "230 / 1 Kg",
        image:"mango.jpg"
    },
    {
        itemName:"Basmathi",
        category:"Rice",
        price: "80 / 1 Kg",
        image:"basmathi.webp"
    },
    {
        itemName:"Potato Chips",
        category:"Snacks",
        price: "40 / 1 kg",
        image:"potato.webp"
    },
    
    {
        itemName:"Dragon",
        category:"Fruit",
        price: "400 / 1 Kg",
        image:"dragon.jpg"
    },
   
    {
        itemName:"Brinjal",
        category:"Vegetable",
        price: "60 / 1 Kg",
        image:"Brinjal.jpg"
    },
    {
        itemName:"Sona masoori",
        category:"Rice",
        price: "50/ 1 Kg",
        image:"sona masoori.webp"
    },
    {
        itemName:"Banana Chips",
        category:"Snacks",
        price: "30 / 1 Kg",
        image:"banana.webp"
    },
    
                
],
};
for (let i of items.data){
    let card = document.createElement("div");
    card.classList.add("card",i.category,"hide" );

    let imgContainer = document.createElement("div");
    imgContainer.classList.add("image-container");
    
    let image = document.createElement("img");
    image.setAttribute("src",i.image);
    imgContainer.appendChild(image);
    card.appendChild(imgContainer);

    let container = document.createElement("div");
    container.classList.add("container");
    let name = document.createElement("h5");
    name.classList.add("item-name");
    name.innerText = i.itemName.toUpperCase();
    container.appendChild(name);

    let price = document.createElement("h6");
    price.innerText ="$" + i.price;
    container.appendChild(price);

    card.appendChild(container);
    document.getElementById("items").appendChild(card);

   
}
function filterItem(value){

    let buttons = document.querySelectorAll(".button-value");
    buttons.forEach(button =>{
        if(value.toUpperCase() ==button.innerText.toUpperCase()){
            button.classList.add("active");
        }
        else{
            button.classList.remove("active");
        }
    });
     let elements = document.querySelectorAll(".card");
     elements.forEach((element)=>{
     if(value == "all"){
        element.classList.remove("hide");
     }
     else{
        if(element.classList.contains(value)){
            element.classList.remove("hide");
        }
        else{
            element.classList.add("hide");
        }
     }
     });
}

document.getElementById("search").addEventListener
("click",() =>{
    let searchInput = document.getElementById
    ("search-input").value;
    let elements =document.querySelectorAll(".item-name");
    let cards=document.querySelectorAll(".card");
    

    elements.forEach((element,index) =>{
        if(element.innerText.includes(searchInput.
            toUpperCase())){
            cards[index].classList.remove("hide");

        }
        else{
            cards[index].classList.add("hide");
        }
    })
});





window.onload = () => {
    filterItem("all");
};

