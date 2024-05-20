let items ={
    data:[{
        itemName:"New Chair",
        category:"Chair",
        price: "5000",
        image:"chair.avif"
    },
    {
        itemName:"best sofa",
        category:"Sofa",
        price: "15000",
        image:"sofa.jpg"
    },
  
    {
        itemName:"best wardrobe",
        category:"Wardrobe",
        price: "17000",
        image:"wardrobe.jpg"
    },
    
    {
        itemName:"tinny chair",
        category:"Chair",
        price: "6000",
        image:"chair2.jpg"
    },
   
    {
        itemName:"beatiful sofa",
        category:"Sofa",
        price: "20000",
        image:"sofa2.webp"
    },
    {
        itemName:" best wardrobe ",
        category:"Wardrobe",
        price: "17000",
        image:"warddobe2.jpeg"
    },

    {
        itemName:" best daining table ",
        category:"Daining Table",
        price: "17000",
        image:"daining2.webp"
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

